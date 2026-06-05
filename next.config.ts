'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { useAppState } from '@/state/AppState';
import type { Locale, Region, Screen, Vehicle } from '@/types';

const logoPath = '/logo-technotest.jpg';

const copy = {
  he: {
    appName: 'Techno Test Garage',
    home: 'דף הבית',
    welcomeTitle: 'ברוכים הבאים לניהול הרכבים המשפחתי של Techno Test',
    welcomeText: 'נהלו עד 5 רכבים, הוצאות, טסטים, מסמכים, טיפולים ותקלות במקום אחד.',
    chooseRegion: 'באיזה מדינה אתה עושה שימוש באפליקציה?',
    usa: 'ארה״ב',
    israel: 'ישראל',
    other: 'אחר',
    chooseLanguage: 'באיזו שפה תרצה להשתמש?',
    hebrew: 'עברית',
    english: 'English',
    demo: 'דמו קצר',
    start: 'התחל עכשיו',
    demoTitle: 'דמו קצר',
    demoIntro: 'כך האפליקציה תעזור לך לשלוט בכל מה שקשור לרכב.',
    demo1: 'כאן תראה את כל הרכבים של המשפחה ואת סטטוס הטיפול בכל רכב.',
    demo2: 'כאן מנהלים מסמכים, ביטוחים, רישוי, חשבוניות ותאריכי תפוגה.',
    demo3: 'כאן עוקבים אחרי הוצאות, דלק, טיפולים ותיקונים.',
    demo4: 'בישראל בלבד ניתן לנהל תורים לטסט ולשירותים עתידיים.',
    finishDemo: 'סיים דמו והקם משתמש חדש',
    dashboard: 'בית',
    vehicles: 'הרכבים שלי',
    ledger: 'הוצאות',
    docs: 'מסמכים',
    appointments: 'תורים',
    profile: 'הפרופיל שלי',
    settings: 'הגדרות',
    activeVehicles: 'רכבים פעילים',
    upcomingAppointments: 'תורים קרובים',
    documents: 'מסמכים',
    spend: 'הוצאות החודש',
    addVehicle: 'הוסף רכב',
    noVehiclesTitle: 'עוד לא הוספת רכבים',
    noVehiclesText: 'התחל בהוספת הרכב הראשון שלך. לאחר מכן תוכל להוסיף הוצאות, מסמכים ותזכורות.',
    vehicleName: 'שם הרכב',
    make: 'יצרן',
    model: 'דגם',
    year: 'שנה',
    plate: 'מספר רישוי',
    odometer: 'קילומטראז׳',
    nextTest: 'תאריך טסט הבא',
    insurance: 'תוקף ביטוח',
    saveVehicle: 'שמור רכב',
    lookupVehicle: 'איתור רכב לפי מספר רישוי',
    lookupHint: 'בישראל, לאחר הזנת מספר רכב, האפליקציה תנסה למלא לבד את פרטי הרכב ממאגר ממשלתי פתוח.',
    lookupLoading: 'מחפש נתוני רכב...',
    lookupFound: 'נמצאו נתוני רכב ומולאו השדות.',
    lookupNotFound: 'לא נמצאו נתונים. אפשר להשלים ידנית.',
    lookupError: 'לא הצלחנו להתחבר למאגר כרגע. אפשר להשלים ידנית.',
    governmentData: 'מידע שהתקבל ממאגר ממשלתי',
    allGovernmentData: 'כל הנתונים שהתקבלו מהמאגר',
    autoFilledFromPlate: 'הפרטים מולאו לפי מספר הרכב. ניתן לערוך ידנית במקרה הצורך.',
    commercialName: 'כינוי מסחרי',
    color: 'צבע',
    fuel: 'סוג דלק',
    ownership: 'בעלות',
    chassis: 'מספר שלדה',
    lastTestDate: 'תאריך טסט אחרון',
    licenseValidUntil: 'תוקף רישוי',
    frontTire: 'צמיג קדמי',
    rearTire: 'צמיג אחורי',
    pollutionGroup: 'קבוצת זיהום',
    safetyLevel: 'רמת אבזור בטיחותי',
    ok: 'הכול תקין',
    soon: 'לטפל בקרוב',
    urgent: 'דחוף',
    quickActions: 'פעולות מהירות',
    uploadDocument: 'הוסף מסמך',
    addExpense: 'הוסף הוצאה',
    addService: 'הוסף טיפול',
    totalSpend: 'סה״כ הוצאות',
    emptyLedger: 'אין עדיין הוצאות.',
    emptyDocs: 'אין עדיין מסמכים.',
    israelOnly: 'מסך התורים זמין למשתמשים בישראל בלבד.',
    bookTest: 'הזמן תור לטסט',
    bookInspection: 'הזמן בדיקה לפני קנייה',
    bookService: 'הזמן שירות בסניף',
    profileSubtitle: 'פרטים אישיים, רכבים, תורים ומסמכים',
    name: 'שם פרטי',
    familyName: 'שם משפחה',
    phone: 'טלפון',
    email: 'כתובת מייל',
    emailOptional: 'כתובת מייל, לא חובה',
    next: 'הבא',
    demoLocked: 'זהו דמו מודרך. במסך הדמו רק כפתור הבא פעיל.',
    demoHomeTitle: 'מסך הבית',
    demoVehiclesTitle: 'ניהול הרכבים שלי',
    demoVehicleTitle: 'כרטיס רכב מפורט',
    demoDocsTitle: 'מסמכים והוצאות',
    demoAppointmentsTitle: 'תורים בישראל',
    demoHomeText: 'כאן תראה תמונת מצב משפחתית, כמה רכבים פעילים, כמה מסמכים קיימים ומה דורש תשומת לב.',
    demoVehiclesText: 'כאן מנהלים עד 5 רכבים, רואים סטטוס לכל רכב ונכנסים לכרטיס הרכב.',
    demoVehicleText: 'בכרטיס הרכב תראה קילומטראז׳, תאריכי טסט וביטוח, ותוכל בעתיד להוסיף טיפול, תדלוק או תקלה.',
    demoDocsText: 'כאן מרכזים מסמכים, ביטוחים, רישוי, חשבוניות והוצאות שוטפות.',
    demoAppointmentsText: 'בישראל בלבד ניתן לנהל תורים לטסט ולשירותים עתידיים. בארה״ב המסך מוצג בדמו כהסבר בלבד.',
    save: 'שמור',
    reset: 'איפוס אפליקציה',
    region: 'מיקום פעילות',
    language: 'שפה',
    usaNote: 'בחירת ארה״ב אינה מחייבת אנגלית. השפה נבחרת בנפרד.',
    back: 'חזור',
    menu: 'תפריט',
  },
  en: {
    appName: 'Techno Test Garage',
    home: 'Home',
    welcomeTitle: 'Welcome to Techno Test Family Garage',
    welcomeText: 'Manage up to 5 vehicles, expenses, inspections, documents, service records, and issues in one place.',
    chooseRegion: 'Where will you use the app?',
    usa: 'USA',
    israel: 'Israel',
    other: 'Other',
    chooseLanguage: 'Which language do you prefer?',
    hebrew: 'עברית',
    english: 'English',
    demo: 'Short demo',
    start: 'Start now',
    demoTitle: 'Short demo',
    demoIntro: 'A quick walkthrough of how the app helps you manage your vehicles.',
    demo1: 'Here you see all family vehicles and each vehicle status.',
    demo2: 'Here you manage documents, insurance, registration, invoices, and expiry dates.',
    demo3: 'Here you track expenses, fuel, service, and repairs.',
    demo4: 'Appointments are available only for Israel users.',
    finishDemo: 'Finish demo and create my garage',
    dashboard: 'Home',
    vehicles: 'My vehicles',
    ledger: 'Expenses',
    docs: 'Documents',
    appointments: 'Appointments',
    profile: 'My profile',
    settings: 'Settings',
    activeVehicles: 'Active vehicles',
    upcomingAppointments: 'Upcoming appointments',
    documents: 'Documents',
    spend: 'Monthly spend',
    addVehicle: 'Add vehicle',
    noVehiclesTitle: 'No vehicles yet',
    noVehiclesText: 'Start by adding your first vehicle. Then you can add expenses, documents, and reminders.',
    vehicleName: 'Vehicle name',
    make: 'Make',
    model: 'Model',
    year: 'Year',
    plate: 'Plate',
    odometer: 'Odometer',
    nextTest: 'Next inspection date',
    insurance: 'Insurance expiry',
    saveVehicle: 'Save vehicle',
    lookupVehicle: 'Look up vehicle by plate',
    lookupHint: 'In Israel, after entering a plate number, the app will try to auto-fill vehicle details from an open government database.',
    lookupLoading: 'Looking up vehicle data...',
    lookupFound: 'Vehicle data found and fields were filled.',
    lookupNotFound: 'No data found. You can fill the details manually.',
    lookupError: 'Could not connect to the database right now. You can fill the details manually.',
    governmentData: 'Information received from government database',
    allGovernmentData: 'All data received from the database',
    autoFilledFromPlate: 'Details were filled by plate number. You can edit manually if needed.',
    commercialName: 'Commercial name',
    color: 'Color',
    fuel: 'Fuel type',
    ownership: 'Ownership',
    chassis: 'Chassis number',
    lastTestDate: 'Last test date',
    licenseValidUntil: 'License valid until',
    frontTire: 'Front tire',
    rearTire: 'Rear tire',
    pollutionGroup: 'Pollution group',
    safetyLevel: 'Safety level',
    ok: 'All good',
    soon: 'Due soon',
    urgent: 'Urgent',
    quickActions: 'Quick actions',
    uploadDocument: 'Add document',
    addExpense: 'Add expense',
    addService: 'Add service',
    totalSpend: 'Total spend',
    emptyLedger: 'No expenses yet.',
    emptyDocs: 'No documents yet.',
    israelOnly: 'Appointments are available only for users in Israel.',
    bookTest: 'Book annual test',
    bookInspection: 'Book pre-purchase inspection',
    bookService: 'Book branch service',
    profileSubtitle: 'Personal details, vehicles, appointments, and documents',
    name: 'First name',
    familyName: 'Family name',
    phone: 'Phone',
    email: 'Email address',
    emailOptional: 'Email address, optional',
    next: 'Next',
    demoLocked: 'This is a guided demo. During the demo, only the Next button is active.',
    demoHomeTitle: 'Home dashboard',
    demoVehiclesTitle: 'My vehicles',
    demoVehicleTitle: 'Vehicle profile',
    demoDocsTitle: 'Documents and expenses',
    demoAppointmentsTitle: 'Israel appointments',
    demoHomeText: 'This dashboard gives you a family overview, active vehicles, documents, monthly spend, and upcoming items.',
    demoVehiclesText: 'This is where a family manages up to 5 vehicles and sees the status of each one.',
    demoVehicleText: 'The vehicle profile shows mileage, inspection dates, insurance dates, and future service actions.',
    demoDocsText: 'This is where documents, insurance, registration, invoices, and expenses are organized.',
    demoAppointmentsText: 'Only in Israel can users manage test appointments and future services. In the USA demo, this screen is shown for explanation only.',
    save: 'Save',
    reset: 'Reset app',
    region: 'Operating location',
    language: 'Language',
    usaNote: 'Choosing USA does not force English. Language is separate.',
    back: 'Back',
    menu: 'Menu',
  },
} as const;


const carMakes = [
  'Acura', 'Alfa Romeo', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Fiat', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 'Mini', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo', 'Other'
];

function cx(...items: Array<string | false | null | undefined>) {
  return items.filter(Boolean).join(' ');
}

function isRtl(locale: Locale) {
  return locale === 'he';
}

function statusLabel(status: Vehicle['status'], t: Record<string, string>) {
  if (status === 'urgent') return t.urgent;
  if (status === 'soon') return t.soon;
  return t.ok;
}

function Shell({ children }: { children: ReactNode }) {
  const { state, navigate } = useAppState();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[state.data.profile.locale];
  const navItems: Array<{ screen: Screen; label: string; icon: string; israelOnly?: boolean }> = [
    { screen: 'dashboard', label: t.dashboard, icon: '⌂' },
    { screen: 'vehicles', label: t.vehicles, icon: '🚗' },
    { screen: 'ledger', label: t.ledger, icon: '💳' },
    { screen: 'documents', label: t.docs, icon: '📄' },
    { screen: 'appointments', label: t.appointments, icon: '📅', israelOnly: true },
    { screen: 'profile', label: t.profile, icon: '👤' },
    { screen: 'settings', label: t.settings, icon: '⚙️' },
  ];
  const nav = navItems.filter((item) => !item.israelOnly || state.data.profile.region === 'israel');
  const bottomNav = nav.filter((item) => item.screen !== 'settings');
  const goTo = (screen: Screen) => {
    navigate(screen);
    setMenuOpen(false);
  };

  return (
    <div className={cx('app-root', isRtl(state.data.profile.locale) && 'rtl')} dir={isRtl(state.data.profile.locale) ? 'rtl' : 'ltr'}>
      <main className="phone-frame">
        <header className="topbar">
          <button className="round-btn menu-trigger" onClick={() => setMenuOpen(true)} aria-label={t.menu}>☰</button>
          <button className="logo-button" onClick={() => goTo('dashboard')} aria-label={t.home}>
            <img src={logoPath} alt="Techno Test" />
          </button>
          <button className="round-btn" onClick={() => goTo('profile')} aria-label={t.profile}>🔔</button>
        </header>
        {children}
        <nav className="bottom-nav">
          {bottomNav.map((item) => (
            <button key={item.screen} className={cx('nav-item', state.screen === item.screen && 'active')} onClick={() => goTo(item.screen)}>
              <span>{item.icon}</span>
              <small>{item.label}</small>
            </button>
          ))}
        </nav>
        {menuOpen && (
          <div className="menu-overlay" role="dialog" aria-modal="true" aria-label={t.menu}>
            <button className="menu-backdrop" aria-label={t.back} onClick={() => setMenuOpen(false)} />
            <aside className="menu-panel">
              <div className="menu-head">
                <img src={logoPath} alt="Techno Test" />
                <button className="round-btn" onClick={() => setMenuOpen(false)} aria-label={t.back}>×</button>
              </div>
              <strong className="menu-title">{t.menu}</strong>
              <div className="menu-list">
                {nav.map((item) => (
                  <button key={item.screen} className={cx('menu-row', state.screen === item.screen && 'active')} onClick={() => goTo(item.screen)}>
                    <span>{item.icon}</span>
                    <b>{item.label}</b>
                  </button>
                ))}
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

function WelcomeScreen() {
  const { state, setRegion, setLocale, startDemo, startEmpty } = useAppState();
  const t = copy[state.data.profile.locale];
  const regionOptions: Array<{ value: Region; label: string }> = [
    { value: 'usa', label: t.usa },
    { value: 'israel', label: t.israel },
    { value: 'other', label: t.other },
  ];

  return (
    <div className={cx('app-root auth-root', isRtl(state.data.profile.locale) && 'rtl')} dir={isRtl(state.data.profile.locale) ? 'rtl' : 'ltr'}>
      <section className="welcome-card">
        <img className="welcome-logo" src={logoPath} alt="Techno Test" />
        <h1>{t.welcomeTitle}</h1>
        <p>{t.welcomeText}</p>
        <div className="question-block">
          <h2>{t.chooseRegion}</h2>
          <div className="option-grid three">
            {regionOptions.map((option) => (
              <button key={option.value} className={cx('option-card', state.data.profile.region === option.value && 'selected')} onClick={() => setRegion(option.value)}>
                {option.label}
              </button>
            ))}
          </div>
          <p className="microcopy">{t.usaNote}</p>
        </div>
        <div className="question-block">
          <h2>{t.chooseLanguage}</h2>
          <div className="option-grid two">
            <button className={cx('option-card', state.data.profile.locale === 'he' && 'selected')} onClick={() => setLocale('he')}>{t.hebrew}</button>
            <button className={cx('option-card', state.data.profile.locale === 'en' && 'selected')} onClick={() => setLocale('en')}>{t.english}</button>
          </div>
        </div>
        <div className="cta-row">
          <button className="secondary-btn" onClick={startDemo}>{t.demo}</button>
          <button className="primary-btn" onClick={startEmpty}>{t.start}</button>
        </div>
      </section>
    </div>
  );
}


function DemoSnapshot({ step }: { step: number }) {
  if (step === 0) return <DashboardContent />;
  if (step === 1) return <VehiclesDemoSnapshot />;
  if (step === 2) return <VehicleDetailDemoSnapshot />;
  if (step === 3) return <DocsAndLedgerDemoSnapshot />;
  return <AppointmentsDemoSnapshot />;
}

function DemoPhoneShell({ children }: { children: ReactNode }) {
  const { state } = useAppState();
  const t = copy[state.data.profile.locale];
  const navItems = [
    { label: t.dashboard, icon: '⌂' },
    { label: t.vehicles, icon: '🚗' },
    { label: t.ledger, icon: '💳' },
    { label: t.docs, icon: '📄' },
    { label: t.appointments, icon: '📅' },
  ];
  return (
    <div className={cx('app-root', isRtl(state.data.profile.locale) && 'rtl')} dir={isRtl(state.data.profile.locale) ? 'rtl' : 'ltr'}>
      <main className="phone-frame demo-phone">
        <header className="topbar demo-frozen">
          <button className="round-btn" aria-label={t.menu}>☰</button>
          <span className="logo-button" aria-label="Techno Test"><img src={logoPath} alt="Techno Test" /></span>
          <button className="round-btn" aria-label={t.profile}>🔔</button>
        </header>
        <div className="demo-freeze">{children}</div>
        <nav className="bottom-nav demo-frozen">
          {navItems.map((item) => (
            <button key={item.label} className="nav-item" tabIndex={-1} aria-disabled="true"><span>{item.icon}</span><small>{item.label}</small></button>
          ))}
        </nav>
      </main>
    </div>
  );
}

function VehiclesDemoSnapshot() {
  const { state } = useAppState();
  const t = copy[state.data.profile.locale];
  return (
    <div className="content-page">
      <div className="page-head"><h1>{t.vehicles}</h1><button className="text-btn">+ {t.addVehicle}</button></div>
      <div className="vehicle-list">
        {state.data.vehicles.map((vehicle) => (
          <div key={vehicle.id} className={cx('vehicle-card card', vehicle.status)}>
            <div className="vehicle-icon">🚗</div>
            <div><span className={cx('pill', vehicle.status)}>{statusLabel(vehicle.status, t)}</span><h2>{vehicle.nickname}</h2><p>{vehicle.plate} · {vehicle.year} · {Number(vehicle.odometer || 0).toLocaleString()} {state.data.profile.region === 'usa' ? 'mi' : 'ק״מ'}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VehicleDetailDemoSnapshot() {
  const { state } = useAppState();
  const t = copy[state.data.profile.locale];
  const vehicle = state.data.vehicles[0];
  return (
    <div className="content-page">
      <button className="text-btn">‹ {t.back}</button>
      <section className="card vehicle-detail"><div className="big-icon">🚗</div><span className={cx('pill', vehicle.status)}>{statusLabel(vehicle.status, t)}</span><h1>{vehicle.nickname}</h1><p>{vehicle.make} {vehicle.model} · {vehicle.year}</p><p>{vehicle.plate} · {Number(vehicle.odometer || 0).toLocaleString()} {state.data.profile.region === 'usa' ? 'mi' : 'ק״מ'}</p></section>
      <section className="quick-card card"><h2>{t.quickActions}</h2><div className="quick-grid"><button>📄<span>{t.uploadDocument}</span></button><button>💳<span>{t.addExpense}</span></button><button>🛠️<span>{t.addService}</span></button></div></section>
    </div>
  );
}

function DocsAndLedgerDemoSnapshot() {
  const { state } = useAppState();
  const t = copy[state.data.profile.locale];
  const total = state.data.ledger.reduce((sum, item) => sum + item.amount, 0);
  return (
    <div className="content-page">
      <div className="page-head"><h1>{t.docs}</h1><button className="text-btn">+ {t.uploadDocument}</button></div>
      {state.data.documents.slice(0, 2).map((doc) => <div className="list-row card" key={doc.id}><div><strong>{doc.title}</strong><p>{doc.expiresAt ? `${t.insurance}: ${doc.expiresAt}` : ''}</p></div><span>📄</span></div>)}
      <div className="page-head demo-subhead"><h1>{t.ledger}</h1><span className="pill ok">${total.toLocaleString()}</span></div>
      {state.data.ledger.slice(0, 2).map((item) => <div className="list-row card" key={item.id}><div><strong>{item.title}</strong><p>{item.date}</p></div><strong>${item.amount.toLocaleString()}</strong></div>)}
    </div>
  );
}

function AppointmentsDemoSnapshot() {
  const { state } = useAppState();
  const t = copy[state.data.profile.locale];
  return (
    <div className="content-page">
      <h1>{t.appointments}</h1>
      <section className="empty-state card demo-note-card"><p>{t.demoAppointmentsText}</p></section>
      <section className="quick-card card"><div className="quick-grid vertical"><button>📅<span>{t.bookTest}</span></button><button>🔎<span>{t.bookInspection}</span></button><button>🏢<span>{t.bookService}</span></button></div></section>
    </div>
  );
}

function DemoScreen() {
  const { state, startEmpty } = useAppState();
  const [step, setStep] = useState(0);
  const t = copy[state.data.profile.locale];
  const steps = [
    { title: t.demoHomeTitle, text: t.demoHomeText },
    { title: t.demoVehiclesTitle, text: t.demoVehiclesText },
    { title: t.demoVehicleTitle, text: t.demoVehicleText },
    { title: t.demoDocsTitle, text: t.demoDocsText },
    { title: t.demoAppointmentsTitle, text: t.demoAppointmentsText },
  ];
  const current = steps[step];
  const isLast = step === steps.length - 1;

  return (
    <DemoPhoneShell>
      <DemoSnapshot step={step} />
      <div className="demo-guide" role="dialog" aria-live="polite">
        <div><strong>{current.title}</strong><p>{current.text}</p><small>{t.demoLocked}</small></div>
        <button className="primary-btn demo-next-button" onClick={() => (isLast ? startEmpty() : setStep(step + 1))}>{isLast ? t.finishDemo : t.next}</button>
      </div>
    </DemoPhoneShell>
  );
}

function DashboardContent() {
  const { state, navigate } = useAppState();
  const t = copy[state.data.profile.locale];
  const totalSpend = state.data.ledger.reduce((sum, item) => sum + item.amount, 0);
  return (
    <>
      <section className="profile-summary card">
        <div className="avatar">{state.data.profile.name ? state.data.profile.name.charAt(0) : 'T'}</div>
        <h1>{state.data.profile.name || (state.data.profile.locale === 'he' ? 'הפרופיל שלי' : 'My profile')}</h1>
        <p>{state.data.profile.region === 'israel' ? t.israel : t.usa}</p>
      </section>
      <section className="stats-card card">
        <div><strong>{state.data.vehicles.length}</strong><span>{t.activeVehicles}</span></div>
        <div><strong>{state.data.profile.region === 'israel' ? 2 : 0}</strong><span>{t.upcomingAppointments}</span></div>
        <div><strong>{state.data.documents.length}</strong><span>{t.documents}</span></div>
        <div><strong>${totalSpend.toLocaleString()}</strong><span>{t.spend}</span></div>
      </section>
      <section className="quick-card card">
        <h2>{t.quickActions}</h2>
        <div className="quick-grid">
          <button onClick={() => navigate('addVehicle')}>🚗<span>{t.addVehicle}</span></button>
          <button onClick={() => navigate('documents')}>📄<span>{t.uploadDocument}</span></button>
          <button onClick={() => navigate('ledger')}>💳<span>{t.addExpense}</span></button>
          {state.data.profile.region === 'israel' && <button onClick={() => navigate('appointments')}>📅<span>{t.appointments}</span></button>}
        </div>
      </section>
    </>
  );
}

function DashboardScreen() {
  return <Shell><div className="content-page"><DashboardContent /></div></Shell>;
}

function VehiclesScreen() {
  const { state, navigate, selectVehicle } = useAppState();
  const t = copy[state.data.profile.locale];
  return (
    <Shell>
      <div className="content-page">
        <div className="page-head"><h1>{t.vehicles}</h1><button className="text-btn" onClick={() => navigate('addVehicle')}>+ {t.addVehicle}</button></div>
        {state.data.vehicles.length === 0 ? (
          <section className="empty-state card"><h2>{t.noVehiclesTitle}</h2><p>{t.noVehiclesText}</p><button className="primary-btn" onClick={() => navigate('addVehicle')}>{t.addVehicle}</button></section>
        ) : (
          <div className="vehicle-list">
            {state.data.vehicles.map((vehicle) => (
              <button key={vehicle.id} className={cx('vehicle-card card', vehicle.status)} onClick={() => selectVehicle(vehicle.id)}>
                <div className="vehicle-icon">🚗</div>
                <div><span className={cx('pill', vehicle.status)}>{statusLabel(vehicle.status, t)}</span><h2>{vehicle.nickname}</h2><p>{vehicle.plate} · {vehicle.year} · {Number(vehicle.odometer || 0).toLocaleString()} {state.data.profile.region === 'usa' ? 'mi' : 'ק״מ'}</p></div>
              </button>
            ))}
          </div>
        )}
      </div>
    </Shell>
  );
}


type LookupVehicle = {
  plate?: string | number;
  manufacturer?: string;
  model?: string;
  commercialName?: string;
  year?: string | number;
  color?: string;
  fuel?: string;
  lastTestDate?: string;
  licenseValidUntil?: string;
  ownership?: string;
  chassis?: string;
  frontTire?: string;
  rearTire?: string;
  pollutionGroup?: string | number;
  safetyLevel?: string | number;
  raw?: Record<string, unknown>;
  allFields?: Record<string, unknown>;
};

function normalizePlate(value: string) {
  return value.replace(/\D/g, '');
}

const govFieldLabels: Record<Locale, Record<string, string>> = {
  he: {
    mispar_rechev: 'מספר רכב',
    tozeret_nm: 'יצרן',
    degem_nm: 'דגם',
    kinuy_mishari: 'כינוי מסחרי',
    shnat_yitzur: 'שנת ייצור',
    tzeva_rechev: 'צבע',
    sug_delek_nm: 'סוג דלק',
    baalut: 'בעלות',
    misgeret: 'מספר שלדה',
    mivchan_acharon_dt: 'תאריך טסט אחרון',
    tokef_dt: 'תוקף רישוי',
    zmig_kidmi: 'צמיג קדמי',
    zmig_ahori: 'צמיג אחורי',
    kvutzat_zihum: 'קבוצת זיהום',
    ramat_eivzur_betihuty: 'רמת אבזור בטיחותי',
  },
  en: {
    mispar_rechev: 'Plate number',
    tozeret_nm: 'Make',
    degem_nm: 'Model',
    kinuy_mishari: 'Commercial name',
    shnat_yitzur: 'Year',
    tzeva_rechev: 'Color',
    sug_delek_nm: 'Fuel type',
    baalut: 'Ownership',
    misgeret: 'Chassis number',
    mivchan_acharon_dt: 'Last test date',
    tokef_dt: 'License valid until',
    zmig_kidmi: 'Front tire',
    zmig_ahori: 'Rear tire',
    kvutzat_zihum: 'Pollution group',
    ramat_eivzur_betihuty: 'Safety level',
  },
};

function isDisplayValue(value: unknown) {
  return value !== undefined && value !== null && String(value).trim() !== '';
}

function GovernmentDataPanel({ data }: { data?: LookupVehicle | null }) {
  const { state } = useAppState();
  const t = copy[state.data.profile.locale];
  if (!data) return null;

  const primaryRows = [
    [t.plate, data.plate],
    [t.make, data.manufacturer],
    [t.model, data.model],
    [t.commercialName, data.commercialName],
    [t.year, data.year],
    [t.color, data.color],
    [t.fuel, data.fuel],
    [t.lastTestDate, data.lastTestDate],
    [t.licenseValidUntil, data.licenseValidUntil],
    [t.ownership, data.ownership],
    [t.chassis, data.chassis],
    [t.frontTire, data.frontTire],
    [t.rearTire, data.rearTire],
    [t.pollutionGroup, data.pollutionGroup],
    [t.safetyLevel, data.safetyLevel],
  ].filter(([, value]) => isDisplayValue(value)) as Array<[string, unknown]>;

  const raw = data.allFields ?? data.raw ?? {};
  const usedLabels = new Set(primaryRows.map(([label]) => label));
  const rawRows = Object.entries(raw)
    .filter(([, value]) => isDisplayValue(value))
    .map(([key, value]) => [govFieldLabels[state.data.profile.locale][key] ?? key, value] as [string, unknown])
    .filter(([label]) => !usedLabels.has(label));

  return (
    <section className="gov-data-card card">
      <h2>{t.governmentData}</h2>
      <p className="microcopy">{t.autoFilledFromPlate}</p>
      <div className="gov-data-grid">
        {primaryRows.map(([label, value]) => (
          <div key={`primary-${label}`}>
            <span>{label}</span>
            <strong>{String(value)}</strong>
          </div>
        ))}
      </div>
      {rawRows.length > 0 && (
        <details className="gov-raw-details">
          <summary>{t.allGovernmentData}</summary>
          <div className="gov-data-grid gov-data-grid-raw">
            {rawRows.map(([label, value], index) => (
              <div key={`raw-${label}-${index}`}>
                <span>{label}</span>
                <strong>{String(value)}</strong>
              </div>
            ))}
          </div>
        </details>
      )}
    </section>
  );
}

function AddVehicleScreen() {
  const { state, addVehicle } = useAppState();
  const t = copy[state.data.profile.locale];
  const isIsrael = state.data.profile.region === 'israel';
  const [form, setForm] = useState({
    nickname: '',
    make: '',
    model: '',
    year: '',
    plate: '',
    odometer: '',
    nextTestDate: '',
    insuranceDate: '',
    commercialName: '',
    color: '',
    fuel: '',
    ownership: '',
    chassis: '',
    lastTestDate: '',
    licenseValidUntil: '',
    governmentData: undefined as Record<string, unknown> | undefined,
  });
  const [lookupState, setLookupState] = useState<'idle' | 'loading' | 'found' | 'notFound' | 'error'>('idle');
  const [lookupData, setLookupData] = useState<LookupVehicle | null>(null);
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));

  useEffect(() => {
    if (!isIsrael) return;
    const cleanPlate = normalizePlate(form.plate);
    if (cleanPlate.length < 5 || cleanPlate.length > 8) {
      setLookupState('idle');
      setLookupData(null);
      return;
    }

    let cancelled = false;
    const timer = window.setTimeout(async () => {
      setLookupState('loading');
      try {
        const response = await fetch(`/api/vehicle?plate=${encodeURIComponent(cleanPlate)}`);
        const data = await response.json();
        if (cancelled) return;
        if (!response.ok || !data?.found || !data?.vehicle) {
          setLookupState('notFound');
          setLookupData(null);
          return;
        }
        const vehicle = data.vehicle as LookupVehicle;
        setLookupData(vehicle);
        setLookupState('found');
        setForm((current) => ({
          ...current,
          plate: String(vehicle.plate ?? cleanPlate),
          make: String(vehicle.manufacturer ?? current.make),
          model: String(vehicle.model ?? current.model),
          year: String(vehicle.year ?? current.year),
          nickname: current.nickname || String(vehicle.commercialName || vehicle.model || vehicle.manufacturer || ''),
          commercialName: String(vehicle.commercialName ?? ''),
          color: String(vehicle.color ?? ''),
          fuel: String(vehicle.fuel ?? ''),
          ownership: String(vehicle.ownership ?? ''),
          chassis: String(vehicle.chassis ?? ''),
          lastTestDate: String(vehicle.lastTestDate ?? ''),
          licenseValidUntil: String(vehicle.licenseValidUntil ?? ''),
          nextTestDate: current.nextTestDate || String(vehicle.licenseValidUntil ?? ''),
          governmentData: vehicle.allFields ?? vehicle.raw,
        }));
      } catch {
        if (!cancelled) setLookupState('error');
      }
    }, 650);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [form.plate, isIsrael]);

  const lookupMessage = lookupState === 'loading' ? t.lookupLoading : lookupState === 'found' ? t.lookupFound : lookupState === 'notFound' ? t.lookupNotFound : lookupState === 'error' ? t.lookupError : '';

  return (
    <Shell>
      <div className="content-page">
        <section className="card form-card">
          <h1>{t.addVehicle}</h1>
          {isIsrael && <p className="microcopy">{t.lookupHint}</p>}
          <label>{t.plate}<input value={form.plate} onChange={(e) => update('plate', e.target.value)} inputMode="numeric" placeholder={isIsrael ? '12345678' : 'ABC123'} /></label>
          {lookupMessage && <p className={cx('lookup-message', lookupState)}>{lookupMessage}</p>}
          <label>{t.vehicleName}<input value={form.nickname} onChange={(e) => update('nickname', e.target.value)} placeholder={state.data.profile.locale === 'he' ? 'הרכב שלי' : 'My vehicle'} /></label>
          <div className="form-grid">
            <label>{t.make}{isIsrael ? <input value={form.make} onChange={(e) => update('make', e.target.value)} placeholder={state.data.profile.locale === 'he' ? 'יושלם לפי מספר רכב' : 'Auto-filled by plate'} /> : <select value={form.make} onChange={(e) => update('make', e.target.value)}><option value="">{state.data.profile.locale === 'he' ? 'בחר יצרן' : 'Choose make'}</option>{carMakes.map((make) => <option key={make} value={make}>{make}</option>)}</select>}</label>
            <label>{t.model}<input value={form.model} onChange={(e) => update('model', e.target.value)} /></label>
          </div>
          <div className="form-grid"><label>{t.year}<input value={form.year} onChange={(e) => update('year', e.target.value)} /></label><label>{t.odometer}<input value={form.odometer} onChange={(e) => update('odometer', e.target.value)} /></label></div>
          <div className="form-grid"><label>{t.nextTest}<input type="date" value={form.nextTestDate} onChange={(e) => update('nextTestDate', e.target.value)} /></label><label>{t.insurance}<input type="date" value={form.insuranceDate} onChange={(e) => update('insuranceDate', e.target.value)} /></label></div>
          {isIsrael && <GovernmentDataPanel data={lookupData} />}
          <button className="primary-btn" onClick={() => addVehicle(form)} disabled={!form.nickname || state.data.vehicles.length >= 5}>{t.saveVehicle}</button>
        </section>
      </div>
    </Shell>
  );
}

function VehicleDetailScreen() {
  const { state, navigate } = useAppState();
  const t = copy[state.data.profile.locale];
  const vehicle = state.data.vehicles.find((item) => item.id === state.selectedVehicleId) ?? state.data.vehicles[0];
  if (!vehicle) return <VehiclesScreen />;
  return (
    <Shell>
      <div className="content-page">
        <button className="text-btn" onClick={() => navigate('vehicles')}>‹ {t.back}</button>
        <section className="card vehicle-detail"><div className="big-icon">🚗</div><span className={cx('pill', vehicle.status)}>{statusLabel(vehicle.status, t)}</span><h1>{vehicle.nickname}</h1><p>{vehicle.make} {vehicle.model} · {vehicle.year}</p><p>{vehicle.plate} · {Number(vehicle.odometer || 0).toLocaleString()} {state.data.profile.region === 'usa' ? 'mi' : 'ק״מ'}</p></section>
        {state.data.profile.region === 'israel' && <GovernmentDataPanel data={{ plate: vehicle.plate, manufacturer: vehicle.make, model: vehicle.model, commercialName: vehicle.commercialName, year: vehicle.year, color: vehicle.color, fuel: vehicle.fuel, ownership: vehicle.ownership, chassis: vehicle.chassis, lastTestDate: vehicle.lastTestDate, licenseValidUntil: vehicle.licenseValidUntil, raw: vehicle.governmentData, allFields: vehicle.governmentData }} />}
        <section className="quick-card card"><h2>{t.quickActions}</h2><div className="quick-grid"><button onClick={() => navigate('documents')}>📄<span>{t.uploadDocument}</span></button><button onClick={() => navigate('ledger')}>💳<span>{t.addExpense}</span></button><button onClick={() => navigate('ledger')}>🛠️<span>{t.addService}</span></button></div></section>
      </div>
    </Shell>
  );
}

function LedgerScreen() {
  const { state } = useAppState();
  const t = copy[state.data.profile.locale];
  const total = state.data.ledger.reduce((sum, item) => sum + item.amount, 0);
  return <Shell><div className="content-page"><div className="page-head"><h1>{t.ledger}</h1><span className="pill ok">${total.toLocaleString()}</span></div>{state.data.ledger.length === 0 ? <section className="empty-state card"><p>{t.emptyLedger}</p></section> : state.data.ledger.map((item) => <div className="list-row card" key={item.id}><div><strong>{item.title}</strong><p>{item.date}</p></div><strong>${item.amount.toLocaleString()}</strong></div>)}</div></Shell>;
}

function DocumentsScreen() {
  const { state } = useAppState();
  const t = copy[state.data.profile.locale];
  return <Shell><div className="content-page"><div className="page-head"><h1>{t.docs}</h1><button className="text-btn">+ {t.uploadDocument}</button></div>{state.data.documents.length === 0 ? <section className="empty-state card"><p>{t.emptyDocs}</p></section> : state.data.documents.map((doc) => <div className="list-row card" key={doc.id}><div><strong>{doc.title}</strong><p>{doc.expiresAt ? `${t.insurance}: ${doc.expiresAt}` : ''}</p></div><span>📄</span></div>)}</div></Shell>;
}

function AppointmentsScreen() {
  const { state } = useAppState();
  const t = copy[state.data.profile.locale];
  return <Shell><div className="content-page"><h1>{t.appointments}</h1>{state.data.profile.region !== 'israel' ? <section className="empty-state card"><p>{t.israelOnly}</p></section> : <section className="quick-card card"><div className="quick-grid vertical"><button>📅<span>{t.bookTest}</span></button><button>🔎<span>{t.bookInspection}</span></button><button>🏢<span>{t.bookService}</span></button></div></section>}</div></Shell>;
}

function ProfileScreen() {
  const { state, updateProfile } = useAppState();
  const t = copy[state.data.profile.locale];
  return <Shell><div className="content-page"><section className="card profile-card"><div className="avatar large">{state.data.profile.name ? state.data.profile.name.charAt(0) : '👤'}</div><h1>{t.profile}</h1><p>{t.profileSubtitle}</p><label>{t.name}<input value={state.data.profile.name} onChange={(e) => updateProfile({ name: e.target.value })} /></label><label>{t.familyName}<input value={state.data.profile.familyName} onChange={(e) => updateProfile({ familyName: e.target.value })} /></label><label>{t.phone}<input value={state.data.profile.phone} onChange={(e) => updateProfile({ phone: e.target.value })} /></label><label>{t.emailOptional}<input type="email" value={state.data.profile.email || ''} onChange={(e) => updateProfile({ email: e.target.value })} /></label><button className="primary-btn">{t.save}</button></section></div></Shell>;
}

function SettingsScreen() {
  const { state, setRegion, setLocale, resetApp } = useAppState();
  const t = copy[state.data.profile.locale];
  return <Shell><div className="content-page"><section className="card form-card"><h1>{t.settings}</h1><label>{t.region}<select value={state.data.profile.region} onChange={(e) => setRegion(e.target.value as Region)}><option value="usa">{t.usa}</option><option value="israel">{t.israel}</option><option value="other">{t.other}</option></select></label><label>{t.language}<select value={state.data.profile.locale} onChange={(e) => setLocale(e.target.value as Locale)}><option value="he">עברית</option><option value="en">English</option></select></label><p className="microcopy">{t.usaNote}</p><button className="danger-btn" onClick={resetApp}>{t.reset}</button></section></div></Shell>;
}

export default function GarageApp() {
  const { state } = useAppState();
  if (state.screen === 'welcome') return <WelcomeScreen />;
  if (state.screen === 'demo') return <DemoScreen />;
  if (state.screen === 'vehicles') return <VehiclesScreen />;
  if (state.screen === 'addVehicle') return <AddVehicleScreen />;
  if (state.screen === 'vehicleDetail') return <VehicleDetailScreen />;
  if (state.screen === 'ledger') return <LedgerScreen />;
  if (state.screen === 'documents') return <DocumentsScreen />;
  if (state.screen === 'appointments') return <AppointmentsScreen />;
  if (state.screen === 'profile') return <ProfileScreen />;
  if (state.screen === 'settings') return <SettingsScreen />;
  return <DashboardScreen />;
}
