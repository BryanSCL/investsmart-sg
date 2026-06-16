// ── Tab navigation ──
function showPage(tabId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('[data-tab]').forEach(l => l.classList.remove('active'));
  const page = document.getElementById('page-' + tabId);
  if (page) page.classList.add('active');
  document.querySelectorAll(`[data-tab="${tabId}"]`).forEach(l => l.classList.add('active'));
  document.getElementById('mobile-menu').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', e => { e.preventDefault(); showPage(el.dataset.tab); });
});

document.querySelectorAll('[data-goto]').forEach(el => {
  el.addEventListener('click', () => showPage(el.dataset.goto));
});

// ── Hamburger ──
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('open');
});

// ── Navbar scroll shadow ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 10 ? '0 2px 24px rgba(13,11,8,0.07)' : '';
}, { passive: true });

// ── Concepts accordion ──
document.querySelectorAll('.concept-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.concept-item');
    const body = item.querySelector('.concept-body');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.concept-item').forEach(c => {
      c.classList.remove('open');
      c.querySelector('.concept-body').classList.remove('show');
      c.querySelector('.concept-btn').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      body.classList.add('show');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// ── Blog filters ──
document.querySelectorAll('.bfilter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.bfilter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.blog-row').forEach(row => {
      const show = filter === 'all' || row.dataset.cat === filter;
      row.style.display = show ? '' : 'none';
    });
  });
});

// ── Blog articles ──
const blogArticles = {
  '01': {
    cat: 'GETTING STARTED',
    title: 'HOW TO START INVESTING IN SINGAPORE WITH JUST $100',
    body: `<p>You don't need thousands of dollars to start investing. In Singapore, you can begin with as little as $1. Here's the exact roadmap.</p>
<h3>STEP 1 — OPEN A ROBO-ADVISOR ACCOUNT (FROM $1)</h3>
<p>Robo-advisors like <strong>StashAway</strong>, <strong>Syfe</strong>, and <strong>Endowus</strong> invest your money automatically in diversified ETF portfolios based on your risk level. No stock-picking. No expertise required. Your first $100 is enough to start.</p>
<ul>
<li><strong>StashAway:</strong> No minimum. Globally diversified. Proprietary ERAA risk management system.</li>
<li><strong>Syfe:</strong> No minimum. Core portfolios + REIT+ option for Singapore property exposure.</li>
<li><strong>Endowus:</strong> $1,000 minimum for cash portfolios — but $0 minimum using CPF or SRS funds.</li>
</ul>
<h3>STEP 2 — SET UP A $100/MONTH AUTO-TRANSFER</h3>
<p>Create a GIRO or standing instruction from your salary account to your robo-advisor on the day you get paid. Out of sight, out of mind. This single habit — automated monthly investing — builds more wealth than any stock tip ever will.</p>
<h3>STEP 3 — SAVE $500 FOR YOUR FIRST SINGAPORE SAVINGS BOND</h3>
<p>Once you've built up $500, apply for a Singapore Savings Bond during the monthly application window (via DBS, OCBC, or UOB). You'll earn ~3–4% p.a., government-guaranteed, and you can redeem any month with zero penalty.</p>
<h3>THE MATHS THAT SHOULD MOTIVATE YOU</h3>
<p>$100/month at 7% p.a. for 30 years grows to over <strong>$121,000</strong>. The amount matters far less than starting. Increase contributions as your income grows. The clock is already ticking.</p>`
  },
  '02': {
    cat: 'CPF',
    title: 'SHOULD YOU INVEST YOUR CPF-OA MONEY?',
    body: `<p>Your CPF Ordinary Account earns a guaranteed 2.5% p.a. — risk-free, government-backed. The question: should you invest via CPFIS to try to earn more?</p>
<h3>WHAT IS CPFIS?</h3>
<p>The CPF Investment Scheme lets you invest the OA balance above $20,000 in approved stocks, ETFs, and unit trusts. Your first $20,000 in OA cannot be invested — it stays at 2.5% as a safety buffer.</p>
<h3>THE CASE FOR LEAVING MONEY IN OA</h3>
<p>2.5% guaranteed beats many bond funds after fees. It compounds reliably. There's no risk of losing it. For conservative investors or those near retirement, this is a completely valid strategy.</p>
<h3>THE CASE FOR CPFIS</h3>
<p>Over a 20-year horizon, the S&P 500 has returned ~10% p.a. on average. Even a modest 5% via CPFIS beats 2.5% substantially over time. But — government studies show many CPFIS investors <em>underperformed</em> the OA rate because they chose high-fee unit trusts or timed markets poorly.</p>
<h3>THE VERDICT</h3>
<p>If your time horizon is 15+ years and you'll invest in low-cost index ETFs (CSPX, VWRA, or STI ETF) — CPFIS is likely worthwhile. If you'd use it for active stock-picking or expensive managed funds — leave it at 2.5%. The rule: only use CPFIS if your investment strategy is better than a government-guaranteed return.</p>`
  },
  '03': {
    cat: 'REITS',
    title: 'SINGAPORE REITs: PROPERTY EXPOSURE FROM $300',
    body: `<p>Real Estate Investment Trusts (REITs) let you own a slice of income-generating property — malls, offices, data centres, hospitals — without stamp duty, a mortgage, or a million-dollar down payment.</p>
<h3>WHY SINGAPORE REITs ARE SPECIAL</h3>
<p>SGX-listed REITs must distribute at least <strong>90% of their taxable income</strong> to shareholders as dividends. This makes them one of the best passive income vehicles for retail investors. Current yields range from <strong>4–7% p.a.</strong> — well above savings rates and CPF-OA.</p>
<h3>POPULAR SINGAPORE REITs IN 2025</h3>
<ul>
<li><strong>CapitaLand Ascendas REIT:</strong> Business parks and industrial — Singapore's largest industrial REIT.</li>
<li><strong>Mapletree Pan Asia Commercial Trust:</strong> Prime offices and malls across SG and Asia.</li>
<li><strong>Frasers Centrepoint Trust:</strong> Singapore suburban malls with high footfall.</li>
<li><strong>Keppel DC REIT:</strong> Data centres in Asia and Europe — AI tailwind.</li>
<li><strong>Parkway Life REIT:</strong> Hospitals and healthcare properties.</li>
</ul>
<h3>HOW TO BUY</h3>
<p>Open a brokerage account (Tiger Brokers or Moomoo), fund with SGD, search the REIT ticker. Most trade in lots of 100 shares, making entry typically $200–$600.</p>
<h3>THE KEY RISK</h3>
<p>REIT prices fall when interest rates rise — because higher rates make the fixed dividend yield less attractive relative to bonds. Long-term investors collecting dividends are generally insulated from short-term price swings. Focus on quality sponsors and manageable debt levels (gearing below 40%).</p>`
  },
  '04': {
    cat: 'ETFS',
    title: 'VWRA VS CSPX: WHICH ETF SHOULD SINGAPORE INVESTORS CHOOSE?',
    body: `<p>Both VWRA and CSPX are Ireland-domiciled ETFs — meaning Singapore investors pay only 15% withholding tax on dividends instead of 30%. Both are excellent. But they're very different funds.</p>
<h3>VWRA — VANGUARD FTSE ALL-WORLD (ACCUMULATING)</h3>
<p>Tracks 3,700+ companies across 50+ countries. The US accounts for ~65% of the fund by weight, with the rest spread across Europe, Japan, Emerging Markets, and more. Annual fee: 0.22% p.a. The ultimate one-fund global portfolio. <strong>Best for: investors who want maximum diversification and don't want to think about it.</strong></p>
<h3>CSPX — ISHARES CORE S&P 500 (ACCUMULATING)</h3>
<p>Tracks the 500 largest US companies only. Pure US exposure — Apple, Microsoft, Nvidia, Amazon at the top. Annual fee: 0.07% p.a. Lower fee, but concentrated in one country. <strong>Best for: investors who specifically want US equity exposure and believe American companies will continue to dominate.</strong></p>
<h3>THE VERDICT</h3>
<p>For most Singapore beginners, <strong>VWRA is the better starting point</strong> — global diversification with a single fund at a reasonable fee. As your portfolio grows, you can add CSPX for more targeted US exposure. Both are listed on the London Stock Exchange and purchasable via Tiger Brokers, Moomoo, or IBKR in Singapore.</p>`
  },
  '05': {
    cat: 'BONDS',
    title: 'SINGAPORE SAVINGS BONDS IN 2025: STILL WORTH BUYING?',
    body: `<p>Singapore Savings Bonds (SSBs) are one of the safest investments available to retail investors in Singapore. Government-backed, capital-guaranteed, and redeemable any time. But with rates shifting, should you still buy them?</p>
<h3>HOW SSBs WORK</h3>
<p>SSBs are issued by the Singapore government monthly. You apply through internet banking (DBS, OCBC, UOB, Standard Chartered) during the 1-month application window. The interest rate steps up each year you hold — you're rewarded for holding longer, but penalised nothing for redeeming early (with a 1-month processing lag).</p>
<h3>CURRENT RATES (2025)</h3>
<p>SSB rates broadly track the Singapore Government Securities (SGS) yields. 10-year average return currently sits in the ~3–3.5% range. This is above CPF-OA (2.5%) but below CPF-SA (4%).</p>
<h3>WHO SHOULD BUY SSBs?</h3>
<ul>
<li>Investors with medium-term cash (1–10 years) they can't risk losing</li>
<li>Those who've maxed CPF-SA top-ups and want the next safest option</li>
<li>Retirees or near-retirees seeking guaranteed income with full flexibility</li>
</ul>
<h3>VERDICT: YES, STILL WORTH IT</h3>
<p>SSBs offer the best risk-adjusted return for capital you can't afford to lose. No other investment gives you government backing + full flexibility + ~3.5% with zero capital risk. For the safe portion of your portfolio, SSBs remain excellent.</p>`
  },
  '06': {
    cat: 'ROBO-ADVISORS',
    title: 'STASHAWAY VS SYFE VS ENDOWUS: WHICH ROBO-ADVISOR WINS?',
    body: `<p>Singapore's three biggest robo-advisors each have a distinct edge. Here's how they compare for a beginner investor in 2025.</p>
<h3>STASHAWAY</h3>
<p>Uses a proprietary algorithm (ERAA — Economic Regime-based Asset Allocation) to shift your portfolio based on economic conditions. Globally diversified across ETFs. No minimum. Fees: 0.2–0.8% p.a. (lower for larger balances). <strong>Best for: investors who want a globally diversified hands-off portfolio with active risk management.</strong></p>
<h3>SYFE</h3>
<p>Offers several distinct portfolios: Core (global diversification), REIT+ (Singapore REITs), Cash+ (money market, capital-stable). No minimum. Fees: 0.35–0.65% p.a. <strong>Best for: investors who want to build Singapore REIT income alongside global equity growth.</strong></p>
<h3>ENDOWUS</h3>
<p>The only platform that lets you invest CPF-OA, CPF-SA, and SRS funds alongside cash. Uses institutional share classes of funds (lower fees than retail). Minimum $1,000 for cash, $0 for CPF/SRS. Fees: 0.25–0.6% p.a. <strong>Best for: investors who want to use CPF or SRS funds in a managed portfolio.</strong></p>
<h3>THE BOTTOM LINE</h3>
<p>All three are regulated by MAS, reputable, and good choices. Pick StashAway or Syfe if starting with cash. Choose Endowus if you want to invest CPF or SRS funds. You can use multiple platforms — there's no rule against it.</p>`
  },
  '07': {
    cat: 'TAX',
    title: 'THE 30% US DIVIDEND TAX EVERY SINGAPORE INVESTOR MUST KNOW',
    body: `<p>If you're a Singapore investor buying US-domiciled ETFs (like VOO, VTI, or QQQ), the IRS deducts <strong>30% of every dividend</strong> before it reaches you. Over 30 years, this destroys a staggering amount of wealth. Here's the fix.</p>
<h3>WHY 30%?</h3>
<p>The US taxes dividends paid to non-resident investors under its Internal Revenue Code. Singapore has no tax treaty with the US that reduces this rate. So every dividend from a US-domiciled fund is automatically docked 30%.</p>
<h3>THE IRELAND SOLUTION</h3>
<p>Ireland has a tax treaty with the US that reduces the WHT rate to <strong>15%</strong>. ETFs domiciled in Ireland (you'll see "UCITS" in the name) pay only 15% WHT. The same underlying assets — S&P 500, global stocks — but half the dividend tax gone legally.</p>
<h3>WHICH FUNDS TO USE INSTEAD</h3>
<ul>
<li>Instead of VOO → use <strong>CSPX</strong> (iShares Core S&P 500, Ireland)</li>
<li>Instead of VTI → use <strong>VWRA</strong> (Vanguard All-World, Ireland)</li>
<li>Instead of QQQ → use <strong>EQQQ</strong> (Invesco Nasdaq-100, Ireland)</li>
</ul>
<h3>IMPORTANT NOTE</h3>
<p>Singapore charges <strong>zero capital gains tax</strong>, so all price appreciation on US stocks is completely tax-free for you regardless of domicile. The 30% only applies to dividends. For accumulating ETFs (VWRA, CSPX) that reinvest dividends internally, the impact is reduced but still present at the fund level.</p>`
  },
  '08': {
    cat: 'RETIREMENT',
    title: 'SRS: THE TAX-SAVING HACK MOST SINGAPOREANS OVERLOOK',
    body: `<p>The Supplementary Retirement Scheme (SRS) is one of the most underutilised tax-savings tools in Singapore. Here's the full breakdown.</p>
<h3>HOW IT WORKS</h3>
<p>Contribute to your SRS account (held at DBS, OCBC, or UOB) before December 31 each year. You get <strong>dollar-for-dollar income tax relief</strong> on every dollar contributed — up to $15,300/yr for Singapore citizens and PRs.</p>
<h3>THE TAX MATHS</h3>
<p>If you earn $120,000/yr and contribute $15,300 to SRS, your taxable income drops to $104,700. At a 15% marginal rate, you save ~$2,295 in taxes immediately. That's an instant 15% return on your SRS contribution before any investment gains.</p>
<h3>HOW TO INVEST SRS MONEY</h3>
<p>SRS funds can be invested in stocks, ETFs, REITs, and unit trusts through your SRS bank account's brokerage. You can buy VWRA, CSPX, or Singapore REITs with SRS money — same as a cash account.</p>
<h3>WITHDRAWAL RULES</h3>
<p>You can withdraw from age 62 (the statutory retirement age when you first contribute). Only <strong>50% of the withdrawal amount</strong> is taxable — and you spread withdrawals over up to 10 years to minimise the tax rate. Most retirees pay little to no tax on SRS withdrawals.</p>
<h3>WHO BENEFITS MOST?</h3>
<p>Highest impact for those earning $80,000+ (above the 11.5% tax bracket). Still valuable at lower incomes for the tax deferral benefit alone.</p>`
  },
  '09': {
    cat: 'STRATEGY',
    title: 'DOLLAR-COST AVERAGING: THE LAZY STRATEGY THAT ACTUALLY WORKS',
    body: `<p>Dollar-cost averaging (DCA) means investing a fixed dollar amount on a regular schedule — say $300 every month — regardless of what the market is doing. It sounds boring. The data suggests it's brilliant.</p>
<h3>WHY DCA WORKS</h3>
<p>When markets fall, your $300 buys more units. When they rise, fewer. Your average cost per unit is automatically smoothed over time. You remove the pressure of deciding "is now a good time?" — because every month is your time.</p>
<h3>DCA VS LUMP SUM: WHAT THE DATA SAYS</h3>
<p>Studies show lump-sum investing (putting all your money in at once) beats DCA about 2/3 of the time — because markets trend upward. But DCA wins where it matters most: emotionally. Investors who DCA are far less likely to panic-sell in downturns, because they're already comfortable buying every month. Execution beats optimisation.</p>
<h3>THE NUMBERS</h3>
<p>$300/month into VWRA at 7% average annual return over 20 years: <strong>~$158,000</strong>. Total invested: $72,000. The remaining $86,000 is pure compounding. Start the same strategy at 25 and hold until 65 — the final figure is over <strong>$796,000</strong>.</p>
<h3>HOW TO AUTOMATE IT</h3>
<p>Most Singapore brokers (Tiger, Moomoo) don't yet offer automatic regular investing — you'll need to buy manually each month. Robo-advisors (StashAway, Syfe) do automate it via GIRO. Set up the GIRO, forget about it, let it run for decades.</p>`
  },
  '10': {
    cat: 'GETTING STARTED',
    title: 'BUILDING YOUR FIRST INVESTMENT PORTFOLIO FROM SCRATCH',
    body: `<p>Starting from zero. No investments, no brokerage account. Here's the exact step-by-step to build your first real portfolio.</p>
<h3>STEP 1 — EMERGENCY FUND FIRST (NON-NEGOTIABLE)</h3>
<p>Keep 3–6 months of expenses in a high-yield savings account (DBS Multiplier, OCBC 360, UOB One). Only after this is funded should you invest a single dollar. This prevents forced selling during market downturns.</p>
<h3>STEP 2 — KNOW YOUR GOAL AND TIMELINE</h3>
<p>Investing for 5 years is very different from 30 years. Short horizon = more bonds, SSBs, T-Bills. Long horizon = more equities, global ETFs. Be honest about when you'll need the money.</p>
<h3>STEP 3 — OPEN YOUR ACCOUNTS</h3>
<ul>
<li><strong>Robo-advisor:</strong> StashAway or Syfe (5 minutes, SingPass login)</li>
<li><strong>Brokerage:</strong> Tiger Brokers (for ETFs and individual stocks)</li>
<li><strong>SSB:</strong> Apply via your existing bank's internet banking</li>
</ul>
<h3>STEP 4 — THE SIMPLE BEGINNER PORTFOLIO</h3>
<ul>
<li>50% — VWRA (global diversification via Tiger Brokers)</li>
<li>30% — Robo-advisor (automated, hands-off growth)</li>
<li>20% — SSBs or T-Bills (capital-safe foundation)</li>
</ul>
<h3>STEP 5 — AUTOMATE AND REVIEW ANNUALLY</h3>
<p>Set up monthly GIRO transfers. Review your portfolio once a year. Rebalance if your allocation has drifted more than 10% from target. Then close the app and get on with your life.</p>`
  },
  '11': {
    cat: 'ETFS',
    title: 'WHY LOW-COST INDEX FUNDS BEAT MOST ACTIVE MANAGERS',
    body: `<p>Over any 15-year period, more than 88% of active fund managers underperform their benchmark index, net of fees. This isn't an opinion — it's documented by SPIVA (S&P Indices Versus Active) reports published annually.</p>
<h3>WHY ACTIVE FUNDS UNDERPERFORM</h3>
<p>Three reasons. First: fees. A 1.5% annual fee compounding for 30 years costs roughly 36% of your final portfolio value. An index fund at 0.07% costs less than 2%. Second: no one consistently outperforms the market. Managers who beat it one year tend to revert to average (or below) the next. Third: tax drag — active funds trade more, creating taxable events that eat into returns.</p>
<h3>WHAT WARREN BUFFETT ACTUALLY RECOMMENDS FOR ORDINARY INVESTORS</h3>
<p>In his 2014 shareholder letter, Buffett wrote: "My advice to the trustee couldn't be more simple: Put 10% of the cash in short-term government bonds and 90% in a very low-cost S&P 500 index fund." The world's most famous stock-picker recommends index funds for everyone else.</p>
<h3>THE SINGAPORE CONTEXT</h3>
<p>Unit trusts sold by Singapore banks often charge 1.5–2.5% p.a. in management fees plus a front-end sales charge of up to 5%. Replace these with VWRA (0.22%) or CSPX (0.07%) and you save a life-changing amount over 30 years.</p>`
  },
  '12': {
    cat: 'STRATEGY',
    title: 'HOW TO SURVIVE (AND PROFIT FROM) A STOCK MARKET CRASH',
    body: `<p>Market crashes are terrifying when they happen. They're also the moments that separate long-term wealth builders from those who panic and sell at the bottom.</p>
<h3>CRASHES ARE NORMAL</h3>
<p>The S&P 500 has experienced a 20%+ decline (bear market) roughly every 3–5 years throughout history — 1987, 2000, 2008, 2020, and more. In every single case, the market has recovered and gone on to new highs. The pattern is consistent. The recovery timeline varies (6 months to 5 years), but the direction is always the same.</p>
<h3>WHAT TO DO WHEN MARKETS CRASH</h3>
<ul>
<li><strong>Don't sell.</strong> Selling during a crash locks in your loss permanently.</li>
<li><strong>Keep investing.</strong> Your monthly DCA contributions now buy more units at lower prices. Crashes are a sale on stocks.</li>
<li><strong>Rebalance.</strong> If your equities have fallen to 60% of your portfolio vs your 80% target, buy more equities to rebalance. You're systematically buying low.</li>
<li><strong>Review your emergency fund.</strong> If it's topped up, you don't need to sell investments to cover expenses.</li>
</ul>
<h3>THE MINDSET SHIFT</h3>
<p>Think of a crash not as money disappearing, but as the price of a good going on sale. If the supermarket discounted your favourite product by 30%, you'd buy more — not sell what you already have. Apply the same logic to stocks. The best long-term returns come to those who stay invested through the worst periods.</p>`
  }
};

// ── Blog row → modal ──
document.querySelectorAll('.blog-row').forEach(row => {
  row.addEventListener('click', () => {
    const numEl = row.querySelector('.blog-n');
    if (!numEl) return;
    const n = numEl.textContent.trim().replace(/^0+/, '').padStart(2, '0');
    const data = blogArticles[n];
    const titleEl = row.querySelector('.blog-title');
    const catEl = row.querySelector('.blog-cat');
    const title = titleEl ? titleEl.textContent : '';
    const cat = catEl ? catEl.textContent.replace(/[\[\]\s]/g, '') : '';

    document.getElementById('modal-cat').textContent   = data ? data.cat : cat;
    document.getElementById('modal-title').textContent = data ? data.title : title;
    document.getElementById('modal-body').innerHTML    = data
      ? data.body
      : `<p>Full article coming soon. This is a preview of <strong>${title}</strong>.</p>`;

    document.getElementById('modal-wrap').hidden = false;
    document.getElementById('modal-wrap').querySelector('.modal-box').scrollTop = 0;
  });
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-wrap').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-wrap')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
  document.getElementById('modal-wrap').hidden = true;
}

// ── Glossary search ──
document.getElementById('gloss-search').addEventListener('input', function () {
  const q = this.value.toLowerCase().trim();
  document.querySelectorAll('.gloss-item').forEach(item => {
    const text = (item.dataset.term || '') + ' ' + item.textContent.toLowerCase();
    item.classList.toggle('hidden', q.length > 0 && !text.includes(q));
  });
});
