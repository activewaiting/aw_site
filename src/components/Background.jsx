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
            Active Waiting has been scientifically evaluated through multiple studies, demonstrating its
            effectiveness as a tool for promoting physical activity during everyday waiting situations.
          </p>
        </div>
      </div>
    </section>
  )
}
