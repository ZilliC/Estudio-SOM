import './globals.css';

export const metadata = {
  title: 'SOM — Repaso Final',
  description: 'Plataforma de estudio para Sistemas Operativos Multiusuarios — FCA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 group">
              <span className="text-2xl">🐧</span>
              <div>
                <span className="font-bold text-gray-900 text-lg leading-none block">SOM</span>
                <span className="text-xs text-gray-400 leading-none">Repaso Final</span>
              </div>
            </a>
            <nav className="flex items-center gap-2">
              <a
                href="/unidades"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                📚 Unidades
              </a>
              <a
                href="/quiz"
                className="text-sm font-semibold bg-green-600 text-white px-4 py-1.5 rounded-lg hover:bg-green-700 transition-colors"
              >
                🎯 Quiz
              </a>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="text-center py-6 text-xs text-gray-400 border-t border-gray-100 mt-12">
          SOM · Sistemas Operativos Multiusuarios · FCA UNAM
        </footer>
      </body>
    </html>
  );
}
