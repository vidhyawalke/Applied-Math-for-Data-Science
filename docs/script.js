const repo = 'https://github.com/vidhyawalke/Applied-Math-for-Data-Science/blob/main';

const groups = [
  {
    id: 'foundations',
    title: 'Foundations & models',
    label: 'CORE METHODS',
    projects: [
      { number: '01', folder: '01_linear_regression', title: 'Linear Regression From Scratch', description: 'Fit a line with least squares and inspect the prediction errors.', math: 'LEAST SQUARES', kind: 'FITTING', chart: 'line' },
      { number: '02', folder: '02_gradient_descent', title: 'Gradient Descent Visualizer', description: 'Follow the derivative downhill and see how the learning rate changes each step.', math: 'DERIVATIVES', kind: 'OPTIMIZATION', chart: 'descent' },
      { number: '03', folder: '03_pca', title: 'PCA From Scratch', description: 'Use covariance and eigenvectors to find the directions that matter most.', math: 'EIGENVECTORS', kind: 'DIMENSIONS', chart: 'scatter' },
      { number: '10', folder: '10_clustering_from_scratch', title: 'Clustering From Scratch', description: 'Group nearby points with k-means, updating centers as the groups change.', math: 'K-MEANS', kind: 'GROUPING', chart: 'clusters' },
      { number: '11', folder: '11_logistic_regression', title: 'Logistic Regression From Scratch', description: 'Build a sigmoid classifier and explore its decision boundary.', math: 'SIGMOID', kind: 'CLASSIFICATION', chart: 'sigmoid' },
      { number: '12', folder: '12_naive_bayes', title: 'Naive Bayes From Scratch', description: 'Use word counts and conditional probability to classify messages.', math: 'BAYES’ RULE', kind: 'CLASSIFICATION', chart: 'bars' },
    ],
  },
  {
    id: 'probability',
    title: 'Probability & patterns',
    label: 'MEASURE & UNDERSTAND',
    projects: [
      { number: '04', folder: '04_statistical_ab_testing', title: 'Statistical A/B Testing Engine', description: 'Compare two conversion rates with a two-proportion z-test.', math: 'Z-SCORE', kind: 'TESTING', chart: 'bars' },
      { number: '05', folder: '05_bayesian_ab_testing', title: 'Bayesian A/B Testing', description: 'Update Beta distributions and estimate the chance that B is better.', math: 'BETA DISTRIBUTION', kind: 'TESTING', chart: 'density' },
      { number: '06', folder: '06_customer_churn_probability', title: 'Customer Churn Probability', description: 'Turn simple customer features into churn probabilities with a small logistic model.', math: 'PROBABILITY', kind: 'PREDICTION', chart: 'sigmoid' },
      { number: '07', folder: '07_time_series_forecasting', title: 'Time-Series Forecasting', description: 'Explore trend and seasonality, smooth the data, and forecast one cycle.', math: 'SEASONALITY', kind: 'FORECASTING', chart: 'time' },
      { number: '13', folder: '13_monte_carlo_simulation', title: 'Monte Carlo Simulation Lab', description: 'Estimate pi by sampling points inside a square and a quarter circle.', math: 'RANDOM SAMPLING', kind: 'SIMULATION', chart: 'scatter' },
      { number: '14', folder: '14_probability_anomaly_detection', title: 'Probability Anomaly Detection', description: 'Use z-scores to spot values far from the average.', math: 'STANDARD DEVIATION', kind: 'ANOMALIES', chart: 'dots' },
    ],
  },
  {
    id: 'decisions',
    title: 'Applied decisions',
    label: 'PUT MODELS TO WORK',
    projects: [
      { number: '08', folder: '08_portfolio_optimization', title: 'Portfolio Optimization', description: 'Compare risk and average return for different two-asset mixes.', math: 'COVARIANCE', kind: 'TRADE-OFFS', chart: 'curve' },
      { number: '09', folder: '09_matrix_factorization_recommender', title: 'Matrix Factorization Recommender', description: 'Estimate missing ratings with small user and item vectors.', math: 'LOW-RANK FACTORS', kind: 'RECOMMENDATIONS', chart: 'matrix' },
      { number: '15', folder: '15_dynamic_pricing_optimization', title: 'Dynamic Pricing Optimization', description: 'Model a simple demand curve and search for a price that earns more revenue.', math: 'GRID SEARCH', kind: 'PRICING', chart: 'curve' },
    ],
  },
];

const chartShapes = {
  line: '<path class="mini-grid" d="M8 10H104M8 25H104M8 40H104"/><path class="mini-axis" d="M8 6V48H105"/><path class="mini-line" d="M10 42 C28 38 31 35 44 34 S61 25 72 27 S89 14 103 10"/><circle class="mini-hollow" cx="44" cy="34" r="3"/><circle class="mini-hollow" cx="72" cy="27" r="3"/>',
  descent: '<path class="mini-grid" d="M8 10H104M8 25H104M8 40H104"/><path class="mini-axis" d="M8 6V48H105"/><path class="mini-line" d="M10 11 C27 11 24 41 42 41 S55 20 69 20 S82 34 103 34"/><circle class="mini-dot" cx="24" cy="12" r="3"/><circle class="mini-dot" cx="42" cy="41" r="3"/><circle class="mini-dot" cx="69" cy="20" r="3"/><circle class="mini-dot" cx="91" cy="32" r="3"/>',
  scatter: '<path class="mini-grid" d="M8 10H104M8 25H104M8 40H104"/><path class="mini-axis" d="M8 6V48H105"/><circle class="mini-dot" cx="21" cy="38" r="3"/><circle class="mini-dot" cx="29" cy="31" r="3"/><circle class="mini-dot" cx="38" cy="35" r="3"/><circle class="mini-dot" cx="57" cy="23" r="3"/><circle class="mini-dot" cx="64" cy="28" r="3"/><circle class="mini-dot" cx="72" cy="18" r="3"/><circle class="mini-dot" cx="88" cy="14" r="3"/><circle class="mini-dot" cx="96" cy="20" r="3"/>',
  clusters: '<path class="mini-grid" d="M8 10H104M8 25H104M8 40H104"/><path class="mini-axis" d="M8 6V48H105"/><circle class="mini-dot" cx="23" cy="37" r="3"/><circle class="mini-dot" cx="31" cy="30" r="3"/><circle class="mini-dot" cx="40" cy="35" r="3"/><circle class="mini-dot" cx="72" cy="15" r="3"/><circle class="mini-dot" cx="82" cy="22" r="3"/><circle class="mini-dot" cx="91" cy="13" r="3"/><path class="mini-axis" d="M31 24V38M25 31H37M81 8V22M75 15H87"/>',
  sigmoid: '<path class="mini-grid" d="M8 10H104M8 25H104M8 40H104"/><path class="mini-axis" d="M8 6V48H105"/><path class="mini-line" d="M10 42 C34 42 37 40 45 35 C54 28 53 18 65 13 C75 8 83 9 103 9"/>',
  bars: '<path class="mini-grid" d="M8 10H104M8 25H104M8 40H104"/><path class="mini-axis" d="M8 6V48H105"/><rect class="mini-bar" x="18" y="26" width="13" height="22" rx="2"/><rect class="mini-bar" x="39" y="17" width="13" height="31" rx="2"/><rect class="mini-bar" x="60" y="22" width="13" height="26" rx="2"/><rect class="mini-bar" x="81" y="11" width="13" height="37" rx="2"/>',
  density: '<path class="mini-grid" d="M8 10H104M8 25H104M8 40H104"/><path class="mini-axis" d="M8 6V48H105"/><path class="mini-fill" d="M9 46 C22 45 24 40 30 29 C37 15 41 10 52 10 C64 10 68 22 75 31 C81 39 86 44 103 46Z"/><path class="mini-line" d="M9 46 C22 45 24 40 30 29 C37 15 41 10 52 10 C64 10 68 22 75 31 C81 39 86 44 103 46"/>',
  time: '<path class="mini-grid" d="M8 10H104M8 25H104M8 40H104"/><path class="mini-axis" d="M8 6V48H105"/><path class="mini-line" d="M10 34 L20 29 L30 32 L40 22 L50 26 L60 17 L70 22 L80 12 L90 15 L103 7"/><path class="mini-line" style="opacity:.42;stroke-dasharray:3 3" d="M80 12 L90 19 L103 14"/>',
  dots: '<path class="mini-grid" d="M8 10H104M8 25H104M8 40H104"/><path class="mini-axis" d="M8 6V48H105"/><circle class="mini-dot" cx="18" cy="28" r="3"/><circle class="mini-dot" cx="30" cy="22" r="3"/><circle class="mini-dot" cx="41" cy="32" r="3"/><circle class="mini-dot" cx="53" cy="20" r="3"/><circle class="mini-dot" cx="65" cy="27" r="3"/><circle class="mini-dot" cx="77" cy="18" r="3"/><circle class="mini-dot" cx="91" cy="11" r="4"/><path class="mini-line" style="stroke-dasharray:3 3;opacity:.65" d="M11 26 L99 25"/>',
  curve: '<path class="mini-grid" d="M8 10H104M8 25H104M8 40H104"/><path class="mini-axis" d="M8 6V48H105"/><path class="mini-fill" d="M10 12 C27 18 36 34 52 38 C71 42 82 28 103 16 L103 48 L10 48Z"/><path class="mini-line" d="M10 12 C27 18 36 34 52 38 C71 42 82 28 103 16"/>',
  matrix: '<path class="mini-grid" d="M8 10H104M8 25H104M8 40H104"/><g transform="translate(25 7)"><rect class="mini-bar" x="0" y="0" width="14" height="10" rx="2"/><rect class="mini-bar" x="18" y="0" width="14" height="10" rx="2" style="opacity:.35"/><rect class="mini-bar" x="36" y="0" width="14" height="10" rx="2" style="opacity:.55"/><rect class="mini-bar" x="0" y="14" width="14" height="10" rx="2" style="opacity:.45"/><rect class="mini-bar" x="18" y="14" width="14" height="10" rx="2"/><rect class="mini-bar" x="36" y="14" width="14" height="10" rx="2" style="opacity:.25"/><rect class="mini-bar" x="0" y="28" width="14" height="10" rx="2" style="opacity:.3"/><rect class="mini-bar" x="18" y="28" width="14" height="10" rx="2" style="opacity:.6"/><rect class="mini-bar" x="36" y="28" width="14" height="10" rx="2"/></g>',
};

function projectCard(project, color) {
  const notebook = `${repo}/${project.folder}/${project.folder}.ipynb`;
  const script = `${repo}/${project.folder}/main.py`;
  const guide = `${repo}/${project.folder}/README.md`;
  return `
    <article class="project-card" style="--chart-color:${color}">
      <div class="project-meta"><span class="project-number">${project.number}</span><span class="project-kind">${project.kind}</span></div>
      <h4>${project.title}</h4>
      <p class="project-description">${project.description}</p>
      <div class="project-visual" aria-hidden="true">
        <svg viewBox="0 0 112 58" focusable="false">${chartShapes[project.chart]}</svg>
        <span class="math-label">${project.math}</span>
      </div>
      <div class="project-links">
        <a href="${notebook}" target="_blank" rel="noreferrer">Notebook ↗</a>
        <a href="${script}" target="_blank" rel="noreferrer">Python ↗</a>
        <a href="${guide}" target="_blank" rel="noreferrer">Guide ↗</a>
      </div>
    </article>`;
}

const groupColors = { foundations: '#4389cf', probability: '#47a28a', decisions: '#dc9760' };
const projectGroups = document.querySelector('#project-groups');
projectGroups.innerHTML = groups.map((group) => `
  <section class="project-group section-anchor" id="${group.id}" aria-labelledby="${group.id}-title">
    <div class="group-heading">
      <span>${String(group.projects.length).padStart(2, '0')}</span>
      <h3 id="${group.id}-title">${group.title}</h3>
      <small>${group.label}</small>
    </div>
    <div class="project-grid">${group.projects.map((project) => projectCard(project, groupColors[group.id])).join('')}</div>
  </section>`).join('');

const navLinks = [...document.querySelectorAll('.nav-link')];
const observedSections = ['overview', 'learning-path', 'projects', 'foundations', 'probability', 'decisions', 'get-started', 'approach']
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!current) return;
    const matchingId = current.target.id === 'foundations' || current.target.id === 'probability' || current.target.id === 'decisions'
      ? current.target.id
      : current.target.id;
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${matchingId}`);
    });
  }, { rootMargin: '-18% 0px -67% 0px', threshold: [0, .15, .4] });
  observedSections.forEach((section) => sectionObserver.observe(section));
}
