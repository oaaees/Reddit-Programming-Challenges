<div class="md"><h1>Description</h1>

<p>Inspired by <a href="https://twitter.com/fermatslibrary/status/1089883307473543170">this tweet</a>, today's challenge is to calculate the <a href="http://mathworld.wolfram.com/AdditivePersistence.html"><em>additive persistence</em></a> of a number, defined as how many loops you have to do summing its digits until you get a single digit number. Take an integer <em>N</em>:</p>

<ol>
<li>Add its digits</li>
<li>Repeat until the result has 1 digit</li>
</ol>

<p>The total number of iterations is the additive persistence of N. </p>

<p>Your challenge today is to implement a function that calculates the additive persistence of a number. </p>

<h1>Examples</h1>

<pre><code>13 -&gt; 1
1234 -&gt; 2
9876 -&gt; 2
199 -&gt; 3
</code></pre>

<h1>Bonus</h1>

<p>The really easy solution manipulates the input to convert the number to a string and iterate over it. Try it without making the number a strong, decomposing it into digits while keeping it a number. </p>

<p>On some platforms and languages, if you try and find ever larger persistence values you'll quickly learn about your platform's big integer interfaces (e.g. 64 bit numbers). </p>
</div>