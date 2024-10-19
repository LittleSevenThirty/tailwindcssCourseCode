在tailwind.config.js配置均为键值对的形式出现,<strong><font color=red>注意键和值均是使用 '' 包裹的字符串</font></strong>
特殊的在theme主题配置中若 值 是一个对象，则对应解释的css就是 键-值 的形式
即：
```
module.exports = {
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
  }
}

使用：
html:
<div class="rounded-sm"></div>

css:
.rounded-sm {
    border-radius: 0.125rem;
}
```

