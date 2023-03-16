import Elements from "./100";

export const links = [
  {
    id: 0,
    name: "100 Days CSS",
    link: "day-1",
    description:
      "An easy start into the challenge with a custom build number with gradient.",
    element: <Elements.Day1 />,
  },
  {
    id: 1,
    name: "Menu Icon",
    link: "day-2",
    description:
      "Used on almost every website by now, simple but impressively animated it becomes a real eye-catcher",
    element: <Elements.Day2 />,
  },
  {
    id: 2,
    name: "The Pyramide",
    link: "day-3",
    description:
      "Not as challenging as the real pyramids in Egypt, but the shadow path is not easy.",
    element: <Elements.Day3 />,
  },
];

export type LinksType = typeof links;
export type LinkType = typeof links[0];
