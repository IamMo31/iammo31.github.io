layout: default title: Projects
<section class="post-list">
<h1>All Projects</h1>
<p class="page-description">Hier findest du eine vollständige Liste meiner dokumentierten Cybersecurity-Projekte, Write-ups und Forschungsnotizen.</p>
<div class="grid">
{% for post in site.posts %}
<a href="{{ post.url | relative_url }}" class="card">
<div class="card-content">
<h3 class="card-title">{{ post.title }}</h3>
<p class="card-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
<span class="card-date">{{ post.date | date: "%B %d, %Y" }}</span>
</div>
</a>
{% endfor %}
</div>
</section>
