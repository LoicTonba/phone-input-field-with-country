const countries = [
    {name: "Afghanistan", code: "AF", phone: +93},
    {name: "Aland Islands", code: "AX", phone: +358},
    {name: "Albania", code: "AL", phone: +355},
    {name: "Algeria", code: "DZ", phone: +213},
    {name: "American Samoa", code: "AS", phone: +1684},
    {name: "Andorra", code: "AD", phone: +376},
    {name: "Angola", code: "AD", phone: +244},
    {name: "Anguilla", code: "AI", phone: +1264},
    {name: "Antarctica", code: "AQ", phone: 672},
    {name: "Antigua and Barbuda", code: "AG", phone: +1268},
    {name: "Argentina", code: "AR", phone: +54},
    {name: "Armenia", code: "AM", phone: +374},
    {name: "Aruba", code: "AW", phone: +297},
    {name: "Australia", code: "AU", phone: +61},
    {name: "Austria", code: "AT", phone: +43},
    {name: "Azerbaijan", code: "AZ", phone: +994},
    {name: "Bahamas", code: "BS", phone: +1242},
    {name: "Bahrain", code: "BH", phone: +973},
    {name: "Bangladesh", code: "BD", phone: +880},
    {name: "Cameroon", code: "CM", phone: +237},
    
    
    {name: "Swaziland", code: "SZ", phone: +268},
    {name: "Sweden", code: "SE", phone: +46},
    {name: "Switzerland", code: "CH", phone: 41},
    {name: "Syrian Arab Republic", code: "SY", phone: +963},
    {name: "Taiwan, Province of China", code: "TW", phone: +886},
    {name: "Tajikistan", code: "TJ", phone: +992},
    {name: "Tanzania, United Republic of", code: "TZ", phone: +255},
    {name: "Thailand", code: "TH", phone: +66},
    {name: "Timor-Leste", code: "TL", phone: +670},
    {name: "Togo", code: "TG", phone: +228},
    {name: "Tokelau", code: "TK", phone: +690},
    {name: "Tonga", code: "TO", phone: +676},
    {name: "Trinidad and Tobago", code: "TT", phone: +1868},
    {name: "Tunisia", code: "TN", phone: +216},
    {name: "Turkey", code: "TR", phone: +90},
    {name: "Turkmenistan", code: "TM", phone: +7370},
    {name: "Turks and Caicos Islands", code: "TC", phone: +358},
    {name: "Tuvalu", code: "TV", phone: +688},
    {name: "Uganda", code: "UG", phone: +256},
    {name: "Ukraine", code: "UA", phone: +380},
    {name: "United Arab Emirates", code: "AE", phone: +971},
    {name: "United kingdom", code: "GB", phone: +44},
    {name: "United States", code: "US", phone: +1},
    {name: "United States Minor Outlying Islands", code: "UM", phone: +1},
    {name: "Uruguay", code: "UY", phone: +598},
    {name: "Uzbekistan", code: "UZ", phone: +678},
    {name: "Venezuela", code: "VE", phone: +58},
    {name: "Vanuatu", code: "VU", phone: +678},
    {name: "Viet Nam", code: "VN", phone: +84},
    {name: "Virgin Islands, British", code: "VG", phone: +1284},
    {name: "Virgin Islands, U.s.", code: "VI", phone: +1340},
    {name: "Wallis and Futuna", code: "WF", phone: +681},
    {name: "Western Sahara", code: "EH", phone: +212},
    {name: "Yemen", code: "YE", phone: +967},
    {name: "Zambia", code: "ZM", phone: +260},
    {name: "Zimbabwe", code: "ZW", phone: +263}
];

const select_box = document.querySelector('.options'),
    search_box = document.querySelector('.search-box'),
    input_box = document.querySelector('input[type="tel"]'),
    selected_option = document.querySelector('.selected-option div');

   

let options = null;
    
for(country of countries) {
    const option = `
    <li class="option">
        <div>
            <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
            <span class="country-name">${country.name}</span>
        </div>
        <strong>+${country.phone}</strong>
    </li>`;

    selected_option.addEventListener('click', () => {
        select_box.classList.toggle('active');
        selected_option.classList.toggle('active');
    })

    select_box.querySelector('ol').insertAdjacentHTML('beforeend', option)
    options = document.querySelectorAll('.option');
}

function selectOption(){
    console.log(this);
    const icon = this.querySelector('.iconify').cloneNode(true),
    phone_code = this.querySelector('strong').cloneNode(true);

    selected_option.innerHTML = '';
    selected_option.append(icon , phone_code)

    input_box.value = phone_code.innerText;

    select_box.classList.remove('active');
    selected_option.classList.remove('active');

    select_box.value = '';
    select_box.querySelectorAll('.hide').forEach(el=> el.classList.remove('hide'));
}

function searchCountry() {
    let search_query = search_box.value.toLowerCase();
    for(option of options){
        let is_matched = option.querySelector('.country-name').innerText.toLowerCase().includes(search_query);
        option.classList.toggle('hide', !is_matched )
    }
}

selected_option.addEventListener('click', () => {
    select_box.classList.toggle('active');
    selected_option.classList.toggle('active');
})

options.forEach(option=> option.addEventListener('click', selectOption));
search_box.addEventListener('input', searchCountry);