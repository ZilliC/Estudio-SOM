// ============================================================
// DATOS DEL APUNTE SOM — FCA UNAM
// Basado en: 2433 Sistemas Operativos Multiusuarios (383 pp.)
// ============================================================

export const unidades = [
  {
    id: 1,
    titulo: "Generalidades de Sistemas Operativos",
    horas: 8,
    color: "emerald",
    icono: "🖥️",
    objetivo:
      "Identificar las principales características, funciones y estructura de los sistemas operativos multiusuarios.",
    temas: [
      {
        titulo: "Definición y funciones del SO",
        contenido:
          "El sistema operativo (SO) es el software que actúa como intermediario entre el usuario y el hardware. Sus tres funciones principales son: (1) facilitar el manejo del equipo, (2) optimizar el uso de los recursos y (3) flexibilizar la actualización del sistema. Sus servicios incluyen: crear y ejecutar programas, acceso a E/S, control de archivos, administración de acceso, detección de errores y contabilidad de recursos.",
      },
      {
        titulo: "Arquitecturas del kernel",
        contenido:
          "Monolítico: todo el kernel corre en modo privilegiado (Linux, Unix). Capas (THE/Dijkstra): cada capa usa servicios de la inferior. Máquina Virtual (VM/370): aísla completamente cada SO huésped. Exokernel (MIT): el kernel solo asigna recursos físicos sin abstraerlos. Cliente-servidor/Microkernel: el kernel mínimo en modo privilegiado; el resto como procesos de usuario.",
      },
      {
        titulo: "Procesos e IPC",
        contenido:
          "Un programa es un diseño estático; un proceso es un programa en ejecución (ente dinámico). En Linux/UNIX el proceso raíz es init (PID 1). Cada proceso tiene PID y PPID. Los nuevos procesos se crean con fork(). Estados: Running, Ready, Waiting. Mecanismos de IPC: pipes, named pipes, señales (kill), sockets, memoria compartida, semáforos, colas de mensajes, sockets de dominio UNIX.",
      },
      {
        titulo: "Interrupciones y Planificación (Scheduling)",
        contenido:
          "Interrupciones: hardware (periférico requiere atención), software (syscall) y excepciones (error en programa). El Dispatcher realiza el cambio de contexto, cambia el modo de ejecución y actualiza el PC. Algoritmos de planificación: FCFS/FIFO (orden de llegada), SJF (trabajo más corto primero), Prioridad y Round Robin (quantum fijo: igual tiempo para todos).",
      },
      {
        titulo: "Administración de memoria",
        contenido:
          "Tipos: física (RAM real), virtual (extensión con disco) y dinámica (asignada en ejecución). Técnicas: paginación (bloques de tamaño fijo), segmentación (bloques lógicos) y particiones (fijas o dinámicas). Fragmentación interna: espacio desperdiciado dentro de una partición asignada. Fragmentación externa: hay espacio libre pero no contiguo.",
      },
      {
        titulo: "Virtualización y Contenedores",
        contenido:
          "Hypervisor Tipo 1 (bare-metal): corre directamente sobre el hardware (VMware ESXi, Hyper-V). Hypervisor Tipo 2 (hosted): corre sobre un SO anfitrión (VirtualBox, VMware Workstation). Paravirtualización: el SO huésped coopera con el hypervisor para mayor eficiencia. Contenedores (Docker): comparten el kernel del host, más ligeros que VMs, usan imágenes en capas manejadas por Docker Engine.",
      },
      {
        titulo: "Daemons y administración de periféricos",
        contenido:
          "Los daemons son procesos que corren en segundo plano (sshd, httpd). Puertos comunes: SSH/22, HTTP/80, HTTPS/443, FTP/20-21, DNS/53, SMTP/25, IMAP/143, POP3/110. Los device drivers son programas especializados que permiten al SO interactuar con un periférico específico. El SO descubre periféricos, gestiona buffers/caché y atiende sus interrupciones.",
      },
    ],
    conceptosClave: [
      "Kernel monolítico vs microkernel",
      "fork() y jerarquía de procesos",
      "Round Robin con quantum",
      "Paginación y fragmentación",
      "Hypervisor Tipo 1 y Tipo 2",
      "Docker y contenedores",
      "Daemons y puertos de servicio",
    ],
  },
  {
    id: 2,
    titulo: "Almacenamiento y Administración de Archivos",
    horas: 6,
    color: "teal",
    icono: "📁",
    objetivo:
      "Distinguir la arquitectura del sistema de administración de archivos y del sistema operativo.",
    temas: [
      {
        titulo: "Conceptos básicos de archivos",
        contenido:
          "Un archivo es un mecanismo de abstracción para almacenar información en disco de forma transparente al usuario. Estructuras: (1) Secuencia de bytes: serie no estructurada con máxima flexibilidad; (2) Secuencia de registros: registros de longitud fija con estructura interna; (3) Árbol: registros con campo clave (key) para búsqueda rápida. Atributos en Linux: propietario, grupo, ligas, fecha, hora, nombre y permisos (3 grupos de 3 bits — consultar chmod).",
      },
      {
        titulo: "Operaciones sobre archivos",
        contenido:
          "Operaciones principales: create (crea entrada en directorio), write (escribe datos, actualiza apuntador), read (lee datos con apuntador compartido), seek (reposiciona el apuntador sin E/S real), delete (libera espacio y borra entrada del directorio), set attributes (modifica atributos sin borrar contenido). Otras: open, close, append, rename, get attributes.",
      },
      {
        titulo: "Directorios y nombres de archivos",
        contenido:
          "El sistema de archivos se descompone en particiones (minidiscos/discos virtuales). Cada partición contiene un directorio que registra nombre, ubicación, tamaño y tipo de cada archivo. En Linux/UNIX los nombres distinguen mayúsculas de minúsculas; la ruta absoluta comienza con /. Rutas relativas usan . (directorio actual) y .. (directorio padre). Operaciones de directorio: buscar, crear, borrar, listar, renombrar, recorrer.",
      },
      {
        titulo: "Sistemas de archivos",
        contenido:
          "Componentes: rutas absolutas/relativas, metadatos, programa de gestión. MBR (Master Boot Record): sector 0, apunta al arranque del SO. Tabla de particiones: tamaño, ubicación y tipo de cada partición. Superbloque (Linux/UNIX): almacena tamaño del sistema de archivos, espacio libre, ubicación de inodos, puntos de montaje, número de inodos disponibles y tamaño de bloque. Los inodos son estructuras de metadatos que representan archivos y directorios. Sistemas comunes: ext4 (Linux), NTFS (Windows), HFS+ (macOS).",
      },
      {
        titulo: "Administración de dispositivos E/S",
        contenido:
          "El administrador de dispositivos balancea la oferta/demanda de periféricos. Funciones: controlar estado, aplicar políticas, asignar y desasignar. Clasificación: Dedicados (una tarea a la vez: impresoras, cintas), Compartidos (varios procesos: discos), Virtuales (spooling: combina los anteriores). Comunicación: CSW (Channel Status Word), encuesta (polling), interrupciones, DMA (acceso directo a memoria sin CPU), buffers y doble buffer.",
      },
      {
        titulo: "Copias de respaldo y compresión",
        contenido:
          "Tipos de respaldo: Normal/Completo (copia todo), Incremental (solo cambios desde el último respaldo incremental), Diferencial (cambios desde el último completo), Réplica/Espejo (tiempo real, para DRP). Política de respaldo considera: tipo, periodicidad, retención, almacenamiento, verificación, seguridad y automatización. Compresión: busca redundancia (patrones repetitivos). Algoritmos: Huffman (caracteres frecuentes → código corto), diccionarios. Formatos Linux: gzip (.gz), bzip2 (.bz2).",
      },
      {
        titulo: "Mantenimiento del sistema de archivos",
        contenido:
          "Con el tiempo los archivos se fragmentan y pueden generarse inconsistencias. En Linux/UNIX: fsck (file system check) construye dos tablas de contadores (bloques en archivos y bloques libres) para detectar bloques ausentes, duplicados o inconsistentes. Uso: sudo fsck /dev/sda1, sudo fsck -f (forzar), sudo fsck -y (reparar automático), sudo fsck -A (todos los sistemas en /etc/fstab). En Windows: chkdsk. NTFS usa journaling transaccional para garantizar consistencia.",
      },
    ],
    conceptosClave: [
      "Inodos y superbloque",
      "Particiones y MBR",
      "ext4 (Linux) vs NTFS",
      "fsck para verificación",
      "Respaldo incremental vs diferencial",
      "gzip y bzip2",
      "DMA y doble buffer",
    ],
  },
  {
    id: 3,
    titulo: "Mecanismos de Seguridad para Sistemas Operativos",
    horas: 8,
    color: "red",
    icono: "🔒",
    objetivo:
      "Implementar los mecanismos básicos de protección del SO que permiten salvaguardar la integridad, disponibilidad y confidencialidad de los datos.",
    temas: [
      {
        titulo: "Gestión de riesgos",
        contenido:
          "La gestión de riesgos es un enfoque estratégico para identificar, evaluar y mitigar amenazas a la información. Etapas según ISO/IEC 27001: (1) Establecimiento de contexto: definir objetivos del SGSI y activos críticos; (2) Identificación de riesgos; (3) Evaluación/análisis: probabilidad × impacto; (4) Tratamiento: mitigar, transferir, aceptar o evitar; (5) Implementación de controles; (6) Monitoreo y revisión continua. El SGSI protege confidencialidad, integridad y disponibilidad (CIA).",
      },
      {
        titulo: "Plan de riesgos",
        contenido:
          "Riesgos comunes: ransomware (cifra datos y pide rescate), fallo de almacenamiento, desastres naturales, error humano, phishing (correo fraudulento para robar credenciales), brecha de red/software/física/app web. Tratamiento: controles preventivos (antivirus, contraseñas fuertes), copias de seguridad, seguros de ciberseguridad y capacitación del personal.",
      },
      {
        titulo: "Amenazas, ataques y vigilancia",
        contenido:
          "Amenaza: circunstancia con potencial de causar daño. Vulnerabilidad: debilidad explotable. Ataque: intento de explotar una vulnerabilidad. Tipos de ataques: DDoS (denegación de servicio distribuida), malware (virus, gusanos, troyanos), phishing, ingeniería social, man-in-the-middle, SQL injection. Vigilancia: monitoreo continuo con herramientas automáticas. En Debian: LogCheck; en Red Hat: LogWatch.",
      },
      {
        titulo: "Control de accesos",
        contenido:
          "Define quién puede acceder a qué información. Métodos de autenticación: contraseñas, credenciales biométricas, tarjetas inteligentes, tokens. Conceptos: dominios de protección, capacidades, derechos de acceso, matrices de acceso. En Linux, los permisos de archivos se gestionan con chmod (3 grupos × 3 bits: rwx para propietario, grupo y otros). Ejemplo: chmod 755 = rwxr-xr-x.",
      },
      {
        titulo: "Bitácoras o Logs",
        contenido:
          "Las bitácoras son registros de actividades del sistema durante un período. Registran: ¿Qué? (elemento manipulado), ¿Quién? (entidad o IP), ¿Cuándo? (timestamp), ¿Por qué medio? (dispositivo/proceso). Clasificación: bitácoras de aplicación, de seguridad y de sistema. En Linux los logs residen en /var/log/ (syslog, auth.log, mail.log, kern.log). Prácticas: proteger (firmas digitales, checksums), autenticar, almacenar en remoto cifrado con SSH, monitorear automáticamente.",
      },
    ],
    conceptosClave: [
      "CIA: Confidencialidad, Integridad, Disponibilidad",
      "ISO/IEC 27001 y SGSI",
      "Ransomware y phishing",
      "chmod y permisos Linux",
      "/var/log/ en Linux",
      "DDoS, malware, ingeniería social",
      "Logs remotos con SSH",
    ],
  },
  {
    id: 4,
    titulo: "Windows Server",
    horas: 10,
    color: "blue",
    icono: "🪟",
    objetivo:
      "Configurar las características principales de operación y capacidad del sistema operativo Windows Server.",
    temas: [
      {
        titulo: "Características generales",
        contenido:
          "Windows Server es un SO diseñado para gestionar información y recursos en red. Ediciones: Datacenter (virtualización ilimitada), Standard (hasta 2 VMs), Essentials (hasta 25 usuarios/50 dispositivos, pequeñas empresas), Foundation. Características: servicios de directorio, administración remota, alta disponibilidad, seguridad perimetral. Requisitos mínimos para 2019: procesador 1.4 GHz x64, 512 MB RAM, 32 GB disco.",
      },
      {
        titulo: "Instalación y configuración",
        contenido:
          "Proceso: (1) Arrancar desde ISO, (2) Seleccionar edición (Standard/Datacenter), (3) Aceptar licencia, (4) Elegir partición, (5) Instalación automática + reinicio, (6) Configurar contraseña del Administrador. Tras la instalación se accede con Ctrl+Alt+Supr. El Server Manager (Administrador del Servidor) es la consola central para gestionar roles y características.",
      },
      {
        titulo: "Gestión de paquetes y servicios",
        contenido:
          "Los paquetes se instalan mediante archivos MSI o a través del Server Manager. Roles principales: IIS (Servidor Web, puerto 80/443), DNS (puerto 53), RDS (Remote Desktop Services, puerto 3389 TCP), Active Directory. Para instalar un rol: Administrador del Servidor → Agregar roles y características → Seleccionar rol. PowerShell también permite instalar roles con Install-WindowsFeature.",
      },
      {
        titulo: "Active Directory y gestión de usuarios",
        contenido:
          "Active Directory (AD) es un servicio de directorio Microsoft para redes de dominio. Organiza objetos (usuarios, grupos, equipos) en árbol jerárquico: dominio → árbol → bosque. Permite administración centralizada, políticas de grupo (GPO), autenticación y autorización. Para crear usuario: Herramientas → Computer Management → Local Users and Groups → Usuarios → Nuevo usuario (nombre, contraseña, opciones de expiración). ACL (Access Control List) define permisos sobre recursos.",
      },
      {
        titulo: "Automatización de tareas",
        contenido:
          "Programador de tareas (Task Scheduler): permite ejecutar scripts/comandos automáticamente por hora, día o evento. PowerShell: lenguaje de scripting y automatización. Permite gestión remota con PSRemoting. Ejemplo: respaldar DocumentRoot de IIS cada noche a las 00:00. Los scripts .ps1 permiten automatizar instalaciones, creación de usuarios y gestión de servicios.",
      },
    ],
    conceptosClave: [
      "Ediciones: Datacenter, Standard, Essentials",
      "Active Directory (AD) y dominios",
      "IIS en puerto 80/443",
      "RDS en puerto 3389",
      "GPO (Group Policy Objects)",
      "PowerShell para automatización",
      "ACL y permisos NTFS",
    ],
  },
  {
    id: 5,
    titulo: "GNU/Linux",
    horas: 10,
    color: "orange",
    icono: "🐧",
    objetivo:
      "Configurar las características principales de operación y capacidad del sistema operativo GNU/Linux.",
    temas: [
      {
        titulo: "Características generales",
        contenido:
          "GNU/Linux combina el kernel Linux (Linus Torvalds, 1991) con las herramientas GNU (Richard Stallman). Es código abierto, multiusuario, multitarea, portable y estable. Distribuciones comunes: Ubuntu (principiantes, LTS), Debian (estabilidad), Fedora (innovación), CentOS/RHEL (servidores empresariales), Arch Linux (avanzados). El nombre GNU/Linux reconoce las contribuciones del Proyecto GNU. El SO actúa como intermediario entre usuario y hardware.",
      },
      {
        titulo: "Instalación y configuración (Ubuntu)",
        contenido:
          "Proceso en VMware: (1) Descargar ISO desde ubuntu.com, (2) Crear VM en VMware (nombre, usuario, contraseña, espacio en disco), (3) Primer arranque: seleccionar idioma, accesibilidad, teclado, red, (4) Elegir instalación interactiva o automatizada, (5) Seleccionar aplicaciones predeterminadas, (6) Configurar zona horaria, (7) Reiniciar. La instalación es amigable tanto para principiantes como para administradores experimentados.",
      },
      {
        titulo: "Gestión de paquetes (APT)",
        contenido:
          "APT (Advanced Package Tool) es el gestor de paquetes de Ubuntu/Debian. Maneja dependencias automáticamente. Comandos esenciales: sudo apt update (actualiza lista de paquetes), sudo apt install <paquete> (instala), sudo apt upgrade <paquete> (actualiza), sudo apt remove <paquete> (elimina), sudo apt autoremove (limpia obsoletos). Ejemplo: instalar PostgreSQL: sudo apt install postgresql postgresql-contrib. Verificar estado: sudo systemctl status postgresql.",
      },
      {
        titulo: "Servicios y systemd",
        contenido:
          "Los servicios (daemons) son aplicaciones que corren en segundo plano. Características: sin interacción directa del usuario, inicio automático al arrancar, ejecución continua, escalables y modulares. Systemd es el gestor de sistema moderno. Comandos: systemctl start/stop/restart/status/enable/disable <servicio>. Sysvinit (legado): usa scripts en /etc/init.d/. OpenRC: alternativa en Gentoo. Verificar: sudo systemctl status sshd.",
      },
      {
        titulo: "Automatización con cron",
        contenido:
          "cron es el planificador de tareas de Linux. El archivo crontab define la programación. Sintaxis: minuto hora día-mes mes día-semana comando. Ejemplo: '0 0 * * * /ruta/respaldo.sh' ejecuta todos los días a medianoche. Comandos: crontab -e (editar), crontab -l (listar), crontab -r (borrar). Para tareas del sistema: /etc/cron.d/, /etc/cron.daily/, /etc/cron.weekly/. Alternativa moderna: systemd timers.",
      },
    ],
    conceptosClave: [
      "APT: install, update, upgrade, remove",
      "systemctl start/stop/enable/status",
      "crontab -e y sintaxis cron",
      "sudo apt autoremove",
      "Distribuciones: Ubuntu, Debian, Fedora",
      "Kernel Linux + herramientas GNU",
      "/var/log/ y logs del sistema",
    ],
  },
  {
    id: 6,
    titulo: "Sistemas Operativos Tipo BSD",
    horas: 8,
    color: "purple",
    icono: "😈",
    objetivo:
      "Configurar las características principales de operación y capacidad de los sistemas operativos tipo BSD.",
    temas: [
      {
        titulo: "Características generales de FreeBSD",
        contenido:
          "FreeBSD es un SO derivado de BSD Unix, conocido por su estabilidad, seguridad y rendimiento. Características: multitarea apropiativa, multiusuario, compatibilidad binaria con Linux/SCO/NetBSD/BSDI, código fuente disponible (permite portabilidad y auditoría continua), paginación bajo demanda, librerías compartidas, soporte de arquitecturas x86, amd64, ia64, Sparc64. Módulos de seguridad: PAM (autenticación), GBDE (cifrado), MAC, 3 firewalls integrados con NAT.",
      },
      {
        titulo: "Instalación de FreeBSD",
        contenido:
          "Requisitos mínimos: 2 GB RAM, procesador 1 GHz, 8 GB disco. Para procesadores AMD/Intel de 64 bits usar imagen amd64. Proceso: (1) Arrancar desde ISO, (2) Elegir instalación, (3) Seleccionar idioma y teclado, (4) Asignar hostname, (5) Componentes adicionales opcionales, (6) Particionado (Auto ZFS recomendado — sistema de archivos avanzado con integridad de datos), (7) Contraseña del usuario root, (8) Configurar red (IP, máscara, gateway), (9) Zona horaria, (10) Seleccionar servicios (sshd obligatorio), (11) Crear usuario adicional (no conectar con root por seguridad).",
      },
      {
        titulo: "Gestión de paquetes (pkg)",
        contenido:
          "FreeBSD usa 'pkg' (pkgng) como gestor de paquetes. Comandos: pkg search <nombre> (buscar en repositorios), pkg install <nombre> (instalar), pkg info (listar instalados), pkg upgrade (actualizar todos), pkg delete <nombre> (eliminar), pkg clean (limpiar caché). Ejemplo de paquetes: apache24 (servidor web), mysql80-server, php82. Para habilitar Apache: sudo sysrc apache24_enable=YES; sudo service apache24 start.",
      },
      {
        titulo: "Gestión de usuarios y permisos",
        contenido:
          "Comandos de usuario: adduser (crear usuario interactivo), pw useradd (crear no-interactivo), passwd (cambiar contraseña). Permisos: chown (cambiar propietario), chmod (permisos rwx). Ejemplo recursivo: chown -R www-data:programadores /proyecto; chmod -R 660 /proyecto2024. Por seguridad, el acceso remoto SSH se deniega al usuario root — siempre crear usuario adicional con privilegios sudo.",
      },
      {
        titulo: "Automatización con cron en BSD",
        contenido:
          "FreeBSD también usa cron para programar tareas. La sintaxis es idéntica a Linux. Diferencias: en BSD el archivo /etc/crontab incluye un campo adicional de usuario. Para editar el crontab del usuario: crontab -e. Ejemplo: '0 2 * * * /usr/local/bin/backup.sh' ejecuta respaldo a las 2 AM diariamente. Los scripts de inicio de servicios residen en /usr/local/etc/rc.d/.",
      },
    ],
    conceptosClave: [
      "pkg install, pkg search, pkg info",
      "ZFS: sistema de archivos avanzado",
      "PAM, GBDE, MAC (módulos de seguridad)",
      "sysrc para habilitar servicios",
      "No conectar como root por SSH",
      "Compatibilidad binaria con Linux",
      "apache24 en FreeBSD",
    ],
  },
  {
    id: 7,
    titulo: "Sistemas Distribuidos",
    horas: 6,
    color: "indigo",
    icono: "🌐",
    objetivo:
      "Identificar los conceptos básicos de operación y administración de sistemas operativos en forma virtualizada o distribuida.",
    temas: [
      {
        titulo: "Particionado de equipos",
        contenido:
          "El particionado divide los recursos físicos de un servidor en partes separadas. Características: aislamiento (recursos dedicados, fallas en una partición no afectan otras), independencia de administración (arranque/parada/configuración independiente), escalabilidad (agregar/quitar recursos sin afectar otras particiones), consolidación (varios servidores físicos → una partición en un servidor de gama alta). IBM introdujo LPAR (Logical Partitions) en mainframes para ejecutar múltiples SO independientes.",
      },
      {
        titulo: "Virtualización",
        contenido:
          "La virtualización (Tanenbaum, 2015) permite que múltiples SO y aplicaciones se ejecuten en un único hardware físico creando máquinas virtuales (VM). El hypervisor (monitor de VM) asigna recursos y asegura aislamiento entre VMs. Historia: años 70-80 primeros hypervisores en mainframes; año 2000 VMware, Microsoft Hyper-V y Xen para x86. Características: consolidación de servidores, recuperación ante desastres, creación de entornos de prueba, migración de cargas de trabajo.",
      },
      {
        titulo: "Paravirtualización",
        contenido:
          "La paravirtualización es una variante de la virtualización donde el SO huésped coopera con el hypervisor. A diferencia de la virtualización completa, el huésped es modificado para llamar al hypervisor directamente (hypercalls) en lugar de emular instrucciones privilegiadas. Ventaja: mayor rendimiento al reducir la sobrecarga de emulación. Ejemplo: Xen con kernels Linux modificados. Desventaja: requiere modificar el SO huésped (no funciona con SO propietarios sin modificar).",
      },
      {
        titulo: "Contenedores",
        contenido:
          "Los contenedores son una forma ligera de virtualización a nivel de SO. Comparten el kernel del host (diferencia clave con las VMs que tienen su propio SO completo). Ventajas: aislamiento de aplicaciones, portabilidad (mismo contenedor en cualquier entorno), ligereza (inician en segundos), eficiencia de recursos. Docker es la plataforma más popular. Componentes: Docker Engine, imágenes en capas (inmutables), contenedores (instancias en ejecución), Docker Hub (repositorio de imágenes).",
      },
      {
        titulo: "Clusters y sistemas en la nube",
        contenido:
          "Cluster: grupo de computadoras que trabajan como una sola unidad. Primer paso: definir el propósito del clúster. Usos: alta disponibilidad (HA), computación de alto rendimiento (HPC), balanceo de carga (distribución equilibrada de tareas entre nodos para maximizar rendimiento). Nube: AWS, Microsoft Azure y Google Cloud Platform ofrecen cómputo, almacenamiento y redes a través de Internet. Característica clave: autoservicio bajo demanda (el usuario aprovisiona recursos sin intervención humana del proveedor). Modelos: IaaS, PaaS, SaaS.",
      },
    ],
    conceptosClave: [
      "LPAR: Logical Partitions (IBM)",
      "Hypervisor Tipo 1 vs Tipo 2",
      "Paravirtualización: hypercalls",
      "Contenedores comparten kernel del host",
      "Docker Engine e imágenes",
      "Clúster: balanceo de carga",
      "AWS, Azure, GCP",
    ],
  },
];

// ============================================================
// 40 PREGUNTAS DE AUTOEVALUACIÓN
// Basadas en las autoevaluaciones reales del apunte (pp. 79-380)
// ============================================================

export const preguntas = [
  // ── UNIDAD 1: Generalidades ──────────────────────────────
  {
    id: 1,
    unidad: 1,
    texto:
      "¿Cuáles son las funciones principales de un sistema operativo?",
    opciones: [
      "Facilitar el manejo del equipo",
      "Optimizar el uso de los recursos del equipo",
      "Flexibilizar la actualización del sistema",
      "Todas las anteriores",
    ],
    correcta: 3,
    explicacion:
      "Las tres funciones principales del SO son: facilitar el manejo del equipo, optimizar el uso de recursos y flexibilizar la actualización del sistema.",
  },
  {
    id: 2,
    unidad: 1,
    texto:
      "¿Cuál es la función de contabilidad en un sistema operativo?",
    opciones: [
      "Recopilar estadísticas de uso de recursos",
      "Administrar la memoria del sistema",
      "Controlar el acceso a los archivos",
      "Gestionar los dispositivos de E/S",
    ],
    correcta: 0,
    explicacion:
      "La función de contabilidad consiste en recopilar estadísticas sobre el uso de los recursos del sistema (CPU, memoria, disco, etc.).",
  },
  {
    id: 3,
    unidad: 1,
    texto:
      "¿Cuál es la diferencia entre un programa y un proceso?",
    opciones: [
      "Un programa es un diseño estático; un proceso es un ente dinámico en ejecución",
      "Un proceso es el código fuente; un programa es el ejecutable",
      "No hay diferencia, son sinónimos",
      "Un programa ocupa más memoria que un proceso",
    ],
    correcta: 0,
    explicacion:
      "Un programa es un diseño estático (el código), mientras que un proceso es ese programa cargado en memoria y en ejecución (ente dinámico con PID, estado, recursos).",
  },
  {
    id: 4,
    unidad: 1,
    texto:
      "¿Cuál algoritmo de planificación asigna el mismo tiempo de CPU a todos los procesos de forma rotativa?",
    opciones: [
      "FCFS (First Come First Served)",
      "SJF (Shortest Job First)",
      "Round Robin",
      "Prioridad",
    ],
    correcta: 2,
    explicacion:
      "Round Robin asigna un quantum (tiempo fijo) a cada proceso de forma rotativa, garantizando equidad entre todos los procesos.",
  },
  {
    id: 5,
    unidad: 1,
    texto:
      "¿Por qué se genera una interrupción de hardware en un sistema operativo?",
    opciones: [
      "Porque el usuario llamó al sistema operativo",
      "Porque algún periférico requiere realizar una tarea",
      "Porque ocurrió un error en el programa",
      "Porque se agotó la memoria virtual",
    ],
    correcta: 1,
    explicacion:
      "Las interrupciones de hardware se generan cuando un periférico (disco, teclado, red, etc.) necesita la atención del procesador para realizar o completar una tarea.",
  },
  {
    id: 6,
    unidad: 1,
    texto:
      "¿Cuál es el principal desafío que representa la fragmentación interna en la administración de memoria?",
    opciones: [
      "Ineficiencia en el uso de la memoria",
      "Exceso de procesos en espera",
      "Fallo en la tabla de páginas",
      "Pérdida de datos en disco",
    ],
    correcta: 0,
    explicacion:
      "La fragmentación interna ocurre cuando se asigna más memoria de la necesaria a una partición, desperdiciando el espacio sobrante dentro de ella.",
  },
  // ── UNIDAD 2: Almacenamiento ─────────────────────────────
  {
    id: 7,
    unidad: 2,
    texto:
      "¿Qué estructura del sistema de archivos indica la posición del sistema operativo en el disco?",
    opciones: [
      "MBR (Master Boot Record)",
      "Superbloque",
      "Inodo",
      "Partición",
    ],
    correcta: 0,
    explicacion:
      "El MBR (sector 0) es el primer sector del disco y contiene la referencia que lleva a arrancar el sistema operativo.",
  },
  {
    id: 8,
    unidad: 2,
    texto:
      "¿Por qué es importante realizar copias de seguridad de los archivos?",
    opciones: [
      "Para optimizar el rendimiento del sistema operativo",
      "Para prevenir la corrupción de archivos",
      "Para recuperar datos en caso de pérdida, robo o fallo del dispositivo",
      "Para liberar espacio en el disco duro",
    ],
    correcta: 2,
    explicacion:
      "La razón principal de los backups es poder recuperar datos cuando ocurre pérdida por fallo de hardware, eliminación accidental, virus o robo.",
  },
  {
    id: 9,
    unidad: 2,
    texto:
      "¿Cuál es la función principal de un sistema de archivos?",
    opciones: [
      "Es el hardware que almacena todos los archivos del sistema",
      "Es un conjunto de reglas y estructuras para organizar y almacenar datos en un dispositivo",
      "Es un software que elimina archivos innecesarios para liberar espacio",
      "Es una herramienta de seguridad para prevenir ataques cibernéticos",
    ],
    correcta: 1,
    explicacion:
      "Un sistema de archivos es una estructura organizada que permite almacenar, recuperar y gestionar información a través de archivos y directorios.",
  },
  {
    id: 10,
    unidad: 2,
    texto:
      "Si realizo respaldos completos y diferenciales, ¿cuántos respaldos necesito para restaurar la información?",
    opciones: [
      "El completo y todos los diferenciales",
      "3: el completo y 2 diferenciales",
      "Solo el completo",
      "2: el completo y un diferencial",
    ],
    correcta: 3,
    explicacion:
      "Con el esquema diferencial solo se necesitan dos respaldos: el último completo y el último diferencial, ya que el diferencial acumula todos los cambios desde el completo.",
  },
  {
    id: 11,
    unidad: 2,
    texto:
      "¿Cuál es la herramienta para verificar y corregir errores en el sistema de archivos en Linux/UNIX?",
    opciones: [
      "Explorador de archivos",
      "chkdsk",
      "fsck",
      "scandisk",
    ],
    correcta: 2,
    explicacion:
      "En Linux/UNIX la herramienta es fsck (file system check). Windows usa chkdsk; también existe scandisk en versiones antiguas de Windows.",
  },
  {
    id: 12,
    unidad: 2,
    texto:
      "En una política de respaldo, ¿qué criterio define el tiempo que se conservará almacenada la información respaldada?",
    opciones: [
      "Periodicidad",
      "Retención de datos",
      "Almacenamiento y ubicación",
      "Procedimiento de verificación",
    ],
    correcta: 1,
    explicacion:
      "La retención de datos define cuánto tiempo se conservarán los respaldos según requisitos normativos, políticas internas y capacidad de almacenamiento.",
  },
  // ── UNIDAD 3: Seguridad ──────────────────────────────────
  {
    id: 13,
    unidad: 3,
    texto:
      "¿Cuál es el objetivo principal de un plan de gestión de riesgos en seguridad de la información?",
    opciones: [
      "Proteger confidencialidad, integridad y disponibilidad de los datos",
      "Aumentar la velocidad del sistema",
      "Reducir los costos de hardware",
      "Gestionar las cuentas de usuario",
    ],
    correcta: 0,
    explicacion:
      "El objetivo del plan de gestión de riesgos es proteger el triángulo CIA: Confidencialidad, Integridad y Disponibilidad (Availability) de los datos.",
  },
  {
    id: 14,
    unidad: 3,
    texto:
      "¿Cuál es el propósito de la identificación de riesgos en la gestión de riesgos?",
    opciones: [
      "Documentar todos los activos de la organización",
      "Identificar y documentar todos los posibles peligros que podrían amenazar la información",
      "Implementar controles de seguridad inmediatamente",
      "Evaluar el impacto económico del sistema",
    ],
    correcta: 1,
    explicacion:
      "La identificación de riesgos consiste en catalogar todos los posibles peligros (ransomware, phishing, desastres, errores humanos, etc.) que podrían afectar a la organización.",
  },
  {
    id: 15,
    unidad: 3,
    texto:
      "¿Cuál es la función principal del control de accesos en un sistema informático?",
    opciones: [
      "Administrar quién puede acceder a qué información en el sistema",
      "Controlar el uso de CPU por cada proceso",
      "Gestionar el espacio en disco",
      "Monitorear el tráfico de red",
    ],
    correcta: 0,
    explicacion:
      "El control de accesos define y gestiona quién (usuarios, grupos, sistemas) puede acceder, leer, escribir o ejecutar recursos en el sistema.",
  },
  {
    id: 16,
    unidad: 3,
    texto:
      "¿Qué métodos se utilizan comúnmente para verificar la identidad en el control de accesos?",
    opciones: [
      "Contraseñas, credenciales biométricas y tarjetas inteligentes",
      "Firewall, antivirus y VPN",
      "Backup, RAID y espejo",
      "SSH, FTP y HTTP",
    ],
    correcta: 0,
    explicacion:
      "Los métodos de autenticación incluyen contraseñas, biometría (huella, iris) y tarjetas inteligentes/tokens, que pueden combinarse para autenticación multifactor.",
  },
  {
    id: 17,
    unidad: 3,
    texto:
      "¿Cuál es el propósito principal de las bitácoras o logs en un sistema operativo?",
    opciones: [
      "Almacenar copias de seguridad de los archivos",
      "Gestionar los permisos de usuarios",
      "Comprimir archivos del sistema",
      "Registrar actividades del sistema para auditoría y resolución de problemas",
    ],
    correcta: 3,
    explicacion:
      "Las bitácoras registran qué ocurrió, quién lo hizo, cuándo y por qué medio, siendo esenciales para auditoría, detección de intrusos y resolución de incidentes.",
  },
  {
    id: 18,
    unidad: 3,
    texto:
      "¿Cuál es una práctica recomendada para proteger las bitácoras o logs del sistema?",
    opciones: [
      "Almacenarlos solo en texto plano en el mismo servidor",
      "Borrarlos periódicamente para ahorrar espacio",
      "Compartirlos públicamente para transparencia",
      "Protegerlos con firmas digitales y enviarlos a un servidor remoto cifrado con SSH",
    ],
    correcta: 3,
    explicacion:
      "Los logs deben protegerse con firmas digitales, cifrado y almacenarse remotamente via SSH para evitar que un atacante que comprometa el servidor pueda borrar las evidencias.",
  },
  // ── UNIDAD 4: Windows Server ─────────────────────────────
  {
    id: 19,
    unidad: 4,
    texto:
      "¿Cuál es el propósito principal de Windows Server?",
    opciones: [
      "Dar servicio de red únicamente",
      "Gestionar información y recursos en red",
      "Tener cómputo de alto rendimiento",
      "Guardar información",
    ],
    correcta: 1,
    explicacion:
      "Windows Server está diseñado para gestionar de forma centralizada información y recursos en una red empresarial (usuarios, archivos, aplicaciones, servicios).",
  },
  {
    id: 20,
    unidad: 4,
    texto:
      "¿Qué versión de Windows Server 2019 está diseñada para pequeñas empresas con un máximo de 25 usuarios simultáneos y 50 dispositivos?",
    opciones: [
      "Windows Server 2019 Datacenter",
      "Windows Server 2019 Standard",
      "Windows Server 2019 Essentials",
      "Windows Server 2019 Foundation",
    ],
    correcta: 2,
    explicacion:
      "Essentials es la edición para pequeñas empresas, con límite de 25 usuarios y 50 dispositivos. Standard permite 2 VMs y Datacenter virtualización ilimitada.",
  },
  {
    id: 21,
    unidad: 4,
    texto:
      "¿Cuál de las siguientes describe correctamente la función del Active Directory (AD)?",
    opciones: [
      "Es un sistema de archivos para almacenar datos",
      "Es un sistema que solo guarda contraseñas",
      "Es un servicio de directorio que organiza y gestiona objetos en una red",
      "Es un servicio de instalación remota de aplicaciones",
    ],
    correcta: 2,
    explicacion:
      "Active Directory es un servicio de directorio que organiza usuarios, grupos, equipos y otros objetos en un árbol jerárquico (dominio → árbol → bosque) para administración centralizada.",
  },
  {
    id: 22,
    unidad: 4,
    texto:
      "¿Qué puerto TCP debe estar abierto en el firewall para permitir el servicio de Escritorio Remoto (RDS) en Windows Server?",
    opciones: [
      "Puerto 22",
      "Puerto 80",
      "Puerto 443",
      "Puerto 3389",
    ],
    correcta: 3,
    explicacion:
      "El servicio de Escritorio Remoto (Remote Desktop Services / RDP) usa el puerto TCP 3389. SSH usa 22, HTTP usa 80 y HTTPS usa 443.",
  },
  {
    id: 23,
    unidad: 4,
    texto:
      "¿Cuál herramienta permite instalar roles y características en Windows Server 2019?",
    opciones: [
      "PowerShell únicamente",
      "Administrador del Servidor (Server Manager / Dashboard)",
      "Administrador de Tareas",
      "Panel de Control clásico",
    ],
    correcta: 1,
    explicacion:
      "El Administrador del Servidor (Server Manager) es la consola central para agregar roles (IIS, DNS, RDS, AD) y características en Windows Server.",
  },
  // ── UNIDAD 5: GNU/Linux ──────────────────────────────────
  {
    id: 24,
    unidad: 5,
    texto:
      "¿Cuál es el propósito principal de un sistema operativo según lo visto en la unidad de GNU/Linux?",
    opciones: [
      "Gestionar solo el hardware de la computadora",
      "Proporcionar servicios esenciales para la ejecución de programas de aplicación",
      "Actuar como intermediario entre el usuario y el hardware",
      "Gestionar solo el software de la computadora",
    ],
    correcta: 2,
    explicacion:
      "El SO actúa como intermediario entre el usuario y el hardware, facilitando el uso del equipo y gestionando recursos de forma eficiente.",
  },
  {
    id: 25,
    unidad: 5,
    texto:
      "¿Por qué se utiliza el término 'GNU/Linux' y no solo 'Linux'?",
    opciones: [
      "Porque es más fácil de recordar",
      "Porque reconoce las contribuciones del Proyecto GNU (Richard Stallman)",
      "Porque Linux es un nombre registrado de Linus Torvalds",
      "Para diferenciarlo de otras versiones de Unix",
    ],
    correcta: 1,
    explicacion:
      "El nombre GNU/Linux reconoce que el sistema completo incluye el kernel Linux de Linus Torvalds Y las herramientas/utilidades del Proyecto GNU de Richard Stallman.",
  },
  {
    id: 26,
    unidad: 5,
    texto:
      "¿Cuál distribución de GNU/Linux es más recomendada para personas que comienzan a explorar Linux?",
    opciones: [
      "Debian",
      "Fedora",
      "Slackware",
      "Ubuntu",
    ],
    correcta: 3,
    explicacion:
      "Ubuntu es la distribución más recomendada para principiantes por su interfaz amigable, amplia comunidad, soporte LTS y facilidad de instalación.",
  },
  {
    id: 27,
    unidad: 5,
    texto:
      "¿Qué es un paquete en el contexto de GNU/Linux?",
    opciones: [
      "Un archivo que solo contiene el programa principal",
      "Un archivo comprimido con todos los archivos necesarios para una aplicación y sus instrucciones de instalación",
      "Un archivo que solo incluye las dependencias de un programa",
      "Un archivo que únicamente contiene configuraciones",
    ],
    correcta: 1,
    explicacion:
      "Un paquete es un archivo comprimido que contiene el programa, sus dependencias, archivos de configuración e instrucciones para instalar, actualizar o eliminar el software.",
  },
  {
    id: 28,
    unidad: 5,
    texto:
      "¿Cuál es una de las principales características del sistema de gestión de paquetes APT en Ubuntu?",
    opciones: [
      "Solo permite la instalación de paquetes locales",
      "No maneja las dependencias entre paquetes",
      "Administra automáticamente las dependencias entre paquetes",
      "No permite actualizar software desde repositorios remotos",
    ],
    correcta: 2,
    explicacion:
      "APT (Advanced Package Tool) resuelve y gestiona automáticamente las dependencias: cuando instalas un paquete, también instala todo lo que necesita para funcionar.",
  },
  {
    id: 29,
    unidad: 5,
    texto:
      "¿Cuál es la definición correcta de un servicio (daemon) en GNU/Linux?",
    opciones: [
      "Una aplicación que se ejecuta en primer plano y requiere interacción constante del usuario",
      "Una aplicación que se ejecuta en segundo plano, proporcionando funciones o respuestas a solicitudes",
      "Un proceso de usuario que solo existe mientras la sesión está activa",
      "Un archivo de configuración del sistema operativo",
    ],
    correcta: 1,
    explicacion:
      "Un servicio o daemon se ejecuta en segundo plano sin intervención del usuario, inicia automáticamente con el SO y corre de forma continua (sshd, httpd, cron, etc.).",
  },
  {
    id: 30,
    unidad: 5,
    texto:
      "¿Qué comando de systemd se utiliza para verificar el estado de un servicio en GNU/Linux?",
    opciones: [
      "sudo service <nombre> check",
      "sudo systemctl status <nombre>",
      "sudo init status <nombre>",
      "sudo daemon check <nombre>",
    ],
    correcta: 1,
    explicacion:
      "El comando correcto es 'sudo systemctl status <servicio>', por ejemplo: sudo systemctl status postgresql. Muestra si está activo, inactivo o fallido.",
  },
  // ── UNIDAD 6: BSD ────────────────────────────────────────
  {
    id: 31,
    unidad: 6,
    texto:
      "¿Cuál característica de FreeBSD es la más importante para tener portabilidad en nuevas arquitecturas y permitir que la comunidad lo audite continuamente?",
    opciones: [
      "Multitasking apropiativo",
      "Compatibilidad binaria con macOS",
      "Protección de memoria",
      "Código fuente disponible (open source)",
    ],
    correcta: 3,
    explicacion:
      "El código fuente disponible permite portar FreeBSD a nuevas arquitecturas y que la comunidad lo audite, mejore y corrija continuamente, siendo su característica más importante.",
  },
  {
    id: 32,
    unidad: 6,
    texto:
      "¿Qué herramienta o módulo de FreeBSD permite gestionar particiones RAID y asigna protección criptográfica a los datos almacenados?",
    opciones: [
      "MAC",
      "PAM",
      "GEOM",
      "GBDE",
    ],
    correcta: 2,
    explicacion:
      "GEOM es el framework de almacenamiento de FreeBSD que gestiona particiones RAID y asigna protección criptográfica a los datos en disco.",
  },
  {
    id: 33,
    unidad: 6,
    texto:
      "¿Qué característica de FreeBSD permite ejecutar programas de otros SO como Linux, SCO, NetBSD y BSDI?",
    opciones: [
      "Módulos de compatibilidad",
      "Módulos de kernel de carga dinámica",
      "Buffer de caché compartido",
      "Bibliotecas compartidas",
    ],
    correcta: 0,
    explicacion:
      "FreeBSD tiene módulos de compatibilidad binaria que permiten ejecutar nativamente binarios de Linux, SCO Unix, NetBSD y BSDI sin recompilar.",
  },
  {
    id: 34,
    unidad: 6,
    texto:
      "¿Cuál es el comando utilizado para instalar un paquete específico en FreeBSD?",
    opciones: [
      "pkg install",
      "pkg search",
      "pkg info",
      "pkg delete",
    ],
    correcta: 0,
    explicacion:
      "El comando para instalar paquetes en FreeBSD es 'pkg install <nombre>'. pkg search busca, pkg info lista los instalados y pkg delete elimina.",
  },
  {
    id: 35,
    unidad: 6,
    texto:
      "¿Qué comando se utiliza para verificar los paquetes actualmente instalados en FreeBSD?",
    opciones: [
      "pkg upgrade",
      "pkg search",
      "pkg info",
      "pkg clean",
    ],
    correcta: 2,
    explicacion:
      "El comando 'pkg info' muestra todos los paquetes instalados en el sistema FreeBSD junto con su versión e información.",
  },
  // ── UNIDAD 7: Sistemas Distribuidos ─────────────────────
  {
    id: 36,
    unidad: 7,
    texto:
      "¿Cuál es el enfoque para el particionado de equipos que consiste en dividir los recursos físicos de una computadora en partes separadas conocidas como particiones o dominios?",
    opciones: [
      "Virtualización",
      "Paravirtualización",
      "Contenedores",
      "Partición de hardware",
    ],
    correcta: 3,
    explicacion:
      "La partición de hardware divide físicamente los recursos del servidor en particiones independientes, cada una con sus propios recursos dedicados y aislamiento total.",
  },
  {
    id: 37,
    unidad: 7,
    texto:
      "¿Qué concepto introdujo IBM en sus mainframes que permitía dividir un solo servidor en múltiples particiones lógicas, cada una con su propio SO?",
    opciones: [
      "Virtualización Completa",
      "Clustering",
      "LPAR (Logical Partitions)",
      "Contenedores",
    ],
    correcta: 2,
    explicacion:
      "IBM introdujo LPAR (Logical Partitions) en sus mainframes, permitiendo que un solo servidor físico ejecute múltiples instancias de SO independientes con recursos dedicados.",
  },
  {
    id: 38,
    unidad: 7,
    texto:
      "¿Qué describe Tanenbaum (2015) como una técnica que permite que múltiples SO y aplicaciones se ejecuten en un único hardware físico mediante máquinas virtuales?",
    opciones: [
      "Paravirtualización",
      "Clustering",
      "Contenedores",
      "Virtualización",
    ],
    correcta: 3,
    explicacion:
      "La virtualización (Tanenbaum, 2015) crea máquinas virtuales donde múltiples SO corren en el mismo hardware físico, gestionados por un hypervisor.",
  },
  {
    id: 39,
    unidad: 7,
    texto:
      "¿Cuál es la principal diferencia entre contenedores y máquinas virtuales?",
    opciones: [
      "Los contenedores requieren una copia completa del sistema operativo",
      "Los contenedores utilizan el mismo kernel del sistema operativo anfitrión",
      "Las máquinas virtuales son más ligeras y rápidas que los contenedores",
      "Los contenedores no pueden ejecutar aplicaciones en entornos aislados",
    ],
    correcta: 1,
    explicacion:
      "Los contenedores comparten el kernel del SO anfitrión (host), mientras que las VMs tienen su propio SO completo. Por eso los contenedores son más ligeros y arrancan más rápido.",
  },
  {
    id: 40,
    unidad: 7,
    texto:
      "¿Cuál es el propósito del balanceo de carga en un clúster?",
    opciones: [
      "Garantizar que todos los nodos tengan el mismo hardware y software",
      "Proporcionar seguridad y evitar accesos no autorizados",
      "Distribuir las tareas de manera equilibrada entre los nodos para maximizar el rendimiento",
      "Facilitar la conexión entre los nodos a través de una red privada",
    ],
    correcta: 2,
    explicacion:
      "El balanceo de carga distribuye equitativamente las tareas entre los nodos del clúster para maximizar el rendimiento, evitar cuellos de botella y asegurar alta disponibilidad.",
  },
];

export const UNIDAD_COLORES = {
  emerald: { bg: "bg-emerald-50", border: "border-emerald-400", badge: "bg-emerald-600", text: "text-emerald-700", hover: "hover:bg-emerald-100" },
  teal:    { bg: "bg-teal-50",    border: "border-teal-400",    badge: "bg-teal-600",    text: "text-teal-700",    hover: "hover:bg-teal-100"    },
  red:     { bg: "bg-red-50",     border: "border-red-400",     badge: "bg-red-600",     text: "text-red-700",     hover: "hover:bg-red-100"     },
  blue:    { bg: "bg-blue-50",    border: "border-blue-400",    badge: "bg-blue-600",    text: "text-blue-700",    hover: "hover:bg-blue-100"    },
  orange:  { bg: "bg-orange-50",  border: "border-orange-400",  badge: "bg-orange-600",  text: "text-orange-700",  hover: "hover:bg-orange-100"  },
  purple:  { bg: "bg-purple-50",  border: "border-purple-400",  badge: "bg-purple-600",  text: "text-purple-700",  hover: "hover:bg-purple-100"  },
  indigo:  { bg: "bg-indigo-50",  border: "border-indigo-400",  badge: "bg-indigo-600",  text: "text-indigo-700",  hover: "hover:bg-indigo-100"  },
};
