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
                My passion is teaching Quran and Islamic knowledge, and also benefiting the young generation with tech skills that will aid them in life and beyond. I believe true success is when our youth are grounded in faith and empowered with practical skills for the modern world. Imagine a world where our generation leads the way in technology, building innovations that change the world for good—while never losing sight of their Islamic values. I dream of Muslim youth who are creators, innovators, and leaders in AI, software, and data science, using their skills to uplift their communities and serve humanity.

                Parents, your greatest legacy is not just in what you provide, but in how you inspire your children to excel in both faith and achievement. Encourage them to seek knowledge, nurture their curiosity, and guide them to use technology as a tool for positive change. Together, let’s raise a generation that is confident, capable, and guided by the light of Islam—ready to shape the future and leave a mark of excellence and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
