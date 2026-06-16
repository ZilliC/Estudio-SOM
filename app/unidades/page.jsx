import Link from 'next/link';
import { unidades, UNIDAD_COLORES } from '@/lib/data';

export const metadata = { title: 'Unidades — SOM Repaso' };

export default function UnidadesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Unidades del programa</h1>
        <p className="text-gray-500">Seleccioná una unidad para ver el resumen completo y sus conceptos clave.</p>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {unidades.map((u) => {
          const c = UNIDAD_COLORES[u.color];
          return (
            <Link
              key={u.id}
              href={`/unidades/${u.id}`}
              className={`bg-white rounded-2xl border-l-4 ${c.border} shadow-sm p-6 flex gap-5 items-start hover:shadow-md transition-all group`}
            >
              <div className="text-4xl mt-0.5 flex-shrink-0">{u.icono}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`text-xs font-bold ${c.badge} text-white px-2.5 py-0.5 rounded-full`}>
                    Unidad {u.id}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {u.horas} horas
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {u.temas.length} temas
                  </span>
                </div>
                <h2 className={`text-xl font-bold text-gray-900 group-hover:${c.text} transition-colors mb-1`}>
                  {u.titulo}
                </h2>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{u.objetivo}</p>
                <div className="flex flex-wrap gap-1.5">
                  {u.conceptosClave.slice(0, 4).map((cc) => (
                    <span
                      key={cc}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                    >
                      {cc}
                    </span>
                  ))}
                  {u.conceptosClave.length > 4 && (
                    <span className="text-xs text-gray-400">+{u.conceptosClave.length - 4} más</span>
                  )}
                </div>
              </div>
              <div className="text-gray-300 group-hover:text-green-500 transition-colors text-2xl flex-shrink-0 self-center">
                →
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
