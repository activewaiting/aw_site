export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Contact</h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          If you have any questions or comments, or would like to receive more information about Active
          Waiting, please feel free to contact us at any time.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-4 rounded-2xl bg-teal-light p-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-teal-brand shadow-sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-gray-900">
                Ludwig Boltzmann Institute for Digital Health and Prevention
              </div>
              <address className="mt-1 not-italic leading-relaxed text-gray-600">
                Lindhofstr. 22<br />
                5020 Salzburg, Austria
              </address>
            </div>
          </div>

          <a
            href="mailto:faith.young@lbg.ac.at"
            className="group flex items-start gap-4 rounded-2xl bg-teal-light p-6 transition hover:shadow-md"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-teal-brand shadow-sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Email</div>
              <div className="mt-1 text-gray-600 group-hover:text-teal-brand">faith.young@lbg.ac.at</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
