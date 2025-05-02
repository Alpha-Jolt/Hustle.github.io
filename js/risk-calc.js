function calculateRisk() {
  const balance = parseFloat(document.getElementById('balance').value);
  const riskPercent = parseFloat(document.getElementById('riskPercent').value);

  if (isNaN(balance) || isNaN(riskPercent) || balance <= 0 || riskPercent <= 0) {
    document.getElementById('riskResult').innerHTML = `
      <h3>🚨 Error: Please enter valid numbers for balance and risk percentage.</h3>`;
    return;
  }

  const riskAmount = ((riskPercent / 100) * balance).toFixed(2);

  document.getElementById('riskResult').innerHTML = `
    <h3>💡 Risk Summary</h3>
    <p>You can risk: <strong>$${riskAmount}</strong> per trade</p>`;
}

function clearInputs() {
  document.getElementById('balance').value = '';
  document.getElementById('riskPercent').value = '';
  document.getElementById('riskResult').innerHTML = '';
}
