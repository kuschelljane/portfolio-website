export default function Background() {
    return (
      <div className="dark:text-white">
         <p className="text-base font-semibold text-gray-800 mb-2 dark:text-white">About Me</p>
         <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5">

            <div className="w-full md:w-1/4">
              <img src="/images/pic.png" className="w-full h-96 object-contain"/>
            </div>

            <div className="w-full md:w-3/4 md:pr-5">
                <h1 className="text-5xl font-light">Hi, my <br /> name is
                    <span className="font-normal"> Kuschell</span>.
                </h1>
                <div className="flex flex-row text-base gap-3 mt-3">
                  <a href="https://www.linkedin.com/in/kuschell-jane-amulong-400034181/" target="_blank"><i className="bi bi-linkedin"></i></a>
                  <a href="https://github.com/kuschelljane" target="_blank"><i className="bi bi-github"></i></a>
                  <a href="mailto:kuschelljaneamulong@gmail.com" target="_blank"><i className="bi bi-envelope-fill"></i></a>
                  <i className="bi bi-file-person-fill"></i>
                </div>
                <p className="mt-3">I am an aspiring full-stack developer with nearly two years of development experience. I enjoy building responsive, user-focused web applications and continuously expanding my skill set across the full development stack.</p>
                <div className="mt-3">
                  <p><span className="font-medium">Front-end Development: </span>HTML, CSS, JS, ReactJS, NextJS, TailwindCSS</p>
                  <p><span className="font-medium">Back-end Development: </span>PHP, Laravel</p>
                  <p><span className="font-medium">Database Technologies: </span>SQL, Firebase, Supabase</p>
                  <p><span className="font-medium">Development Tools: </span>Git Commands, Axios</p>
                </div>
            </div>
         </div>
      </div>
    );
  }
  