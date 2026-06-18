#!/usr/bin/env python3
"""Read state.json and embed it into index.html."""
import json

with open('state.json', encoding='utf-8') as f:
    data = json.dumps(json.load(f), ensure_ascii=False, separators=(',', ':'))

with open('index.html', encoding='utf-8') as f:
    html = f.read()

import re
html = re.sub(
    r'<script>window\.__STATE__=.*?</script>',
    '<script>window.__STATE__=' + data + '</script>',
    html,
    count=1,
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('index.html updated with latest state.json data')
