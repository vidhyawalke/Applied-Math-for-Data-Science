"""Explore sample risk and expected return for two toy assets."""
from pathlib import Path
import numpy as np
import matplotlib.pyplot as plt
returns=np.array([[.02,.01],[-.01,.015],[.03,.025],[0,-.01],[.01,.02],[.025,.005],[-.015,.01],[.02,.03]])
cov=np.cov(returns,rowvar=False); average=returns.mean(0); weights=np.linspace(0,1,101); means=[]; risks=[]
for a in weights:
    w=np.array([a,1-a]); means.append(w@average); risks.append(np.sqrt(w@cov@w))
means=np.array(means); risks=np.array(risks); best=np.argmax(means/risks)
print(f"Largest sample return/risk ratio: {weights[best]:.0%} asset A, {1-weights[best]:.0%} asset B")
plt.plot(risks*100,means*100,label="possible mixes"); plt.scatter(risks[best]*100,means[best]*100,color="tomato",label="highest ratio")
plt.xlabel("Sample standard deviation (%)"); plt.ylabel("Average return (%)"); plt.title("Two-asset risk and return"); plt.legend(); plt.grid(alpha=.25)
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); plt.tight_layout(); plt.savefig(out/"risk_return.png",dpi=150); plt.show()
