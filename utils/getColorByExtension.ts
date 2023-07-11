const extColor = {
  pdf: "purple",
  xls: "green",
  doc: "blue",
  txt: "blue",
  png: "orange",
  jpg: "orange",
  jpeg: "orange",
  gif: "orange",
  webp: "orange",
  bmp: "orange",
  zip: "red",
} as const;

export type Extension = keyof typeof extColor;
export type Color = typeof extColor[Extension];

export const getColorByExtension = (ext: string): Color => {
  // @ts-ignore
  return extColor[ext];
};