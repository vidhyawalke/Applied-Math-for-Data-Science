"""Least-squares line fit from basic sums."""
from pathlib import Path
import numpy as np
import matplotlib.pyplot as plt
# Each x value pairs with one observed y value; the fitted line predicts y from x.
x=np.array([1,2,3,4,5,6.],float); y=np.array([1.2,1.9,3.2,3.8,5.1,5.8])
# Centering both variables gives the least-squares slope from their covariance divided by x's variance.
xm,ym=x.mean(),y.mean(); slope=np.sum((x-xm)*(y-ym))/np.sum((x-xm)**2); # Choose the intercept so the fitted line passes through the data means.
intercept=ym-slope*xm
pred=slope*x+intercept
print(f"Line: y = {slope:.2f}x + {intercept:.2f}"); print(f"Mean squared error: {np.mean((y-pred)**2):.3f}")
plt.scatter(x,y,label="observations"); plt.plot(x,pred,color="tomato",label="fitted line")
plt.xlabel("x"); plt.ylabel("y"); plt.title("Linear regression from sums"); plt.legend(); plt.grid(alpha=.25)
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); plt.tight_layout(); plt.savefig(out/"linear_fit.png",dpi=150); plt.show()
