export const scrollToSection = (section) => {
  window.scrollTo({
    top: section.offsetTop - 30,
    left: section.offsetLeft,
    behavior: "smooth",
  });
};
