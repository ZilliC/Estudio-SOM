import Link from 'next/link';
import { unidades, preguntas } from '@/lib/data';

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="text-center py-10">
        <div className="text-6xl mb-4">🐧</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Sistemas Operativos Multiusuarios
        </h1>
        <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
          Repasa las 7 unidades del apunte y ponete a prueba con {preguntas.length} preguntas
          de opción múltiple antes del examen final.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/unidades"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors text-lg"
          >
            📚 Ver Unidades
          </Link>
          <Link
            href="/quiz"
            className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-8 rounded-xl border border-gray-200 transition-colors text-lg"
          >
            🎯 Empezar Quiz
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-4">
        {[
          { num: unidades.length, label: 'Unidades', icon: '📖' },
          { num: preguntas.length, label: 'Preguntas', icon: '❓' },
          { num: unidades.reduce((acc, u) => acc + u.horas, 0), label: 'Horas teoría', icon: '⏱️' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5 text-center shadow-sm">
            <div className="text-3xl mb-1">{stat.icon}</div>
            <div className="text-3xl font-bold text-gray-900">{stat.num}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Unidades grid */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Unidades del programa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {unidades.map((u) => (
            <Link
              key={u.id}
              href={`/unidades/${u.id}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4 items-start hover:shadow-md hover:border-green-200 transition-all group"
            >
              <div className="text-3xl mt-0.5">{u.icono}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                    Unidad {u.id}
                  </span>
                  <span className="text-xs text-gray-400">{u.horas}h</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors leading-tight">
                  {u.titulo}
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{u.objetivo}</p>
              </div>
              <div className="text-gray-300 group-hover:text-green-500 transition-colors text-xl">→</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to quiz */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-8 text-white text-center">
        <div className="text-4xl mb-3">🎯</div>
        <h2 className="text-2xl font-bold mb-2">¿Listo para el examen?</h2>
        <p className="text-green-100 mb-6">
          Contestá las {preguntas.length} preguntas del quiz y ves tu puntaje en tiempo real.
          Cada pregunta tiene retroalimentación detallada.
        </p>
        <Link
          href="/quiz"
          className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-xl transition-colors inline-block"
        >
          Empezar Quiz →
        </Link>
      </section>
    </div>
  );
}
