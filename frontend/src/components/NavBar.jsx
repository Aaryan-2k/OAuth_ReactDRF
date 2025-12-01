export default function NavBar(){
    return (
        <header className="flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
            <div className="size-6">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd" />
                </svg>
            </div>
            <h2 className="text-lg font-bold">WebApp</h2>
            </div>
            <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600 dark:text-slate-400 hidden sm:block"> Already have an account? </span>
            <a className="inline-flex items-center justify-center rounded-lg h-9 px-4 text-sm font-medium transition-colors bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50 hover:bg-slate-300 dark:hover:bg-slate-700" href="#"> Login </a>
            </div>
      </header>
    )
}