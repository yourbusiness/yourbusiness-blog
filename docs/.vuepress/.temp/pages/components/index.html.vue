<template><div><h2 id="默认的页面路由" tabindex="-1"><a class="header-anchor" href="#默认的页面路由" aria-hidden="true">#</a> 默认的页面路由</h2>
<p>此处我们把 <code v-pre>docs</code> 目录作为 <code v-pre>targetDir</code> （参考 命令行接口），下面所有的“文件的相对路径”都是相对于 <code v-pre>docs</code> 目录的。在项目根目录下的 <code v-pre>package.json</code> 中添加 <code v-pre>scripts</code> ：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev docs"</span><span class="token punctuation">,</span>
        <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上述的目录结构，默认页面路由地址如下：</p>
<table>
<thead>
<tr>
<th style="text-align:center">文件的相对路径</th>
<th style="text-align:center">页面路由地址</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>/README.md</code></td>
<td style="text-align:center"><code v-pre>/</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>/guide/README.md</code></td>
<td style="text-align:center"><code v-pre>/guide/</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>/config.md</code></td>
<td style="text-align:center"><code v-pre>/config.html</code></td>
</tr>
</tbody>
</table>
<blockquote>
<p><strong>注意</strong></p>
<p>当你想要去自定义 <code v-pre>templates/ssr.html</code> 或 <code v-pre>templates/dev.html</code> 时，最好基于 <a href="https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html" target="_blank" rel="noopener noreferrer">默认的模板文件<ExternalLinkIcon/></a> (opens new window)来修改，否则可能会导致构建出错。</p>
</blockquote>
<h2 id="默认的页面路由22" tabindex="-1"><a class="header-anchor" href="#默认的页面路由22" aria-hidden="true">#</a> 默认的页面路由22</h2>
<p>此处我们把 <code v-pre>docs</code> 目录作为 <code v-pre>targetDir</code> （参考 命令行接口），下面所有的“文件的相对路径”都是相对于 <code v-pre>docs</code> 目录的。在项目根目录下的 <code v-pre>package.json</code> 中添加 <code v-pre>scripts</code> ：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev docs"</span><span class="token punctuation">,</span>
        <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上述的目录结构，默认页面路由地址如下：</p>
<table>
<thead>
<tr>
<th style="text-align:center">文件的相对路径</th>
<th style="text-align:center">页面路由地址</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>/README.md</code></td>
<td style="text-align:center"><code v-pre>/</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>/guide/README.md</code></td>
<td style="text-align:center"><code v-pre>/guide/</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>/config.md</code></td>
<td style="text-align:center"><code v-pre>/config.html</code></td>
</tr>
</tbody>
</table>
<blockquote>
<p><strong>注意</strong></p>
<p>当你想要去自定义 <code v-pre>templates/ssr.html</code> 或 <code v-pre>templates/dev.html</code> 时，最好基于 <a href="https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html" target="_blank" rel="noopener noreferrer">默认的模板文件<ExternalLinkIcon/></a> (opens new window)来修改，否则可能会导致构建出错。</p>
</blockquote>
</div></template>


