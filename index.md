layout: default title: Home
<section class="hero">
<h1 class="hero-title">Cybersecurity Write-ups & Research</h1>
<p class="hero-subtitle">Exploring digital forensics, penetration testing, and defensive strategies.</p>
</section>

<section class="post-list">
<h2>Latest Write-ups</h2>
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
