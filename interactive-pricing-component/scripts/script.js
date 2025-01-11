// DOM Elements
const viewsContainer = document.querySelector('span.pricing-card__views')
const rangeInput = document.querySelector('input.pricing-card__views-range')
const costContainer = document.querySelector('span.pricing-card__price')
const priceFreqContainer = document.querySelector('span.pricing-card__billing-frequency')
const frequencyToggle = document.querySelector('input#billing-freq')
const form = document.querySelector('form.pricing-card')

console.log({ rangeInput, viewsContainer, costContainer, priceFreqContainer, frequencyToggle, form })



// Data & Global Variables
const VIEWS_DATA = [
    {
        pageViews: '10k',
        monthlyCost: 8,
        leftPercentage: 0
    },
    {
        pageViews: '50k',
        monthlyCost: 12,
        leftPercentage: 25
    },
    {
        pageViews: '100k',
        monthlyCost: 16,
        leftPercentage: 50
    },
    {
        pageViews: '500k',
        monthlyCost: 24,
        leftPercentage: 75
    },
    {
        pageViews: '1M',
        monthlyCost: 36,
        leftPercentage: 100
    },
]

form.addEventListener('submit', (e) => e.preventDefault())

const getData = () => {
    const currentValue = rangeInput.value
    const index = currentValue - 1
    return { pageViews, monthlyCost, leftPercentage } = VIEWS_DATA[index]
};

const updatePageViews = () => {
    const { pageViews } = getData()
    viewsContainer.textContent = `${pageViews} pageviews`
};

const isAnnualFrequency = () => { return frequencyToggle.checked };

const updatePriceFrequency = (isAnnual) => {
    if (isAnnual) { priceFreqContainer.textContent = '/ year' }
    else { priceFreqContainer.textContent = '/ month' }
}

const updateCost = () => {
    const { monthlyCost } = getData()
    const isAnnual = isAnnualFrequency()
    const price = isAnnual ? ((monthlyCost * 12) * 0.75) : monthlyCost
    costContainer.textContent = `$${price.toFixed(2)}`
    updatePriceFrequency(isAnnual)
}

const updateLeftPercentage = () => {
    const { leftPercentage } = getData()
    form.style.setProperty('--left', leftPercentage);
};

const updateFormOnRangeInput = () => {
    updatePageViews()
    updateCost()
    updateLeftPercentage()
};

rangeInput.addEventListener('input', updateFormOnRangeInput)
frequencyToggle.addEventListener('input', updateCost)