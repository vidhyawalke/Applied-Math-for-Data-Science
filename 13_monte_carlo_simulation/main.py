"""Estimate pi with random points in a unit square."""
from pathlib import Path
import numpy as np
import matplotlib.pyplot as plt
# A point is inside the quarter circle when x² + y² is at most 1.
rng=np.random.default_rng(13); count=20000; points=rng.random((count,2)); inside=np.sum(points**2,axis=1)<=1
# Four times the fraction inside estimates pi; cumulative sums show convergence.
estimates=4*np.cumsum(inside)/np.arange(1,count+1); print(f"Estimate using {count:,} points: {estimates[-1]:.4f}; actual pi: {np.pi:.4f}")
fig,axes=plt.subplots(1,2,figsize=(10,4)); sample=points[:1200]; chosen=inside[:1200]
axes[0].scatter(sample[chosen,0],sample[chosen,1],s=6,label="inside"); axes[0].scatter(sample[~chosen,0],sample[~chosen,1],s=6,label="outside",alpha=.4)
axes[0].set_aspect("equal"); axes[0].set_title("Points in unit square"); axes[0].legend()
axes[1].plot(estimates,linewidth=.7); axes[1].axhline(np.pi,color="tomato",label="actual pi")
axes[1].set_xlabel("Points sampled"); axes[1].set_ylabel("Estimate"); axes[1].set_title("Estimate as samples grow"); axes[1].legend()
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); plt.tight_layout(); plt.savefig(out/"pi_estimate.png",dpi=150); plt.show()
