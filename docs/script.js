const repo = 'https://github.com/vidhyawalke/Applied-Math-for-Data-Science';

const projects = [
  {
    number: '01', folder: '01_linear_regression', title: 'Linear Regression From Scratch', topic: 'Fitting a line',
    question: 'How can one straight line summarize the relationship between two measurements?',
    profile: 'I used six paired observations: x = 1, 2, 3, 4, 5, 6 and y = 1.2, 1.9, 3.2, 3.8, 5.1, 5.8.',
    method: 'I calculated the slope from the covariance of x and y divided by the variance of x. Then I used the two averages to find the intercept, so the fitted line passes through the centre of the data.',
    formula: 'm = Σ[(xᵢ − x̄)(yᵢ − ȳ)] / Σ[(xᵢ − x̄)²]\nb = ȳ − m x̄\nŷ = mx + b',
    formulaNote: 'm is the slope, b is the intercept, and ŷ is the model’s prediction for an input x.',
    result: 'The fitted line is ŷ = 0.95x + 0.18. Its mean squared error is 0.022, so the average squared gap between the six observations and the line is small for this example.',
    reflection: 'I learned how least squares turns a roughly straight pattern into a slope and intercept. The six-point example makes the calculation clear, but it is too small to judge how well the line predicts new data.', chart: 'line',
  },
  {
    number: '02', folder: '02_gradient_descent', title: 'Gradient Descent Visualizer', topic: 'Following a slope',
    question: 'How can a derivative guide us toward the lowest point of a curve?',
    profile: 'I used the curve f(x) = (x − 3)² + 1, started at x = −2, and ran 30 updates.',
    method: 'I calculated the derivative at the current x-value and stepped in the opposite direction. I set the learning rate to 0.15 to control the size of each step.',
    formula: 'f(x) = (x − 3)² + 1\nf′(x) = 2(x − 3)\nxₜ₊₁ = xₜ − ηf′(xₜ)',
    formulaNote: 'η is the learning rate. Here η = 0.15, and the minimum is at x = 3.',
    result: 'After 30 updates, x = 3.000 and f(x) = 1.000. The steps get smaller as the slope flattens near the minimum.',
    reflection: 'I saw how the learning rate changes the path: small steps move slowly, while large steps can jump past the minimum. The derivative gives the direction; the learning rate sets the pace.', chart: 'descent',
  },
  {
    number: '03', folder: '03_pca', title: 'PCA From Scratch', topic: 'Reducing dimensions',
    question: 'Can two measurements be summarized by one direction while keeping most of their variation?',
    profile: 'I generated 60 points with two correlated features. I fixed the random seed so the same points appear each time.',
    method: 'I centred both features, calculated the covariance matrix, and found its eigenvalues and eigenvectors. I sorted the directions by eigenvalue, then projected the data onto the first principal direction.',
    formula: 'C = (X − μ)ᵀ(X − μ) / (n − 1)\nCv = λv\nZ = (X − μ)v₁',
    formulaNote: 'C is the covariance matrix. The eigenvector v₁ with the largest eigenvalue λ₁ is the first principal direction; Z is the one-dimensional projection.',
    result: 'The eigenvalues are 7.15 and 0.10. Keeping only the first principal direction retains 98.6% of the variance in this generated example.',
    reflection: 'I learned to measure how much variation each principal direction keeps. The first direction captured most of this dataset’s variation, though principal components can be harder to explain than the original features.', chart: 'pca',
  },
  {
    number: '04', folder: '04_statistical_ab_testing', title: 'Statistical A/B Testing Engine', topic: 'Comparing rates',
    question: 'Is the higher conversion rate in group B strong evidence of a real difference?',
    profile: 'I compared 55 conversions from 500 visitors in A with 68 from 510 visitors in B. Each visitor either converted or did not.',
    method: 'I calculated each group’s conversion rate, then used the pooled rate to estimate the standard error under the assumption that the groups perform equally.',
    formula: 'p̂ₐ = cₐ / nₐ     p̂ᵦ = cᵦ / nᵦ\np̂ = (cₐ + cᵦ) / (nₐ + nᵦ)\nz = (p̂ᵦ − p̂ₐ) / √[p̂(1 − p̂)(1/nₐ + 1/nᵦ)]',
    formulaNote: 'The two-sided p-value measures how often a difference at least this large would appear if the true rates were equal.',
    result: 'A converts at 11.0% and B at 13.3%, a difference of 2.3 percentage points. The test returns z = 1.13 and p = 0.257, which is above the common 0.05 threshold.',
    reflection: 'I learned to read the p-value in context: this result does not give strong evidence of a difference at the 0.05 level. A p-value is not the probability that one version is better, and the experiment design matters.', chart: 'ab',
  },
  {
    number: '05', folder: '05_bayesian_ab_testing', title: 'Bayesian A/B Testing', topic: 'Updating a belief',
    question: 'After observing conversions, how likely is it that B has a higher conversion rate than A?',
    profile: 'I reused the A/B counts and began each conversion rate with a Beta(1, 1) prior, which gives every rate from 0 to 1 equal starting weight.',
    method: 'I updated each Beta distribution with the observed conversions and non-conversions, then drew 100,000 rates from each posterior and counted how often B’s rate was higher.',
    formula: 'p ~ Beta(α, β)\nαposterior = αprior + conversions\nβposterior = βprior + non-conversions\nP(B > A) ≈ count(rateB > rateA) / draws',
    formulaNote: 'The posterior is the updated distribution for a conversion rate after observing the data.',
    result: 'The posterior means are 11.2% for A and 13.5% for B. In the simulation, B’s rate is higher in 86.9% of the paired draws.',
    reflection: 'This approach let me describe uncertainty as a probability. The result depends on both the prior and the observed data, so an 86.9% estimate is not a guarantee about future visitors.', chart: 'bayesian',
  },
  {
    number: '06', folder: '06_customer_churn_probability', title: 'Customer Churn Probability', topic: 'Turning features into probabilities',
    question: 'Can tenure and monthly bill help a small model estimate the chance that a customer churns?',
    profile: 'I made a dataset of 12 customers with tenure, monthly bill, and a churn label. I standardized the two input features before fitting the model.',
    method: 'I combined the features with learned weights, passed the score through a sigmoid to get a probability, and updated the weights using binary cross-entropy over 3,000 iterations.',
    formula: 'z = w₀ + w₁(tenure) + w₂(bill)\np(churn = 1) = σ(z) = 1 / (1 + e⁻ᶻ)',
    formulaNote: 'Standardizing the inputs puts tenure and bill on comparable scales. The sigmoid maps any score to a value between 0 and 1.',
    result: 'The learned weights are [0.54, −3.46, 7.05] for the intercept, tenure, and bill. The twelve training probabilities range from about 0.00 to 1.00, reflecting how this tiny labelled example separates the cases.',
    reflection: 'This exercise helped me connect feature weights, a sigmoid function, and a probability. With only 12 invented customers, the result shows how the calculation works; it does not validate a churn model.', chart: 'churn',
  },
  {
    number: '07', folder: '07_time_series_forecasting', title: 'Time-Series Forecasting', topic: 'Trend and seasonality',
    question: 'How can a simple forecast reuse a repeating seasonal pattern?',
    profile: 'I generated 36 time points with a starting level of 10, a trend of 0.25 per step, a six-step seasonal pattern, and a small amount of random noise.',
    method: 'I used a six-point moving average to smooth short-term changes. For the forecast, I repeated the last seasonal cycle and adjusted it by the recent change in level.',
    formula: 'Moving averageₜ = (yₜ + ⋯ + yₜ₋₅) / 6\nŷₜ₊ₕ = yₜ₊ₕ₋₆ + (yₜ − yₜ₋₆)',
    formulaNote: 'The second expression repeats the last seasonal cycle and adds the recent level change.',
    result: 'The next six toy forecasts are 20.1, 19.8, 18.8, 18.1, 18.0, and 18.6. They carry the recent upward level forward while preserving the six-step shape.',
    reflection: 'I learned how a seasonal-naive forecast carries a repeating pattern forward. It assumes the pattern continues; I did not test forecast accuracy on held-out data or estimate uncertainty.', chart: 'time',
  },
  {
    number: '08', folder: '08_portfolio_optimization', title: 'Portfolio Optimization', topic: 'Balancing risk and return',
    question: 'How does the mix of two assets change a portfolio’s average return and variability?',
    profile: 'I used eight made-up return observations for two assets and compared 101 mixes, from all asset B to all asset A.',
    method: 'For each mix, I calculated weighted average return and portfolio standard deviation from the covariance matrix. I then compared return with risk using their ratio.',
    formula: 'μₚ = wᵀμ\nσₚ = √(wᵀΣw)\nscore = μₚ / σₚ',
    formulaNote: 'w is the vector of asset weights, μ is the vector of average returns, and Σ is the covariance matrix.',
    result: 'Among the 101 tested mixes, the largest sample return-to-risk ratio occurs at 17% in asset A and 83% in asset B.',
    reflection: 'I practised using weights and covariance to compare risk and return. With only eight invented observations, the best mix is a result of this example and should not guide an investment decision.', chart: 'portfolio',
  },
  {
    number: '09', folder: '09_matrix_factorization_recommender', title: 'Matrix Factorization Recommender', topic: 'Predicting missing ratings',
    question: 'Can a few hidden user and item factors fill in missing ratings?',
    profile: 'I used a 4 × 4 ratings table with three missing entries. Ratings range from 1 to 5; only observed ratings contribute to the training error.',
    method: 'I represented each user and item with a two-value latent vector. Their dot product predicts a rating, and gradient updates reduce squared error on the known ratings.',
    formula: 'r̂ᵤᵢ = pᵤ · qᵢ\nerrorᵤᵢ = r̂ᵤᵢ − rᵤᵢ\npᵤ, qᵢ ← gradient update on observed ratings',
    formulaNote: 'pᵤ represents a user, qᵢ represents an item, and their dot product is the predicted rating.',
    result: 'After training, the three missing ratings are estimated as 1.9 for user 1/item 3, 3.3 for user 2/item 2, and 1.0 for user 4/item 1. Predictions are clipped to the 1–5 rating range.',
    reflection: 'I learned how hidden user and item factors can estimate a missing rating. A 4 × 4 table is only enough to show the method; real recommendations need much more data and testing.', chart: 'matrix',
  },
  {
    number: '10', folder: '10_clustering_from_scratch', title: 'Clustering From Scratch', topic: 'Grouping by distance',
    question: 'Can the algorithm recover visible groups when it only sees point coordinates?',
    profile: 'I generated 90 points in three groups and asked k-means to find three clusters, starting with one centre in each group.',
    method: 'I assigned each point to its nearest centre using Euclidean distance, recalculated each centre as the mean of its assigned points, and repeated until the centres stopped moving.',
    formula: 'cluster(xᵢ) = argminₖ ||xᵢ − μₖ||²\nμₖ = mean of all points assigned to cluster k',
    formulaNote: 'The algorithm tries to make points close to their own cluster center.',
    result: 'The centers stop moving after 3 updates. Their final locations are approximately (−0.12, −0.19), (3.94, 0.97), and (1.58, 3.74), near the middle of the three point clouds.',
    reflection: 'I practised the assign-and-update steps behind k-means. The method needs the number of groups in advance and can be sensitive to starting centres and to groups with irregular shapes.', chart: 'clusters',
  },
  {
    number: '11', folder: '11_logistic_regression', title: 'Logistic Regression From Scratch', topic: 'Drawing a decision boundary',
    question: 'Can a straight boundary separate two groups when the model reports probabilities?',
    profile: 'I created two labelled groups of 45 points, each with two features and a class label of zero or one.',
    method: 'I calculated a weighted score for each point, converted it to a class-one probability with a sigmoid, and used gradient descent to reduce binary cross-entropy.',
    formula: 'p(y = 1 | x) = σ(w₀ + w₁x₁ + w₂x₂)\nσ(z) = 1 / (1 + e⁻ᶻ)\ndecision boundary: p = 0.5',
    formulaNote: 'The boundary is where the model is equally likely to assign either class.',
    result: 'After 2,500 updates, the learned weights are [0.08, 2.96, 3.53]. The model classifies 97.8% of its own generated training points correctly.',
    reflection: 'This exercise helped me compare predicted probabilities with a decision boundary. The high training accuracy comes from clearly separated generated groups; it does not show how the model performs on new data.', chart: 'logistic',
  },
  {
    number: '12', folder: '12_naive_bayes', title: 'Naive Bayes From Scratch', topic: 'Classifying words with probability',
    question: 'Can the words in a short message help estimate whether it is spam?',
    profile: 'I used six short messages labelled spam or not spam and built the vocabulary from their words.',
    method: 'I combined each class prior with the word likelihoods. Add-one smoothing keeps unseen words possible, and log probabilities turn multiplication into addition.',
    formula: 'score(c) = log P(c) + Σw log P(w | c)\nP(w | c) = (count(w, c) + 1) / (words in c + vocabulary size)',
    formulaNote: 'The final class probability is found by normalizing the two class scores.',
    result: 'The estimated spam probabilities are 65.2% for “free gift today”, 4.2% for “meeting at noon”, and 82.6% for “claim prize”.',
    reflection: 'I learned how word counts and Bayes’ rule combine to score a message. Six messages are far too few to represent real language, and the model treats words as independent given the class.', chart: 'spam',
  },
  {
    number: '13', folder: '13_monte_carlo_simulation', title: 'Monte Carlo Simulation Lab', topic: 'Estimating π with random points',
    question: 'Can random sampling estimate the area of a quarter circle?',
    profile: 'I sampled 20,000 random points inside a unit square and checked which ones fell inside a quarter circle of radius one.',
    method: 'The quarter circle covers π/4 of the square. I estimated that area from the share of points inside the curve, then multiplied by four to estimate π.',
    formula: 'inside: x² + y² ≤ 1\nπ̂ = 4 × (points inside circle / total points)',
    formulaNote: 'As the number of independent samples grows, the estimate tends to settle near the true value.',
    result: 'With 20,000 points, the estimate is 3.1316. The reference value is approximately 3.1416, so this run is about 0.0100 lower.',
    reflection: 'I saw how random sampling can estimate an area and, from it, π. Fixing the random seed makes this run repeatable; using more points usually reduces sampling variation but takes more computation.', chart: 'montecarlo',
  },
  {
    number: '14', folder: '14_probability_anomaly_detection', title: 'Probability Anomaly Detection', topic: 'Flagging unusual values',
    question: 'Which observations lie unusually far from the sample average?',
    profile: 'I generated 45 values around 50, then added three unusual values: 68, 31, and 82.',
    method: 'I calculated the sample mean and standard deviation, converted each observation to a z-score, and flagged values more than two standard deviations from the mean.',
    formula: 'zᵢ = (xᵢ − x̄) / s\nflag xᵢ when |zᵢ| > 2',
    formulaNote: 'A z-score measures how many standard deviations an observation is above or below the mean.',
    result: 'For this sample, the mean is 50.8 and the standard deviation is 7.4. The values 68, 31, and 82 are flagged with z-scores 2.32, −2.68, and 4.21.',
    reflection: 'I practised using z-scores to flag values far from the average. A two-standard-deviation cutoff is a simple rule, not a universal definition of an anomaly; the data shape matters.', chart: 'anomaly',
  },
  {
    number: '15', folder: '15_dynamic_pricing_optimization', title: 'Dynamic Pricing Optimization', topic: 'Finding a price on a grid',
    question: 'Under a simple demand assumption, which tested price gives the most revenue?',
    profile: 'I tested 201 prices from $0 to $100. In this example, demand starts at 120 units and falls by 1.1 units for each dollar added to the price.',
    method: 'For each price, I estimated demand, multiplied price by demand to calculate revenue, then selected the highest revenue on the grid.',
    formula: 'd(p) = max(120 − 1.1p, 0)\nR(p) = p × d(p)\np* = argmaxₚ R(p)',
    formulaNote: 'The grid uses half-dollar steps, so the selected price is the best tested value, not necessarily the only possible optimum.',
    result: 'The best tested price is $54.50. Estimated demand is 60.0 units and revenue is $3,272.72 in the toy model.',
    reflection: 'I connected a demand assumption to revenue and used a grid search to find the best tested price. Real demand may not be linear, so this simple calculation is not enough to set a real price.', chart: 'pricing',
  },
];

const plot = {
  base: '<path class="grid" d="M58 36H488M58 74H488M58 112H488M58 150H488"/><path class="axis" d="M58 22V150H488"/>',
  line: '<path class="series" d="M72 139L128 126L184 113L240 100L296 87L352 74L408 61L466 48"/><g class="points"><circle cx="72" cy="136" r="4"/><circle cx="128" cy="127" r="4"/><circle cx="184" cy="110" r="4"/><circle cx="240" cy="99" r="4"/><circle cx="296" cy="81" r="4"/><circle cx="352" cy="70" r="4"/></g>',
  descent: '<path class="series" d="M78 44Q275 202 468 42"/><path class="series-alt" d="M115 91L176 127L228 143L270 149L300 150"/><g class="points"><circle cx="115" cy="91" r="4"/><circle cx="176" cy="127" r="4"/><circle cx="228" cy="143" r="4"/><circle cx="270" cy="149" r="4"/><circle cx="300" cy="150" r="4"/></g>',
  pca: '<g class="points"><circle cx="160" cy="126" r="4"/><circle cx="183" cy="116" r="4"/><circle cx="206" cy="114" r="4"/><circle cx="233" cy="100" r="4"/><circle cx="257" cy="92" r="4"/><circle cx="284" cy="87" r="4"/><circle cx="310" cy="77" r="4"/><circle cx="338" cy="70" r="4"/><circle cx="363" cy="60" r="4"/><circle cx="389" cy="53" r="4"/></g><path class="series-alt" d="M124 137L430 40"/><path class="axis" d="M270 96L352 70"/>',
  ab: '<rect class="bar" x="165" y="92" width="74" height="58"/><rect class="bar-alt" x="305" y="78" width="74" height="72"/><text x="191" y="166">A 11.0%</text><text x="329" y="166">B 13.3%</text>',
  bayesian: '<path class="series" d="M68 149C123 148 150 137 181 94C206 59 227 35 258 39C294 44 302 100 337 126C367 148 408 149 480 149"/><path class="series-alt" d="M68 149C150 149 183 141 220 111C250 87 275 51 308 42C347 33 359 82 389 116C414 142 443 148 480 149"/>',
  churn: '<path class="series" d="M70 139C168 139 199 134 235 113C270 92 263 58 310 43C345 32 390 34 475 34"/><g class="points"><circle cx="112" cy="46" r="4"/><circle cx="150" cy="51" r="4"/><circle cx="187" cy="59" r="4"/><circle cx="224" cy="68" r="4"/><circle cx="272" cy="104" r="4"/><circle cx="318" cy="121" r="4"/><circle cx="366" cy="130" r="4"/><circle cx="420" cy="138" r="4"/></g>',
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

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function chart(project) {
  return `<figure class="result-figure"><svg viewBox="0 0 520 190" role="img" aria-label="Illustrative chart for ${escapeHtml(project.title)}">${plot.base}${plot[project.chart]}</svg></figure>`;
}

function renderProjectSection(project) {
  const key = `project-${project.number}`;
  const notebook = `${repo}/blob/main/${project.folder}/${project.folder}.ipynb`;
  return `
    <div id="${key}" class="section level2 project-section" data-section="${key}">
      <p class="project-kicker">PROJECT ${project.number} <span>·</span> ${escapeHtml(project.topic.toUpperCase())}</p>
      <h2>${project.number} ${escapeHtml(project.title)}</h2>
      
      <div id="${key}-introduction" class="section level3" data-section="${key}-introduction">
        <h3>Introduction</h3>
        <blockquote><p>${escapeHtml(project.question)}</p></blockquote>
        <p class="source-links"><a href="${notebook}" target="_blank" rel="noreferrer">Open notebook ↗</a></p>
      </div>

      <div id="${key}-data" class="section level3" data-section="${key}-data">
        <h3>Data Profile</h3>
        <p>${escapeHtml(project.profile)}</p>
      </div>

      <div id="${key}-method" class="section level3" data-section="${key}-method">
        <h3>Method</h3>
        <p>${escapeHtml(project.method)}</p>
      </div>

      <div id="${key}-formula" class="section level3" data-section="${key}-formula">
        <h3>Formula</h3>
        <div class="formula-block">
          <pre>${escapeHtml(project.formula)}</pre>
          <p class="caption">${escapeHtml(project.formulaNote)}</p>
        </div>
      </div>

      <div id="${key}-result" class="section level3" data-section="${key}-result">
        <h3>Result</h3>
        <p>${escapeHtml(project.result)}</p>
        ${chart(project)}
      </div>

      <div id="${key}-reflection" class="section level3" data-section="${key}-reflection">
        <h3>What I learned</h3>
        <p>${escapeHtml(project.reflection)}</p>
      </div>
    </div>
  `;
}

const headerContent = `
  <div id="header">
    <h1 class="title toc-ignore">Applied Math for Data Science</h1>
    <h4 class="author">Vidhya Walke</h4>
    <h4 class="date">September 25, 2026</h4>
  </div>

  <div id="introduction" class="section level2" data-section="introduction">
    <h2>Introduction</h2>
    <p>I built these Python projects to practise the maths behind data science. They gave me hands-on experience with regression, optimization, probability, PCA, forecasting, clustering, classification, recommendation systems, and anomaly detection. In each project, I implemented the main calculation, checked the result, and wrote about what I learned.</p>
  </div>

  <div id="why-math" class="section level2" data-section="why-math">
    <h2>Why Mathematics Matters in Data Science</h2>
    <p>When I work with data, mathematics helps me understand what a model is doing and whether its results make sense. It gives me a clear way to move from data to insight, then from insight to a decision.</p>
    <ul>
      <li>Algorithms use mathematical operations; understanding them helps me choose and use the right tools.</li>
      <li>Statistics helps me describe data, check patterns, and measure uncertainty.</li>
      <li>Mathematical reasoning helps me spot assumptions and avoid reading too much into a result.</li>
      <li>Knowing how a model works makes it easier to explain its results to other people.</li>
    </ul>
    <p><strong>For me, learning the maths behind a model is part of building data science work I can explain and trust.</strong></p>
  </div>

  <div id="math-foundations" class="section level2" data-section="math-foundations">
    <h2>Four Mathematical Foundations</h2>
    <p>These projects helped me practise four areas of maths that appear throughout data science:</p>
    <ol>
      <li><strong>Linear algebra.</strong> Vectors and matrices help represent data and are used in PCA and recommendation systems.</li>
      <li><strong>Calculus and optimization.</strong> Derivatives show how a function changes; optimization uses that information to improve a model or find a best value.</li>
      <li><strong>Probability and statistics.</strong> These help describe patterns, compare groups, and reason about uncertainty in A/B tests and predictions.</li>
      <li><strong>Discrete mathematics and geometry.</strong> Distances, shapes, and logical structures help organize points into clusters and identify unusual observations.</li>
    </ol>
    <p>The projects below show how I used these ideas in Python, from calculating a regression line to comparing forecasts and detecting anomalies.</p>
  </div>
`;

const referencesContent = `
  <div id="references" class="section level2" data-section="references">
    <h2>References</h2>
    <p>I used these sources to study and check the methods and formulas. The data, Python implementations, and results shown here come from my project scripts and notebooks.</p>
    <ol class="reference-list">
      <li><span>James, G., Witten, D., Hastie, T., Tibshirani, R., &amp; Taylor, J. (2023).</span> <em>An Introduction to Statistical Learning with Applications in Python</em> (1st ed.). Springer. <a href="https://www.statlearning.com/" target="_blank" rel="noreferrer">https://www.statlearning.com/</a><small>Regression, classification, principal components, and clustering (Projects 1, 3, 6, 10, and 11).</small></li>
      <li><span>scikit-learn developers. (n.d.).</span> <em>scikit-learn User Guide.</em> Retrieved September 25, 2026, from <a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noreferrer">https://scikit-learn.org/stable/user_guide.html</a><small>Linear models, naive Bayes, clustering, PCA, and outlier detection (Projects 1, 3, 10, 11, 12, and 14).</small></li>
      <li><span>NIST/SEMATECH. (n.d.).</span> <em>e-Handbook of Statistical Methods: Comparing two proportions.</em> Retrieved September 25, 2026, from <a href="https://www.itl.nist.gov/div898/handbook/prc/section3/prc33.htm" target="_blank" rel="noreferrer">https://www.itl.nist.gov/div898/handbook/prc/section3/prc33.htm</a><small>Two-proportion z-test used in the A/B testing example (Project 4).</small></li>
      <li><span>Murphy, K. P. (2022).</span> <em>Probabilistic Machine Learning: An Introduction.</em> MIT Press. <a href="https://probml.github.io/book1" target="_blank" rel="noreferrer">https://probml.github.io/book1</a><small>Probability models and Bayesian inference (Project 5).</small></li>
      <li><span>Hyndman, R. J., &amp; Athanasopoulos, G. (2021).</span> <em>Forecasting: Principles and Practice</em> (3rd ed.). OTexts. <a href="https://otexts.com/fpp3/" target="_blank" rel="noreferrer">https://otexts.com/fpp3/</a><small>Time-series patterns and forecasting methods (Project 7).</small></li>
      <li><span>Markowitz, H. (1952).</span> Portfolio selection. <em>The Journal of Finance, 7</em>(1), 77–91. <a href="https://doi.org/10.1111/j.1540-6261.1952.tb01525.x" target="_blank" rel="noreferrer">https://doi.org/10.1111/j.1540-6261.1952.tb01525.x</a><small>Mean-variance portfolio idea behind the two-asset comparison (Project 8).</small></li>
      <li><span>Google for Developers. (n.d.).</span> <em>Matrix factorization.</em> Retrieved September 25, 2026, from <a href="https://developers.google.com/machine-learning/recommendation/collaborative/matrix" target="_blank" rel="noreferrer">https://developers.google.com/machine-learning/recommendation/collaborative/matrix</a><small>User and item factors for recommendation (Project 9).</small></li>
      <li><span>NumPy developers. (n.d.).</span> <em>Random sampling.</em> Retrieved September 25, 2026, from <a href="https://numpy.org/doc/stable/reference/random/index" target="_blank" rel="noreferrer">https://numpy.org/doc/stable/reference/random/index</a><small>Random sampling and repeatable seeds (Projects 3, 7, 13, and 14).</small></li>
      <li><span>OpenStax. (2016).</span> <em>Calculus Volume 1: Applied optimization problems.</em> <a href="https://openstax.org/books/calculus-volume-1/pages/4-7-applied-optimization-problems" target="_blank" rel="noreferrer">https://openstax.org/books/calculus-volume-1/pages/4-7-applied-optimization-problems</a><small>Maximizing a quantity such as revenue (Project 15).</small></li>
      <li><span>Towards Data Science. (n.d.).</span> <em>Mathematics for data science.</em> <a href="https://towardsdatascience.com/mathematics-for-data-science-e53939ee8306/" target="_blank" rel="noreferrer">https://towardsdatascience.com/mathematics-for-data-science-e53939ee8306/</a><small>Background reading for the role and main areas of mathematics in data science.</small></li>
    </ol>
    <p class="repository-source"><a href="${repo}" target="_blank" rel="noreferrer">View my code, notebooks, and project guides on GitHub ↗</a></p>
  </div>
  <footer class="article-footer">Vidhya Walke · <a href="${repo}" target="_blank" rel="noreferrer">GitHub repository</a></footer>
`;

const articleEl = document.querySelector('#article');
articleEl.innerHTML = headerContent + projects.map(renderProjectSection).join('') + referencesContent;

// Build Table of Contents matching Tocify Bootstrap 3 theme
const tocEl = document.querySelector('#TOC');
let tocHtml = '<ul class="tocify-header list-group">';

tocHtml += '<li class="tocify-item list-group-item" data-unique="introduction"><a href="#introduction">Introduction</a></li>';
tocHtml += '<li class="tocify-item list-group-item" data-unique="why-math"><a href="#why-math">Why maths matters</a></li>';
tocHtml += '<li class="tocify-item list-group-item" data-unique="math-foundations"><a href="#math-foundations">Maths foundations</a></li>';

projects.forEach((p) => {
  const key = `project-${p.number}`;
  tocHtml += `<li class="tocify-item list-group-item" data-unique="${key}"><a href="#${key}">${p.number} ${escapeHtml(p.title)}</a></li>`;
  tocHtml += `<ul class="tocify-subheader list-group" data-parent="${key}">`;
  tocHtml += `<li class="tocify-item list-group-item" data-unique="${key}-introduction"><a href="#${key}-introduction">Introduction</a></li>`;
  tocHtml += `<li class="tocify-item list-group-item" data-unique="${key}-data"><a href="#${key}-data">Data Profile</a></li>`;
  tocHtml += `<li class="tocify-item list-group-item" data-unique="${key}-method"><a href="#${key}-method">Method</a></li>`;
  tocHtml += `<li class="tocify-item list-group-item" data-unique="${key}-formula"><a href="#${key}-formula">Formula</a></li>`;
  tocHtml += `<li class="tocify-item list-group-item" data-unique="${key}-result"><a href="#${key}-result">Result</a></li>`;
  tocHtml += `<li class="tocify-item list-group-item" data-unique="${key}-reflection"><a href="#${key}-reflection">What I learned</a></li>`;
  tocHtml += `</ul>`;
});

tocHtml += '<li class="tocify-item list-group-item" data-unique="references"><a href="#references">References</a></li>';
tocHtml += '</ul>';

tocEl.innerHTML = tocHtml;

// ScrollSpy & Tocify Interaction
const allTrackedSections = [...document.querySelectorAll('[data-section]')];
const tocItems = [...tocEl.querySelectorAll('.tocify-item')];
const subheaders = [...tocEl.querySelectorAll('.tocify-subheader')];

let scrollTimeout = null;
let lastActiveKey = null;

function highlightCurrentSection() {
  const scrollPos = window.scrollY + 80;
  let currentSec = allTrackedSections[0];

  for (let i = 0; i < allTrackedSections.length; i++) {
    const section = allTrackedSections[i];
    if (section.offsetTop <= scrollPos) {
      currentSec = section;
    } else {
      break;
    }
  }

  if (!currentSec) return;
  const currentId = currentSec.getAttribute('data-section');

  // Determine active project or top-level section
  let activeParentKey = null;
  if (currentId.startsWith('project-')) {
    const parts = currentId.split('-');
    activeParentKey = `${parts[0]}-${parts[1]}`;
  }

  // Update open/close subheaders (showAndHide behavior)
  subheaders.forEach((sub) => {
    const parentKey = sub.getAttribute('data-parent');
    if (parentKey === activeParentKey) {
      sub.classList.add('is-open');
    } else {
      sub.classList.remove('is-open');
    }
  });

  // Update active item class
  let currentActiveItem = null;
  tocItems.forEach((item) => {
    const unique = item.getAttribute('data-unique');
    const isExact = unique === currentId;
    const isParent = !currentId.includes('-') && unique === currentId;
    const isProjectHeader = unique === activeParentKey && currentId === activeParentKey;
    
    if (isExact || isProjectHeader) {
      item.classList.add('active');
      currentActiveItem = item;
    } else {
      item.classList.remove('active');
    }
  });

  // Keep active item in view inside the TOC container
  if (currentActiveItem && activeParentKey !== lastActiveKey) {
    lastActiveKey = activeParentKey;
    const tocRect = tocEl.getBoundingClientRect();
    const itemRect = currentActiveItem.getBoundingClientRect();
    if (itemRect.top < tocRect.top || itemRect.bottom > tocRect.bottom) {
      currentActiveItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }
}

function onScrollThrottled() {
  if (scrollTimeout) return;
  scrollTimeout = requestAnimationFrame(() => {
    highlightCurrentSection();
    scrollTimeout = null;
  });
}

window.addEventListener('scroll', onScrollThrottled, { passive: true });
window.addEventListener('resize', onScrollThrottled);

// Smooth click navigation
tocEl.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;
  const targetId = link.getAttribute('href').slice(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    e.preventDefault();
    const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY - 65;
    window.scrollTo({ top: targetOffset, behavior: 'smooth' });
    history.pushState(null, null, `#${targetId}`);
    setTimeout(highlightCurrentSection, 150);
  }
});

// Mobile navbar toggle for TOC
const navToggle = document.querySelector('.navbar-toggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    tocEl.style.display = isExpanded ? 'none' : 'block';
  });
}

highlightCurrentSection();
