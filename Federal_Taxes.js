function get_federal_income_tax() {

    const yearly_income = calculate_yearly_salary(document.getElementById("hourly_rate").value)

    const federal_tax_withholding = yearly_income * get_tax_rate(yearly_income)

    document.getElementById('fed_tax_amount').innerHTML = `Federal Tax Withholding: ${federal_tax_withholding}`
    document.getElementById('pay_after_fed_tax').innerHTML = `Pay After Federal Income Tax: ${yearly_income - federal_tax_withholding}`

}

function get_tax_rate(yearly_income) {

    let tax_rate;

    switch(true) {
        case(0 < yearly_income <= 11000):
            tax_rate = 0.10;
        case(11000 < yearly_income <= 44725):
            tax_rate = 0.12;
        case(44725 < yearly_income <= 95375):
            tax_rate = 0.22;
        case(95375 < yearly_income <= 182100):
            tax_rate = 0.24;
        case(182100 < yearly_income <= 231250):
            tax_rate = 0.32;
        case(231250 < yearly_income <= 578125):
            tax_rate = 0.35
        case(578125 < yearly_income):
            tax_rate = 0.37
    }

    return tax_rate
}

