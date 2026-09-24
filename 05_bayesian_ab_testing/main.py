"""Beta-binomial updating and posterior simulation."""
from pathlib import Path
from math import lgamma
import numpy as np
import matplotlib.pyplot as plt
# A Beta prior updates by adding successes to alpha and failures to beta.
na,ca,nb,cb=500,55,510,68; aa,ba=1+ca,1+na-ca; ab,bb=1+cb,1+nb-cb
# Comparing paired posterior draws estimates P(rate B > rate A).
rng=np.random.default_rng(5); sa=rng.beta(aa,ba,100000); sb=rng.beta(ab,bb,100000)
print(f"Posterior mean A={aa/(aa+ba):.1%}; B={ab/(ab+bb):.1%}"); print(f"Chance B is better: {np.mean(sb>sa):.1%}")
grid=np.linspace(.05,.2,300)
def beta_pdf(x,a,b): return np.exp(lgamma(a+b)-lgamma(a)-lgamma(b)+(a-1)*np.log(x)+(b-1)*np.log1p(-x))
plt.plot(grid,beta_pdf(grid,aa,ba),label="A posterior"); plt.plot(grid,beta_pdf(grid,ab,bb),label="B posterior")
plt.xlabel("Conversion probability"); plt.ylabel("Density"); plt.title("Updated belief about conversion rates"); plt.legend(); plt.grid(alpha=.2)
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); plt.tight_layout(); plt.savefig(out/"beta_posteriors.png",dpi=150); plt.show()
