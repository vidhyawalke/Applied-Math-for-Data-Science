"""Gradient descent on a one-variable quadratic."""
from pathlib import Path
import numpy as np
import matplotlib.pyplot as plt
# This bowl has its lowest point at x = 3.
def f(x): return (x-3)**2+1
def derivative(x): return 2*(x-3)
# Start away from the minimum and repeatedly step against the derivative.
x=-2.; rate=.15; path=[x]
for _ in range(30):
    x-=rate*derivative(x); path.append(x)
print(f"After {len(path)-1} steps: x={x:.3f}, f(x)={f(x):.3f}")
grid=np.linspace(-3,7,200); plt.plot(grid,f(grid),label="f(x)=(x-3)^2+1")
plt.plot(path,[f(v) for v in path],"o-",color="tomato",label="gradient steps")
plt.xlabel("x"); plt.ylabel("f(x)"); plt.title("Gradient descent on a curve"); plt.legend(); plt.grid(alpha=.25)
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); plt.tight_layout(); plt.savefig(out/"descent_path.png",dpi=150); plt.show()
