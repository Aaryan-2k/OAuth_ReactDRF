export default function RegistrationForm(){
    return (
        <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-slate-900 dark:text-white tracking-tight text-4xl md:text-5xl font-bold leading-tight"> Join Our Community </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg mt-4"> Get started in seconds and unlock all features. </p>
            <div className="mt-8 hidden lg:block">
              <img className="rounded-xl object-cover w-full h-80" alt="Abstract representation" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
            </div>
          </div>
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800">
              <h1 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] text-left pb-4"> Create an Account </h1>
              <div className="flex flex-col gap-3">
                <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.578 12.27c0-.79-.07-1.54-.2-2.27h-9.8v4.28h5.68c-.25 1.38-.98 2.56-2.09 3.39v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.17z" fill="#4285F4" />
                    <path d="M12.578 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.05-3.71 1.05-2.85 0-5.26-1.92-6.12-4.49H2.78v2.86C4.68 20.93 8.35 23 12.578 23z" fill="#34A853" />
                    <path d="M6.458 14.12c-.18-.54-.28-1.11-.28-1.7s.1-1.16.28-1.7V7.86H2.78C2.29 9.05 2 10.45 2 12s.29 2.95.78 4.14l3.678-2.86z" fill="#FBBC05" />
                    <path d="M12.578 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C18.028 2.09 15.538 1 12.578 1 8.35 1 4.68 3.07 2.78 6.14l3.68 2.86c.86-2.57 3.27-4.49 6.118-4.62z" fill="#EA4335" />
                  </svg>
                  <span className="truncate">Sign up with Google</span>
                </button>
                <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <svg className="h-5 w-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.024C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  <span className="truncate">Sign up with Facebook</span>
                </button>
              </div>
              <div className="flex items-center gap-3 my-6">
                <hr className="w-full border-slate-200 dark:border-slate-700" />
                <span className="text-xs text-slate-500 dark:text-slate-400">OR</span>
                <hr className="w-full border-slate-200 dark:border-slate-700" />
              </div>
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block" htmlFor="first-name"> First Name </label>
                    <input className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors outline-none" id="first-name" placeholder="John" type="text" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block" htmlFor="last-name"> Last Name </label>
                    <input className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors outline-none" id="last-name" placeholder="Doe" type="text" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block" htmlFor="email"> Email </label>
                  <input className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors outline-none" id="email" placeholder="john.doe@example.com" type="email" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block" htmlFor="password"> Password </label>
                  <div className="relative">
                    <input className="w-full h-10 px-3 pr-10 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors outline-none" id="password" placeholder="••••••••" type="password" />
                    <button className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 dark:text-slate-400" type="button">
                      <span className="material-symbols-outlined text-base">visibility_off</span>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block" htmlFor="confirm-password"> Confirm Password </label>
                  <input className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors outline-none" id="confirm-password" placeholder="••••••••" type="password" />
                </div>
                <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold mt-4 hover:bg-primary/90 transition-colors" type="submit">
                  <span className="truncate">Create Account</span>
                </button>
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-2"> By creating an account, you agree to our <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>. </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
}