export const TextFormat = (text: string) => {
  let textSplit = text.split('. ');
  let format = `${textSplit[0]}.`;
  return format;
};
