<template><div><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2>
<h3 id="所有页面" tabindex="-1"><a class="header-anchor" href="#所有页面" aria-hidden="true">#</a> 所有页面</h3>
<p>本章节中的 Frontmatter 会在所有类型的页面中生效。</p>
<h4 id="externallinkicon" tabindex="-1"><a class="header-anchor" href="#externallinkicon" aria-hidden="true">#</a> externalLinkIcon</h4>
<ul>
<li>类型： <code v-pre>boolean</code></li>
<li>详情：
由@vuepress/plugin-external-link-icon 提供。</li>
<li>参考：
默认主题 &gt; 配置 &gt; themePlugins.externalLinkIcon</li>
</ul>
<h4 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h4>
<ul>
<li>类型： boolean</li>
<li>详情：
是否在当前页面展示导航栏。
如果你在主题配置中禁用了导航栏，那么该 Frontmatter 将不会生效。</li>
<li>参考：
默认主题 &gt; 配置 &gt; navbar</li>
</ul>
<h4 id="pageclass" tabindex="-1"><a class="header-anchor" href="#pageclass" aria-hidden="true">#</a> pageClass</h4>
<ul>
<li>类型： string</li>
<li>详情：
为当前页面添加额外的类名。</li>
<li>示例：</li>
</ul>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">pageClass</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>page<span class="token punctuation">-</span>class</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你可以在 <code v-pre>.vuepress/styles/index.scss</code> 文件中为这个页面添加自定义样式：</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token selector">.theme-container.custom-page-class </span><span class="token punctuation">{</span>
  <span class="token comment">/* 页面样式 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参考：
默认主题 &gt; 样式 &gt; Style 文件</li>
</ul>
</div></template>


