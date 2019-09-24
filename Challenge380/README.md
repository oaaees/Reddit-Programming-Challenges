<div class="md"><p>For the purpose of this challenge, Morse code represents every letter as a sequence of 1-4 characters, each of which is either <code>.</code> (dot) or <code>-</code> (dash). The code for the letter <code>a</code> is <code>.-</code>, for <code>b</code> is <code>-...</code>, etc. The codes for each letter a through z are:</p>

<pre><code>.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..
</code></pre>

<p>Normally, you would indicate where one letter ends and the next begins, for instance with a space between the letters' codes, but for this challenge, just smoosh all the coded letters together into a single string consisting of only dashes and dots.</p>

<h1>Examples</h1>

<pre><code>smorse("sos") =&gt; "...---..."
smorse("daily") =&gt; "-...-...-..-.--"
smorse("programmer") =&gt; ".--..-.-----..-..-----..-."
smorse("bits") =&gt; "-.....-..."
smorse("three") =&gt; "-.....-..."
</code></pre>

<p>An obvious problem with this system is that decoding is ambiguous. For instance, both <code>bits</code> and <code>three</code> encode to the same string, so you can't tell which one you would decode to without more information.</p>

<h1>Optional bonus challenges</h1>

<p>For these challenges, use the <a href="https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt">enable1 word list</a>. It contains 172,823 words. If you encode them all, you would get a total of 2,499,157 dots and 1,565,081 dashes.</p>

<ol>
<li>The sequence <code>-...-....-.--.</code> is the code for four different words (<code>needing</code>, <code>nervate</code>, <code>niding</code>, <code>tiling</code>). Find the only sequence that's the code for 13 different words.</li>
<li><code>autotomous</code> encodes to <code>.-..--------------..-...</code>, which has 14 dashes in a row. Find the only word that has 15 dashes in a row.</li>
<li>Call a word <em>perfectly balanced</em> if its code has the same number of dots as dashes. <code>counterdemonstrations</code> is one of two 21-letter words that's perfectly balanced. Find the other one.</li>
<li><code>protectorate</code> is 12 letters long and encodes to <code>.--..-.----.-.-.----.-..--.</code>, which is a palindrome (i.e. the string is the same when reversed). Find the only 13-letter word that encodes to a palindrome.</li>
<li><code>--.---.---.--</code> is one of five 13-character sequences that does not appear in the encoding of any word. Find the other four.</li>
</ol>

<p><em>Thanks to <a href="/u/Separate_Memory">u/Separate_Memory</a> for inspiring this challenge on <a href="/r/dailyprogrammer_ideas">r/dailyprogrammer_ideas</a>!</em></p>
</div>
