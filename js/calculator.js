/**
 * VANGUARD GLOBAL LOGISTICS (VGL) - Freight Rate Calculator & RFQ Wizard
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroRateEstimator();
  initFullRateCalculator();
});

/* Hero Quick Rate Estimator */
function initHeroRateEstimator() {
  const heroForm = document.getElementById('hero-estimator-form');
  if (!heroForm) return;

  const modeSelect = heroForm.querySelector('#hero-mode');
  const weightInput = heroForm.querySelector('#hero-weight');
  const resultDisplay = heroForm.querySelector('#hero-estimated-rate');

  const calculateQuickRate = () => {
    const mode = modeSelect ? modeSelect.value : 'air';
    const weight = parseFloat(weightInput ? weightInput.value : 100) || 100;

    let baseRate = 0;
    if (mode === 'air-express') {
      baseRate = Math.max(160, weight * 4.85);
    } else if (mode === 'air-standard') {
      baseRate = Math.max(220, weight * 2.75);
    } else if (mode === 'ocean-fcl') {
      baseRate = 3200; // Flat average container lane
    } else if (mode === 'ocean-lcl') {
      baseRate = Math.max(280, (weight / 100) * 95);
    } else if (mode === 'road') {
      baseRate = Math.max(190, 180 + (weight * 0.95));
    }

    if (resultDisplay) {
      resultDisplay.textContent = `$${Math.round(baseRate).toLocaleString()} USD`;
    }
  };

  if (modeSelect) modeSelect.addEventListener('change', calculateQuickRate);
  if (weightInput) weightInput.addEventListener('input', calculateQuickRate);
  calculateQuickRate();
}

/* Dedicated Rate Calculator (on quote.html) */
function initFullRateCalculator() {
  const quoteForm = document.getElementById('full-rfq-form');
  if (!quoteForm) return;

  const originEl = document.getElementById('rfq-origin');
  const destEl = document.getElementById('rfq-dest');
  const modeEl = document.getElementById('rfq-mode');
  const weightEl = document.getElementById('rfq-weight');
  const volumeEl = document.getElementById('rfq-volume');
  const insuranceCheck = document.getElementById('rfq-insurance');
  const customsCheck = document.getElementById('rfq-customs');
  const coldChainCheck = document.getElementById('rfq-coldchain');

  // Breakdown fields
  const subtotalEl = document.getElementById('quote-base-cost');
  const fuelEl = document.getElementById('quote-fuel-surcharge');
  const customsCostEl = document.getElementById('quote-customs-cost');
  const insuranceCostEl = document.getElementById('quote-insurance-cost');
  const totalEl = document.getElementById('quote-total-cost');

  const recalculateDetailedQuote = () => {
    const mode = modeEl ? modeEl.value : 'air-standard';
    const weight = parseFloat(weightEl ? weightEl.value : 250) || 250;
    const volume = parseFloat(volumeEl ? volumeEl.value : 1.5) || 1.5;

    // Volumetric weight: Air = CBM * 167 kg, Road = CBM * 333 kg
    let chargeableWeight = weight;
    if (mode.includes('air')) {
      const volWeight = volume * 167;
      chargeableWeight = Math.max(weight, volWeight);
    }

    let baseFreight = 0;
    let fuelPct = 0.12; // 12% standard bunker/fuel index

    switch (mode) {
      case 'air-express':
        baseFreight = Math.max(220, chargeableWeight * 4.90);
        fuelPct = 0.16;
        break;
      case 'air-standard':
        baseFreight = Math.max(300, chargeableWeight * 2.80);
        fuelPct = 0.14;
        break;
      case 'ocean-fcl':
        baseFreight = 3450;
        fuelPct = 0.08;
        break;
      case 'ocean-lcl':
        baseFreight = Math.max(350, Math.max(volume * 110, (weight / 1000) * 110));
        fuelPct = 0.09;
        break;
      case 'road-ftl':
        baseFreight = Math.max(450, 400 + (chargeableWeight * 0.85));
        fuelPct = 0.11;
        break;
      default:
        baseFreight = 500;
    }

    if (coldChainCheck && coldChainCheck.checked) {
      baseFreight *= 1.25; // 25% specialized thermal hold premium
    }

    const fuelSurcharge = baseFreight * fuelPct;
    let customsCost = 0;
    if (customsCheck && customsCheck.checked) {
      customsCost = 145; // Flat customs clearance brokerage
    }

    let insuranceCost = 0;
    if (insuranceCheck && insuranceCheck.checked) {
      insuranceCost = Math.max(55, baseFreight * 0.04);
    }

    const totalEstimate = baseFreight + fuelSurcharge + customsCost + insuranceCost;

    if (subtotalEl) subtotalEl.textContent = `$${Math.round(baseFreight).toLocaleString()}`;
    if (fuelEl) fuelEl.textContent = `$${Math.round(fuelSurcharge).toLocaleString()}`;
    if (customsCostEl) customsCostEl.textContent = `$${Math.round(customsCost).toLocaleString()}`;
    if (insuranceCostEl) insuranceCostEl.textContent = `$${Math.round(insuranceCost).toLocaleString()}`;
    if (totalEl) totalEl.textContent = `$${Math.round(totalEstimate).toLocaleString()} USD`;
  };

  const inputs = [originEl, destEl, modeEl, weightEl, volumeEl, insuranceCheck, customsCheck, coldChainCheck];
  inputs.forEach(inp => {
    if (inp) {
      inp.addEventListener('input', recalculateDetailedQuote);
      inp.addEventListener('change', recalculateDetailedQuote);
    }
  });

  recalculateDetailedQuote();

  // Quote Form Submit
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const quoteRef = `VGL-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    const totalVal = totalEl ? totalEl.textContent : '$2,450 USD';
    
    // Open Confirmation Modal
    const modalBackdrop = document.getElementById('rfq-modal');
    const modalRefSpan = document.getElementById('modal-rfq-ref');
    const modalAmountSpan = document.getElementById('modal-rfq-amount');

    if (modalRefSpan) modalRefSpan.textContent = quoteRef;
    if (modalAmountSpan) modalAmountSpan.textContent = totalVal;

    if (modalBackdrop) {
      modalBackdrop.classList.add('open');
    } else {
      if (window.showToast) {
        window.showToast(`Instant Quote Booked! Reference #${quoteRef}`, 'success');
      }
    }
  });

  // Modal Close
  const closeBtns = document.querySelectorAll('.modal-close-trigger');
  closeBtns.forEach(b => {
    b.addEventListener('click', () => {
      const modalBackdrop = document.getElementById('rfq-modal');
      if (modalBackdrop) modalBackdrop.classList.remove('open');
    });
  });
}
