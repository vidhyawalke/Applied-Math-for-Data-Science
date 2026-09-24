"""Fill a tiny user-item table with low-rank factors."""
from pathlib import Path
import numpy as np
import matplotlib.pyplot as plt
# A zero marks a rating we hide and ask the model to estimate.
ratings=np.array([[5,4,0,1],[4,0,2,1],[1,2,4,5],[0,1,5,4.]],float); observed=ratings>0
rng=np.random.default_rng(9); users=rng.normal(0,.5,(4,2)); items=rng.normal(0,.5,(4,2))
# Update user and item vectors to bring known-rating predictions closer to observations.
for _ in range(3000):
    for u,i in zip(*np.where(observed)):
        error=users[u]@items[i]-ratings[u,i]
        users[u]-=.02*(2*error*items[i]+.02*users[u]); items[i]-=.02*(2*error*users[u]+.02*items[i])
prediction=np.clip(users@items.T,1,5); print("Predictions for missing ratings:")
for u,i in zip(*np.where(~observed)): print(f"user {u+1}, item {i+1}: {prediction[u,i]:.1f}")
plt.imshow(prediction,vmin=1,vmax=5,cmap="YlGnBu")
for u in range(4):
    for i in range(4): plt.text(i,u,f"{prediction[u,i]:.1f}"+("*" if not observed[u,i] else ""),ha="center",va="center")
plt.xticks(range(4),["item 1","item 2","item 3","item 4"]); plt.yticks(range(4),["user 1","user 2","user 3","user 4"])
plt.title("Rating estimates (* was missing)"); plt.colorbar(label="predicted rating")
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); plt.tight_layout(); plt.savefig(out/"rating_predictions.png",dpi=150); plt.show()
