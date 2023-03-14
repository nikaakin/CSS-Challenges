import Elements from "./100";

export const links = [
  {
    id: 0,
    name: "#day-1",
    link: "day-1",
    description:
      "An easy start into the challenge with a custom build number with gradient.",
    element: <Elements.Day1 />,
  },
  {
    id: 1,
    name: "#day-2",
    link: "day-2",
    description:
      "Used on almost every website by now, simple but impressively animated it becomes a real eye-catcher",
    element: <Elements.Day2 />,
  },
];

export type LinksType = typeof links;
export type LinkType = typeof links[0];
