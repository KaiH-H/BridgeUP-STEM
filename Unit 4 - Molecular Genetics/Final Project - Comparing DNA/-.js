protein = ""
codon = ""

for i in RNA:
    if len(codon) == 3:
        protein += codonDict[codon]
        codon = ""
        codon += i
    else:
        codon += i

print(protein)