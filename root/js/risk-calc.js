function calculateRisk() {
  const balance = parseFloat(document.getElementById('balance').value);
  const riskPercent = parseFloat(document.getElementById('riskPercent').value);

  if (isNaN(balance) || isNaN(riskPercent)) {
      document.getElementById('riskResult').innerHTML = `
        <h3>🚨 Error: Please enter valid numbers for balance and risk percentage.</h3>`;
      return;
  }

  const riskAmount = ((riskPercent / 100) * balance).toFixed(2);
  
  document.getElementById('riskResult').innerHTML = `
    <h3>💡 Risk Summary</h3>
    <p>You can risk: <strong>$${riskAmount}</strong> per trade</p>`;
}

function clear() {
  const balanceInput = document.getElementById('balance');
  const riskPercentInput = document.getElementById('riskPercent');
  balanceInput.value = '';
  riskPercentInput.value = '';
  
  document.getElementById('risk-management-form').innerHTML = '';
}