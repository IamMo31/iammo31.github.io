---
layout: default
title: Cybersecurity Portfolio
---

<!-- Page content: header, hero, projects, about, footer -->

<header class="py-6 px-4 md:px-12 z-10 sticky top-0 bg-black bg-opacity-80 backdrop-blur-sm">
    <nav class="flex justify-between items-center">
        <a href="{{ '/' | relative_url }}" class="text-2xl md:text-3xl font-bold tracking-tight text-white hover:text-gray-300 transition-colors">
            <span class="text-gradient">Cybersecurity Portfolio</span>
        </a>
        <div class="hidden md:flex space-x-8 text-lg">
            <a href="{{ '/projects/' | relative_url }}" class="hover:text-blue-400 transition-colors">Projects</a>
            <a href="{{ '/' | relative_url }}#about" class="hover:text-blue-400 transition-colors">About Me</a>
        </div>
        <button id="mobile-menu-button" class="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
    </nav>
    <div id="mobile-menu" class="hidden md:hidden mt-4 text-center space-y-4">
        <a href="{{ '/projects/' | relative_url }}" class="block text-xl font-medium hover:text-blue-400 transition-colors">Projects</a>
        <a href="{{ '/' | relative_url }}#about" class="block text-xl font-medium hover:text-blue-400 transition-colors">About Me</a>
    </div>
</header>

<!-- Hero Section -->
<main class="hero-gradient px-4 md:px-12 py-20 md:py-32 text-center border-b border-gray-700">
    <h1 class="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-4">
        <span class="text-gradient">Security</span> Analyses and Reports
    </h1>
    <p class="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto mb-12">
        Insights into the digital world, from vulnerability analysis to defensive strategies.
    </p>
</main>

<!-- Projects Section (preview cards) -->
<section id="projects" class="container mx-auto px-4 md:px-12 py-16">
    <h2 class="text-3xl font-bold mb-8 text-white">Featured Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {% for project in site.data.projects limit:4 %}
        <div class="bento-card p-6 md:p-8 rounded-2xl border border-gray-700">
            <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-400 mb-4">{{ project.short }}</p>
            <a href="{{ '/projects/' | append: project.slug | append: '/' | relative_url }}" class="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center">
                Read Report
                <svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
        {% endfor %}
    </div>

    <!-- Link to all projects -->
    <div class="text-center mt-12">
        <a href="{{ '/projects/' | relative_url }}" class="inline-block px-8 py-4 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
            View All Projects
        </a>
    </div>
</section>

<!-- About Section -->
<section id="about" class="container mx-auto px-4 md:px-12 py-16">
    <h2 class="text-3xl font-bold text-center mb-8 text-white">About Me</h2>
    <div class="max-w-3xl mx-auto text-gray-300 leading-relaxed space-y-4">
        <p>Here you can write a brief summary about your expertise, interests, and background in cybersecurity. Mention your skills, certifications, and passions to build credibility and trust with potential employers or collaborators. This is your chance to tell your story!</p>
        <p>You can also include a professional headshot or a link to your resume. Remember to follow the principles of <span class="text-white">clarity and conciseness</span> to ensure the user experience is optimal.</p>
    </div>
</section>

<!-- Footer -->
<footer id="contact" class="py-8 text-center text-gray-500 text-sm">
    <p>Built with Tailwind CSS & ❤️</p>
    <p class="mt-2">© 2024 Cybersecurity Portfolio. All Rights Reserved.</p>
</footer>
