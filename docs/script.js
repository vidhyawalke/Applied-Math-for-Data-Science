const repo = 'https://github.com/vidhyawalke/Applied-Math-for-Data-Science';

const projects = [
  {
    number: '01', folder: '01_linear_regression', title: 'Linear Regression From Scratch', topic: 'Fitting a line',
    question: 'How can one straight line summarize the relationship between two measurements?',
    profile: 'The example has six paired observations. The input values are x = 1, 2, 3, 4, 5, 6 and the observed values are y = 1.2, 1.9, 3.2, 3.8, 5.1, 5.8.',
    method: 'The code first finds the average of each column. It measures how x and y move together, divides that by the variation in x to get the slope, then chooses an intercept so the fitted line passes through the two averages.',
    formula: 'm = Σ[(xᵢ − x̄)(yᵢ − ȳ)] / Σ[(xᵢ − x̄)²]\nb = ȳ − m x̄\nŷ = mx + b',
    formulaNote: 'm is the slope, b is the intercept, and ŷ is the model’s prediction for an input x.',
    result: 'The fitted line is ŷ = 0.95x + 0.18. Its mean squared error is 0.022, so the average squared gap between the six observations and the line is small for this example.',
    reflection: 'Least squares gives a compact summary of a roughly straight pattern. Six points are enough to see the calculation, but not enough to claim that the line will predict new data well.', chart: 'line',
  },
  {
    number: '02', folder: '02_gradient_descent', title: 'Gradient Descent Visualizer', topic: 'Following a slope',
    question: 'How can a derivative guide us toward the lowest point of a curve?',
    profile: 'The objective is a one-variable quadratic, f(x) = (x − 3)² + 1. The algorithm starts at x = −2 and takes 30 steps.',
    method: 'At each step, the derivative gives the local direction of increase. The algorithm moves in the opposite direction. The learning rate controls how far it moves each time.',
    formula: 'f(x) = (x − 3)² + 1\nf′(x) = 2(x − 3)\nxₜ₊₁ = xₜ − ηf′(xₜ)',
    formulaNote: 'η is the learning rate. Here η = 0.15, and the minimum is at x = 3.',
    result: 'After 30 updates, x = 3.000 and f(x) = 1.000. The steps get smaller as the slope flattens near the minimum.',
    reflection: 'A very small learning rate can take a long time to get close. A very large one can jump over the low point. This simple curve makes that trade-off visible.', chart: 'descent',
  },
  {
    number: '03', folder: '03_pca', title: 'PCA From Scratch', topic: 'Reducing dimensions',
    question: 'Can two measurements be summarized by one direction while keeping most of their variation?',
    profile: 'The project creates 60 two-feature points with a fixed random seed. The features are correlated, so many points stretch along a shared direction.',
    method: 'The code centers both features, calculates their covariance matrix, and finds its eigenvalues and eigenvectors. It sorts the directions by eigenvalue, then projects the points onto the first direction.',
    formula: 'C = (X − μ)ᵀ(X − μ) / (n − 1)\nCv = λv\nZ = (X − μ)v₁',
    formulaNote: 'C is the covariance matrix. The eigenvector v₁ with the largest eigenvalue λ₁ is the first principal direction; Z is the one-dimensional projection.',
    result: 'The eigenvalues are 7.15 and 0.10. Keeping only the first principal direction retains 98.6% of the variance in this generated example.',
    reflection: 'PCA can compress correlated measurements with little information loss. It does not choose directions using a target label, and principal components can be harder to interpret than the original features.', chart: 'pca',
  },
  {
    number: '04', folder: '04_statistical_ab_testing', title: 'Statistical A/B Testing Engine', topic: 'Comparing rates',
    question: 'Is the higher conversion rate in group B strong evidence of a real difference?',
    profile: 'Group A has 55 conversions from 500 visitors. Group B has 68 conversions from 510 visitors. The outcome for each visitor is either converted or not converted.',
    method: 'The test combines both groups to estimate a shared conversion rate under the assumption that A and B are equally effective. It uses that pooled rate to estimate the standard error of the observed difference.',
    formula: 'p̂ₐ = cₐ / nₐ     p̂ᵦ = cᵦ / nᵦ\np̂ = (cₐ + cᵦ) / (nₐ + nᵦ)\nz = (p̂ᵦ − p̂ₐ) / √[p̂(1 − p̂)(1/nₐ + 1/nᵦ)]',
    formulaNote: 'The two-sided p-value measures how often a difference at least this large would appear if the true rates were equal.',
    result: 'A converts at 11.0% and B at 13.3%, a difference of 2.3 percentage points. The test returns z = 1.13 and p = 0.257, which is above the common 0.05 threshold.',
    reflection: 'In this example, the data does not provide strong evidence to reject equal conversion rates. A p-value is not the probability that a version is better; experiment design and sample size matter too.', chart: 'ab',
  },
  {
    number: '05', folder: '05_bayesian_ab_testing', title: 'Bayesian A/B Testing', topic: 'Updating a belief',
    question: 'After observing conversions, how likely is it that B has a higher conversion rate than A?',
    profile: 'The project reuses 55 conversions from 500 visitors for A and 68 from 510 for B. Each rate begins with a uniform Beta(1, 1) prior.',
    method: 'For a Beta prior and binary conversion data, add the conversions to α and the non-conversions to β. The code then draws 100,000 rates from each updated distribution and counts how often B’s draw is larger.',
    formula: 'p ~ Beta(α, β)\nαposterior = αprior + conversions\nβposterior = βprior + non-conversions\nP(B > A) ≈ count(rateB > rateA) / draws',
    formulaNote: 'The posterior is the updated distribution for a conversion rate after observing the data.',
    result: 'The posterior means are 11.2% for A and 13.5% for B. In the simulation, B’s rate is higher in 86.9% of the paired draws.',
    reflection: 'This expresses uncertainty directly, but the result depends on the prior and observed data. An 86.9% probability is encouraging, yet it is not certainty that B will perform better in future traffic.', chart: 'bayesian',
  },
  {
    number: '06', folder: '06_customer_churn_probability', title: 'Customer Churn Probability', topic: 'Turning features into probabilities',
    question: 'Can tenure and monthly bill help a small model estimate the chance that a customer churns?',
    profile: 'The example has 12 made-up customers with tenure, monthly bill, and a binary churn label. Both input features are standardized before fitting.',
    method: 'The model combines an intercept with weighted features, applies the sigmoid function to get a probability, and updates the weights with the average binary cross-entropy gradient for 3,000 iterations.',
    formula: 'z = w₀ + w₁(tenure) + w₂(bill)\np(churn = 1) = σ(z) = 1 / (1 + e⁻ᶻ)',
    formulaNote: 'Standardizing the inputs puts tenure and bill on comparable scales. The sigmoid maps any score to a value between 0 and 1.',
    result: 'The learned weights are [0.54, −3.46, 7.05] for the intercept, tenure, and bill. The twelve training probabilities range from about 0.00 to 1.00, reflecting how this tiny labelled example separates the cases.',
    reflection: 'These probabilities come from only twelve invented customers and are not useful for real retention decisions. They demonstrate how a linear score can become a probability, not how to build a validated churn model.', chart: 'churn',
  },
  {
    number: '07', folder: '07_time_series_forecasting', title: 'Time-Series Forecasting', topic: 'Trend and seasonality',
    question: 'How can a simple forecast reuse a repeating seasonal pattern?',
    profile: 'The data contains 36 generated time steps: a starting level of 10, a trend of 0.25 per step, a six-step seasonal cycle, and small random noise.',
    method: 'A six-value moving average smooths short-term changes. For the forecast, the last six observations are repeated and shifted by the change between the latest value and the value one seasonal cycle earlier.',
    formula: 'Moving averageₜ = (yₜ + ⋯ + yₜ₋₅) / 6\nŷₜ₊ₕ = yₜ₊ₕ₋₆ + (yₜ − yₜ₋₆)',
    formulaNote: 'The second expression repeats the last seasonal cycle and adds the recent level change.',
    result: 'The next six toy forecasts are 20.1, 19.8, 18.8, 18.1, 18.0, and 18.6. They carry the recent upward level forward while preserving the six-step shape.',
    reflection: 'This is a seasonal-naive example, not a general forecasting model. It assumes the pattern repeats and does not estimate forecast uncertainty or test accuracy on held-out data.', chart: 'time',
  },
  {
    number: '08', folder: '08_portfolio_optimization', title: 'Portfolio Optimization', topic: 'Balancing risk and return',
    question: 'How does the mix of two assets change a portfolio’s average return and variability?',
    profile: 'The project uses eight made-up return observations for two assets. It tests 101 mixes, from all asset B to all asset A.',
    method: 'For each mix, it calculates a weighted average return and uses the covariance matrix to account for the assets’ individual variation and how they move together. It then compares average return to standard deviation.',
    formula: 'μₚ = wᵀμ\nσₚ = √(wᵀΣw)\nscore = μₚ / σₚ',
    formulaNote: 'w is the vector of asset weights, μ is the vector of average returns, and Σ is the covariance matrix.',
    result: 'Among the 101 tested mixes, the largest sample return-to-risk ratio occurs at 17% in asset A and 83% in asset B.',
    reflection: 'The inputs are invented and only eight periods long. A high sample ratio here is just a demonstration of weighted averages and covariance; it is not an investment recommendation.', chart: 'portfolio',
  },
  {
    number: '09', folder: '09_matrix_factorization_recommender', title: 'Matrix Factorization Recommender', topic: 'Predicting missing ratings',
    question: 'Can a few hidden user and item factors fill in missing ratings?',
    profile: 'A 4 × 4 table contains ratings from 1 to 5, with three entries set to zero to represent missing values. Only observed ratings contribute to training error.',
    method: 'Each user and each item starts with a two-value latent vector. The model predicts a rating with their dot product, then adjusts both vectors to reduce squared error on known ratings.',
    formula: 'r̂ᵤᵢ = pᵤ · qᵢ\nerrorᵤᵢ = r̂ᵤᵢ − rᵤᵢ\npᵤ, qᵢ ← gradient update on observed ratings',
    formulaNote: 'pᵤ represents a user, qᵢ represents an item, and their dot product is the predicted rating.',
    result: 'After training, the three missing ratings are estimated as 1.9 for user 1/item 3, 3.3 for user 2/item 2, and 1.0 for user 4/item 1. Predictions are clipped to the 1–5 rating range.',
    reflection: 'Four users and four items are enough to demonstrate latent factors, but not enough to make useful recommendations. Real systems need more data, validation, and careful handling of new users and items.', chart: 'matrix',
  },
  {
    number: '10', folder: '10_clustering_from_scratch', title: 'Clustering From Scratch', topic: 'Grouping by distance',
    question: 'Can the algorithm recover visible groups when it only sees point coordinates?',
    profile: 'Ninety generated points form three clouds. The project asks k-means to find three clusters, starting from one point in each cloud.',
    method: 'K-means assigns each point to its nearest center using Euclidean distance. It then moves each center to the mean of its assigned points and repeats until the centers stop changing.',
    formula: 'cluster(xᵢ) = argminₖ ||xᵢ − μₖ||²\nμₖ = mean of all points assigned to cluster k',
    formulaNote: 'The algorithm tries to make points close to their own cluster center.',
    result: 'The centers stop moving after 3 updates. Their final locations are approximately (−0.12, −0.19), (3.94, 0.97), and (1.58, 3.74), near the middle of the three point clouds.',
    reflection: 'The example makes the groups easy to see. K-means needs the number of clusters in advance and can behave differently with other starting centers or data shaped in non-round groups.', chart: 'clusters',
  },
  {
    number: '11', folder: '11_logistic_regression', title: 'Logistic Regression From Scratch', topic: 'Drawing a decision boundary',
    question: 'Can a straight boundary separate two groups when the model reports probabilities?',
    profile: 'The script creates two labelled groups of 45 points each around different centers. Each point has two features and a class label of zero or one.',
    method: 'The model calculates a weighted score for each point, converts it to a class-one probability with a sigmoid, and uses gradient descent to reduce binary cross-entropy.',
    formula: 'p(y = 1 | x) = σ(w₀ + w₁x₁ + w₂x₂)\nσ(z) = 1 / (1 + e⁻ᶻ)\ndecision boundary: p = 0.5',
    formulaNote: 'The boundary is where the model is equally likely to assign either class.',
    result: 'After 2,500 updates, the learned weights are [0.08, 2.96, 3.53]. The model classifies 97.8% of its own generated training points correctly.',
    reflection: 'The high training accuracy reflects two deliberately separated toy groups. It is not a measure of performance on new data; a real model needs a separate test set and broader checks.', chart: 'logistic',
  },
  {
    number: '12', folder: '12_naive_bayes', title: 'Naive Bayes From Scratch', topic: 'Classifying words with probability',
    question: 'Can the words in a short message help estimate whether it is spam?',
    profile: 'The training set contains six short messages labelled spam or not spam. The vocabulary is built from all words in those messages.',
    method: 'For each class, the model combines the class prior with the likelihood of each word. Add-one smoothing gives unseen words a nonzero likelihood. Log probabilities turn multiplication into addition.',
    formula: 'score(c) = log P(c) + Σw log P(w | c)\nP(w | c) = (count(w, c) + 1) / (words in c + vocabulary size)',
    formulaNote: 'The final class probability is found by normalizing the two class scores.',
    result: 'The estimated spam probabilities are 65.2% for “free gift today”, 4.2% for “meeting at noon”, and 82.6% for “claim prize”.',
    reflection: 'The small vocabulary makes the arithmetic easy to follow, but six messages cannot represent real language. Naive Bayes also treats each word as independent given the class.', chart: 'spam',
  },
  {
    number: '13', folder: '13_monte_carlo_simulation', title: 'Monte Carlo Simulation Lab', topic: 'Estimating π with random points',
    question: 'Can random sampling estimate the area of a quarter circle?',
    profile: 'The script samples 20,000 random points uniformly inside a unit square. It checks whether each point falls inside the quarter circle of radius one.',
    method: 'The circle occupies π/4 of the unit square’s area. The fraction of sampled points inside the circle estimates that area; multiplying the fraction by four estimates π.',
    formula: 'inside: x² + y² ≤ 1\nπ̂ = 4 × (points inside circle / total points)',
    formulaNote: 'As the number of independent samples grows, the estimate tends to settle near the true value.',
    result: 'With 20,000 points, the estimate is 3.1316. The reference value is approximately 3.1416, so this run is about 0.0100 lower.',
    reflection: 'Monte Carlo estimates vary from run to run. This project fixes a random seed so the example is repeatable; more points usually reduce random variation, but at greater computational cost.', chart: 'montecarlo',
  },
  {
    number: '14', folder: '14_probability_anomaly_detection', title: 'Probability Anomaly Detection', topic: 'Flagging unusual values',
    question: 'Which observations lie unusually far from the sample average?',
    profile: 'The data contains 45 values drawn around 50 with standard deviation 4, plus three deliberately unusual values: 68, 31, and 82.',
    method: 'The code calculates the sample mean and sample standard deviation, converts each value to a z-score, and flags values more than two standard deviations from the mean.',
    formula: 'zᵢ = (xᵢ − x̄) / s\nflag xᵢ when |zᵢ| > 2',
    formulaNote: 'A z-score measures how many standard deviations an observation is above or below the mean.',
    result: 'For this sample, the mean is 50.8 and the standard deviation is 7.4. The values 68, 31, and 82 are flagged with z-scores 2.32, −2.68, and 4.21.',
    reflection: 'A two-standard-deviation cutoff is a simple rule, not a universal definition of an anomaly. It works best when the distribution and measurement process make z-scores meaningful.', chart: 'anomaly',
  },
  {
    number: '15', folder: '15_dynamic_pricing_optimization', title: 'Dynamic Pricing Optimization', topic: 'Finding a price on a grid',
    question: 'Under a simple demand assumption, which tested price gives the most revenue?',
    profile: 'The toy model tests 201 prices between $0 and $100. Demand starts at 120 units and drops by 1.1 units for every dollar of price.',
    method: 'For every candidate price, the script estimates demand, multiplies price by demand to get revenue, and selects the highest point on the tested grid.',
    formula: 'd(p) = max(120 − 1.1p, 0)\nR(p) = p × d(p)\np* = argmaxₚ R(p)',
    formulaNote: 'The grid uses half-dollar steps, so the selected price is the best tested value, not necessarily the only possible optimum.',
    result: 'The best tested price is $54.50. Estimated demand is 60.0 units and revenue is $3,272.72 in the toy model.',
    reflection: 'The true demand curve is rarely known and may not be linear. This example teaches grid search and the revenue calculation; it should not be used to set a real price.', chart: 'pricing',
  },
];

const plot = {
  base: '<path class="grid" d="M58 36H488M58 74H488M58 112H488M58 150H488"/><path class="axis" d="M58 22V150H488"/>',
  line: '<path class="series" d="M72 139L128 126L184 113L240 100L296 87L352 74L408 61L466 48"/><g class="points"><circle cx="72" cy="136" r="4"/><circle cx="128" cy="127" r="4"/><circle cx="184" cy="110" r="4"/><circle cx="240" cy="99" r="4"/><circle cx="296" cy="81" r="4"/><circle cx="352" cy="70" r="4"/></g>',
  descent: '<path class="series" d="M78 44Q275 202 468 42"/><path class="series-alt" d="M115 91L176 127L228 143L270 149L300 150"/><g class="points"><circle cx="115" cy="91" r="4"/><circle cx="176" cy="127" r="4"/><circle cx="228" cy="143" r="4"/><circle cx="270" cy="149" r="4"/><circle cx="300" cy="150" r="4"/></g>',
  pca: '<g class="points"><circle cx="160" cy="126" r="4"/><circle cx="183" cy="116" r="4"/><circle cx="206" cy="114" r="4"/><circle cx="233" cy="100" r="4"/><circle cx="257" cy="92" r="4"/><circle cx="284" cy="87" r="4"/><circle cx="310" cy="77" r="4"/><circle cx="338" cy="70" r="4"/><circle cx="363" cy="60" r="4"/><circle cx="389" cy="53" r="4"/></g><path class="series-alt" d="M124 137L430 40"/><path class="axis" d="M270 96L352 70"/>',
  ab: '<rect class="bar" x="165" y="92" width="74" height="58"/><rect class="bar-alt" x="305" y="78" width="74" height="72"/><text x="191" y="166">A 11.0%</text><text x="329" y="166">B 13.3%</text>',
  bayesian: '<path class="series" d="M68 149C123 148 150 137 181 94C206 59 227 35 258 39C294 44 302 100 337 126C367 148 408 149 480 149"/><path class="series-alt" d="M68 149C150 149 183 141 220 111C250 87 275 51 308 42C347 33 359 82 389 116C414 142 443 148 480 149"/>',
  sigmoid: '<path class="series" d="M70 139C168 139 199 134 235 113C270 92 263 58 310 43C345 32 390 34 475 34"/><g class="points"><circle cx="112" cy="46" r="4"/><circle cx="150" cy="51" r="4"/><circle cx="187" cy="59" r="4"/><circle cx="224" cy="68" r="4"/><circle cx="272" cy="104" r="4"/><circle cx="318" cy="121" r="4"/><circle cx="366" cy="130" r="4"/><circle cx="420" cy="138" r="4"/></g>',
  time: '<path class="series" d="M65 123L96 112L127 120L158 97L189 103L220 84L251 96L282 68L313 79L344 57L375 68L406 43L437 53L466 34"/><path class="series-alt" d="M375 68L406 83L437 73L466 89"/>',
  portfolio: '<path class="series" d="M74 132C146 109 212 84 272 76C339 67 398 53 470 36"/><circle class="point-main" cx="272" cy="76" r="6"/><text x="292" y="70">best tested mix</text>',
  matrix: '<g class="heat"><rect x="146" y="38" width="58" height="30"/><rect x="208" y="38" width="58" height="30"/><rect x="270" y="38" width="58" height="30"/><rect x="332" y="38" width="58" height="30"/><rect x="146" y="72" width="58" height="30"/><rect x="208" y="72" width="58" height="30"/><rect x="270" y="72" width="58" height="30"/><rect x="332" y="72" width="58" height="30"/><rect x="146" y="106" width="58" height="30"/><rect x="208" y="106" width="58" height="30"/><rect x="270" y="106" width="58" height="30"/><rect x="332" y="106" width="58" height="30"/></g><text x="280" y="60">1.9*</text><text x="218" y="94">3.3*</text><text x="156" y="128">1.0*</text>',
  clusters: '<g class="cluster-a"><circle cx="124" cy="115" r="5"/><circle cx="151" cy="92" r="5"/><circle cx="173" cy="121" r="5"/><circle cx="185" cy="103" r="5"/></g><g class="cluster-b"><circle cx="307" cy="57" r="5"/><circle cx="331" cy="77" r="5"/><circle cx="355" cy="50" r="5"/><circle cx="376" cy="69" r="5"/></g><g class="cluster-c"><circle cx="228" cy="45" r="5"/><circle cx="246" cy="68" r="5"/><circle cx="266" cy="48" r="5"/><circle cx="281" cy="77" r="5"/></g><path class="center-mark" d="M151 99V115M143 107H159M342 51V67M334 59H350M254 52V68M246 60H262"/>',
  logistic: '<path class="series-alt" d="M105 138L423 46"/><g class="cluster-a"><circle cx="128" cy="112" r="5"/><circle cx="166" cy="130" r="5"/><circle cx="196" cy="106" r="5"/><circle cx="222" cy="119" r="5"/></g><g class="cluster-b"><circle cx="309" cy="80" r="5"/><circle cx="352" cy="62" r="5"/><circle cx="389" cy="73" r="5"/><circle cx="420" cy="43" r="5"/></g>',
  spam: '<rect class="bar" x="130" y="73" width="62" height="77"/><rect class="bar-alt" x="226" y="125" width="62" height="25"/><rect class="bar" x="322" y="52" width="62" height="98"/><text x="127" y="166">65%</text><text x="226" y="166">4%</text><text x="319" y="166">83%</text>',
  montecarlo: '<path class="series-alt" d="M85 143Q225 -4 460 143"/><g class="points">' + Array.from({length:38}, (_,i) => { const x=82+(i*67)%375; const y=36+(i*41)%104; const inside=(x-85)*(x-85)+(150-y)*(150-y) < 145*145; return `<circle cx="${x}" cy="${y}" r="2.3" class="${inside?'point-main':'point-fade'}"/>`; }).join('') + '</g>',
  anomaly: '<path class="series-alt" d="M64 78H480M64 122H480"/><path class="axis" d="M64 100H480"/><g class="points"><circle cx="93" cy="96" r="4"/><circle cx="144" cy="104" r="4"/><circle cx="188" cy="91" r="4"/><circle cx="229" cy="101" r="4"/><circle cx="278" cy="96" r="4"/><circle cx="333" cy="108" r="4"/><circle cx="376" cy="42" r="6" class="outlier"/><circle cx="416" cy="140" r="6" class="outlier"/><circle cx="459" cy="20" r="6" class="outlier"/></g>',
  pricing: '<path class="series" d="M70 35L465 145"/><path class="series-alt" d="M70 145Q259 12 465 145"/><circle class="point-main" cx="285" cy="75" r="6"/><text x="299" y="68">$54.50</text>',
};

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'how-to-use', label: 'How to use these notes' },
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function section(id, tocLabel, heading, content) {
  sections.push({ id, label: tocLabel, project: true });
  return `<section class="article-section" id="${id}" data-section="${id}"><h3>${heading}</h3>${content}</section>`;
}

function chart(project) {
  return `<figure class="result-figure"><svg viewBox="0 0 520 190" role="img" aria-label="Illustrative chart for ${escapeHtml(project.title)}">${plot.base}${plot[project.chart]}</svg><figcaption>Visual sketch of the calculation in this small example.</figcaption></figure>`;
}

function projectArticle(project) {
  const key = `project-${project.number}`;
  const notebook = `${repo}/blob/main/${project.folder}/${project.folder}.ipynb`;
  const script = `${repo}/blob/main/${project.folder}/main.py`;
  const readme = `${repo}/blob/main/${project.folder}/README.md`;
  const introId = `${key}-introduction`;
  sections.push({ id: introId, label: 'Introduction', project: true });
  const contents = [
    section(`${key}-data`, 'Data Profile', 'Data Profile', `<p>${escapeHtml(project.profile)}</p>`),
    section(`${key}-method`, 'Method', 'Method', `<p>${escapeHtml(project.method)}</p>`),
    section(`${key}-formula`, 'Formula', 'Formula', `<div class="formula-block"><pre>${escapeHtml(project.formula)}</pre><p>${escapeHtml(project.formulaNote)}</p></div>`),
    section(`${key}-result`, 'Result', 'Result', `<p>${escapeHtml(project.result)}</p>${chart(project)}`),
    section(`${key}-reflection`, 'Reflection', 'Reflection', `<p>${escapeHtml(project.reflection)}</p>`),
  ].join('');
  return `<article class="project-article" id="${key}" data-project="${key}">
    <header class="project-heading" data-section="${introId}">
      <p class="project-kicker">PROJECT ${project.number} <span>·</span> ${escapeHtml(project.topic.toUpperCase())}</p>
      <h2>${escapeHtml(project.title)}</h2>
      <div class="project-introduction" id="${introId}"><h3>Introduction</h3><blockquote>${escapeHtml(project.question)}</blockquote></div>
      <p class="source-links"><a href="${notebook}" target="_blank" rel="noreferrer">Open notebook ↗</a><a href="${script}" target="_blank" rel="noreferrer">View Python script ↗</a><a href="${readme}" target="_blank" rel="noreferrer">Project guide ↗</a></p>
    </header>
    ${contents}
  </article>`;
}

const introduction = `
  <header class="article-heading">
    <h1>Applied Math for Data Science</h1>
    <p class="byline">Vidhya Walke <span>·</span> Project notes and worked examples</p>
  </header>
  <section class="article-section" id="introduction" data-section="introduction">
    <h2>Introduction</h2>
    <p>This collection explores the math behind common data science ideas through 15 small Python projects. Each note starts with a question, explains the data and formula, walks through the method, and records the result from the project code.</p>
    <p>The examples are deliberately compact. You can read the explanation first, then open the notebook to follow the code and visualization. The scripts use fixed random seeds where needed, so their printed results can be reproduced.</p>
  </section>
  <section class="article-section" id="how-to-use" data-section="how-to-use">
    <h2>How to use these notes</h2>
    <p>Use the contents panel to jump to a project. As you scroll, the current project opens in the panel and the section in view is highlighted. Each project links to its notebook, Python script, and short project guide.</p>
    <p>Results below come from the included toy examples. They help explain a calculation; they are not business, investment, or customer decision advice.</p>
  </section>
  <hr class="article-divider" />`;

const article = document.querySelector('#article');
article.innerHTML = introduction + projects.map(projectArticle).join('') + `
  <section class="article-section references-section" id="references" data-section="references">
    <h2>References &amp; further reading</h2>
    <p>The linked notebooks and project guides contain the full code walkthroughs. For additional background, consult an introductory text or course on statistics, linear algebra, probability, and optimization.</p>
    <p><a href="${repo}" target="_blank" rel="noreferrer">Applied Math for Data Science repository ↗</a></p>
  </section>
  <footer class="article-footer">A student-friendly reference for learning by building · <a href="${repo}" target="_blank" rel="noreferrer">View the source on GitHub</a></footer>`;

const toc = document.querySelector('#table-of-contents');
const overviewLinks = sections.filter((item) => !item.project).map((item) => `<a class="toc-link" href="#${item.id}" data-target="${item.id}">${item.label}</a>`).join('');
const projectToc = projects.map((project) => {
  const key = `project-${project.number}`;
  const items = sections.filter((item) => item.project && item.id.startsWith(`${key}-`));
  const links = items.map((item) => `<a class="toc-child" href="#${item.id}" data-target="${item.id}">${item.label}</a>`).join('');
  return `<div class="toc-project" data-project-nav="${key}">
    <div class="toc-project-row">
      <a class="toc-project-link" href="#${key}-introduction" data-target="${key}-introduction"><span>${project.number}</span>${escapeHtml(project.title)}</a>
      <button class="toc-toggle" type="button" aria-expanded="false" aria-label="Expand ${escapeHtml(project.title)} sections">+</button>
    </div>
    <div class="toc-children" hidden>${links}</div>
  </div>`;
}).join('');
toc.innerHTML = `<div class="toc-overview">${overviewLinks}</div><div class="toc-projects">${projectToc}</div><a class="toc-link toc-reference" href="#references" data-target="references">References</a>`;

const tocLinks = [...toc.querySelectorAll('[data-target]')];
const navGroups = [...toc.querySelectorAll('.toc-project')];
const toggleGroup = (group, expand) => {
  const button = group.querySelector('.toc-toggle');
  const children = group.querySelector('.toc-children');
  button.setAttribute('aria-expanded', String(expand));
  button.textContent = expand ? '−' : '+';
  children.hidden = !expand;
};

toc.querySelectorAll('.toc-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const group = button.closest('.toc-project');
    toggleGroup(group, button.getAttribute('aria-expanded') !== 'true');
  });
});

const trackedSections = [...document.querySelectorAll('[data-section]')];
let updateQueued = false;
let activeProjectGroup = null;
function updateCurrentSection() {
  updateQueued = false;
  const marker = 155;
  let current = trackedSections[0];
  for (const candidate of trackedSections) {
    if (candidate.getBoundingClientRect().top <= marker) current = candidate;
    else break;
  }
  if (!current) return;
  const currentId = current.dataset.section;
  tocLinks.forEach((link) => link.classList.toggle('is-current', link.dataset.target === currentId));
  const currentGroup = current.closest('[data-project]')?.id;
  navGroups.forEach((group) => {
    const isCurrentGroup = group.dataset.projectNav === currentGroup;
    group.classList.toggle('is-current-project', isCurrentGroup);
    toggleGroup(group, isCurrentGroup);
    if (isCurrentGroup && currentGroup !== activeProjectGroup) {
      group.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  });
  activeProjectGroup = currentGroup;
}
function scheduleCurrentSection() {
  if (updateQueued) return;
  updateQueued = true;
  requestAnimationFrame(updateCurrentSection);
}
window.addEventListener('scroll', scheduleCurrentSection, { passive: true });
window.addEventListener('resize', scheduleCurrentSection);
tocLinks.forEach((link) => link.addEventListener('click', () => {
  const group = link.closest('.toc-project');
  if (group) toggleGroup(group, true);
  tocLinks.forEach((item) => item.classList.toggle('is-current', item === link));
}));
updateCurrentSection();
