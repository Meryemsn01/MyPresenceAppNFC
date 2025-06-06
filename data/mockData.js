// data/mockData.js

export const mockFiliereStats = [
  {
    id: 'F1',
    name: 'Génie Informatique',
    module: 'Développement Mobile',
    present: 15,
    total: 20,
    absenceRate: '25%',
  },
  {
    id: 'F2',
    name: 'Génie Logiciel',
    module: 'Algorithmique Avancée',
    present: 18,
    total: 22,
    absenceRate: '18%',
  },
  {
    id: 'F3',
    name: 'Génie Réseaux',
    module: 'Sécurité des Réseaux',
    present: 12,
    total: 15,
    absenceRate: '20%',
  },
  {
    id: 'F4',
    name: 'Data Science',
    module: 'Apprentissage Automatique',
    present: 20,
    total: 25,
    absenceRate: '20%',
  },
];

export const mockSessions = [
  {
    id: 'S001',
    moduleName: 'Développement Mobile',
    date: '2025-06-05',
    time: '09:00 - 11:00',
    room: 'Salle B101',
    filiere: 'Génie Informatique',
  },
  {
    id: 'S002',
    moduleName: 'Algorithmique Avancée',
    date: '2025-06-05',
    time: '11:00 - 13:00',
    room: 'Salle B102',
    filiere: 'Génie Logiciel',
  },
  {
    id: 'S003',
    moduleName: 'Sécurité des Réseaux',
    date: '2025-06-05',
    time: '14:00 - 16:00',
    room: 'Salle B103',
    filiere: 'Génie Réseaux',
  },
  {
    id: 'S004',
    moduleName: 'Apprentissage Automatique',
    date: '2025-06-06',
    time: '09:00 - 11:00',
    room: 'Salle B101',
    filiere: 'Data Science',
  },
  {
    id: 'S005',
    moduleName: 'Développement Web Avancé',
    date: '2025-06-06',
    time: '13:00 - 15:00',
    room: 'Salle B104',
    filiere: 'Génie Informatique',
  },
];

// Modules enseignés par le professeur (simulé)
export const mockTeacherModules = [
  { label: 'Mes Modules', value: 'all' },
  { label: 'Développement Mobile', value: 'Développement Mobile', filiere: 'Génie Informatique' },
  { label: 'Algorithmique Avancée', value: 'Algorithmique Avancée', filiere: 'Génie Logiciel' },
  { label: 'Sécurité des Réseaux', value: 'Sécurité des Réseaux', filiere: 'Génie Réseaux' },
];

// Mettez à jour vos mockStudents pour qu'ils aient un champ 'module' qui correspond aux modules enseignés
// J'ai mis à jour les mockStudents pour inclure la filière et le module directement dans l'étudiant
// (cela simplifie le filtrage dans cette simulation)
export const mockStudents = [
  {
    id: 'ETU001',
    name: 'Ahmed Benali',
    matricule: 'M12345',
    filiere: 'Génie Informatique',
    module: 'Développement Mobile',
    photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 'ETU002',
    name: 'Fatima Zahraoui',
    matricule: 'M67890',
    filiere: 'Génie Logiciel',
    module: 'Algorithmique Avancée',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 'ETU003',
    name: 'Youssef El Amrani',
    matricule: 'M24680',
    filiere: 'Génie Informatique',
    module: 'Développement Mobile',
    photoUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 'ETU004',
    name: 'Sara Kadiri',
    matricule: 'M13579',
    filiere: 'Génie Réseaux',
    module: 'Sécurité des Réseaux',
    photoUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 'ETU005',
    name: 'Mehdi Sbai',
    matricule: 'M98765',
    filiere: 'Data Science', // Cet étudiant ne sera pas affiché par défaut car son module n'est pas "enseigné" par le prof simulé
    module: 'Apprentissage Automatique',
    photoUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 'ETU006',
    name: 'Amina Cherkaoui',
    matricule: 'M11223',
    filiere: 'Génie Logiciel',
    module: 'Algorithmique Avancée',
    photoUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: 'ETU007',
    name: 'Omar Bouzidi',
    matricule: 'M44556',
    filiere: 'Génie Informatique',
    module: 'Développement Mobile',
    photoUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: 'ETU008',
    name: 'Leila Mansouri',
    matricule: 'M77889',
    filiere: 'Génie Réseaux',
    module: 'Sécurité des Réseaux',
    photoUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
];
// data/mockData.js
// ... (vos mockFiliereStats, mockSessions, mockStudents existants) ...

export const mockFiliereOptions = [
  { label: 'Toutes les Filières', value: 'all' },
  { label: 'Génie Informatique', value: 'Génie Informatique' },
  { label: 'Génie Logiciel', value: 'Génie Logiciel' },
  { label: 'Génie Réseaux', value: 'Génie Réseaux' },
  { label: 'Data Science', value: 'Data Science' },
];

// Simule les modules par filière
export const mockModuleOptions = {
  'all': [{ label: 'Tous les Modules', value: 'all' }],
  'Génie Informatique': [
    { label: 'Tous les Modules', value: 'all' },
    { label: 'Développement Mobile', value: 'Développement Mobile' },
    { label: 'Développement Web Avancé', value: 'Développement Web Avancé' },
  ],
  'Génie Logiciel': [
    { label: 'Tous les Modules', value: 'all' },
    { label: 'Algorithmique Avancée', value: 'Algorithmique Avancée' },
    { label: 'Qualité Logicielle', value: 'Qualité Logicielle' },
  ],
  'Génie Réseaux': [
    { label: 'Tous les Modules', value: 'all' },
    { label: 'Sécurité des Réseaux', value: 'Sécurité des Réseaux' },
    { label: 'Administration Systèmes', value: 'Administration Systèmes' },
  ],
  'Data Science': [
    { label: 'Tous les Modules', value: 'all' },
    { label: 'Apprentissage Automatique', value: 'Apprentissage Automatique' },
    { label: 'Big Data Analytics', value: 'Big Data Analytics' },
  ],
  
};
// data/mockData.js
// ... (vos mockFiliereStats, mockSessions, mockStudents, mockTeacherModules existants) ...

export const mockSchedule = [
  {
    id: 'SCH001',
    moduleName: 'Développement Mobile',
    filiere: 'Génie Informatique',
    date: '2025-06-05', // Aujourd'hui
    timeStart: '09:00',
    timeEnd: '11:00',
    room: 'Salle B101',
    classType: 'Cours',
  },
  {
    id: 'SCH002',
    moduleName: 'Algorithmique Avancée',
    filiere: 'Génie Logiciel',
    date: '2025-06-05', // Aujourd'hui
    timeStart: '11:00',
    timeEnd: '13:00',
    room: 'Salle B102',
    classType: 'TD',
  },
  {
    id: 'SCH003',
    moduleName: 'Sécurité des Réseaux',
    filiere: 'Génie Réseaux',
    date: '2025-06-06', // Demain
    timeStart: '14:00',
    timeEnd: '16:00',
    room: 'Salle B103',
    classType: 'Cours',
  },
  {
    id: 'SCH004',
    moduleName: 'Apprentissage Automatique',
    filiere: 'Data Science',
    date: '2025-06-07', // Après-demain
    timeStart: '09:00',
    timeEnd: '11:00',
    room: 'Salle B101',
    classType: 'TP',
  },
];
// data/mockData.js
// ... (vos mockFiliereStats, mockSessions, mockStudents, mockTeacherModules, mockSchedule existants) ...

export const mockScannedStudents = [
  { id: 'ETU001', name: 'Ahmed Benali', matricule: 'M12345', status: 'Présent' },
  { id: 'ETU002', name: 'Fatima Zahraoui', matricule: 'M67890', status: 'Présent' },
  { id: 'ETU003', name: 'Youssef El Amrani', matricule: 'M24680', status: 'Présent' },
  { id: 'ETU007', name: 'Omar Bouzidi', matricule: 'M44556', status: 'Présent' },
];