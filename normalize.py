#!/usr/bin/env python

import subprocess
from subprocess import call, check_output, CalledProcessError
import re
import platform

nul = 'NUL' if platform.system() == 'Windows' else '/dev/null'

volume_pat = re.compile(r'max_volume:\s+([-0-9.]+)')

def gain(path, amt):
    outpath = 'norm/' + path[:path.index('.')] + '.mp3'
    print 'gaining', path, 'by', amt
    call(['ffmpeg', '-i', path,
          '-af', 'volume=' + str(amt) + 'dB',
          '-y', outpath],
         stderr=subprocess.STDOUT)

def normalize(path):
    volume = ''
    try:
        volume = check_output(
            ['ffmpeg', '-i', path,
             '-af', 'volumedetect',
             '-f', 'null', nul],
            stderr=subprocess.STDOUT)
    except CalledProcessError:
        pass

    match = volume_pat.search(volume)
    if match:
        volume = float(match.group(1))
        print path, 'at volume', volume
        gain(path, -0.3 - volume)
    else:
        raise RuntimeError("no volume: " + path)

if __name__ == '__main__':
    import sys
    for path in sys.argv[1:]:
        try:
            normalize(path)
        except RuntimeError as e:
            print e

