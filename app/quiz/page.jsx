'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { preguntas, unidades, UNIDAD_COLORES } from '@/lib/data';

const TOTAL = preguntas.length;

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getGrade(score, total) {
  const pct = (score / total) * 100;
  if (pct >= 90) return { label: '¡Excelente!', emoji: '🏆', color: 'text-green-600' };
  if (pct >= 70) return { label: 'Muy bien', emoji: '🎉', color: 'text-blue-600' };
  if (pct >= 50) return { label: 'Aprobado', emoji: '👍', color: 'text-yellow-600' };
  return { label: 'A repasar...', emoji: '📖', color: 'text-red-600' };
}

export default function QuizPage() {
  const [started, setStarted] = useState(false);
  const [order, setOrder] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({}); // { pregId: opcionIndex }
  const [revealed, setRevealed] = useState({}); // { pregId: true }
  const [finished, setFinished] = useState(false);
  const [filterUnit, setFilterUnit] = useState(0); // 0 = todas

  const startQuiz = useCallback(() => {
    const pool = filterUnit === 0
      ? preguntas
      : preguntas.filter((p) => p.unidad === filterUnit);
    setOrder(shuffleArray(pool));
    setAnswers({});
    setRevealed({});
    setCurrent(0);
    setFinished(false);
    setStarted(true);
  }, [filterUnit]);

  const resetQuiz = () => {
    setStarted(false);
    setFinished(false);
    setOrder([]);
    setAnswers({});
    setRevealed({});
    setCurrent(0);
  };

  // --- Pantalla de inicio ---
  if (!started) {
    return (
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <div className="text-5xl mb-3">🎯</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz SOM</h1>
          <p className="text-gray-500">Ponete a prueba con las preguntas del apunte.</p>
        </div>

        {/* Filtro por unidad */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-bold text-gray-700 mb-4">Filtrar por unidad</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              onClick={() => setFilterUnit(0)}
              className={`py-2 px-3 rounded-lg text-sm font-medium border transition-colors ${filterUnit === 0 ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-600 border-gray-200 hover:border-green-300'}`}
            >
              📚 Todas ({TOTAL})
            </button>
            {unidades.map((u) => {
              const count = preguntas.filter((p) => p.unidad === u.id).length;
              return (
                <button
                  key={u.id}
                  onClick={() => setFilterUnit(u.id)}
                  className={`py-2 px-3 rounded-lg text-sm font-medium border transition-colors ${filterUnit === u.id ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-600 border-gray-200 hover:border-green-300'}`}
                >
                  {u.icono} U{u.id} ({count})
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={startQuiz}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-lg transition-colors"
        >
          Empezar Quiz →
        </button>
      </div>
    );
  }

  // --- Pantalla de resultados ---
  if (finished) {
    const score = order.filter((p) => answers[p.id] === p.correcta).length;
    const grade = getGrade(score, order.length);
    const pct = Math.round((score / order.length) * 100);

    return (
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
          <div className="text-6xl mb-3">{grade.emoji}</div>
          <h1 className={`text-4xl font-bold mb-1 ${grade.color}`}>{grade.label}</h1>
          <p className="text-gray-500 mb-6">Terminaste el quiz</p>

          <div className="text-6xl font-bold text-gray-900 mb-1">
            {score}<span className="text-3xl text-gray-400">/{order.length}</span>
          </div>
          <div className="text-xl text-gray-500 mb-6">{pct}% correctas</div>

          {/* Barra de progreso */}
          <div className="w-full bg-gray-100 rounded-full h-4 mb-8">
            <div
              className={`h-4 rounded-full transition-all ${pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-400' : 'bg-red-400'}`}
              style={{ width: `${pct}%` }}
            />
          </div>

          {/* Resultados por unidad */}
          <div className="text-left mb-8">
            <h2 className="font-bold text-gray-700 mb-3">Resultados por unidad</h2>
            <div className="space-y-2">
              {unidades.map((u) => {
                const uPregs = order.filter((p) => p.unidad === u.id);
                if (uPregs.length === 0) return null;
                const uScore = uPregs.filter((p) => answers[p.id] === p.correcta).length;
                const uPct = Math.round((uScore / uPregs.length) * 100);
                const c = UNIDAD_COLORES[u.color];
                return (
                  <div key={u.id} className="flex items-center gap-3">
                    <span className="text-lg w-6">{u.icono}</span>
                    <span className="text-sm text-gray-600 flex-1 truncate">U{u.id}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${uPct >= 70 ? 'bg-green-500' : uPct >= 50 ? 'bg-yellow-400' : 'bg-red-400'}`}
                        style={{ width: `${uPct}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 w-14 text-right">
                      {uScore}/{uPregs.length}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            <button
              onClick={startQuiz}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              🔄 Repetir Quiz
            </button>
            <button
              onClick={resetQuiz}
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border border-gray-200 transition-colors"
            >
              Cambiar filtro
            </button>
            <Link
              href="/unidades"
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border border-gray-200 transition-colors"
            >
              📚 Repasar unidades
            </Link>
          </div>
        </div>

        {/* Repaso de respuestas */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Repaso de respuestas</h2>
          {order.map((p, idx) => {
            const selected = answers[p.id];
            const correct = p.correcta;
            const isOk = selected === correct;
            return (
              <div
                key={p.id}
                className={`bg-white rounded-2xl border-l-4 ${isOk ? 'border-green-400' : 'border-red-400'} shadow-sm p-5`}
              >
                <div className="flex gap-2 mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isOk ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {isOk ? '✓ Correcta' : '✗ Incorrecta'}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    U{p.unidad} · Preg {idx + 1}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-800 mb-3">{p.texto}</p>
                <div className="space-y-1.5">
                  {p.opciones.map((op, oi) => (
                    <div
                      key={oi}
                      className={`text-xs px-3 py-2 rounded-lg flex gap-2 items-start ${
                        oi === correct
                          ? 'bg-green-50 text-green-800 font-medium'
                          : oi === selected && !isOk
                          ? 'bg-red-50 text-red-700'
                          : 'text-gray-500'
                      }`}
                    >
                      <span className={`flex-shrink-0 w-4 h-4 rounded-full text-xs flex items-center justify-center ${oi === correct ? 'bg-green-500 text-white' : oi === selected && !isOk ? 'bg-red-400 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        {oi === correct ? '✓' : oi === selected && !isOk ? '✗' : String.fromCharCode(65 + oi)}
                      </span>
                      {op}
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs text-gray-500 bg-blue-50 rounded-lg px-3 py-2">
                  💡 {p.explicacion}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // --- Pantalla de pregunta activa ---
  const p = order[current];
  const isAnswered = answers[p.id] !== undefined;
  const isRevealed = revealed[p.id];
  const progress = Math.round(((current + 1) / order.length) * 100);

  const handleSelect = (optIdx) => {
    if (isAnswered) return;
    setAnswers((prev) => ({ ...prev, [p.id]: optIdx }));
    setRevealed((prev) => ({ ...prev, [p.id]: true }));
  };

  const handleNext = () => {
    if (current + 1 >= order.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
    }
  };

  const u = unidades.find((u) => u.id === p.unidad);
  const c = UNIDAD_COLORES[u?.color || 'emerald'];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progreso */}
      <div>
        <div className="flex justify-between text-sm text-gray-500 mb-1.5">
          <span>Pregunta {current + 1} de {order.length}</span>
          <span>{Object.keys(answers).length} respondidas</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-green-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Tarjeta de pregunta */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs font-bold ${c.badge} text-white px-2.5 py-0.5 rounded-full`}>
            {u?.icono} U{p.unidad}
          </span>
          <span className="text-xs text-gray-400">#{p.id}</span>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-5 leading-snug">{p.texto}</h2>

        <div className="space-y-2.5">
          {p.opciones.map((op, oi) => {
            let style = 'bg-gray-50 border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50 cursor-pointer';
            if (isRevealed) {
              if (oi === p.correcta) {
                style = 'bg-green-50 border-green-400 text-green-800 font-medium';
              } else if (oi === answers[p.id] && oi !== p.correcta) {
                style = 'bg-red-50 border-red-400 text-red-700';
              } else {
                style = 'bg-gray-50 border-gray-100 text-gray-400';
              }
            } else if (!isAnswered) {
              style = 'bg-gray-50 border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50 cursor-pointer';
            }

            return (
              <button
                key={oi}
                onClick={() => handleSelect(oi)}
                disabled={isAnswered}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all flex gap-3 items-start ${style}`}
              >
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                  isRevealed && oi === p.correcta
                    ? 'bg-green-500 text-white'
                    : isRevealed && oi === answers[p.id] && oi !== p.correcta
                    ? 'bg-red-400 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {isRevealed && oi === p.correcta ? '✓' : isRevealed && oi === answers[p.id] && oi !== p.correcta ? '✗' : String.fromCharCode(65 + oi)}
                </span>
                <span className="leading-snug">{op}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {isRevealed && (
          <div className={`mt-4 p-4 rounded-xl text-sm ${answers[p.id] === p.correcta ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-orange-50 border border-orange-200 text-orange-800'}`}>
            <div className="font-semibold mb-1">
              {answers[p.id] === p.correcta ? '✅ ¡Correcto!' : '❌ Incorrecto'}
            </div>
            <p>{p.explicacion}</p>
          </div>
        )}
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between">
        <button
          onClick={resetQuiz}
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          ✕ Abandonar
        </button>
        {isAnswered && (
          <button
            onClick={handleNext}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-8 rounded-xl transition-colors"
          >
            {current + 1 >= order.length ? '📊 Ver resultados' : 'Siguiente →'}
          </button>
        )}
      </div>
    </div>
  );
}
