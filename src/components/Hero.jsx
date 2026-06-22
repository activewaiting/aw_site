export default function Hero() {
  return (
    <section className="relative mt-16 flex min-h-[70vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/header.png"
          alt="Person using Active Waiting app on phone"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Active Waiting
        </h1>
        <p className="mt-4 text-lg font-medium md:text-xl lg:text-2xl">
          Facilitating short bouts of exercise in everyday life.
        </p>
        <p className="mt-2 text-base opacity-90 md:text-lg">
          Use waiting time actively!
        </p>
        <a
          href="#about"
          className="mt-8 inline-block rounded-full bg-teal-brand px-8 py-3 font-semibold text-white transition hover:bg-teal-dark"
        >
          Learn More
        </a>
      </div>
    </section>
  )
}
