"""Toy logistic model for customer churn."""
from pathlib import Path
import numpy as np
import matplotlib.pyplot as plt
tenure=np.array([1,2,2,3,4,5,6,7,8,9,10,11.]); bill=np.array([90,80,95,70,85,60,75,55,65,50,60,45.])
features=np.column_stack([tenure,bill]); features=(features-features.mean(0))/features.std(0)
y=np.array([1,1,1,1,1,0,1,0,0,0,0,0.]); X=np.column_stack([np.ones(len(y)),features]); w=np.zeros(3)
def sigmoid(z): return 1/(1+np.exp(-np.clip(z,-30,30)))
for _ in range(3000): w-=.15*(X.T@(sigmoid(X@w)-y))/len(y)
prob=sigmoid(X@w); print("Weights (intercept, tenure, bill):",np.round(w,2)); print("Toy probabilities:",np.round(prob,2))
plt.scatter(tenure,prob,c=y,cmap="coolwarm",edgecolor="black"); plt.xlabel("Tenure (months)"); plt.ylabel("Estimated churn probability")
plt.ylim(-.05,1.05); plt.title("Toy churn model estimates")
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); plt.tight_layout(); plt.savefig(out/"churn_probabilities.png",dpi=150); plt.show()
