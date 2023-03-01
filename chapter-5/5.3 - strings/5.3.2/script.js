function checkSpam(str) {
  let lowercaseStr = str.toLowerCase();
  const result =
    lowercaseStr.includes('viagra') || lowercaseStr.includes('xxx');

  return result;
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam('innocent rabbit'));
