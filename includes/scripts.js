"use strict";
function setlang(lang)
{
	document.cookie = 'lang=' + lang + '; expires=Sat, 31 Dec 2099 23:59:59 UTC; path=/';
	window.location.reload();
}

function setstyle(style)
{
	document.cookie = 'style=' + style + '; expires=Sat, 31 Dec 2099 23:59:59 UTC; path=/';
	changeCSS(style);
}

function changeCSS(style)
{
	document.getElementById('css').href = '/includes/css/' + style + '.css';
	document.getElementById('title').src = style == 'dos' ? '/images/title_dos.png' : '/images/title.png';
}

function reveal(show, hide)
// hide must be one of the arrays below
{
	var tabs = ['thumbnail_view', 'detailed_view'];
	var companypage = ['omni', 'devlist', 'publist', 'alllist'];

	if (hide == 'tabs')
		hide = tabs;
	if (hide == 'companypage')
		hide = companypage;

	for (i=0; i < hide.length; document.getElementById(hide[i++]).style.display = 'none');
	document.getElementById(show).style.display = 'block';
}

function codecheck(e)
{
	if (e.keyCode == 16) { return; }
	counter = e.keyCode == kc[counter] ? counter++ : 0;
	if (counter == 10)
		window.location.href = 'https://www.classicdosgames.com/company/konami.html';
}

function minimize()
{
	innercontent = document.getElementById('content').innerHTML;
	
	document.getElementById('content').innerHTML = '<div class="thumbnail" onclick="maximize()"><img src="/images/win16_icon.png" width="31" height="26"><br>' + document.getElementsByTagName('title')[0].innerHTML.replace('RGB Classic Games - ', '') + '</div>';
}

function maximize()
{
	document.getElementById('content').innerHTML = innercontent;
}

window.onload = function()
{
	if (style == 'win16') {
		h1 = document.getElementsByTagName('h1');
		for (var i = 0; i < h1.length; i++)
			h1[i].innerHTML = '<span class="win16_left"></span>' + h1[i].innerHTML + '<span class="win16_right" onclick="minimize()"></span>';
	}
}

var kc = [38,38,40,40,37,39,37,39,66,65];
var counter = 0;
var innercontent = '';

var style = 'modern';
var cookies = document.cookie.split('; ');
for (var i=0; i<cookies.length; i++) {
	if (cookies[i].substr(0,6) == 'style=')
		style = cookies[i].substr(6); break;
}
changeCSS(style);