import Link from "next/link";
import RevealOnScroll from "./components/RevealOnScroll";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col justify-center mt-12">
        <h1 className="font-bold text-[64px] max-w-[800px] m-auto text-center leading-none">
          <span className="text-[94px]">Meet Emi</span>
          <br />
          The Event Management and Invitation App
        </h1>

        <p className="text-center m-auto max-w-[800px] mt-8 bg-white/50">
          Emi makes it simple to plan events, send invitations, and keep
          everyone in the loop. Spend less time organizing and more time with
          friends and family celebrating.
        </p>

        <RevealOnScroll
          className="flex justify-center items-center mt-12"
          threshold={0.1}
          animation="reveal-up"
        >
          <Link
            href="/event/create"
            className="inline-block px-5 py-3 rounded-md font-bold bg-rose text-center"
          >
            Create Event
          </Link>
        </RevealOnScroll>

        <div className="relative min-h-screen w-full mt-14">
          <img
            src="desktop-mockup.png"
            alt=""
            className="absolute max-w-[1100px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            id="hero-desktop"
          />
          <RevealOnScroll
            threshold={0.4}
            className="absolute top-[25%] left-0 right-0 flex justify-center items-center"
            animation="reveal-up"
          >
            <img src="phone-mockup.png" alt="" className="max-w-[280px] " />
          </RevealOnScroll>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="mt-30">
        <h2 className="font-bold text-[64px] max-w-[800px] m-auto text-center">
          How it Works
        </h2>

        <p className="text-center m-auto max-w-[800px] mt-2">
          Easily create events, send invitations, and manage attendees with Emi.
        </p>

        <div className="mt-20">
          <ul className="flex flex-row w-full gap-6 justify-center">
            <li className="max-w-[310px] aspect-3/4 flex-1">
              <RevealOnScroll
                className="block w-full h-full bg-rose/75 px-6 py-14 rounded-md"
                threshold={0.2}
                animation="reveal-up"
              >
                <h3 className="font-semibold text-2xl mb-4">
                  Create Your Event
                </h3>
                <p>
                  Set the name, date, location, and details in seconds. Whether
                  it's a private dinner or a full-scale conference, setup is
                  simple.
                </p>
                <img src="#" alt="" className="" />
              </RevealOnScroll>
            </li>
            <li className="max-w-[310px] aspect-3/4 translate-y-14 flex-1">
              <RevealOnScroll
                className="block w-full h-full bg-rose/75 px-6 py-14 rounded-md"
                threshold={0.2}
                animation="reveal-up"
                delay={400}
              >
                <h3 className="font-semibold text-2xl mb-4">
                  Send Invites Instantly
                </h3>
                <p>
                  Generate unique links that allow your invitees to RSVP without
                  needing an Emi account.
                </p>
                <img src="#" alt="" className="" />
              </RevealOnScroll>
            </li>
            <li className="max-w-[310px] aspect-3/4 translate-y-28 flex-1">
              <RevealOnScroll
                className="block w-full h-full bg-rose/75 px-6 py-14 rounded-md"
                threshold={0.2}
                animation="reveal-up"
                delay={600}
              >
                <h3 className="font-semibold text-2xl mb-4">Track Responses</h3>
                <p>
                  View RSVPs in real-time. Send reminders, update event details,
                  and manage attendees from the Emi dashboard.
                </p>
                <img src="#" alt="" className="" />
              </RevealOnScroll>
            </li>
          </ul>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="flex flex-row mt-40">
        <div className="w-[50%] flex flex-col justify-center">
          <h2 className="font-bold text-[64px]">Emi Mobile App</h2>
          <p className="max-w-[450px] mt-2">
            Create events, send invitations, and manage attendees on the go with
            the Emi mobile app. Get real-time notifications about RSVPs or make
            adjustments to event details wherever you may be.
          </p>
          <div className="flex flex-row gap-2 mt-6">
            <RevealOnScroll
              className="overflow-hidden rounded-lg"
              threshold={0.5}
              animation="reveal-up"
            >
              <a href="">
                <img src="apple-download.svg" alt="" className="h-10" />
              </a>
            </RevealOnScroll>
            <RevealOnScroll
              className="overflow-hidden rounded-lg"
              threshold={0.5}
              delay={400}
              animation="reveal-up"
            >
              <a href="">
                <img src="google-download.svg" alt="" className="h-10" />
              </a>
            </RevealOnScroll>
          </div>
        </div>
        <div className="relative w-[50%] min-h-screen">
          <RevealOnScroll
            className="absolute top-0 left-0 right-0 bottom-0"
            threshold={0.2}
            animation="reveal-left"
          >
            <img
              src="phone-mockup.png"
              alt=""
              className="w-[280px] absolute top-[50%] left-[50%] -translate-x-[80%] -translate-y-[50%]"
            />
          </RevealOnScroll>
          <RevealOnScroll
            className="absolute top-0 left-0 right-0 bottom-0"
            threshold={0.2}
            animation="reveal-left"
            delay={600}
          >
            <img
              src="phone-mockup.png"
              alt=""
              className="w-[310px] absolute top-[50%] left-[50%] -translate-x-[20%] -translate-y-[50%]"
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16">
        <h2 className="font-bold text-[64px] max-w-[800px] m-auto text-center">
          Simplify Event Planning
        </h2>
        <p className="text-center m-auto max-w-[800px] mt-2">
          Emi offers a range of features designed to make event management easy
          and efficient.
        </p>
        <div className="mt-12">
          <ul className="grid grid-cols-2 gap-6">
            <li>
              <RevealOnScroll
                className="bg-rose/75 py-10 pl-8 pr-18 w-full flex flex-row gap-6 h-full rounded-md"
                threshold={0.5}
                animation="reveal-up"
              >
                <div className="flex flex-col justify-center shrink-0">
                  <img
                    src="#"
                    alt=""
                    className="w-24 h-24 rounded-full border"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-4">
                    Event Dashboards
                  </h3>
                  <p>
                    Manage event details, create invitations, and track
                    responses all in one place.
                  </p>
                </div>
              </RevealOnScroll>
            </li>
            <li>
              <RevealOnScroll
                className="bg-rose/75 py-10 pl-8 pr-18 w-full flex flex-row gap-6 h-full rounded-md"
                threshold={0.5}
                animation="reveal-up"
                delay={400}
              >
                <div className="flex flex-col justify-center shrink-0">
                  <img
                    src="#"
                    alt=""
                    className="w-24 h-24 rounded-full border"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-4">
                    Hassle-free Invitations
                  </h3>
                  <p>
                    Invitees receive uniquely generated links, allowing them to
                    respond without an account.
                  </p>
                </div>
              </RevealOnScroll>
            </li>
            <li>
              <RevealOnScroll
                className="bg-rose/75 py-10 pl-8 pr-18 w-full flex flex-row gap-6 h-full rounded-md"
                threshold={0.5}
                animation="reveal-up"
                delay={600}
              >
                <div className="flex flex-col justify-center shrink-0">
                  <img
                    src="#"
                    alt=""
                    className="w-24 h-24 rounded-full border"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-4">
                    Notes and Details
                  </h3>
                  <p>
                    Add schedules, instructions, or special details so guests
                    have everything they need in one place.
                  </p>
                </div>
              </RevealOnScroll>
            </li>
            <li>
              <RevealOnScroll
                className="bg-rose/75 py-10 pl-8 pr-18 w-full flex flex-row gap-6 h-full rounded-md"
                threshold={0.5}
                animation="reveal-up"
                delay={800}
              >
                <div className="flex flex-col justify-center shrink-0">
                  <img
                    src="#"
                    alt=""
                    className="w-24 h-24 rounded-full border"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-4">
                    Keep Guests Informed
                  </h3>
                  <p>
                    Immediately send notifications to your guests when any event
                    details change.
                  </p>
                </div>
              </RevealOnScroll>
            </li>
          </ul>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="flex flex-row mt-20 mb-10">
        <div className="flex justify-center w-[50%]">
          <img src="balloons.png" alt="" className="max-w-[550px]" />
        </div>
        <div className="flex flex-col w-[50%] justify-center items-start">
          <h2 className="font-bold text-[64px]">Get Started Today</h2>
          <p className="max-w-[450px] mt-2">
            Emi makes it easy to bring your next event to life! Simply create
            your free account, and begin creating your event now!
          </p>
          <RevealOnScroll
            className="mt-6"
            threshold={0.5}
            animation="reveal-up"
          >
            <Link
              href=""
              className="block px-5 py-3 rounded-md font-bold bg-rose"
            >
              Sign Up
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
