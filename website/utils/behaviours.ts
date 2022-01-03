export const disableScroll = () => {
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "hidden";
  document.body.style.paddingRight = "16px";
};

export const enableScroll = () => {
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "auto";
  document.body.style.paddingRight = "0";
};
