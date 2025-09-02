layout: default title: Home
<section class="hero">
<h1 class="hero-title">Cybersecurity Portfolio</h1>
<p class="hero-subtitle">Exploring digital forensics, penetration testing, and defensive strategies.</p>
</section>

<section id="about-me" class="about-me">
<div class="about-content">
<h2>About Me</h2>
<p>
Willkommen auf meinem Portfolio! Ich bin ein leidenschaftlicher Cybersecurity-Enthusiast mit einem Fokus auf [Deine Spezialisierung, z.B. Network Security, Malware Analysis, etc.]. Hier dokumentiere ich meine Projekte, Forschungen und die Herausforderungen, denen ich mich auf Plattformen wie Hack The Box oder TryHackMe stelle.
</p>
<p>
Mein Ziel ist es, komplexe Sicherheitsthemen verständlich aufzubereiten und mein Wissen mit der Community zu teilen. Kontaktieren Sie mich gerne über die Links im Footer.
</p>
</div>
</section>

<section class="post-list">
<h2>Latest Projects</h2>
<div class="grid">
{% for post in site.posts limit:3 %}
<a href="{{ post.url | relative_url }}" class="card">
<div class="card-content">
<h3 class="card-title">{{ post.title }}</h3>
<p class="card-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
<span class="card-date">{{ post.date | date: "%B %d, %Y" }}</span>
</div>
</a>
{% endfor %}
</div>
<div class="view-all-container">
<a href="/projects/" class="view-all-link">View all projects &rarr;</a>
</div>
</section>
