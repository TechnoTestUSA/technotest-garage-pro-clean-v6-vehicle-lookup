:root {
  --teal: #18aaa6;
  --teal-dark: #0b8d89;
  --ink: #121827;
  --muted: #667085;
  --line: #e7e7e7;
  --bg: #ede8dc;
  --card: #ffffff;
  --green: #37a852;
  --orange: #f59e0b;
  --red: #ef4444;
  --soft: #f7f5f1;
}

* { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; background: var(--bg); color: var(--ink); font-family: Arial, Helvetica, sans-serif; }
button, input, select { font: inherit; }
button { cursor: pointer; }

.app-root { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 18px; }
.auth-root { background: radial-gradient(circle at top, #ffffff 0, #f4efe4 44%, #e9e0cf 100%); }
.rtl { direction: rtl; }

.phone-frame { width: min(430px, 100%); min-height: 860px; background: #fff; border-radius: 38px; overflow: hidden; box-shadow: 0 24px 70px rgba(18,24,39,.18); border: 1px solid rgba(255,255,255,.6); display: flex; flex-direction: column; position: relative; }
.topbar { height: 112px; display: flex; align-items: center; justify-content: space-between; padding: 20px 22px; border-bottom: 1px solid #f0f0f0; background: rgba(255,255,255,.92); position: sticky; top: 0; z-index: 5; }
.logo-button { border: 0; background: transparent; padding: 0; display: inline-flex; align-items: center; justify-content: center; }
.logo-button img { width: 112px; max-height: 54px; object-fit: contain; }
.round-btn { width: 48px; height: 48px; border-radius: 50%; border: 0; background: #f7f5f1; display: grid; place-items: center; font-size: 22px; }
.content-page { padding: 22px 18px 96px; flex: 1; overflow: auto; }
.card { background: var(--card); border: 1px solid var(--line); border-radius: 24px; box-shadow: 0 14px 36px rgba(16,24,40,.06); }

.welcome-card { width: min(620px, 100%); background: rgba(255,255,255,.96); border-radius: 32px; padding: 34px; box-shadow: 0 24px 70px rgba(18,24,39,.18); }
.welcome-logo { width: 190px; max-height: 90px; object-fit: contain; display: block; margin: 0 auto 20px; }
.welcome-card h1 { font-size: clamp(32px, 5vw, 56px); line-height: 1.05; margin: 0 0 14px; }
.welcome-card p { color: var(--muted); font-size: 18px; line-height: 1.65; margin: 0; }
.question-block { margin-top: 26px; }
.question-block h2 { margin: 0 0 12px; font-size: 20px; }
.option-grid { display: grid; gap: 12px; }
.option-grid.three { grid-template-columns: repeat(3, 1fr); }
.option-grid.two { grid-template-columns: repeat(2, 1fr); }
.option-card { border: 1px solid var(--line); border-radius: 16px; background: #fff; padding: 18px 14px; font-weight: 800; color: var(--ink); }
.option-card.selected { border-color: var(--teal); background: #e6fbfa; box-shadow: inset 0 0 0 2px var(--teal); }
.microcopy { font-size: 14px !important; color: var(--muted); margin-top: 10px !important; }
.cta-row { display: flex; gap: 12px; margin-top: 24px; }
.primary-btn, .secondary-btn, .danger-btn, .text-btn { border: 0; border-radius: 16px; padding: 15px 20px; font-weight: 900; }
.primary-btn { background: var(--teal); color: #fff; flex: 1; }
.primary-btn:disabled { opacity: .5; cursor: not-allowed; }
.secondary-btn { background: #f3f4f6; color: var(--ink); flex: 1; }
.danger-btn { background: #fff1f2; color: #b91c1c; width: 100%; }
.text-btn { background: transparent; color: var(--teal-dark); padding: 8px 0; }

.profile-summary { text-align: center; padding: 28px 20px; margin-bottom: 18px; }
.avatar { width: 84px; height: 84px; margin: 0 auto 14px; border-radius: 50%; background: #e4fbfa; color: var(--teal-dark); display: grid; place-items: center; font-size: 34px; font-weight: 900; }
.avatar.large { width: 96px; height: 96px; font-size: 42px; }
h1 { margin: 0 0 8px; font-size: 32px; line-height: 1.08; }
h2 { margin: 0 0 10px; font-size: 22px; }
p { color: var(--muted); line-height: 1.55; }
.stats-card { padding: 10px 18px; margin-bottom: 18px; }
.stats-card div { display: flex; justify-content: space-between; gap: 20px; padding: 18px 6px; border-bottom: 1px solid #eee; }
.stats-card div:last-child { border-bottom: 0; }
.stats-card strong { font-size: 24px; }
.stats-card span { font-weight: 800; }
.quick-card { padding: 22px; margin-bottom: 18px; }
.quick-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.quick-grid.vertical { grid-template-columns: 1fr; }
.quick-grid button { min-height: 104px; border: 1px solid var(--line); border-radius: 20px; background: var(--soft); display: grid; place-items: center; gap: 8px; font-size: 26px; }
.quick-grid span { font-size: 15px; font-weight: 900; }
.demo-hero { padding: 24px; margin-bottom: 18px; }
.demo-step { background: #e6fbfa; border: 1px solid #c2f1ef; border-radius: 18px; padding: 18px; margin-top: 16px; }

.page-head { display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 18px; }
.empty-state { text-align: center; padding: 34px 24px; }
.vehicle-list { display: grid; gap: 14px; }
.vehicle-card { width: 100%; border: 1px solid var(--line); text-align: inherit; display: flex; gap: 18px; align-items: center; padding: 22px; border-right: 6px solid var(--green); }
.ltr .vehicle-card { border-right-width: 1px; border-left: 6px solid var(--green); }
.vehicle-card.soon { border-color: var(--line); border-right-color: var(--orange); }
.ltr .vehicle-card.soon { border-left-color: var(--orange); }
.vehicle-card.urgent { border-color: var(--line); border-right-color: var(--red); }
.ltr .vehicle-card.urgent { border-left-color: var(--red); }
.vehicle-icon, .big-icon { width: 68px; height: 68px; border-radius: 20px; background: var(--soft); display: grid; place-items: center; font-size: 28px; flex: 0 0 auto; }
.big-icon { width: 110px; height: 110px; margin: 0 auto 16px; font-size: 44px; }
.vehicle-card h2 { margin: 8px 0 4px; }
.vehicle-card p { margin: 0; }
.pill { display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; padding: 7px 12px; font-size: 13px; font-weight: 900; background: #eef2ff; }
.pill.ok { color: #166534; background: #dcfce7; }
.pill.soon { color: #92400e; background: #fef3c7; }
.pill.urgent { color: #991b1b; background: #fee2e2; }
.vehicle-detail { text-align: center; padding: 28px 18px; margin: 16px 0; }
.list-row { padding: 18px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; gap: 18px; }
.list-row p { margin: 4px 0 0; }
.form-card, .profile-card { padding: 24px; }
.form-card label, .profile-card label { display: grid; gap: 8px; font-weight: 900; margin-top: 14px; color: var(--ink); }
input, select { width: 100%; border: 1px solid var(--line); border-radius: 16px; padding: 15px 16px; background: #fff; color: var(--ink); }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.bottom-nav { position: absolute; left: 0; right: 0; bottom: 0; height: 82px; background: rgba(255,255,255,.96); border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-around; padding: 8px; }
.nav-item { min-width: 56px; border: 0; background: transparent; color: var(--muted); display: grid; gap: 3px; place-items: center; font-weight: 800; }
.nav-item span { font-size: 22px; }
.nav-item small { font-size: 10px; }
.nav-item.active { color: var(--teal-dark); }

@media (max-width: 520px) {
  .app-root { padding: 0; align-items: stretch; }
  .phone-frame { width: 100%; min-height: 100vh; border-radius: 0; }
  .welcome-card { min-height: 100vh; border-radius: 0; }
  .option-grid.three { grid-template-columns: 1fr; }
  .cta-row, .form-grid { grid-template-columns: 1fr; flex-direction: column; }
}

.demo-phone { position: relative; }
.demo-freeze { position: relative; pointer-events: none; user-select: none; filter: saturate(.96); }
.demo-freeze::after { content: ''; position: absolute; inset: 0; background: rgba(255,255,255,.08); z-index: 10; pointer-events: auto; }
.demo-frozen { pointer-events: none; user-select: none; opacity: .92; }
.demo-guide { position: absolute; left: 14px; right: 14px; bottom: 92px; z-index: 30; background: rgba(255,255,255,.98); border: 1px solid #d8f1ef; border-radius: 24px; box-shadow: 0 18px 42px rgba(18,24,39,.20); padding: 16px; display: grid; gap: 12px; }
.demo-guide strong { display: block; font-size: 18px; }
.demo-guide p { margin: 6px 0 4px; font-size: 14px; color: var(--ink); }
.demo-guide small { display: block; color: var(--muted); font-size: 12px; line-height: 1.45; }
.demo-next-button { width: 100%; flex: unset; }
.demo-subhead { margin-top: 20px; }
.demo-note-card { margin: 12px 0; padding: 20px; }
.lookup-message { margin: 10px 0 0; border-radius: 14px; padding: 12px 14px; font-weight: 800; font-size: 14px; }
.lookup-message.loading { background: #eef2ff; color: #3730a3; }
.lookup-message.found { background: #dcfce7; color: #166534; }
.lookup-message.notFound, .lookup-message.error { background: #fff7ed; color: #9a3412; }
.gov-data-card { margin: 18px 0; padding: 18px; box-shadow: none; background: #fbfdfd; }
.gov-data-card h2 { font-size: 18px; margin-bottom: 14px; }
.gov-data-grid { display: grid; grid-template-columns: 1fr; gap: 10px; }
.gov-data-grid div { border: 1px solid var(--line); border-radius: 14px; background: #fff; padding: 12px; display: grid; gap: 5px; }
.gov-data-grid span { color: var(--muted); font-size: 12px; font-weight: 800; }
.gov-data-grid strong { font-size: 14px; overflow-wrap: anywhere; }

.menu-trigger { color: var(--ink); }
.menu-overlay { position: absolute; inset: 0; z-index: 80; display: flex; align-items: stretch; justify-content: flex-start; }
.rtl .menu-overlay { justify-content: flex-end; }
.menu-backdrop { position: absolute; inset: 0; border: 0; background: rgba(18,24,39,.34); cursor: pointer; }
.menu-panel { position: relative; z-index: 2; width: min(330px, 84%); height: 100%; background: #fff; padding: 22px; box-shadow: 0 24px 70px rgba(18,24,39,.24); display: flex; flex-direction: column; gap: 18px; animation: menuSlideIn .18s ease-out; }
.menu-head { display: flex; align-items: center; justify-content: space-between; gap: 14px; }
.menu-head img { width: 118px; max-height: 58px; object-fit: contain; }
.menu-title { font-size: 24px; }
.menu-list { display: grid; gap: 10px; }
.menu-row { width: 100%; border: 1px solid var(--line); background: #fff; border-radius: 18px; padding: 16px; display: flex; align-items: center; gap: 12px; color: var(--ink); text-align: inherit; }
.rtl .menu-row { flex-direction: row-reverse; justify-content: flex-start; }
.menu-row span { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 12px; background: var(--soft); }
.menu-row b { font-size: 16px; }
.menu-row.active { border-color: var(--teal); background: #e6fbfa; color: var(--teal-dark); }
@keyframes menuSlideIn { from { transform: translateX(-16px); opacity: .78; } to { transform: translateX(0); opacity: 1; } }
.rtl .menu-panel { animation-name: menuSlideInRtl; }
@keyframes menuSlideInRtl { from { transform: translateX(16px); opacity: .78; } to { transform: translateX(0); opacity: 1; } }
.gov-raw-details { margin-top: 14px; }
.gov-raw-details summary { cursor: pointer; color: var(--teal-dark); font-weight: 900; padding: 12px 4px; }
.gov-data-grid-raw { margin-top: 8px; }
