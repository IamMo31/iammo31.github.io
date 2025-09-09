---
# projects.md
layout: default
title: Projects
permalink: /projects/
---

<section class="container mx-auto px-6 py-20">
    <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
            <h1 class="text-4xl md:text-5xl font-black leading-tight mb-4" style="color: var(--accent-color-headline);">Project Write-ups</h1>
            <p class="text-lg" style="color: var(--accent-color-txt);">
                A collection of my work, from in-depth malware analysis to security framework implementations.
            </p>
        </div>
        <div>
            <img id="project-image" src="/assets/img/project_light" alt="Abstract image representing project plans" class="rounded-lg shadow-xl mx-auto">
        </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {% for post in site.posts %}
            <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 transform hover:-translate-y-1 flex flex-col">
                <a href="{{ post.url | relative_url }}" class="p-6 flex-grow">
                    <h3 class="text-xl font-bold text-cyan-600 dark:text-cyan-500 mb-2">{{ post.title }}</h3>
                    <p class="text-slate-800 dark:text-slate-400">{{ post.description }}</p>
                </a>
            </div>
        {% endfor %}
    </div>
</section>