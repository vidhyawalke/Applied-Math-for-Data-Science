"""Flag unusual one-dimensional values using z-scores."""
from pathlib import Path
import numpy as np
import matplotlib.pyplot as plt
# Most values follow a normal pattern; the final few are unusual examples.
rng=np.random.default_rng(14); values=np.r_[rng.normal(50,4,45),[68,31,82]]
# A z-score measures distance from the mean in standard deviations.
mean,std=values.mean(),values.std(ddof=1); z=(values-mean)/std; anomaly=np.abs(z)>2
print(f"Mean={mean:.1f}; standard deviation={std:.1f}; flagged values:")
for i in np.where(anomaly)[0]: print(f"  index {i}: value={values[i]:.1f}, z={z[i]:.2f}")
plt.scatter(np.arange(len(values)),values,c=np.where(anomaly,"tomato","steelblue")); plt.axhline(mean,color="black",label="mean")
plt.axhline(mean+2*std,color="gray",linestyle="--",label="two standard deviations"); plt.axhline(mean-2*std,color="gray",linestyle="--")
plt.xlabel("Observation index"); plt.ylabel("Value"); plt.title("Z-score anomaly flags"); plt.legend()
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); plt.tight_layout(); plt.savefig(out/"z_score_anomalies.png",dpi=150); plt.show()
