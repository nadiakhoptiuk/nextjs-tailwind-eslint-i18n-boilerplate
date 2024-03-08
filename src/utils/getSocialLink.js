export function getSocialLink(str) {
  const regexInstagram = /@([a-zA-Z0-9._]+)/g;
  return str.split(regexInstagram);
}
