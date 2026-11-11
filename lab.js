/* Database Designer Lab · Grade 11 · Week 10 · Session 3 · Hospital database
   Pick data types, mark primary and foreign keys for Patients, Doctors, Appointments and Treatments,
   justify the primary key and create the tables with SQL.
   Usage: const lab = mountLab(root, { fs: '18px', height: '640px', onChange() {} }) */
(function () {
  const CSS = `
.dl{--ink:#1B1F3B;font-size:var(--dlfs,18px);font-family:Nunito,system-ui,sans-serif;color:var(--ink);display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr);gap:.8em;height:var(--dlh,640px)}
.dl *{box-sizing:border-box}
.dl-next{grid-column:1/-1;display:flex;align-items:center;gap:.8em;background:linear-gradient(90deg,#fff2c4,#fff7e0);border:3px solid #FFB020;border-radius:1em;padding:.55em .9em;font-weight:800}
.dl-next .tag{background:#FFB020;color:#fff;border-radius:.6em;padding:.25em .6em;font:900 .8em Nunito;letter-spacing:.1em;flex:none}
.dl-next .txt{flex:1;line-height:1.3}
.dl-btn{border:0;border-radius:.65em;padding:.45em .7em;font:800 .85em Nunito;cursor:pointer;background:#fff;color:var(--ink);box-shadow:0 .2em 0 #dfe3f2;white-space:nowrap}
.dl-btn.p{background:#5B5BF0;color:#fff;box-shadow:0 .2em 0 #3b3bc0}.dl-btn.g{background:#12B886;color:#fff;box-shadow:0 .2em 0 #0b8a62}
.dl-board{background:#fff;border-radius:1em;box-shadow:0 .3em 0 #e4e1f5;display:flex;flex-direction:column;min-height:0;overflow:hidden}
.dl-tabs{display:flex;gap:.35em;padding:.5em .6em;background:#f6f7ff;flex-wrap:wrap}
.dl-tab{border:0;border-radius:.7em;padding:.45em .7em;font:800 .85em Nunito;cursor:pointer;background:#fff;color:#4a5078;box-shadow:0 .2em 0 #dfe3f2;display:flex;align-items:center;gap:.35em}
.dl-tab.on{background:var(--c);color:#fff;box-shadow:0 .2em 0 rgba(0,0,0,.2)}
.dl-tab .ok{display:inline-grid;place-items:center;width:1.2em;height:1.2em;border-radius:50%;background:#e7e9f5;color:#fff;font-size:.75em}
.dl-tab .ok.y{background:#16a34a}
.dl-ed{flex:1;min-height:0;overflow:auto;padding:.6em .8em}
.dl-sc{font:700 .85em/1.35 Nunito;color:#4a5078;margin-bottom:.5em}
.dl-t{width:100%;border-collapse:separate;border-spacing:0 .35em}
.dl-t th{text-align:left;font:900 .72em Nunito;letter-spacing:.12em;text-transform:uppercase;color:#6b7096;padding:0 .4em}
.dl-t td{background:#f6f7ff;padding:.35em .45em;font:700 .92em 'JetBrains Mono',monospace}
.dl-t td:first-child{border-radius:.6em 0 0 .6em}.dl-t td:last-child{border-radius:0 .6em .6em 0;width:2em;text-align:center}
.dl-t tr.good td{background:#e3f9ef}.dl-t tr.bad td{background:#ffe9ec}
.dl-t select{font:700 .9em 'JetBrains Mono',monospace;padding:.25em .3em;border-radius:.45em;border:2px solid #d5e2fb;background:#fff;max-width:100%}
.dl-t .ds{font:600 .78em Nunito;color:#6b7096}
.dl-msg{padding:.5em .8em;font:800 .88em/1.35 Nunito;background:#f4f6ff;min-height:2.4em}
.dl-msg.good{background:#dcfbee;color:#0b6a4a}.dl-msg.bad{background:#ffe3e3;color:#a31f1f}.dl-msg.info{background:#fff2d6;color:#8a5b00}
.dl-side{display:flex;flex-direction:column;gap:.6em;min-height:0}
.dl-card{background:#fff;border-radius:1em;padding:.55em .75em;box-shadow:0 .3em 0 #e4e1f5}
.dl-h{font:900 .74em Nunito;letter-spacing:.14em;text-transform:uppercase;color:#5B5BF0;margin-bottom:.35em;display:flex;align-items:center;gap:.5em}
.dl-sql{background:#151936;color:#e9ecff;border-radius:.7em;padding:.45em .65em;font:600 .76em/1.45 'JetBrains Mono',monospace;white-space:pre;overflow:auto;max-height:9.5em}
.dl-sql .k{color:#c4a7ff}.dl-sql .t{color:#7ee2b8}.dl-sql .x{color:#ff8a9a}.dl-sql .c{color:#ffd27a}
.dl-why button{display:block;width:100%;text-align:left;border:2px solid #e1e4f3;background:#fff;border-radius:.6em;padding:.35em .55em;margin:.25em 0;font:700 .82em/1.3 Nunito;cursor:pointer}
.dl-why button.y{border-color:#16a34a;background:#e3f9ef}.dl-why button.n{border-color:#e03131;background:#ffe9ec}
.dl-mis{flex:1;min-height:0;overflow:auto}
.dl-m{display:flex;gap:.45em;align-items:flex-start;padding:.24em 0;border-top:2px solid #f2f3fa;font:700 .8em/1.3 Nunito;color:#4a5078}
.dl-m:first-of-type{border-top:0}
.dl-m .ck{flex:none;width:1.35em;height:1.35em;border-radius:.4em;background:#e7e9f5;color:#fff;display:grid;place-items:center;font-size:.85em}
.dl-m.on{color:#12884f}.dl-m.on .ck{background:#16a34a}.dl-m.cur{color:var(--ink)}.dl-m.cur .ck{background:#FFB020}
.dl-m .sm{border:0;background:#EEF0FF;color:#3730a3;border-radius:.5em;font:800 .78em Nunito;padding:.12em .45em;cursor:pointer;margin-left:auto;flex:none}
@media (max-width:900px){.dl{grid-template-columns:minmax(0,1fr);height:auto}.dl-next{flex-wrap:wrap}.dl-ed{max-height:24em}}
`;
  const TYPES = ['INT', 'VARCHAR(15)', 'VARCHAR(20)', 'VARCHAR(50)', 'VARCHAR(100)', 'DATETIME', 'DECIMAL(8,2)', 'TEXT'];
  const TABLES = [
    { n: 'Patients', ic: '🧑‍🤝‍🧑', c: '#5B5BF0', d: 'One row for every registered patient.', cols: [['patient_id', 'INT', 'PK', 'Unique ID for each patient'], ['patient_name', 'V', '', 'Name of the patient'], ['address', 'V', '', 'Patient’s address'], ['contact_no', 'V', '', 'Contact number']] },
    { n: 'Doctors', ic: '🩺', c: '#12B886', d: 'One row for every doctor working at the hospital.', cols: [['doctor_id', 'INT', 'PK', 'Unique ID for each doctor'], ['doctor_name', 'V', '', 'Name of the doctor'], ['specialization', 'V', '', 'Field of expertise'], ['contact_no', 'V', '', 'Doctor’s phone number']] },
    { n: 'Appointments', ic: '📅', c: '#FFB020', d: 'Links one patient to one doctor at a date and time.', cols: [['appointment_id', 'INT', 'PK', 'Unique ID for each appointment'], ['patient_id', 'INT', 'FK', 'Connects to Patients'], ['doctor_id', 'INT', 'FK', 'Connects to Doctors'], ['appointment_date', 'DATETIME', '', 'Date and time'], ['status', 'V', '', 'booked, completed…']] },
    { n: 'Treatments', ic: '💊', c: '#FF5D73', d: 'What was done in each appointment, and its cost.', cols: [['treatment_id', 'INT', 'PK', 'Unique ID for each treatment'], ['appointment_id', 'INT', 'FK', 'Links to the appointment'], ['treatment_details', 'TEXT', '', 'Long description'], ['cost', 'DECIMAL(8,2)', '', 'Treatment cost']] },
  ];
  const BEST = { patient_name: 'VARCHAR(50)', address: 'VARCHAR(100)', contact_no: 'VARCHAR(15)', doctor_name: 'VARCHAR(50)', specialization: 'VARCHAR(50)', status: 'VARCHAR(20)' };
  const REF = { patient_id: 'Patients', doctor_id: 'Doctors', appointment_id: 'Appointments' };
  const WHY = [['It is the shortest column', 0], ['Every patient gets a different ID, even if two patients have the same name', 1], ['Patients like numbers', 0], ['It is the first column in the table', 0]];
  const MISSIONS = [
    { id: 'ptypes', t: 'Patients: choose a data type for every column' },
    { id: 'ppk', t: 'Patients: mark the primary key and explain WHY you chose it' },
    { id: 'doc', t: 'Doctors: complete the data types and the primary key' },
    { id: 'appt', t: 'Appointments: data types, the primary key and BOTH foreign keys' },
    { id: 'treat', t: 'Treatments: TEXT or VARCHAR? DECIMAL for money? Complete it with its key' },
    { id: 'sql', t: 'All 4 tables correct: press ▶ Create tables to run the SQL' },
  ];
  window.mountLab = function (root, opts = {}) {
    if (!document.getElementById('dl-css')) { const st = document.createElement('style'); st.id = 'dl-css'; st.textContent = CSS; document.head.appendChild(st); }
    const el = document.createElement('div'); el.className = 'dl'; el.style.setProperty('--dlfs', opts.fs || '18px'); el.style.setProperty('--dlh', opts.height || '640px');
    el.innerHTML = `<div class="dl-next"><span class="tag">NEXT</span><span class="txt"></span><button class="dl-btn p" data-a="show">▶ Show me</button></div>
      <div class="dl-board"><div class="dl-tabs"></div><div class="dl-ed"></div><div class="dl-msg">🏥 Choose a data type and a key for each column. Rows turn green when they are right.</div></div>
      <div class="dl-side"><div class="dl-card"><div class="dl-h">📝 SQL preview <button class="dl-btn g" data-a="run" style="margin-left:auto;font-size:.95em">▶ Create tables</button></div><div class="dl-sql"></div></div>
      <div class="dl-card dl-why"><div class="dl-h">🔑 Why is patient_id the primary key?</div><div class="wb"></div></div>
      <div class="dl-card dl-mis"><div class="dl-h">Missions</div><div class="ml"></div></div></div>`;
    root.appendChild(el);
    const $ = (s) => el.querySelector(s);
    let cur = 0, ans = {}, flags = {}, sticky = new Set();
    const key = (t, c) => t + '.' + c;
    const blank = () => { ans = {}; TABLES.forEach((T) => T.cols.forEach(([c]) => ans[key(T.n, c)] = { type: '', k: '' })); };
    blank();
    const msg = (t, c = '') => { $('.dl-msg').className = 'dl-msg ' + c; $('.dl-msg').innerHTML = t; };
    const typeOK = (want, got) => want === 'V' ? /^VARCHAR/.test(got) : want === got;
    const rowOK = (T, [c, ty, k]) => { const a = ans[key(T.n, c)]; return typeOK(ty, a.type) && a.k === k; };
    const typesOK = (T) => T.cols.every(([c, ty]) => typeOK(ty, ans[key(T.n, c)].type));
    const tblOK = (T) => T.cols.every((col) => rowOK(T, col));
    function hint(T, [c, ty, k], a, what) {
      if (what === 'type') {
        if (!a.type) return '';
        if (typeOK(ty, a.type)) return ty === 'V' && BEST[c] && a.type !== BEST[c] ? `✅ Text works. The book uses <b>${BEST[c]}</b> for ${c}.` : `✅ <b>${a.type}</b> fits ${c}.`;
        if (c === 'contact_no' && a.type === 'INT') return '❌ Phone numbers can start with 0 or +, and we never do maths on them: store them as text (VARCHAR).';
        if (/_id$/.test(c)) return `❌ IDs are whole numbers: use <b>INT</b>.`;
        if (c === 'cost') return a.type === 'INT' ? '❌ INT drops the fils! Money needs exact decimals: DECIMAL(8,2).' : '❌ Money needs exact decimals: DECIMAL(8,2).';
        if (c === 'treatment_details') return /^VARCHAR/.test(a.type) ? '🤔 Treatment details can be very long. TEXT has no small fixed length.' : '❌ This is a long description: use TEXT.';
        if (c === 'appointment_date') return '❌ This stores a date and a time: DATETIME.';
        return `❌ ${c} stores text: use VARCHAR.`;
      }
      if (!a.k) return k === 'PK' ? '' : '';
      if (a.k === k) return a.k === 'PK' ? `🔑 <b>${c}</b> is unique for every row: a good primary key.` : `🔗 <b>${c}</b> links to the primary key of <b>${REF[c]}</b>.`;
      if (a.k === 'PK') return T.cols.find((x) => x[2] === 'PK')[0] === c ? '' : (/name|specialization/.test(c) ? `❌ Two rows could have the same ${c.replace('_', ' ')}. A primary key must be unique.` : `❌ ${c} is not this table’s own ID. The PK here is <b>${T.cols.find((x) => x[2] === 'PK')[0]}</b>.`);
      if (a.k === 'FK') return REF[c] ? `❌ ${c} is this table’s OWN ID, so it is the primary key, not a foreign key.` : `❌ ${c} does not point to another table, so it is not a foreign key.`;
      return '';
    }
    function sql() {
      const lines = [];
      TABLES.forEach((T) => {
        lines.push(`<span class="k">CREATE TABLE</span> ${T.n} (`);
        const body = T.cols.map(([c]) => { const a = ans[key(T.n, c)]; return `  ${c} ${a.type ? `<span class="t">${a.type}</span>` : '<span class="x">???</span>'}${a.k === 'PK' ? ' <span class="k">PRIMARY KEY</span>' : ''}`; });
        T.cols.forEach(([c]) => { const a = ans[key(T.n, c)]; if (a.k === 'FK') body.push(`  <span class="k">FOREIGN KEY</span> (${c}) <span class="k">REFERENCES</span> ${REF[c] || '<span class="x">???</span>'}(${c})`); });
        lines.push(body.join(',\n')); lines.push(');');
      });
      $('.dl-sql').innerHTML = lines.join('\n');
    }
    function editor() {
      const T = TABLES[cur];
      $('.dl-tabs').innerHTML = TABLES.map((t, i) => `<button class="dl-tab ${i === cur ? 'on' : ''}" style="--c:${t.c}" data-t="${i}">${t.ic} ${t.n} <span class="ok ${tblOK(t) ? 'y' : ''}">${tblOK(t) ? '✓' : ''}</span></button>`).join('');
      el.querySelectorAll('[data-t]').forEach((b) => b.onclick = () => { cur = +b.dataset.t; editor(); });
      $('.dl-ed').innerHTML = `<div class="dl-sc"><b style="color:${T.c}">${T.ic} ${T.n}</b> · ${T.d}</div><table class="dl-t"><tr><th>Column</th><th>Data type</th><th>Key</th><th></th></tr>${T.cols.map(([c, , , ds]) => { const a = ans[key(T.n, c)]; const row = T.cols.find((x) => x[0] === c); const st = a.type && (a.k || row[2] === '' ) ? (rowOK(T, row) ? 'good' : 'bad') : (a.type && !typeOK(row[1], a.type) ? 'bad' : '');
        return `<tr class="${st}" data-c="${c}"><td>${c}<div class="ds">${ds}</div></td><td><select data-f="type"><option value="">choose…</option>${TYPES.map((t) => `<option ${a.type === t ? 'selected' : ''}>${t}</option>`).join('')}</select></td><td><select data-f="k"><option value="" ${!a.k ? 'selected' : ''}>—</option><option value="PK" ${a.k === 'PK' ? 'selected' : ''}>🔑 PK</option><option value="FK" ${a.k === 'FK' ? 'selected' : ''}>🔗 FK</option></select></td><td>${st === 'good' ? '✅' : st === 'bad' ? '❌' : ''}</td></tr>`; }).join('')}</table>`;
      el.querySelectorAll('.dl-ed select').forEach((s) => { s.addEventListener('keydown', (e) => e.stopPropagation()); s.onchange = () => { const c = s.closest('tr').dataset.c, f = s.dataset.f; set(T, c, f, s.value); }; });
    }
    function set(T, c, f, v) {
      const a = ans[key(T.n, c)]; a[f] = v; const row = T.cols.find((x) => x[0] === c);
      const h = hint(T, row, a, f); if (h) msg(h, h.startsWith('✅') || h.startsWith('🔑') || h.startsWith('🔗') ? 'good' : h.startsWith('🤔') ? 'info' : 'bad');
      if (tblOK(T)) msg(`🎉 The <b>${T.n}</b> table is complete!${T.n === 'Patients' && !flags.why ? ' Now explain why patient_id is the primary key →' : ''}`, 'good');
      flags.ran = false; paint();
    }
    function why() {
      $('.wb').innerHTML = WHY.map(([t, ok], i) => `<button data-w="${i}" class="${flags.why && ok ? 'y' : ''}">${t}</button>`).join('');
      el.querySelectorAll('[data-w]').forEach((b) => b.onclick = () => { const ok = WHY[+b.dataset.w][1]; b.className = ok ? 'y' : 'n'; if (ok) { flags.why = true; msg('✅ Exactly: a primary key must be <b>unique</b> and never empty, so every row can be found and the data stays accurate.', 'good'); paint(); } else msg('❌ Think about two patients called Ahmed Ali. What keeps their rows apart?', 'bad'); });
    }
    $('[data-a="run"]').onclick = () => {
      const bad = TABLES.filter((T) => !tblOK(T));
      if (bad.length) { msg(`❌ SQL error: fix <b>${bad.map((t) => t.n).join(', ')}</b> first (look for ??? and red rows).`, 'bad'); cur = TABLES.indexOf(bad[0]); paint(); return; }
      flags.ran = true; $('.dl-sql').innerHTML += '\n\n<span class="t">✓ Patients created\n✓ Doctors created\n✓ Appointments created (2 foreign keys)\n✓ Treatments created (1 foreign key)</span>';
      msg('🏥 Query OK: 4 tables created. You designed a real hospital database!', 'good'); paint(true);
    };
    const done = (id) => { const P = TABLES[0]; switch (id) {
      case 'ptypes': return typesOK(P); case 'ppk': return ans[key('Patients', 'patient_id')].k === 'PK' && !!flags.why;
      case 'doc': return tblOK(TABLES[1]); case 'appt': return tblOK(TABLES[2]); case 'treat': return tblOK(TABLES[3]); case 'sql': return !!flags.ran; } };
    const tasks = () => MISSIONS.map((m) => { if (done(m.id)) sticky.add(m.id); return [m.t, sticky.has(m.id)]; });
    let nextM = null;
    function paint(keepSql) {
      editor(); if (!keepSql) sql(); why();
      const ts = tasks(); nextM = MISSIONS.find((m, i) => !ts[i][1]);
      $('.ml').innerHTML = MISSIONS.map((m, i) => `<div class="dl-m ${ts[i][1] ? 'on' : m === nextM ? 'cur' : ''}"><span class="ck">${ts[i][1] ? '✓' : i + 1}</span><span>${m.t}</span><button class="sm" data-m="${i}">show</button></div>`).join('');
      $('.dl-next .txt').innerHTML = nextM ? nextM.t : '🎉 All missions complete! You are officially a database designer.';
      el.querySelectorAll('.ml [data-m]').forEach((b) => b.onclick = () => playDemo(MISSIONS[+b.dataset.m]));
      opts.onChange && opts.onChange();
    }
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = false;
    async function fill(ti, keys = true) {
      cur = ti; editor(); const T = TABLES[ti]; await sleep(300);
      for (const [c, ty, k] of T.cols) { const a = ans[key(T.n, c)]; if (!typeOK(ty, a.type)) { set(T, c, 'type', ty === 'V' ? BEST[c] : ty); await sleep(380); }
        if (keys && a.k !== k) { set(T, c, 'k', k); await sleep(380); } }
    }
    async function playDemo(m) {
      if (busy) return; busy = true;
      try {
        if (m.id === 'ptypes') await fill(0, false);
        if (m.id === 'ppk') { await fill(0); await sleep(300); el.querySelector('[data-w="1"]').click(); }
        if (m.id === 'doc') await fill(1);
        if (m.id === 'appt') await fill(2);
        if (m.id === 'treat') await fill(3);
        if (m.id === 'sql') { for (let i = 0; i < 4; i++) if (!tblOK(TABLES[i])) await fill(i); await sleep(300); $('[data-a="run"]').click(); }
      } finally { busy = false; paint(m.id === 'sql'); }
    }
    $('[data-a="show"]').onclick = () => nextM && playDemo(nextM);
    paint();
    return {
      el, tasks,
      demoStep() { if (busy || !nextM) return false; playDemo(nextM); return true; },
      async demo() { for (const m of MISSIONS) if (!sticky.has(m.id)) { await playDemo(m); await sleep(700); } },
      reset() { blank(); flags = {}; sticky.clear(); cur = 0; msg('🏥 Choose a data type and a key for each column.'); paint(); },
    };
  };
})();

