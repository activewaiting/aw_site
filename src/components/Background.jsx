export default function Background() {
  return (
    <section id="background" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Background</h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          Active Waiting was developed at the Ludwig Boltzmann Institute for Digital Health and Prevention,
          as part of a Master's thesis project. It has since been further developed and iterated on, and
          multiple studies have been run to investigate the usability, experience, and efficacy of the tool.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          The intervention concept comes from research sustainably supporting increased daily activity.
          For many people, short waiting periods and everyday breaks represent an untapped opportunity for
          physical activity. Research shows that brief bouts of movement, such as exercise snacks or
          vigorous intermittent lifestyle physical activity (VILPA), can deliver meaningful health benefits,
          including improvements in cardiometabolic health and reduced mortality risk.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          However, people rarely use these moments for activity because they must quickly determine what
          exercises are appropriate, safe, and socially acceptable within their current environment. This
          uncertainty creates cognitive effort that can discourage participation. Digital health interventions
          such as Active Waiting can help overcome this barrier by providing context-aware activity
          recommendations that are tailored to the user's surroundings, making it easier to integrate
          physical activity into everyday life.
        </p>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-900">Application and Research Evidence</h3>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Active Waiting has been applied in multiple studies and a Master's thesis. An initial study
            explored the usability and user experience of the app, and determined whether the application
            is something that people would actually use &mdash; the resulting publication can be viewed below.
            A second user study in early 2026 compared the standard version of Active Waiting to the
            AI-enabled version to determine which one produced more appropriate and acceptable exercise
            recommendations. The results strongly favoured the AI-enabled version, and the resulting
            publication is currently under revision.
          </p>

          <a
            href="https://ebooks.iospress.nl/doi/10.3233/SHTI250167"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-teal-brand hover:shadow-md"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-brand/10 text-teal-brand">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-teal-brand">
                Peer-reviewed publication
              </div>
              <div className="mt-1 font-semibold text-gray-900 group-hover:text-teal-brand">
                Usability and user experience of the Active Waiting application
              </div>
              <div className="mt-1 text-sm text-gray-500">
                IOS Press &middot; doi:10.3233/SHTI250167
              </div>
            </div>
            <svg
              className="ml-auto h-5 w-5 flex-shrink-0 self-center text-gray-400 transition group-hover:text-teal-brand"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
