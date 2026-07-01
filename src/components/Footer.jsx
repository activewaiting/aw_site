export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-gray-400">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <img src={`${import.meta.env.BASE_URL}awlogo.png`} alt="Active Waiting" className="mx-auto h-12 w-12 rounded-lg" />
        <p className="mt-4 text-sm">
          Developed at the Ludwig Boltzmann Institute for Digital Health and Prevention.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Active Waiting. All rights reserved.
        </p>
        <nav className="mt-4 flex justify-center gap-6 text-sm">
          <a
            href="https://resources.lbidhp.at/heroways/legal-notice.html"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Impressum
          </a>
          <a
            href="https://resources.lbidhp.at/heroways/privacy-policy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  )
}
