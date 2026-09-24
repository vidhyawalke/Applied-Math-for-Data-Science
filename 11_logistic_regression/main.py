"""Two-feature logistic classifier fitted with gradient descent."""
from pathlib import Path
import numpy as np
import matplotlib.pyplot as plt
# The two feature clouds have binary labels 0 and 1 for the classifier to learn.
rng=np.random.default_rng(11); class0=rng.normal([-1,-1],.8,(45,2)); class1=rng.normal([1,1],.8,(45,2))
points=np.vstack([class0,class1]); y=np.r_[np.zeros(len(class0)),np.ones(len(class1))]; X=np.column_stack([np.ones(len(points)),points]); w=np.zeros(3)
# sigmoid(z) = 1 / (1 + exp(-z)); its output is a class-1 probability.
def sigmoid(z): return 1/(1+np.exp(-np.clip(z,-30,30)))
# Gradient descent reduces binary cross-entropy by adjusting intercept and feature weights.
for _ in range(2500): w-=.2*(X.T@(sigmoid(X@w)-y))/len(y)
print("Weights [intercept, x1, x2]:",np.round(w,2)); print(f"Toy training accuracy: {np.mean((sigmoid(X@w)>=.5)==y):.1%}")
gx,gy=np.meshgrid(np.linspace(points[:,0].min()-1,points[:,0].max()+1,100),np.linspace(points[:,1].min()-1,points[:,1].max()+1,100))
prob=sigmoid(w[0]+w[1]*gx+w[2]*gy); plt.contourf(gx,gy,prob,levels=[0,.5,1],alpha=.18,colors=["royalblue","orange"]); plt.contour(gx,gy,prob,levels=[.5],colors="black")
plt.scatter(class0[:,0],class0[:,1],label="class 0"); plt.scatter(class1[:,0],class1[:,1],label="class 1")
plt.xlabel("feature 1"); plt.ylabel("feature 2"); plt.title("Logistic regression boundary"); plt.legend(); plt.grid(alpha=.15)
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); plt.tight_layout(); plt.savefig(out/"classification_boundary.png",dpi=150); plt.show()
