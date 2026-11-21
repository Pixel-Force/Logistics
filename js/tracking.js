/**
 * VANGUARD GLOBAL LOGISTICS (VGL) - Live Shipment Tracking Engine
 */

const SHIPMENT_DATABASE = {
  'VEX-8924-US': {
    waybill: 'VEX-8924-US',
    service: 'Priority Air Freight (NFO)',
    status: 'In Transit',
    statusClass: 'status-in-transit',
    currentMilestone: 3, // 1: Booked, 2: Origin Hub, 3: In Transit, 4: Delivered
    origin: 'Hong Kong International (HKG)',
    destination: 'Chicago O’Hare (ORD)',
    shipper: 'Foxlink Tech Global Ltd',
    consignee: 'Apex Telecomm Solutions USA',
    weight: '4,280 kg (Gross)',
    pieces: '14 Pallets / Skids',
    vesselFlight: 'VGL Charter Flight VG-804',
    eta: 'Nov 23, 2026 - 14:30 CST',
    progressPercent: 72,
    checkpoints: [
      { date: 'Nov 21, 2026', time: '09:15 UTC', desc: 'Customs cleared & transfer to international air corridor', location: 'Frankfurt Hub (FRA) — Transit Stop', latest: true },
      { date: 'Nov 20, 2026', time: '22:40 HKT', desc: 'Aircraft departed origin air terminal', location: 'Hong Kong International Airport (HKG)' },
      { date: 'Nov 20, 2026', time: '16:10 HKT', desc: 'Export clearance approved by HK Customs', location: 'VGL Hong Kong Air Hub 3' },
      { date: 'Nov 20, 2026', time: '11:00 HKT', desc: 'Consignment palletized, screened & weighed', location: 'VGL Terminal HKG-1' },
      { date: 'Nov 19, 2026', time: '18:20 HKT', desc: 'Electronic Waybill created & pickup booked', location: 'Kowloon Logistics Center' }
    ]
  },
  'VEX-1042-DE': {
    waybill: 'VEX-1042-DE',
    service: 'Ocean Intermodal FCL (2x 40ft HC)',
    status: 'In Transit',
    statusClass: 'status-in-transit',
    currentMilestone: 3,
    origin: 'Port of Shanghai (CNSHA)',
    destination: 'Port of Hamburg (DEHAM)',
    shipper: 'Sino-Euro Automotive Spares Corp',
    consignee: 'Bavaria Precision Motoren AG',
    weight: '52,400 kg',
    pieces: '2x 40ft High-Cube Containers',
    vesselFlight: 'Vessel: CMA CGM Vanguard / V.402W',
    eta: 'Dec 02, 2026 - 08:00 CET',
    progressPercent: 58,
    checkpoints: [
      { date: 'Nov 21, 2026', time: '06:00 UTC', desc: 'Vessel transited Suez Maritime Corridor smoothly', location: 'Port Said Gateway, Egypt', latest: true },
      { date: 'Nov 16, 2026', time: '14:20 SGT', desc: 'Bunkering & container safety inspection complete', location: 'Port of Singapore (SGSIN)' },
      { date: 'Nov 10, 2026', time: '19:45 CST', desc: 'Containers stowed on board ocean vessel', location: 'Shanghai Yangshan Deep-Water Port' },
      { date: 'Nov 08, 2026', time: '10:30 CST', desc: 'Customs seals inspected and verified intact', location: 'VGL Bonded Terminal Shanghai' },
      { date: 'Nov 07, 2026', time: '14:00 CST', desc: 'Gate-in full container load at terminal', location: 'Yangshan Terminal Phase 4' }
    ]
  },
  'VEX-5581-SG': {
    waybill: 'VEX-5581-SG',
    service: 'Cold Chain Pharma Express (2°C - 8°C)',
    status: 'Out for Delivery',
    statusClass: 'status-customs',
    currentMilestone: 3,
    origin: 'EuroAirport Basel Mulhouse (BSL)',
    destination: 'Singapore Tuas Biomedical Park',
    shipper: 'Novartis Biologics AG',
    consignee: 'National Healthcare Cluster Singapore',
    weight: '860 kg',
    pieces: '4 Envirotainer e2 Units',
    vesselFlight: 'Singapore Airlines Cargo SQ-798',
    eta: 'Today - Nov 21, 2026 - 16:00 SGT',
    progressPercent: 92,
    checkpoints: [
      { date: 'Nov 21, 2026', time: '10:15 SGT', desc: 'Loaded onto temperature-controlled reefer truck for final delivery', location: 'Changi Airfreight Center, Singapore', latest: true },
      { date: 'Nov 21, 2026', time: '07:30 SGT', desc: 'HSA Medical Device / Pharma expedited customs release', location: 'Singapore Changi Free Trade Zone' },
      { date: 'Nov 20, 2026', time: '23:50 SGT', desc: 'Flight touched down; thermal data logger reading confirmed (4.2°C)', location: 'Singapore Changi Airport (SIN)' },
      { date: 'Nov 20, 2026', time: '10:20 CET', desc: 'Active cooling containers boarded into cargo hold', location: 'Basel Mulhouse Freight Center' },
      { date: 'Nov 19, 2026', time: '16:00 CET', desc: 'Validated dry-ice / active compressor thermal pre-conditioning', location: 'Basel Pharma Logistics Hub' }
    ]
  },
  'VEX-3390-AE': {
    waybill: 'VEX-3390-AE',
    service: 'Heavy Haulage Cross-Border Road Fleet',
    status: 'Delivered',
    statusClass: 'status-delivered',
    currentMilestone: 4,
    origin: 'Jebel Ali Free Zone (JAFZA), Dubai',
    destination: 'King Salman Energy Park (SPARK), Saudi Arabia',
    shipper: 'Gulf Industrial Turbines LLC',
    consignee: 'Aramco Power Systems Contractor',
    weight: '38,500 kg',
    pieces: '3 Heavy Haul Low-Bed Trailers',
    vesselFlight: 'Fleet Convoy: VGL-GULF-09 / 11 / 14',
    eta: 'Delivered on Nov 20, 2026',
    progressPercent: 100,
    checkpoints: [
      { date: 'Nov 20, 2026', time: '15:45 AST', desc: 'Cargo safely delivered & offloaded. Electronic POD signed by Eng. Tariq Al-Otaibi', location: 'SPARK Hub, Dammam KSA', latest: true },
      { date: 'Nov 20, 2026', time: '08:30 AST', desc: 'Escort convoy cleared Batha border crossing into Saudi Arabia', location: 'Al Batha Border Post' },
      { date: 'Nov 19, 2026', time: '21:00 GST', desc: 'Cross-border customs transit manifest cleared', location: 'Ghuwaifat Border Terminal UAE' },
      { date: 'Nov 19, 2026', time: '11:00 GST', desc: 'GPS telematics satellite tracker synchronized and active', location: 'JAFZA South Hub, Dubai' }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTrackingControls();
  checkUrlTrackingParams();
});

function initTrackingControls() {
  // Preset Chips
  const presetChips = document.querySelectorAll('.preset-chip');
  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const code = chip.getAttribute('data-code');
      const input = chip.closest('.tab-pane, .tracking-section, .hero-widget-card')?.querySelector('.tracking-input');
      if (input) {
        input.value = code;
        executeTrackingSearch(code);
      }
    });
  });

  // Tracking Forms
  const trackingForms = document.querySelectorAll('.tracking-form');
  trackingForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.tracking-input');
      if (input && input.value.trim()) {
        executeTrackingSearch(input.value.trim().toUpperCase());
      }
    });
  });
}

function checkUrlTrackingParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const trackId = urlParams.get('id');
  if (trackId) {
    const input = document.querySelector('.tracking-input');
    if (input) input.value = trackId;
    executeTrackingSearch(trackId);
  }
}

function executeTrackingSearch(trackingId) {
  const cleanId = trackingId.trim().toUpperCase();
  const resultContainer = document.getElementById('tracking-result-container');
  
  if (!resultContainer) {
    // If on homepage and search was triggered, scroll or redirect to dedicated tracking page
    window.location.href = `tracking.html?id=${encodeURIComponent(cleanId)}`;
    return;
  }

  let data = SHIPMENT_DATABASE[cleanId];

  // Dynamic fallback for arbitrary entered waybill
  if (!data) {
    data = generateSyntheticShipment(cleanId);
  }

  renderTrackingCard(data, resultContainer);
  resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (window.showToast) {
    window.showToast(`Waybill ${cleanId} retrieved live from VGL SatNet.`, 'info');
  }
}

function generateSyntheticShipment(id) {
  return {
    waybill: id,
    service: 'Global Intermodal Freight (Active)',
    status: 'In Transit',
    statusClass: 'status-in-transit',
    currentMilestone: 2,
    origin: 'London Heathrow Gateway (LHR)',
    destination: 'New York JFK International (JFK)',
    shipper: 'Enterprise International Cargo Ltd',
    consignee: 'Atlantic Logistics Corp',
    weight: '1,450 kg (Volumetric)',
    pieces: '6 Wooden Crates',
    vesselFlight: 'Commercial Cargo Flight VG-440',
    eta: 'In 2 Business Days',
    progressPercent: 45,
    checkpoints: [
      { date: 'Today', time: '11:20 Local', desc: 'Consignment verified in transit corridor', location: 'Atlantic Central Hub', latest: true },
      { date: 'Yesterday', time: '18:40 Local', desc: 'Customs declaration accepted and documented', location: 'London Gateway Freight Center' },
      { date: '2 Days Ago', time: '10:00 Local', desc: 'Cargo received into VGL global network', location: 'UK Regional Terminal' }
    ]
  };
}

function renderTrackingCard(data, container) {
  const milestonesHtml = `
    <div class="progress-milestones">
      <div class="progress-milestone-step ${data.currentMilestone >= 1 ? (data.currentMilestone === 1 ? 'active' : 'completed') : ''}">
        <div class="step-icon-bubble">1</div>
        <div class="step-title">Booked</div>
        <div class="step-time">Electronic Manifest</div>
      </div>
      <div class="progress-milestone-step ${data.currentMilestone >= 2 ? (data.currentMilestone === 2 ? 'active' : 'completed') : ''}">
        <div class="step-icon-bubble">2</div>
        <div class="step-title">Origin Hub</div>
        <div class="step-time">${data.origin}</div>
      </div>
      <div class="progress-milestone-step ${data.currentMilestone >= 3 ? (data.currentMilestone === 3 ? 'active' : 'completed') : ''}">
        <div class="step-icon-bubble">3</div>
        <div class="step-title">In Global Transit</div>
        <div class="step-time">${data.vesselFlight}</div>
      </div>
      <div class="progress-milestone-step ${data.currentMilestone >= 4 ? 'completed' : ''}">
        <div class="step-icon-bubble">4</div>
        <div class="step-title">Delivered</div>
        <div class="step-time">${data.destination}</div>
      </div>
    </div>
  `;

  const checkpointsHtml = data.checkpoints.map(cp => `
    <div class="checkpoint-node ${cp.latest ? 'latest' : ''}">
      <div class="checkpoint-dot"></div>
      <div class="checkpoint-time">${cp.date} — ${cp.time}</div>
      <div class="checkpoint-desc">${cp.desc}</div>
      <div class="checkpoint-loc">📍 ${cp.location}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="tracking-result-card">
      <div class="tracking-header-meta">
        <div class="waybill-meta-group">
          <div class="flex items-center gap-2">
            <span class="badge badge-info">${data.service}</span>
            <span class="system-status-indicator"><span class="pulse-dot"></span> Live Telematics</span>
          </div>
          <h3 style="margin-top: 0.5rem;">Waybill: ${data.waybill}</h3>
          <span>Estimated Delivery: <strong>${data.eta}</strong></span>
        </div>
        <div class="tracking-status-chip ${data.statusClass}">
          <span>●</span> ${data.status}
        </div>
      </div>

      ${milestonesHtml}

      <div class="grid grid-cols-2" style="background-color: var(--slate-50); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 2rem;">
        <div>
          <p style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--slate-500); font-weight: 700; margin-bottom: 0.25rem;">Routing Corridor</p>
          <p style="font-weight: 700; color: var(--slate-900); font-size: 1.05rem; margin-bottom: 0.75rem;">${data.origin} ➔ ${data.destination}</p>
          
          <p style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--slate-500); font-weight: 700; margin-bottom: 0.25rem;">Vessel / Flight Reference</p>
          <p style="color: var(--slate-800); font-size: 0.95rem;">${data.vesselFlight}</p>
        </div>

        <div>
          <p style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--slate-500); font-weight: 700; margin-bottom: 0.25rem;">Cargo Specifications</p>
          <p style="font-weight: 700; color: var(--slate-900); font-size: 1.05rem; margin-bottom: 0.75rem;">${data.pieces} (${data.weight})</p>

          <p style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--slate-500); font-weight: 700; margin-bottom: 0.25rem;">Consignee</p>
          <p style="color: var(--slate-800); font-size: 0.95rem;">${data.consignee}</p>
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
          <svg style="width:20px;height:20px;color:var(--accent-500);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Detailed Transit Milestone Log
        </h4>
        <div class="checkpoint-timeline">
          ${checkpointsHtml}
        </div>
      </div>

      <div class="flex items-center justify-between" style="border-top: 1px solid var(--slate-200); padding-top: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <button class="btn btn-outline btn-sm" onclick="downloadWaybillModal('${data.waybill}')">
          <svg style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Download Electronic Waybill (e-BL)
        </button>

        <a href="quote.html" class="btn btn-accent btn-sm">
          Book Matching Return Freight
        </a>
      </div>
    </div>
  `;
}

function downloadWaybillModal(waybill) {
  if (window.showToast) {
    window.showToast(`Electronic Waybill ${waybill}.pdf downloaded successfully.`, 'success');
  }
}

window.executeTrackingSearch = executeTrackingSearch;
window.downloadWaybillModal = downloadWaybillModal;
