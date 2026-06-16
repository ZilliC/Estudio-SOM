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
      "Un microkernel traslada servicios como los drivers y el sistema de archivos al espacio de usuario. ¿Cuál es el principal compromiso (trade-off) de este diseño frente a un kernel monolítico?",
    opciones: [
      "Gana robustez y aislamiento de fallos, pero asume la sobrecarga del paso de mensajes entre procesos",
      "Gana velocidad de ejecución, pero pierde la capacidad de soportar multitarea",
      "Reduce el consumo de memoria, pero deja de funcionar en modo privilegiado",
      "Mejora la compatibilidad de hardware, pero impide ejecutar procesos de usuario",
    ],
    correcta: 0,
    explicacion:
      "Al sacar los servicios del modo privilegiado, un fallo en un driver no derriba todo el kernel (mayor robustez/aislamiento), pero cada petición de servicio exige comunicación entre procesos, lo que añade sobrecarga frente al monolítico, donde todo corre en el mismo espacio.",
  },
  {
    id: 2,
    unidad: 1,
    texto:
      "En un sistema interactivo con muchos usuarios escribiendo en terminales, ¿por qué suele preferirse Round Robin sobre SJF (Shortest Job First)?",
    opciones: [
      "Porque SJF no puede ejecutarse en sistemas multiusuario",
      "Porque Round Robin garantiza un tiempo de respuesta acotado y evita la inanición que SJF puede causar a los procesos largos",
      "Porque Round Robin siempre logra el menor tiempo promedio de espera",
      "Porque SJF reparte un quantum igual entre todos los procesos",
    ],
    correcta: 1,
    explicacion:
      "Round Robin reparte un quantum fijo de forma rotativa, lo que da equidad y respuesta predecible —ideal en sistemas interactivos—. SJF optimiza el promedio pero puede dejar en inanición a los trabajos largos si siempre llegan trabajos cortos.",
  },
  {
    id: 3,
    unidad: 1,
    texto:
      "Tras invocar fork() en Linux/UNIX, ¿qué describe mejor la relación entre el proceso que llama y el nuevo proceso?",
    opciones: [
      "Comparten el mismo PID pero tienen memoria separada",
      "El nuevo proceso reemplaza al original y hereda su PID",
      "El nuevo proceso es una copia con un PID distinto y conserva al original como su PPID",
      "El nuevo proceso se convierte en init (PID 1) hasta que termina",
    ],
    correcta: 2,
    explicacion:
      "fork() crea un proceso hijo que es copia del padre pero con su propio PID; el PID del padre queda como PPID del hijo. Así se construye la jerarquía de procesos que arranca en init (PID 1).",
  },
  {
    id: 4,
    unidad: 1,
    texto:
      "Un programa intenta dividir entre cero y el sistema operativo toma el control de inmediato. ¿Qué tipo de evento se produjo?",
    opciones: [
      "Una interrupción de hardware generada por un periférico",
      "Una llamada al sistema (interrupción de software) solicitada por el programa",
      "Un cambio de contexto iniciado por el dispatcher",
      "Una excepción, es decir, una interrupción provocada por un error en el propio programa",
    ],
    correcta: 3,
    explicacion:
      "Las excepciones son interrupciones causadas por errores durante la ejecución (división entre cero, acceso inválido a memoria). Se distinguen de las de hardware (periféricos) y de las de software (syscalls voluntarias).",
  },
  {
    id: 5,
    unidad: 1,
    texto:
      "Durante un cambio de contexto, ¿cuál es el papel concreto del dispatcher?",
    opciones: [
      "Decide qué algoritmo de planificación usará el sistema",
      "Realiza el cambio de contexto, ajusta el modo de ejecución y actualiza el contador de programa (PC)",
      "Genera las interrupciones de hardware de los periféricos",
      "Asigna la memoria virtual a cada proceso nuevo",
    ],
    correcta: 1,
    explicacion:
      "El dispatcher es el mecanismo que materializa la decisión del planificador: guarda/restaura el contexto, cambia el modo de ejecución y carga el PC del proceso entrante. No elige el algoritmo, solo ejecuta el cambio.",
  },
  {
    id: 6,
    unidad: 1,
    texto:
      "Un sistema con particiones de tamaño fijo asigna a un proceso una partición más grande de lo que necesita, y el sobrante queda inutilizable. ¿Qué fenómeno es y en qué se diferencia de la fragmentación externa?",
    opciones: [
      "Fragmentación interna: espacio desperdiciado dentro de una partición ya asignada; la externa es memoria libre suficiente pero no contigua",
      "Fragmentación externa: bloques libres dispersos; la interna ocurre solo en disco",
      "Fragmentación interna: ocurre únicamente en la segmentación, nunca en la paginación",
      "Son lo mismo: ambas describen memoria libre no contigua",
    ],
    correcta: 0,
    explicacion:
      "La fragmentación interna es el espacio sobrante dentro de un bloque/partición ya asignado. La externa es cuando hay memoria libre total suficiente, pero está dispersa en huecos no contiguos que impiden ubicar un proceso.",
  },
  // ── UNIDAD 2: Almacenamiento ─────────────────────────────
  {
    id: 7,
    unidad: 2,
    texto:
      "En un sistema de archivos tipo UNIX, ¿qué distingue la información que guarda un inodo de la que guarda el superbloque?",
    opciones: [
      "El inodo guarda el nombre del archivo; el superbloque guarda su contenido",
      "El inodo apunta al MBR; el superbloque apunta a la tabla de particiones",
      "El inodo guarda metadatos de un archivo concreto (dueño, permisos, punteros a bloques); el superbloque describe el sistema de archivos completo",
      "Ambos guardan lo mismo, pero el inodo vive en disco y el superbloque en RAM",
    ],
    correcta: 2,
    explicacion:
      "El inodo es la estructura de metadatos de un archivo/directorio individual (permisos, dueño, fechas, punteros a bloques). El superbloque describe globalmente el sistema de archivos: tamaño, espacio libre, número y ubicación de inodos, tamaño de bloque.",
  },
  {
    id: 8,
    unidad: 2,
    texto:
      "¿Por qué la operación 'seek' sobre un archivo no implica una transferencia de datos (E/S real) con el disco?",
    opciones: [
      "Porque solo reposiciona el apuntador de lectura/escritura dentro del archivo, sin mover datos",
      "Porque copia todo el archivo a la caché antes de leerlo",
      "Porque elimina temporalmente la entrada del archivo en el directorio",
      "Porque bloquea el archivo para impedir que otros procesos lo lean",
    ],
    correcta: 0,
    explicacion:
      "seek solo cambia la posición del apuntador del archivo (dónde ocurrirá la próxima lectura/escritura). No transfiere datos; la E/S real ocurre después con read o write.",
  },
  {
    id: 9,
    unidad: 2,
    texto:
      "Una empresa hace un respaldo completo el domingo e incrementales de lunes a sábado. Si el disco falla el jueves, ¿qué necesita para restaurar todo correctamente?",
    opciones: [
      "Solo el incremental del jueves",
      "El completo del domingo más los incrementales de lunes, martes, miércoles y jueves",
      "El completo del domingo más únicamente el incremental del jueves",
      "Solo el completo del domingo",
    ],
    correcta: 1,
    explicacion:
      "Cada respaldo incremental guarda solo lo que cambió desde el incremental anterior, así que para reconstruir el estado del jueves se necesita el completo más toda la cadena de incrementales hasta ese día.",
  },
  {
    id: 10,
    unidad: 2,
    texto:
      "¿Por qué un esquema de respaldo diferencial necesita solo dos conjuntos para restaurar, mientras que el incremental necesita toda la cadena?",
    opciones: [
      "Porque cada diferencial acumula todos los cambios ocurridos desde el último respaldo completo",
      "Porque el diferencial copia el sistema completo en cada ejecución",
      "Porque el diferencial no depende de ningún respaldo completo",
      "Porque el incremental también copia todo el sistema cada vez",
    ],
    correcta: 0,
    explicacion:
      "El diferencial es acumulativo respecto al último completo, por lo que basta el completo + el último diferencial. El incremental solo guarda lo cambiado desde el respaldo previo, obligando a aplicar la cadena entera.",
  },
  {
    id: 11,
    unidad: 2,
    texto:
      "¿Cómo detecta fsck inconsistencias en un sistema de archivos Linux/UNIX?",
    opciones: [
      "Desfragmenta el disco reubicando los archivos en sectores contiguos",
      "Cifra los inodos para protegerlos contra modificaciones no autorizadas",
      "Crea una réplica en espejo del sistema de archivos para compararla",
      "Construye dos tablas de contadores (bloques en uso y bloques libres) y busca bloques ausentes, duplicados o inconsistentes",
    ],
    correcta: 3,
    explicacion:
      "fsck recorre el sistema de archivos y arma tablas de contadores de bloques (asignados a archivos y libres). Si un bloque aparece de más, de menos o duplicado, detecta la inconsistencia y puede repararla (p. ej. con -y).",
  },
  {
    id: 12,
    unidad: 2,
    texto:
      "¿Cuál es la ventaja principal del DMA (acceso directo a memoria) frente a la E/S por encuesta (polling)?",
    opciones: [
      "Permite transferir datos entre el periférico y la memoria sin ocupar la CPU en cada byte",
      "Elimina por completo la necesidad de interrupciones en el sistema",
      "Aumenta el tamaño de bloque del sistema de archivos",
      "Convierte automáticamente los dispositivos dedicados en virtuales",
    ],
    correcta: 0,
    explicacion:
      "El DMA libera a la CPU del trasiego byte a byte: el controlador mueve los datos directamente entre el dispositivo y la memoria, y solo interrumpe a la CPU al terminar. El polling, en cambio, mantiene a la CPU consultando el estado del dispositivo.",
  },
  // ── UNIDAD 3: Seguridad ──────────────────────────────────
  {
    id: 13,
    unidad: 3,
    texto:
      "Un ataque de ransomware cifra los datos de un hospital y exige rescate para descifrarlos. ¿Cuál pilar de la tríada CIA se ve comprometido de forma más directa e inmediata?",
    opciones: [
      "La confidencialidad, porque el atacante necesariamente leyó toda la información",
      "La disponibilidad, porque los datos quedan inaccesibles para sus usuarios legítimos",
      "La integridad, porque los datos fueron borrados de forma permanente",
      "Ninguno, porque el cifrado es siempre un control de seguridad",
    ],
    correcta: 1,
    explicacion:
      "El efecto inmediato del ransomware es negar el acceso a los datos: se vulnera la disponibilidad. Puede haber también pérdida de confidencialidad, pero el daño característico e inmediato es que los datos quedan inutilizables para quien los necesita.",
  },
  {
    id: 14,
    unidad: 3,
    texto:
      "En seguridad de la información, ¿cuál es la diferencia entre una vulnerabilidad y una amenaza?",
    opciones: [
      "La vulnerabilidad es el ataque ya ejecutado; la amenaza es el daño resultante",
      "Son sinónimos según la norma ISO/IEC 27001",
      "La vulnerabilidad es una debilidad explotable; la amenaza es la circunstancia con potencial de causar daño",
      "La vulnerabilidad solo existe en el hardware; la amenaza solo en el software",
    ],
    correcta: 2,
    explicacion:
      "Una vulnerabilidad es una debilidad que puede ser aprovechada; una amenaza es la circunstancia con potencial de daño; y un ataque es el intento real de explotar la vulnerabilidad. Son conceptos encadenados pero distintos.",
  },
  {
    id: 15,
    unidad: 3,
    texto:
      "En la etapa de evaluación/análisis de riesgos de ISO/IEC 27001, ¿cómo se estima el nivel de un riesgo?",
    opciones: [
      "Sumando el costo del hardware que podría dañarse",
      "Contando el número total de usuarios del sistema",
      "Midiendo únicamente la frecuencia histórica del evento",
      "Combinando la probabilidad de que ocurra con el impacto que tendría",
    ],
    correcta: 3,
    explicacion:
      "El nivel de riesgo se estima como probabilidad × impacto. Esto permite priorizar los riesgos para decidir su tratamiento (mitigar, transferir, aceptar o evitar).",
  },
  {
    id: 16,
    unidad: 3,
    texto:
      "El comando 'chmod 750 archivo' aplica permisos. ¿Qué puede hacer exactamente el grupo propietario sobre ese archivo?",
    opciones: [
      "Leer y ejecutar, pero no escribir",
      "Leer, escribir y ejecutar",
      "Solo escribir",
      "Nada: no tiene ningún permiso",
    ],
    correcta: 0,
    explicacion:
      "750 se traduce a rwx (dueño) r-x (grupo) --- (otros). El dígito del grupo es 5 = r-x, es decir lectura y ejecución, sin escritura. 'Otros' (0) no tiene ningún permiso.",
  },
  {
    id: 17,
    unidad: 3,
    texto:
      "¿Por qué se recomienda enviar las bitácoras a un servidor remoto cifrado en lugar de conservarlas solo en el equipo monitoreado?",
    opciones: [
      "Para liberar espacio en el disco del servidor remoto",
      "Porque los logs locales no son capaces de registrar timestamps",
      "Para que un atacante que comprometa el equipo no pueda borrar ni alterar las evidencias",
      "Porque el cifrado acelera la escritura de los registros",
    ],
    correcta: 2,
    explicacion:
      "Si los logs viven solo en el equipo atacado, el intruso puede borrarlos para ocultar su rastro. Enviarlos a un servidor remoto cifrado (vía SSH) y firmarlos digitalmente preserva la integridad de la evidencia.",
  },
  {
    id: 18,
    unidad: 3,
    texto:
      "Un antivirus y el uso de contraseñas fuertes buscan impedir que un incidente llegue a ocurrir. ¿Cómo se clasifica este tipo de control?",
    opciones: [
      "Controles correctivos",
      "Controles preventivos",
      "Controles de recuperación (DRP)",
      "Controles de transferencia del riesgo",
    ],
    correcta: 1,
    explicacion:
      "Los controles preventivos (antivirus, contraseñas robustas, capacitación) actúan antes del incidente para evitar que se materialice, a diferencia de las copias de seguridad o seguros, orientados a recuperar o transferir el riesgo una vez ocurrido.",
  },
  // ── UNIDAD 4: Windows Server ─────────────────────────────
  {
    id: 19,
    unidad: 4,
    texto:
      "Una empresa planea ejecutar decenas de máquinas virtuales sobre un único host con Windows Server. ¿Qué edición conviene por sus derechos de virtualización?",
    opciones: [
      "Standard, porque permite hasta 2 VMs",
      "Datacenter, porque ofrece virtualización ilimitada",
      "Essentials, porque está pensada para virtualización masiva",
      "Foundation, porque no impone ningún límite de hardware",
    ],
    correcta: 1,
    explicacion:
      "Datacenter habilita virtualización ilimitada, ideal para alta densidad de VMs. Standard solo cubre 2 VMs y Essentials está orientada a pequeñas empresas (25 usuarios/50 dispositivos), no a virtualización intensiva.",
  },
  {
    id: 20,
    unidad: 4,
    texto:
      "En Active Directory, ¿cuál es el orden jerárquico correcto, de menor a mayor alcance?",
    opciones: [
      "Bosque → Árbol → Dominio",
      "Árbol → Bosque → Dominio",
      "Dominio → Árbol → Bosque",
      "Dominio → Bosque → Árbol",
    ],
    correcta: 2,
    explicacion:
      "AD organiza los objetos jerárquicamente: varios dominios forman un árbol y varios árboles forman un bosque. Por eso el orden de menor a mayor alcance es dominio → árbol → bosque.",
  },
  {
    id: 21,
    unidad: 4,
    texto:
      "¿Cuál es el propósito de las Políticas de Grupo (GPO) dentro de un dominio de Active Directory?",
    opciones: [
      "Aplicar configuraciones y restricciones de forma centralizada a usuarios y equipos del dominio",
      "Cifrar el tráfico de red entre los servidores del dominio",
      "Asignar direcciones IP automáticamente a los clientes",
      "Crear copias de seguridad periódicas del directorio",
    ],
    correcta: 0,
    explicacion:
      "Las GPO permiten administrar de forma centralizada el comportamiento de usuarios y equipos (políticas de contraseñas, restricciones, scripts, configuraciones), aprovechando la estructura de dominio de AD.",
  },
  {
    id: 22,
    unidad: 4,
    texto:
      "Se necesita administrar gráficamente un Windows Server desde otra ciudad mediante Escritorio Remoto. ¿Qué puerto debe permitir el firewall y por qué no basta con abrir el 443?",
    opciones: [
      "El 22, porque el Escritorio Remoto se basa en SSH",
      "El 80, porque RDP viaja sobre HTTP",
      "El 53, porque RDP depende del servicio DNS",
      "El 3389/TCP, porque RDP usa ese puerto, distinto del 443 que atiende HTTPS",
    ],
    correcta: 3,
    explicacion:
      "El Escritorio Remoto (RDS/RDP) usa el puerto TCP 3389. El 443 corresponde a HTTPS y no transporta sesiones RDP, por lo que abrirlo no habilita el acceso remoto gráfico.",
  },
  {
    id: 23,
    unidad: 4,
    texto:
      "¿Qué ventaja ofrece instalar un rol con 'Install-WindowsFeature' en PowerShell frente a hacerlo con el Administrador del Servidor?",
    opciones: [
      "Es la única manera de instalar roles en Windows Server",
      "Permite automatizar y repetir la instalación mediante scripts, incluso de forma remota",
      "Garantiza que el servidor nunca tendrá que reiniciarse",
      "Instala los roles sin necesidad de privilegios de administrador",
    ],
    correcta: 1,
    explicacion:
      "PowerShell permite guionizar la instalación de roles, repetirla de forma idéntica en muchos servidores y ejecutarla remotamente (PSRemoting), algo difícil de escalar con la interfaz gráfica del Server Manager.",
  },
  // ── UNIDAD 5: GNU/Linux ──────────────────────────────────
  {
    id: 24,
    unidad: 5,
    texto:
      "Además del kernel de Linus Torvalds, ¿qué aporta el Proyecto GNU al sistema que llamamos 'GNU/Linux'?",
    opciones: [
      "El núcleo (kernel) encargado de gestionar el hardware",
      "Exclusivamente el gestor de paquetes APT",
      "Las herramientas y utilidades del sistema (compilador, shell, comandos) que rodean al kernel",
      "La interfaz gráfica de la distribución Ubuntu",
    ],
    correcta: 2,
    explicacion:
      "Linux es el kernel; el Proyecto GNU (Stallman) aporta las herramientas y utilidades que completan el sistema operativo usable (compilador, shell, comandos). El nombre GNU/Linux reconoce ambas contribuciones.",
  },
  {
    id: 25,
    unidad: 5,
    texto:
      "Un administrador necesita un servidor empresarial que priorice estabilidad y soporte de larga duración. ¿Qué par de distribuciones encaja mejor con ese objetivo?",
    opciones: [
      "Arch Linux y Fedora",
      "Debian y CentOS/RHEL",
      "Ubuntu sin LTS y Arch Linux",
      "Fedora y Slackware",
    ],
    correcta: 1,
    explicacion:
      "Debian es reconocida por su estabilidad y CentOS/RHEL están orientadas a servidores empresariales. Fedora prioriza la innovación y Arch está pensada para usuarios avanzados, lo que las hace menos idóneas para máxima estabilidad.",
  },
  {
    id: 26,
    unidad: 5,
    texto:
      "Instalas un paquete con 'apt install' y APT descarga también otros paquetes que tú no pediste. ¿Por qué ocurre esto?",
    opciones: [
      "Porque APT siempre actualiza todo el sistema cada vez que instalas algo",
      "Porque descarga paquetes adicionales de forma aleatoria del repositorio",
      "Porque reemplaza todos los paquetes locales por sus versiones remotas",
      "Porque APT resuelve automáticamente las dependencias que el paquete necesita para funcionar",
    ],
    correcta: 3,
    explicacion:
      "La característica clave de APT es la gestión automática de dependencias: al instalar un paquete, descarga e instala también todas las bibliotecas y paquetes de los que depende para operar correctamente.",
  },
  {
    id: 27,
    unidad: 5,
    texto:
      "¿Cuál es la diferencia entre 'systemctl start sshd' y 'systemctl enable sshd'?",
    opciones: [
      "'start' arranca el servicio en ese momento; 'enable' hace que se inicie automáticamente en cada arranque del sistema",
      "'start' lo activa de forma permanente; 'enable' solo lo prueba una vez",
      "Son equivalentes: 'enable' es únicamente un alias de 'start'",
      "'start' lo habilita en el arranque; 'enable' lo detiene de inmediato",
    ],
    correcta: 0,
    explicacion:
      "'start' inicia el servicio en la sesión actual, pero no sobrevive a un reinicio. 'enable' lo registra para que systemd lo arranque automáticamente en cada boot. Suelen combinarse para activarlo ahora y a futuro.",
  },
  {
    id: 28,
    unidad: 5,
    texto:
      "La línea de crontab '30 2 * * 0 /opt/backup.sh', ¿cuándo ejecuta el script?",
    opciones: [
      "Todos los días a las 02:30",
      "El día 30 de cada mes a las 2:00",
      "Cada domingo a las 02:30",
      "Cada 30 minutos durante los días 2 de cada mes",
    ],
    correcta: 2,
    explicacion:
      "Los campos de cron son: minuto(30) hora(2) día-del-mes(*) mes(*) día-de-semana(0). El 0 corresponde al domingo, por lo que se ejecuta cada domingo a las 02:30.",
  },
  {
    id: 29,
    unidad: 5,
    texto:
      "¿Qué caracteriza a un daemon frente a un programa interactivo común en GNU/Linux?",
    opciones: [
      "Solo existe mientras la sesión gráfica del usuario permanece abierta",
      "Se ejecuta en segundo plano, sin interacción directa del usuario, y suele iniciarse con el sistema",
      "Requiere que el usuario confirme manualmente cada operación",
      "Es un archivo de configuración interno del kernel",
    ],
    correcta: 1,
    explicacion:
      "Un daemon (sshd, httpd, cron) corre en segundo plano sin intervención del usuario, arranca automáticamente con el sistema y se mantiene en ejecución continua atendiendo solicitudes.",
  },
  {
    id: 30,
    unidad: 5,
    texto:
      "¿Qué hace 'sudo apt autoremove' y por qué resulta útil tras desinstalar programas?",
    opciones: [
      "Reinstala automáticamente los paquetes que se habían eliminado",
      "Solo actualiza la lista de repositorios disponibles",
      "Borra todos los paquetes instalados en el sistema",
      "Elimina las dependencias huérfanas que ya no usa ningún paquete, liberando espacio",
    ],
    correcta: 3,
    explicacion:
      "Al desinstalar software pueden quedar dependencias que ya no necesita ningún otro paquete. autoremove las detecta y elimina, evitando que el sistema acumule paquetes obsoletos.",
  },
  // ── UNIDAD 6: BSD ────────────────────────────────────────
  {
    id: 31,
    unidad: 6,
    texto:
      "¿Por qué el código fuente disponible es clave para que FreeBSD pueda portarse a nuevas arquitecturas y mantenerse seguro?",
    opciones: [
      "Hace que el sistema sea gratuito pero impide cualquier modificación",
      "Permite a la comunidad auditarlo, corregirlo y recompilarlo para distinto hardware",
      "Obliga a ejecutarlo únicamente en procesadores de 64 bits",
      "Sustituye por completo la necesidad de módulos de seguridad como PAM",
    ],
    correcta: 1,
    explicacion:
      "Tener el código fuente abierto permite recompilarlo para nuevas arquitecturas (portabilidad) y que la comunidad lo audite continuamente, detectando y corrigiendo fallos de seguridad de forma colaborativa.",
  },
  {
    id: 32,
    unidad: 6,
    texto:
      "Entre los módulos de seguridad de FreeBSD, ¿cuál se encarga específicamente del cifrado de los datos almacenados en disco?",
    opciones: [
      "PAM",
      "MAC",
      "sysrc",
      "GBDE",
    ],
    correcta: 3,
    explicacion:
      "GBDE proporciona el cifrado de dispositivos de almacenamiento. PAM se ocupa de la autenticación, MAC del control de acceso obligatorio, y sysrc ni siquiera es un módulo de seguridad (sirve para habilitar servicios).",
  },
  {
    id: 33,
    unidad: 6,
    texto:
      "FreeBSD puede ejecutar binarios de Linux, SCO, NetBSD y BSDI sin recompilarlos. ¿Qué característica lo hace posible?",
    opciones: [
      "El uso obligatorio del sistema de archivos ZFS",
      "El gestor de paquetes pkg",
      "Su compatibilidad binaria con esos sistemas",
      "Su framework de firewalls con NAT",
    ],
    correcta: 2,
    explicacion:
      "La compatibilidad binaria de FreeBSD permite ejecutar nativamente ejecutables de otros sistemas (Linux, SCO, NetBSD, BSDI) sin necesidad de recompilarlos desde el código fuente.",
  },
  {
    id: 34,
    unidad: 6,
    texto:
      "¿Por qué FreeBSD recomienda crear un usuario adicional con privilegios sudo y denegar el acceso SSH directo al usuario root?",
    opciones: [
      "Para reducir la superficie de ataque: root es un objetivo conocido y su acceso directo amplifica el daño de una intrusión",
      "Porque el usuario root no puede usar SSH en ningún sistema UNIX",
      "Porque root carece de los permisos necesarios para administrar el sistema",
      "Porque el gestor pkg exige iniciar sesión con un usuario distinto de root",
    ],
    correcta: 0,
    explicacion:
      "root es un nombre de cuenta universal y privilegiado, blanco habitual de ataques de fuerza bruta. Denegar su acceso SSH directo y operar con un usuario + sudo limita el daño potencial y deja rastro de quién escala privilegios.",
  },
  {
    id: 35,
    unidad: 6,
    texto:
      "Durante la instalación de FreeBSD se recomienda el particionado 'Auto (ZFS)'. ¿Cuál es el beneficio principal de ZFS?",
    opciones: [
      "Reduce todo el sistema de archivos a un único inodo",
      "Integridad de datos avanzada (detección y corrección de corrupción), además de funciones modernas de almacenamiento",
      "Elimina por completo la necesidad de realizar respaldos",
      "Convierte automáticamente a FreeBSD en compatible con NTFS",
    ],
    correcta: 1,
    explicacion:
      "ZFS es un sistema de archivos avanzado que verifica la integridad de los datos mediante sumas de comprobación y puede corregir corrupción, además de ofrecer snapshots y otras funciones modernas. No sustituye los respaldos.",
  },
  // ── UNIDAD 7: Sistemas Distribuidos ─────────────────────
  {
    id: 36,
    unidad: 7,
    texto:
      "¿Qué distingue al particionado de hardware de la virtualización por software?",
    opciones: [
      "El particionado de hardware necesita siempre un hypervisor de Tipo 2",
      "La virtualización solo puede ejecutarse en mainframes de IBM",
      "El particionado de hardware asigna recursos físicos dedicados y aislados; la virtualización los comparte mediante un hypervisor",
      "Ambos enfoques obligan a compartir el mismo kernel del host",
    ],
    correcta: 2,
    explicacion:
      "El particionado de hardware (p. ej. LPAR) divide físicamente el servidor en particiones con recursos dedicados y aislamiento total. La virtualización, en cambio, comparte el hardware entre varias VMs a través de un hypervisor.",
  },
  {
    id: 37,
    unidad: 7,
    texto:
      "La paravirtualización mejora el rendimiento frente a la virtualización completa, pero tiene un costo. ¿Cuál es ese costo?",
    opciones: [
      "Consume más memoria que ejecutar el sistema directamente sobre el hardware",
      "Requiere modificar el SO huésped para que use hypercalls, lo que excluye a los SO propietarios sin modificar",
      "No permite ejecutar más de una máquina virtual por host",
      "Obliga a que todas las VMs compartan un mismo kernel",
    ],
    correcta: 1,
    explicacion:
      "En la paravirtualización el huésped se modifica para llamar al hypervisor mediante hypercalls, evitando emular instrucciones privilegiadas. Eso eleva el rendimiento, pero impide usar SO que no puedan modificarse (muchos propietarios).",
  },
  {
    id: 38,
    unidad: 7,
    texto:
      "¿Cuál de las siguientes afirmaciones sobre contenedores frente a máquinas virtuales es correcta?",
    opciones: [
      "Los contenedores incluyen un SO completo, lo que los hace más pesados que las VMs",
      "Las máquinas virtuales comparten el kernel del host y por eso arrancan en segundos",
      "Contenedores y VMs proporcionan exactamente el mismo nivel de aislamiento",
      "Los contenedores comparten el kernel del host: por eso son más ligeros, aunque ofrecen menos aislamiento que una VM",
    ],
    correcta: 3,
    explicacion:
      "Los contenedores comparten el kernel del anfitrión, por lo que son ligeros y arrancan rápido, pero su aislamiento es menor que el de una VM, que incluye su propio SO completo y, por ello, separa más a fondo las cargas.",
  },
  {
    id: 39,
    unidad: 7,
    texto:
      "¿Qué característica de la computación en la nube permite que un usuario aprovisione recursos por sí mismo, sin intervención humana del proveedor?",
    opciones: [
      "El autoservicio bajo demanda",
      "El balanceo de carga entre nodos",
      "La paravirtualización del huésped",
      "La compatibilidad binaria entre sistemas",
    ],
    correcta: 0,
    explicacion:
      "El autoservicio bajo demanda es la característica que permite al usuario provisionar cómputo, almacenamiento o red automáticamente, sin que un operador del proveedor intervenga en cada solicitud.",
  },
  {
    id: 40,
    unidad: 7,
    texto:
      "Un sitio web recibe picos de tráfico y reparte las peticiones entre varios nodos para que ninguno se sature. ¿Qué función de clúster se está aplicando?",
    opciones: [
      "Alta disponibilidad por sí sola",
      "Cómputo de alto rendimiento (HPC)",
      "Balanceo de carga",
      "Consolidación de servidores",
    ],
    correcta: 2,
    explicacion:
      "Repartir equitativamente las peticiones entre nodos para maximizar el rendimiento y evitar cuellos de botella es, por definición, balanceo de carga. La alta disponibilidad y el HPC persiguen objetivos distintos (tolerancia a fallos y potencia de cálculo).",
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
