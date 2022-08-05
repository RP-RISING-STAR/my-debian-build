#!/bin/sh
# Adjust sound devices volume level

pactl set-sink-mute 0 false
pactl set-sink-volume 0 30%

pactl set-source-mute 1 false
pactl set-source-volume 1 50%
