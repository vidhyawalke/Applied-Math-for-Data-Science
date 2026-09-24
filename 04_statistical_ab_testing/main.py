"""Two-sided pooled z-test for two conversion rates."""
from pathlib import Path
import math
import matplotlib.pyplot as plt
# The conversion rate is conversions divided by visitors for each group.
na,ca,nb,cb=500,55,510,68; pa,pb=ca/na,cb/nb; pool=(ca+cb)/(na+nb)
# Under the null hypothesis of equal rates, pool conversions to estimate the shared rate.
se=math.sqrt(pool*(1-pool)*(1/na+1/nb)); z=(pb-pa)/se; # erfc converts the z-score magnitude into a two-sided standard-normal tail probability.
p=math.erfc(abs(z)/math.sqrt(2))
print(f"A={pa:.1%}, B={pb:.1%}, difference={pb-pa:.1%}"); print(f"z={z:.2f}, two-sided p-value={p:.3f}")
plt.bar(["A","B"],[pa,pb],color=["steelblue","darkorange"]); plt.ylim(0,max(pa,pb)*1.4)
plt.ylabel("Conversion rate"); plt.title("A/B conversion rates")
for i,v in enumerate([pa,pb]): plt.text(i,v+.005,f"{v:.1%}",ha="center")
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); plt.tight_layout(); plt.savefig(out/"conversion_rates.png",dpi=150); plt.show()
