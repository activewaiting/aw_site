const perspectives = [
  {
    title: 'Corporate workspaces',
    description: 'Working with companies to integrate the tool into corporate workspaces.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: 'Insurer partnerships',
    description: 'Partnering with insurers to integrate into digital health platforms.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Direct to patients',
    description: 'Offering the application directly to patients, supporting broad adoption and sustainable growth.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
]

export default function NextSteps() {
  return (
    <section id="next-steps" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Next Steps</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
          We are continuing to work on Active Waiting to make it the best possible digital health solution,
          constantly exploring new features and technologies that can be integrated to improve the user
          experience.
        </p>

        <div className="mt-8 rounded-2xl border border-teal-brand/20 bg-teal-light p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-wide text-teal-brand">
            Current development sprint
          </div>
          <h3 className="mt-2 text-xl font-semibold text-gray-900">AR exercise guidance</h3>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            We are implementing an AR guidance feature, where a 3D avatar is overlaid in the user's
            environment to demonstrate the correct execution of the exercise recommendation in their exact
            surroundings.
          </p>
        </div>

        <h3 className="mt-12 text-xl font-semibold text-gray-900">Future application perspectives</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {perspectives.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-brand/10 text-teal-brand">
                {p.icon}
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-900">{p.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
