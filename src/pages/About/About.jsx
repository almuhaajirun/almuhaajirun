import HeroImg from "@/assets/images/me.png";
import GithubLogo from "@/assets/react.svg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
          Quran and Islamic Teacher, Tech Educator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <div className="p-1 rounded-[18px] bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 shadow-lg">
                  <img
                    src={HeroImg}
                    className="rounded-[15px] block border-4 border-gray-900"
                    alt="My portrait"
                    width={1207}
                    height={929}
                  />
                </div>
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Assalamu Alaikum! I'm Abu Abdillah, known as Ustadh Abdul Lateef. My passion is teaching technology by integrating the Quran and Islamic core values, making Islamic learning the foundation before anything else. I believe education is not limited to the four walls of a classroom, and being a Ustadh doesn't stop you from helping Islam with technology.
              </p>
              <p className="text-white">
                I encourage parents to see that true education goes beyond formal settings. My mission is to empower the Ummah with tech skills while keeping Islamic principles at the heart of every lesson. Join me as we make learning Islam and technology a journey for all.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    "Technology is a tool, but Islam is the foundation. Let's build a future where our children excel in tech and faith, and where every Ustadh can use technology to benefit Islam."
                  </p>
                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Abu Abdillah (Ustadh Abdul Lateef)
                    </cite>
                    <div className="flex items-center gap-2">
                      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <img
                          className="h-5 w-fit"
                          src={GithubLogo}
                          alt="GitHub Logo"
                          height="20"
                          width="auto"
                        />
                      </a>
                      <span className="text-white">My GitHub</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
