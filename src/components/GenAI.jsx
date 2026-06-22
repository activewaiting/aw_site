export default function GenAI() {
  return (
    <section id="genai" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">GenAI Integration</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
          Active Waiting also has an innovative GenAI feature that makes the app even easier to integrate
          into daily routines. Users can take a photo of their immediate environment, which will then be
          analysed by the AI to determine what features are present. The AI will then recommend specific
          exercises that suit the characteristics of the user's environment, allowing for immediate
          execution instead of spending time finding an appropriate exercise. An especially important
          consideration for exercises that are to be performed within short periods of time.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {['ai1.png', 'ai2.png', 'ai3.png'].map((img, i) => (
            <div key={img} className="relative">
              <img
                src={`/${img}`}
                alt={`AI feature step ${i + 1}`}
                className="mx-auto max-h-[500px] rounded-2xl shadow-lg"
              />
              <div className="mt-3 text-center text-sm font-medium text-gray-500">
                {['Select "Generate with AI"', 'Take a photo of your surroundings', 'Get AI-tailored exercises'][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
