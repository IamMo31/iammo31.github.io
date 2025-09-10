---
layout: default
title: Home
---

<section class="container mx-auto px-6 py-20 md:py-32">
    <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="text-center md:text-left">
            <h1 class="text-4xl md:text-6xl font-black leading-tight mb-4" style="color: var(--accent-color-headline);">Cybersecurity Portfolio</h1>
            <p class="text-lg mb-8" style="color: var(--accent-color-txt);">
                A portfolio showcasing my self-driven dive into cybersecurity. Explore projects covering everything from Wireshark network analysis to defending endpoints, networks and leveraging SIEM for proactive threat management.
            </p>
        </div>
        <div>
            <img id="hero-image" src="/assets/img/hero_dark.png" alt="An AI-generated image." title="This image is AI-generated." class="rounded-lg shadow-2xl mx-auto">
        </div>
    </div>
</section>

<section class="py-20">
    <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12" style="color: var(--accent-color-headline);">Latest Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {% for post in site.posts limit:6 %}
                <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 transform hover:-translate-y-1 flex flex-col">
                    <a href="{{ post.url | relative_url }}" class="p-6 flex-grow">
                        <h3 class="text-xl font-bold text-cyan-600 dark:text-cyan-500 mb-2">{{ post.title }}</h3>
                        <p class="text-slate-800 dark:text-slate-400">{{ post.description }}</p>
                    </a>
                </div>
            {% endfor %}
        </div>
        <div class="text-center mt-12">
            <a href="{{ '/projects/' | relative_url }}" class="inline-block bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-700 transition-transform hover:scale-105">View All Projects</a>
        </div>
    </div>
</section>

<section id="about" class="py-20" style="background-color: var(--accent-color-pale);">
    <div class="container mx-auto px-6 text-center max-w-3xl">
        <h2 class="text-3xl font-bold mb-4" style="color: var(--accent-color-headline);">About Me</h2>
        <p class="leading-relaxed" align="left" style="color: var(--accent-color-txt);">
            Hello! My name is Geronimo, I'm a dedicated cybersecurity enthusiast with a Bachelor's degree in Computer Science, with a clear goal: to launch my career in the cybersecurity field. My passion for this area began during my adolescence, captivated by crime shows where computer specialists used their analytical and technical skills to solve complex cases.
        </p>
        <p class="leading-relaxed" align="left" style="color: var(--accent-color-txt);">
            This fascination led me to delve deeper into IT security during my university studies. I started by teaching myself with a book on hacking and later attended an IT security course, which provided a new perspective on the field's many facets.
        </p>
        <p class="leading-relaxed" align="left" style="color: var(--accent-color-txt);">
            A significant personal experience with cybercrime  further fueled my commitment, motivating me to pursue self-education in early 2025 with renewed focus. Since then, I've been building my skills in various cybersecurity domains—from foundational principles and frameworks to advanced topics like digital forensics, incident response, and threat hunting. I'm learning to use industry-standard tools and building a solid understanding of risk management, network, endpoint, and application security.
        </p>
        <p class="leading-relaxed" align="left" style="color: var(--accent-color-txt);">
            I am highly motivated to apply my skills and knowledge in a practical setting and contribute to protecting digital infrastructures.
        </p>
    </div>
</section>
