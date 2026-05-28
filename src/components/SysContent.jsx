import { useState } from 'react'
import s from '../styles/SysContent.module.css'

// ── CERT TRACK ROADMAP ────────────────────────────────────────────────────
// Each track maps the full Red Hat / CNCF certification path L1 → L5.
// status: 'earned' | 'progress' | 'planned'
// trackStatus: 'active' | 'planned' | 'complete'

const CERT_TRACKS = [
  {
    name:        'Red Hat Enterprise Linux',
    trackStatus: 'active',
    levels: [
      { num: 'L1', label: 'Foundation',    exam: 'EX200 — RHCSA',                        status: 'progress' },
    ],
  },
  {
    name:        'Red Hat OpenShift',
    trackStatus: 'active',
    levels: [
      { num: 'L2', label: 'Admin',         exam: 'EX280 — OpenShift Administration',            status: 'progress' },
      { num: 'L3', label: 'Adv. Admin',    exam: 'EX380 — Advanced OpenShift Administration',   status: 'planned'  },
      { num: 'L4', label: 'Specialist',    exam: 'EX430 — OpenShift Advanced Cluster Security', status: 'planned'  },
      { num: 'L4', label: 'Specialist',    exam: 'EX432 — OpenShift Cluster Management',        status: 'planned'  },
      { num: 'L4', label: 'Specialist',    exam: 'EX370 — OpenShift Data Foundation',           status: 'planned'  },
      { num: 'L5', label: 'Architect',     exam: 'RHCA — OpenShift',                            status: 'planned', goal: true },
    ],
  },
  {
    name:        'CNCF Kubernetes',
    trackStatus: 'planned',
    levels: [
      { num: 'L1', label: 'Administrator', exam: 'CKA — Certified Kubernetes Administrator',  status: 'planned' },
      { num: 'L3', label: 'Security',      exam: 'CKS — Certified Kubernetes Security Specialist', status: 'planned' },
    ],
  },
]

// ── LAB / CONTENT POSTS ───────────────────────────────────────────────────
// type: 'lab' | 'guide' | 'notes' | 'walkthrough'
// track: 'rhcsa' | 'openshift' | 'kubernetes' | 'ansible'
// Add your real post titles and href links as you publish content.

const FILTERS = [
  { key: 'all',        label: 'All'        },
  { key: 'rhcsa',      label: 'RHCSA'      },
  { key: 'openshift',  label: 'OpenShift'  },
  { key: 'kubernetes', label: 'Kubernetes' },
]

const TRACK_LABELS = {
  rhcsa:      'RHCSA',
  openshift:  'OpenShift',
  kubernetes: 'Kubernetes',
}

const POSTS = [
  {
    track: 'rhcsa',
    title: 'KVM Lab Setup — RHCSA Practice Environment',
    type:  'lab',
    date:  '2025-05',
    href:  '#',
  },
  {
    track: 'rhcsa',
    title: 'User & Group Management — 25 Practical Labs',
    type:  'lab',
    date:  '2025-05',
    href:  '#',
  },
  {
    track: 'rhcsa',
    title: 'LVM, Partitions and Persistent Storage',
    type:  'guide',
    date:  '2025-05',
    href:  '#',
  },
  {
    track: 'rhcsa',
    title: 'SELinux — Contexts, Policies and AVC Denials',
    type:  'notes',
    date:  '2025-05',
    href:  '#',
  },
  {
    track: 'rhcsa',
    title: 'Boot Recovery — rd.break and Root Password Reset',
    type:  'walkthrough',
    date:  '2025-05',
    href:  '#',
  },
  {
    track: 'openshift',
    title: 'EX280 Study Notes — OpenShift Administration',
    type:  'notes',
    date:  '2025-06',
    href:  '#',
  },
  {
    track: 'openshift',
    title: 'Deploying Applications on OpenShift — Lab Walkthrough',
    type:  'lab',
    date:  '2025-06',
    href:  '#',
  },
  {
    track: 'kubernetes',
    title: 'CKA Study Notes — Cluster Architecture',
    type:  'notes',
    date:  '2025-07',
    href:  '#',
  },

]

// ── COMPONENT ─────────────────────────────────────────────────────────────

const TABS = [
  { key: 'roadmap', label: 'Cert Roadmap' },
  { key: 'posts',   label: 'Labs & Guides' },
]

export default function SysContent() {
  const [tab,    setTab]    = useState('roadmap')
  const [filter, setFilter] = useState('all')

  const visiblePosts = POSTS.filter(
    p => filter === 'all' || p.track === filter
  )

  return (
    <section id="syseng">
      <div className="section-wrap reveal">
        <p className="section-label">08</p>
        <h2 className="section-title">
          <span className="num">08.</span> Systems Engineering
        </h2>

        <p className={s.intro}>
          Linux systems engineering, container orchestration, and infrastructure
          automation. Content follows the Red Hat certification track from RHCSA
          through to RHCA — OpenShift, with CNCF Kubernetes alongside. Labs,
          study guides, and field notes published as each topic is worked through.
        </p>

        {/* Tab switcher */}
        <div className={s.trackTabs}>
          {TABS.map(t => (
            <button
              key={t.key}
              className={`${s.trackTab}${tab === t.key ? ' ' + s.active : ''}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── ROADMAP VIEW ─────────────────────────────────── */}
        {tab === 'roadmap' && (
          <div className={s.roadmap}>
            {CERT_TRACKS.map(track => (
              <div key={track.name} className={s.track}>
                <div className={s.trackHeader}>
                  <span className={s.trackName}>{track.name}</span>
                  <span className={`${s.trackStatus} ${s[track.trackStatus]}`}>
                    {track.trackStatus}
                  </span>
                </div>

                <div className={s.levels}>
                  {track.levels.map((lvl, i) => (
                    <div key={i} className={s.level}>
                      <span className={s.levelNum}>{lvl.num}</span>
                      <span className={s.levelLabel}>{lvl.label}</span>
                      <span className={s.levelExam}>{lvl.exam}</span>
                      <span className={`${s.levelBadge} ${lvl.goal ? s.goal : s[lvl.status]}`}>
                        {lvl.goal ? 'goal' : lvl.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── POSTS VIEW ───────────────────────────────────── */}
        {tab === 'posts' && (
          <>
            <div className={s.filters}>
              {FILTERS.map(f => (
                <button
                  key={f.key}
                  className={`${s.filterBtn}${filter === f.key ? ' ' + s.active : ''}`}
                  onClick={() => setFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className={s.list}>
              {visiblePosts.map((p, i) => (
                <a
                  key={i}
                  className={s.item}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={s.itemTrack}>
                    {TRACK_LABELS[p.track]}
                  </span>
                  <span className={s.itemTitle}>{p.title}</span>
                  <span className={`${s.itemType} ${s[p.type]}`}>{p.type}</span>
                  <span className={s.itemDate}>{p.date}</span>
                </a>
              ))}
            </div>

            <p className={s.more}>
              <a
                href="https://github.com/kowalski-analysis"
                target="_blank"
                rel="noopener noreferrer"
              >
                view all labs and guides on github &rarr;
              </a>
            </p>
          </>
        )}

      </div>
    </section>
  )
}
