import Link from 'next/link';
import { notFound } from 'next/navigation';
import { unidades, preguntas, UNIDAD_COLORES } from '@/lib/data';

export async function generateStaticParams() {
  return unidades.map((u) => ({ id: String(u.id) }));
}

export async function generateMetadata({ params }) {
  const u = unidades.find((u) => u.id === Number(params.id));
  return { title: u ? `U${u.id}: ${u.titulo} — SOM` : 'SOM' };
}

export default function UnidadPage({ params }) {
  const u = unidades.find((u) => u.id === Number(params.id));
  if (!u) notFound();

  const c = UNIDAD_COLORES[u.color];
  const preguntasUnidad = preguntas.filter((p) => p.unidad === u.id);
  const prevU = unidades.find((x) => x.id === u.id - 1);
  const nextU = unidades.find((x) => x.id === u.id + 1);

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400">
        <Link href="/" className="hover:text-gray-700">Inicio</Link>
        <span>/</span>
        <Link href="/unidades" className="hover:text-gray-700">Unidades</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Unidad {u.id}</span>
      </nav>

      {/* Header */}
      <div className={`bg-white rounded-2xl border-l-4 ${c.border} p-7 shadow-sm`}>
        <div className="flex items-start gap-5">
          <div className="text-5xl">{u.icono}</div>
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className={`text-sm font-bold ${c.badge} text-white px-3 py-1 rounded-full`}>
                Unidad {u.id}
              </span>
              <span className="text-sm text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full">
                {u.horas} horas
              </span>
              <span className="text-sm text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full">
                {preguntasUnidad.length} preguntas
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{u.titulo}</h1>
            <p className="text-gray-500 text-sm leading-relaxed">{u.objetivo}</p>
          </div>
        </div>
      </div>

      {/* Temas */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">📋 Resumen por tema</h2>
        {u.temas.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className={`font-bold text-lg mb-3 ${c.text}`}>
              {i + 1}. {t.titulo}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">{t.contenido}</p>
          </div>
        ))}
      </section>

      {/* Conceptos clave */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔑 Conceptos clave</h2>
        <div className="flex flex-wrap gap-2">
          {u.conceptosClave.map((cc) => (
            <span
              key={cc}
              className={`px-3 py-1.5 rounded-full text-sm font-medium ${c.bg} ${c.text} border ${c.border}`}
            >
              {cc}
            </span>
          ))}
        </div>
      </section>

      {/* Preguntas de esta unidad */}
      {preguntasUnidad.length > 0 && (
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            ❓ Preguntas de esta unidad ({preguntasUnidad.length})
          </h2>
          <ul className="space-y-2">
            {preguntasUnidad.map((p) => (
              <li key={p.id} className="flex gap-3 text-sm text-gray-600 items-start">
                <span className={`flex-shrink-0 w-6 h-6 rounded-full ${c.badge} text-white text-xs flex items-center justify-center font-bold mt-0.5`}>
                  {p.id}
                </span>
                <span className="leading-relaxed">{p.texto}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Link
              href="/quiz"
              className={`inline-block ${c.badge} text-white font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm`}
            >
              Practicar quiz completo →
            </Link>
          </div>
        </section>
      )}

      {/* Navegación */}
      <div className="flex items-center justify-between gap-4">
        {prevU ? (
          <Link
            href={`/unidades/${prevU.id}`}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:shadow-sm transition-all"
          >
            ← {prevU.icono} {prevU.titulo}
          </Link>
        ) : (
          <Link
            href="/unidades"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            ← Todas las unidades
          </Link>
        )}
        {nextU && (
          <Link
            href={`/unidades/${nextU.id}`}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:shadow-sm transition-all ml-auto"
          >
            {nextU.icono} {nextU.titulo} →
          </Link>
        )}
      </div>
    </div>
  );
}
