"""Basic k-means clustering with three visible groups."""
from pathlib import Path
import numpy as np
import matplotlib.pyplot as plt
# Make three clouds so we can see whether distance recovers their groups.
rng=np.random.default_rng(10); points=np.vstack([rng.normal([0,0],.7,(30,2)),rng.normal([4,1],.7,(30,2)),rng.normal([2,4],.7,(30,2))])
centers=points[[0,30,60]].copy()
# K-means alternates between nearest-center assignment and recomputing means.
for step in range(30):
    distances=np.linalg.norm(points[:,None,:]-centers[None,:,:],axis=2); labels=distances.argmin(1)
    new=np.array([points[labels==k].mean(0) for k in range(3)])
    if np.allclose(new,centers): break
    centers=new
print(f"Finished after {step+1} updates; centers:\n",np.round(centers,2))
plt.scatter(points[:,0],points[:,1],c=labels,cmap="viridis",s=35); plt.scatter(centers[:,0],centers[:,1],marker="X",s=180,color="tomato",label="centers")
plt.xlabel("x"); plt.ylabel("y"); plt.title("K-means groups points by distance"); plt.legend(); plt.grid(alpha=.2)
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); plt.tight_layout(); plt.savefig(out/"kmeans_clusters.png",dpi=150); plt.show()
