---
layout: post
title: "Example: 2"
description: "Generic Description."
---

Das Zephyr-Ransomware-Projekt begann mit der Entdeckung einer neuen, auf Windows-Systeme abzielenden Malware-Variante. Ziel war es, die technischen Fähigkeiten, die Verbreitungsmethoden und die Auswirkungsmechanismen der Ransomware zu verstehen.

### Statische und Dynamische Analyse

Zunächst wurde die statische Analyse genutzt, um die binäre Struktur zu untersuchen. Auffällige Zeichenketten und API-Aufrufe deuteten auf Verschlüsselungsfunktionen hin.

```powershell
# Beispiel-Codeblock
Get-Process | Where-Object {$_.ProcessName -eq "zephyr.exe"} | Stop-Process