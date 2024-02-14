const baseFontSize = 16;

function convertRemToVw() {
  const remValue = document.getElementById('remValue').value;
  const vwResult = (parseFloat(remValue) * baseFontSize) / (document.documentElement.clientWidth / 100);
  document.getElementById('result').innerHTML = `VW: ${vwResult.toFixed(2)}`;
}

function convertRemToVh() {
  const remValue = document.getElementById('remValue').value;
  const vhResult = (parseFloat(remValue) * baseFontSize) / (document.documentElement.clientHeight / 100);
  document.getElementById('result').innerHTML = `VH: ${vhResult.toFixed(2)}`;
}

function convertVwToRem() {
  const vwValue = document.getElementById('vwValue').value;
  const remResult = (parseFloat(vwValue) * (document.documentElement.clientWidth / 100)) / baseFontSize;
  document.getElementById('result').innerHTML = `REM: ${remResult.toFixed(2)}`;
}

function convertVhToRem() {
  const vhValue = document.getElementById('vhValue').value;
  const remResult = (parseFloat(vhValue) * (document.documentElement.clientHeight / 100)) / baseFontSize;
  document.getElementById('result').innerHTML = `REM: ${remResult.toFixed(2)}`;
}