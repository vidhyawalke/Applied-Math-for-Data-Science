# Math in Motion

### 15 hands-on projects connecting mathematics to data science

I’m learning how math powers data science by building 15 small Python projects. I made these for myself and anyone starting out—each has simple code and a visual explanation.

If this helps you learn, please ⭐ the repo!

---

## Explore the projects

| # | Project | What you will explore | Notebook |
|---:|---|---|:---:|
| 01 | **Linear Regression From Scratch** | Least squares, slope, intercept, and prediction errors | [Open](01_linear_regression/01_linear_regression.ipynb) |
| 02 | **Gradient Descent Visualizer** | Derivatives, learning rate, and optimization steps | [Open](02_gradient_descent/02_gradient_descent.ipynb) |
| 03 | **PCA From Scratch** | Covariance, eigenvectors, and dimensionality reduction | [Open](03_pca/03_pca.ipynb) |
| 04 | **Statistical A/B Testing Engine** | Conversion rates, z-scores, and p-values | [Open](04_statistical_ab_testing/04_statistical_ab_testing.ipynb) |
| 05 | **Bayesian A/B Testing** | Bayes' rule, Beta distributions, and posterior probability | [Open](05_bayesian_ab_testing/05_bayesian_ab_testing.ipynb) |
| 06 | **Customer Churn Probability** | Logistic probabilities and simple customer features | [Open](06_customer_churn_probability/06_customer_churn_probability.ipynb) |
| 07 | **Time-Series Forecasting** | Trend, seasonality, moving averages, and forecasts | [Open](07_time_series_forecasting/07_time_series_forecasting.ipynb) |
| 08 | **Portfolio Optimization** | Covariance, risk, return, and asset mixes | [Open](08_portfolio_optimization/08_portfolio_optimization.ipynb) |
| 09 | **Matrix Factorization Recommender** | Low-rank factors and missing-rating predictions | [Open](09_matrix_factorization_recommender/09_matrix_factorization_recommender.ipynb) |
| 10 | **Clustering From Scratch** | Distance, cluster centers, and k-means | [Open](10_clustering_from_scratch/10_clustering_from_scratch.ipynb) |
| 11 | **Logistic Regression From Scratch** | Sigmoid, gradients, and decision boundaries | [Open](11_logistic_regression/11_logistic_regression.ipynb) |
| 12 | **Naive Bayes From Scratch** | Conditional probability and word-count classification | [Open](12_naive_bayes/12_naive_bayes.ipynb) |
| 13 | **Monte Carlo Simulation Lab** | Random sampling, area, and an estimate of pi | [Open](13_monte_carlo_simulation/13_monte_carlo_simulation.ipynb) |
| 14 | **Probability Anomaly Detection** | Mean, standard deviation, and z-score flags | [Open](14_probability_anomaly_detection/14_probability_anomaly_detection.ipynb) |
| 15 | **Dynamic Pricing Optimization** | Demand curves, revenue, and grid search | [Open](15_dynamic_pricing_optimization/15_dynamic_pricing_optimization.ipynb) |

---

## Get started

### Browse the notebooks

Open any `.ipynb` file in **Jupyter Notebook**, **JupyterLab**, or **Visual Studio Code**. The explanation and visualization preview are saved in the notebook, so you can browse the project before running its code.

### Run a project

1. Install [Python 3](https://www.python.org/downloads/).
2. Install the libraries used in the projects:

   ```bash
   python -m pip install numpy matplotlib
   ```

3. Open a project folder and run its script. For example:

   ```bash
   cd 01_linear_regression
   python main.py
   ```

   Or open that folder's notebook and run the cells from top to bottom.

The scripts print key results and save generated charts in each project's `output/` folder. The notebooks display charts inline. Random examples use fixed seeds where needed, so the results are repeatable.

## How each project is organized

```text
01_linear_regression/
├── 01_linear_regression.ipynb   # Explanation, code, and visualization preview
├── main.py                      # Standalone Python version
├── README.md                    # Short project guide
└── output/                      # Chart created when main.py is run
```

## Learning approach

- **Start with a small example.** The data is intentionally compact and easy to inspect.
- **Keep the math visible.** The code uses straightforward formulas and named steps.
- **Learn by changing things.** Try different sample values, learning rates, or model settings and observe what changes.
- **Build intuition first.** These projects are practice exercises, not optimized software packages.

## Tools

- Python
- NumPy
- Matplotlib
- Jupyter notebooks

## About the examples

The datasets are small teaching examples, not real customer, experiment, or market data. Statistical results are simplified for learning. The portfolio example is not investment advice, and the pricing and churn examples should not be used to make real business decisions.

---
