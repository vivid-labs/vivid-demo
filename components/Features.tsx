import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => (
  <div className="mb-1 md:text-[3rem] text-[2rem] font-extrabold leading-snug tracking-tight">
    {children}
  </div>
);

const Body = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col gap-3 text-lg md:text-xl text-grayscale-600 dark:text-zinc-400">
    {children}
  </div>
);

const Section = ({
  children,
  lighter,
  right,
  center,
}: {
  children: ReactNode;
  lighter?: boolean;
  right?: boolean;
  center?: boolean;
}) => (
  <section
    className={`h-fit py-24 ${
      lighter
        ? "bg-grayscale-100 dark:bg-zinc-900 dark:text-zinc-200"
        : " bg-grayscale-200 dark:bg-zinc-800 dark:text-zinc-200"
    } `}
  >
    <div
      className={`max-w-[1440px] mx-auto flex items-center flex-col ${
        center ? "md:flex-col" : right ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {children}
    </div>
  </section>
);

const Demo = ({
  name,
  bumpLeft,
  center,
  gradientString,
}: {
  name: string;
  bumpLeft?: boolean;
  center?: boolean;
  gradientString: string;
}) => (
  <div
    className={`w-5/6 md:w-1/2 p-4 md:p-12 bg-gradient-to-br ${gradientString} rounded-xl ${
      center ? "" : bumpLeft ? "md:-translate-x-14" : "md:translate-x-14"
    } `}
  >
    <div
      className={`relative inline-flex flex-col overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.4)] rounded-xl`}
      data-aos={`${
        center ? "zoom-y-out" : bumpLeft ? "fade-right" : "fade-left"
      }`}
      data-aos-delay="150"
    >
      <img src="images/mac-bar.png" alt="Mac window bar" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full mx-auto md:max-w-none"
      >
        <source src={`/images/${name}.webm`} type="video/webm" />
        <source src={`/images/${name}.mp4`} type="video/mp4" />
      </video>
    </div>
  </div>
);

const Text = ({
  children,
  center,
}: {
  children: ReactNode;
  center?: boolean;
}) => (
  <div
    className={`flex w-5/6 flex-col gap-4 text-center mb-8 mx-auto ${
      center ? "md:w-2/3" : "md:w-1/3 md:text-left md:my-auto"
    }`}
    data-aos="zoom-y-out"
  >
    {children}
  </div>
);

const gradientString = (colors: string) =>
  `bg-gradient-to-r bg-clip-text text-transparent ${colors}`;

export const Features = () => {
  return (
    <>
      <Section center>
        <Text center>
          <Title>
            <span className={gradientString("from-amber-500 to-red-500")}>
              "Just right"
            </span>{" "}
            in seconds.
          </Title>
          <Body>Test styling and update code right in your browser.</Body>
        </Text>
        <Demo
          name="palette"
          center
          gradientString="from-amber-500 to-red-500"
        />
      </Section>
      <Section lighter right>
        <Text>
          <Title>
            <span className={gradientString("from-sky-500 to-pink-500")}>
              Resize
            </span>
            <br /> with a click.
          </Title>
          <Body>Just drag to resize and realign components.</Body>
        </Text>
        <Demo
          name="resize"
          bumpLeft
          gradientString="from-sky-500 to-pink-500"
        />
      </Section>
      <Section>
        <Text>
          <Title>
            <span className={gradientString("from-green-500 to-blue-500")}>
              Smart commands
            </span>
            <br /> cut the guesswork.
          </Title>
          <Body>Vivid smart commands apply the right styles every time.</Body>
        </Text>
        <Demo name="center" gradientString="from-green-500 to-sky-500" />
      </Section>
    </>
  );
};

// Built with Vivid ⚡️
