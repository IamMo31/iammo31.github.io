layout: default title: All Projects
<main class="hero-gradient px-4 md:px-12 py-20 md:py-32 text-center border-b border-gray-700">
<h1 class="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-4">
<span class="text-gradient">All</span> Write-ups and Reports
</h1>
<p class="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto mb-12">
A complete list of all my projects, from vulnerability analysis to defensive strategies.
</p>
</main>

<section id="all-projects" class="container mx-auto px-4 md:px-12 py-16">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
{% for post in site.posts %}
<div class="bento-card p-6 md:p-8 rounded-2xl border border-gray-700">
<h3 class="text-2xl font-bold text-white mb-2">{{ post.title }}</h3>
<p class="text-gray-400 mb-4">{{ post.description }}</p>
<a href="{{ post.url }}" class="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center">
Read Report
<svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
</svg>
</a>
</div>
{% endfor %}
</div>
</section>
