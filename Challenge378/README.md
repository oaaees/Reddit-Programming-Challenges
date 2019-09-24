<div class="md"><p>It was a dark and stormy night. Detective Havel and Detective Hakimi arrived at the scene of the crime.</p>

<p>Other than the detectives, there were 10 people present. They asked the first person, "out of the 9 other people here, how many had you already met before tonight?" The person answered "5". They asked the same question of the second person, who answered "3". And so on. The 10 answers they got from the 10 people were:</p>

<pre><code>5 3 0 2 6 2 0 7 2 5
</code></pre>

<p>The detectives looked at the answers carefully and deduced that there was an inconsistency, and that somebody must be lying. (For the purpose of this challenge, assume that nobody makes mistakes or forgets, and if X has met Y, that means Y has also met X.)</p>

<p>Your challenge for today is, given a sequence of answers to the question "how many of the others had you met before tonight?", apply the Havel-Hakimi algorithm to determine whether or not it's possible that everyone was telling the truth.</p>

<p>If you're feeling up to it, skip ahead to the Challenge section below. Otherwise, try as many of the optional warmup questions as you want first, before attempting the full challenge.</p>

<h1>Optional Warmup 1: eliminating 0's.</h1>

<p>Given a sequence of answers, return the same set of answers with all the 0's removed.</p>

<pre><code>warmup1([5, 3, 0, 2, 6, 2, 0, 7, 2, 5]) =&gt; [5, 3, 2, 6, 2, 7, 2, 5]
warmup1([4, 0, 0, 1, 3]) =&gt; [4, 1, 3]
warmup1([1, 2, 3]) =&gt; [1, 2, 3]
warmup1([0, 0, 0]) =&gt; []
warmup1([]) =&gt; []
</code></pre>

<p>If you want to reorder the sequence as you do this, that's fine. For instance, given <code>[4, 0, 0, 1, 3]</code>, then you may return <code>[4, 1, 3]</code> or <code>[1, 3, 4]</code> or <code>[4, 3, 1]</code> or any other ordering of these numbers.</p>

<h1>Optional Warmup 2: descending sort</h1>

<p>Given a sequence of answers, return the sequence sorted in descending order, so that the first number is the largest and the last number is the smallest.</p>

<pre><code>warmup2([5, 1, 3, 4, 2]) =&gt; [5, 4, 3, 2, 1]
warmup2([0, 0, 0, 4, 0]) =&gt; [4, 0, 0, 0, 0]
warmup2([1]) =&gt; [1]
warmup2([]) =&gt; []
</code></pre>

<h1>Optional Warmup 3: length check</h1>

<p>Given a number <code>N</code> and a sequence of answers, return true if <code>N</code> is greater than the number of answers (i.e. the length of the sequence), and false if <code>N</code> is less than or equal to the number of answers. For instance, given 7 and [6, 5, 5, 3, 2, 2, 2], you would return false, because 7 is less than or equal to 7.</p>

<pre><code>warmup3(7, [6, 5, 5, 3, 2, 2, 2]) =&gt; false
warmup3(5, [5, 5, 5, 5, 5]) =&gt; false
warmup3(5, [5, 5, 5, 5]) =&gt; true
warmup3(3, [1, 1]) =&gt; true
warmup3(1, []) =&gt; true
warmup3(0, []) =&gt; false
</code></pre>

<h1>Optional Warmup 4: front elimination</h1>

<p>Given a number <code>N</code> and a sequence in descending order, subtract 1 from each of the first <code>N</code> answers in the sequence, and return the result. For instance, given <code>N = 4</code> and the sequence <code>[5, 4, 3, 2, 1]</code>, you would subtract 1 from each of the first 4 answers (5, 4, 3, and 2) to get 4, 3, 2, and 1. The rest of the sequence (1) would not be affected:</p>

<pre><code>warmup4(4, [5, 4, 3, 2, 1]) =&gt; [4, 3, 2, 1, 1]
warmup4(11, [14, 13, 13, 13, 12, 10, 8, 8, 7, 7, 6, 6, 4, 4, 2]) =&gt; [13, 12, 12, 12, 11, 9, 7, 7, 6, 6, 5, 6, 4, 4, 2]
warmup4(1, [10, 10, 10]) =&gt; [9, 10, 10]
warmup4(3, [10, 10, 10]) =&gt; [9, 9, 9]
warmup4(1, [1]) =&gt; [0]
</code></pre>

<p>You may assume that <code>N</code> is greater than 0, and no greater than the length of the sequence. Like in warmup 1, it's okay if you want to reorder the answers in your result.</p>

<h1>Challenge: the Havel-Hakimi algorithm</h1>

<p>Perform the Havel-Hakimi algorithm on a given sequence of answers. This algorithm will return true if the answers are consistent (i.e. it's possible that everyone is telling the truth) and false if the answers are inconsistent (i.e. someone must be lying):</p>

<ol>
<li>Remove all 0's from the sequence (i.e. <code>warmup1</code>).</li>
<li>If the sequence is now empty (no elements left), stop and return true.</li>
<li>Sort the sequence in descending order (i.e. <code>warmup2</code>).</li>
<li>Remove the first answer (which is also the largest answer, or tied for the largest) from the sequence and call it <code>N</code>. The sequence is now 1 shorter than it was after the previous step.</li>
<li>If <code>N</code> is greater than the length of this new sequence (i.e. <code>warmup3</code>), stop and return false.</li>
<li>Subtract 1 from each of the first <code>N</code> elements of the new sequence (i.e. <code>warmup4</code>).</li>
<li>Continue from step 1 using the sequence from the previous step.</li>
</ol>

<p>Eventually you'll either return true in step 2, or false in step 5.</p>

<p>You don't have to follow these steps exactly: as long as you return the right answer, that's fine. Also, if you answered the warmup questions, you may use your warmup solutions to build your challenge solution, but you don't have to.</p>

<pre><code>hh([5, 3, 0, 2, 6, 2, 0, 7, 2, 5]) =&gt; false
hh([4, 2, 0, 1, 5, 0]) =&gt; false
hh([3, 1, 2, 3, 1, 0]) =&gt; true
hh([16, 9, 9, 15, 9, 7, 9, 11, 17, 11, 4, 9, 12, 14, 14, 12, 17, 0, 3, 16]) =&gt; true
hh([14, 10, 17, 13, 4, 8, 6, 7, 13, 13, 17, 18, 8, 17, 2, 14, 6, 4, 7, 12]) =&gt; true
hh([15, 18, 6, 13, 12, 4, 4, 14, 1, 6, 18, 2, 6, 16, 0, 9, 10, 7, 12, 3]) =&gt; false
hh([6, 0, 10, 10, 10, 5, 8, 3, 0, 14, 16, 2, 13, 1, 2, 13, 6, 15, 5, 1]) =&gt; false
hh([2, 2, 0]) =&gt; false
hh([3, 2, 1]) =&gt; false
hh([1, 1]) =&gt; true
hh([1]) =&gt; false
hh([]) =&gt; true
</code></pre>

<h1>Detailed example</h1>

<p>Here's the first pass through the algorithm using the original example:</p>

<ul>
<li><code>[5, 3, 0, 2, 6, 2, 0, 7, 2, 5]</code>  - Starting sequence</li>
<li><code>[5, 3, 2, 6, 2, 7, 2, 5]</code>  - After step 1, removing 0's.</li>
<li>Step 2: This sequence is not empty, so go on to step 3.</li>
<li><code>[7, 6, 5, 5, 3, 2, 2, 2]</code>  - After step 3, sorting in descending order.</li>
<li><code>[6, 5, 5, 3, 2, 2, 2]</code> - After step 4, removing the first answer <code>N = 7</code>.</li>
<li>Step 5: N (7) is less than or equal to the number of answers remaining in the sequence (7), so go on to step 6.</li>
<li><code>[5, 4, 4, 2, 1, 1, 1]</code> - After step 6, subtracting 1 from each of the first 7 answers (which is all of them in this case).</li>
</ul>

<p>At this point you would start over at step 1 with the sequence <code>[5, 4, 4, 2, 1, 1, 1]</code>. After your second pass through the algorithm, your sequence will be <code>[3, 3, 1, 0, 0, 1]</code>, so start back at step 1 with this sequence. After your third pass you'll have <code>[2, 0, 0]</code>. On your fourth pass, you'll stop at step 5, because you'll have <code>N = 2</code> and an empty sequence (<code>[]</code>), and 2 &gt; 0, so you will return false.</p>
</div>
