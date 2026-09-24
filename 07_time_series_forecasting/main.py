"""Trend and seasonal-naive forecast on a toy series."""
from pathlib import Path
import numpy as np
import matplotlib.pyplot as plt
rng=np.random.default_rng(7); t=np.arange(36); season=np.tile([2,1,0,-1,-2,-1],6)
y=10+.25*t+season+rng.normal(0,.35,len(t)); window=6
moving=np.convolve(y,np.ones(window)/window,mode="valid"); future=np.arange(36,42)
forecast=y[-window:]+(y[-1]-y[-window-1]); print("Next six forecasts:",np.round(forecast,1))
plt.plot(t,y,"o-",label="observed toy series"); plt.plot(np.arange(window-1,len(t)),moving,label="6-step moving average")
plt.plot(future,forecast,"o--",color="tomato",label="seasonal forecast"); plt.axvline(35.5,color="gray",linestyle=":")
plt.xlabel("Time step"); plt.ylabel("Value"); plt.title("A small seasonal forecast"); plt.legend(); plt.grid(alpha=.2)
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); plt.tight_layout(); plt.savefig(out/"seasonal_forecast.png",dpi=150); plt.show()
