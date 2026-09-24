"""Grid search for the best price in a simple demand model."""
from pathlib import Path
import numpy as np
import matplotlib.pyplot as plt
prices=np.linspace(0,100,201); demand=np.maximum(120-1.1*prices,0); revenue=prices*demand; best=np.argmax(revenue)
print(f"Best grid price: ${prices[best]:.2f}; estimated demand: {demand[best]:.1f}; revenue: ${revenue[best]:.2f}")
fig,ax1=plt.subplots(); ax1.plot(prices,demand,color="steelblue"); ax1.set_xlabel("Price ($)"); ax1.set_ylabel("Demand (units)",color="steelblue")
ax2=ax1.twinx(); ax2.plot(prices,revenue,color="darkorange"); ax2.set_ylabel("Revenue ($)",color="darkorange"); ax2.scatter(prices[best],revenue[best],color="tomato")
ax1.axvline(prices[best],color="gray",linestyle=":"); plt.title("Simple price and revenue model")
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); fig.tight_layout(); fig.savefig(out/"price_revenue.png",dpi=150); plt.show()
