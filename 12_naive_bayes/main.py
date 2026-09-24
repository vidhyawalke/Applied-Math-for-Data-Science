"""Small multinomial Naive Bayes message classifier."""
from pathlib import Path
from collections import Counter
import numpy as np
import matplotlib.pyplot as plt
# These short labeled messages are the tiny training set.
messages=["win a free prize","claim your free gift","meeting at noon","project meeting today","free prize for you","lunch meeting today"]
labels=np.array([1,1,0,0,1,0]); vocab=sorted(set(word for msg in messages for word in msg.split()))
counts={c:Counter() for c in [0,1]}; totals=Counter(); class_counts=Counter(labels)
# Laplace smoothing adds one count so unseen words do not get zero probability.
for msg,label in zip(messages,labels): counts[label].update(msg.split()); totals[label]+=len(msg.split())
def spam_probability(message):
    scores=[]
    for c in [0,1]:
        score=np.log(class_counts[c]/len(labels))
        for word in message.split(): score+=np.log((counts[c][word]+1)/(totals[c]+len(vocab)))
        scores.append(score)
    return np.exp(scores[1]-np.logaddexp(scores[0],scores[1]))
new=["free gift today","meeting at noon","claim prize"]; probs=[spam_probability(msg) for msg in new]
for msg,p in zip(new,probs): print(f"{msg!r}: spam probability {p:.1%}")
plt.bar(range(len(new)),probs,color="mediumpurple"); plt.xticks(range(len(new)),new,rotation=15); plt.ylim(0,1)
plt.ylabel("Estimated spam probability"); plt.title("Naive Bayes message examples")
out=Path(__file__).parent/"output"; out.mkdir(exist_ok=True); plt.tight_layout(); plt.savefig(out/"message_predictions.png",dpi=150); plt.show()
