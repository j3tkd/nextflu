# take filtered sequences and align using muscle

import os, time
from io_util import *

def update_viruses(alignment, viruses):
	for v in viruses:
		v['seq'] = next(x for x in alignment if x['strain'] == v['strain'])['seq']

def cleanup():
	try:
		os.remove('temp_in.fasta')
	except OSError:
		pass
	try:
		os.remove('temp_out.fasta')
	except OSError:
		pass

def main(in_fname = None):

	print "--- Align at " + time.strftime("%H:%M:%S") + " ---"
	if in_fname is None: in_fname='data/virus_filter.json'
	viruses = read_json(in_fname)
	write_fasta(viruses, 'temp_in.fasta')
	os.system("mafft --nofft temp_in.fasta > temp_out.fasta")
	alignment = read_fasta('temp_out.fasta')
	update_viruses(alignment, viruses)
	out_fname = 'data/virus_align.json'
	write_json(viruses, out_fname)
	cleanup()
	return out_fname

if __name__ == "__main__":
	main()