"""Two-feature PCA using covariance and eigenvectors."""
from pathlib import Path
import numpy as np
import matplotlib.pyplot as plt
# Make two related features so the main direction is visible.
rng=np.random.default_rng(3); data=rng.normal(size=(60,2))@np.array([[2,1.4],[.2,.5]]); data[:,0]+=5
center=data.mean(axis=0); centered=data-center
# Covariance eigenvectors point along directions of changing data.
values,vectors=np.linalg.eigh(np.cov(centered,rowvar=False)); order=np.argsort(values)[::-1]; values=values[order]; vectors=vectors[:,order]
projected=centered@vectors[:,:1]; reconstructed=projected@vectors[:,:1].T+center
print("Eigenvalues:",np.round(values,2)); print(f"Variance kept: {values[0]/values.sum():.1%}")
plt.scatter(data[:,0],data[:,1],alpha=.65,label="original points")
plt.plot([center[0]-3*vectors[0,0],center[0]+3*vectors[0,0]],[center[1]-3*vectors[1,0],center[1]+3*vectors[1,0]],color="tomato",label="first direction")
plt.scatter(reconstructed[:,0],reconstructed[:,1],marker="x",s=18,label="1D reconstruction")
plt.xlabel("feature 1"); plt.ylabel("feature 2"); plt.title("PCA projection"); plt.legend(); plt.grid(alpha=.2)
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); plt.tight_layout(); plt.savefig(out/"pca_projection.png",dpi=150); plt.show()
