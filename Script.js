function get_gross_pay() {
    const hours = document.getElementById('hours').value
    const rate = document.getElementById('hourly_rate').value
    const gross_pay = hours * rate;
    document.getElementById("gross_pay").textContent = `Gross Pay: ${gross_pay}`;
}