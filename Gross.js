function get_gross_pay() {
    const hours_worked = parseFloat(document.getElementById('hours').value) || 0
    const rate = parseFloat(document.getElementById('hourly_rate').value) || 0
    const pay_period = parseInt(document.getElementById('pay_period_int').value) || 1

    const gross_pay = (hours_worked * rate) * pay_period;

    document.getElementById("gross_pay").textContent = gross_pay.toFixed(2);
}

function calculate_yearly_salary(hourly_rate) {
    const hours = document.getElementById("average_weekly_hours").value;
    const weekly = hourly_rate * hours;
    const monthly = weekly * 4;
    const yearly = monthly * 12;
    return yearly
}

window.onload = get_gross_pay
document.getElementById('hourly_rate').addEventListener('input', get_gross_pay);
document.getElementById('hours').addEventListener('input', get_gross_pay);
document.getElementById('pay_period_int').addEventListener('input', get_gross_pay);