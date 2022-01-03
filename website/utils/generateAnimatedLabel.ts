const generateAnimatedLabel = (label: string) => {
  let _label = "";

  for (let i = 0; i < 10; i++) {
    _label += `${label}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
  }

  return _label;
};

export default generateAnimatedLabel;
