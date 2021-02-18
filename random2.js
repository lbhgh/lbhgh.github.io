function button()
{
  document.getElementById('result').innerHTML = more_random();
}

function more_random()
{var a=5;
b=parseInt(a.rows);
if(b<1)b=1;
b=generate_list("main",b);
a.value=b.join("\n")}

function generate_text(a)
{if(a=gen_data[a])if(a=select_from(a))return expand_tokens(a);
return""}

function generate_list(a,b)
{var c=[],d;
for(d=0;d<b;d++)c.push(generate_text(a));
return c}

function select_from(a)
{return a.constructor==Array?select_from_array(a):select_from_table(a)}

function select_from_array(a)
{return a[Math.floor(Math.random()*a.length)]}

function select_from_table(a)
{var b;if(b=scale_table(a))
{b=Math.floor(Math.random()*b)+1;var c;for(c in a)
{var d=key_range(c);
if(b>=d[0]&&b<=d[1])return a[c]}}return""}

function scale_table(a){var b=0,c;
for(c in a){var d=key_range(c);
if(d[1]>b)b=d[1]}return b}

function key_range(a)
{var b;return(b=/(\d+)-00/.exec(a))?[parseInt(b[1]),100]:(b=/(\d+)-(\d+)/.exec(a))?[parseInt(b[1]),parseInt(b[2])]:a=="00"?[100,100]:[parseInt(a),parseInt(a)]}

function expand_tokens(a)
{for(var b;b=/{(\w+)}/.exec(a);){b=b[1];
var c;a=(c=generate_text(b))?a.replace("{"+b+"}",c):a.replace("{"+b+"}",b)}
return a}more_random();
