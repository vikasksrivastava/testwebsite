var tipuesearch = {"pages":[{"title":"\r\n    Test – Simplify\r\n        ","text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n    Test – Simplify\r\n        \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n(function(i, s, o, g, r, a, m) { i['GoogleAnalyticsObject'] = r;\r\n    i[r] = i[r] || function() {\r\n        (i[r].q = i[r].q || []).push(arguments) }, i[r].l = 1 * new Date();\r\n    a = s.createElement(o), m = s.getElementsByTagName(o)[0];\r\n    a.async = 1;\r\n    a.src = g;\r\n    m.parentNode.insertBefore(a, m) })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');\r\nga('create', 'UA-42618265-2', 'auto');\r\nga('send', 'pageview');\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nSimplify\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n                        Home (current)\n\n\n\n\n\n\n\r\n                        Categories\r\n                    \n\n\n\n\n\n\r\n                        Tags\r\n                    \n\n\n\n\n\n\r\n                        Archives\r\n                    \n\n\n\n\n\n\r\n                        About\r\n                    \n\n\n\n\n\n\n\n\n\n\n\nFacebook\n\n\n\n\n\n\n\nGithub\n\n\n\n\n\n\n\nLinkedin\n\n\n\n\n\n\n\nTwitter\n\n\n\n\n\n\n\n\n\n\n\r\n\t\t\tThis is a test page which is written in HTML \n\n\nHello, world!\nThis is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.\n\nIt uses utility classes for typography and spacing to space content out within the larger container.\nLearn more\n\n\n\n\n\n\r\n            © 2019 Simplify by vuquangtrong. Powered by Pelican, Python, Bootstrap 4\n\r\n            License: CC-BY-4.0, based on Simplify Bootstrap Theme\n\n\n\n\n\n\n\n\n\n\n\n\r\n{\r\n    \"@context\": \"http://schema.org\",\r\n    \"@type\": \"Blog\",\r\n    \"name\": \" Simplify \",\r\n    \"url\": \"https://vuquangtrong.github.io\",\r\n    \"image\": \"https://vuquangtrong.github.io/logo.png\",\r\n    \"description\": \"A simple theme for blog, powered by Bootstrap and Pelican\"\r\n}\r\n\n\n\n","tags":"","url":"https://vuquangtrong.github.io/pages/test.html"},{"title":"About","text":"Hi there! I'm Vu Quang Trong , a software engineer in Automotive field. Simplify is my first theme I created for my own blog. Please feel free to use this theme for yours too.","tags":"pages","url":"https://vuquangtrong.github.io/pages/about.html","loc":"https://vuquangtrong.github.io/pages/about.html"},{"title":"Simplify Article","text":"Following content is for testing Markdown-to- HTML generator with various Markdown settings including standard syntax and extended Markdown Extensions . To setup Markdown settings in Pelican, please check this article: Setup blog with Pelican . You should know about HTML , CSS and probably Markdown Markdown Settings Here are the list of Markdown extensions will be used to generate this article. MARKDOWN = { 'extensions' : [ # official extensions 'markdown.extensions.extra' , # include extensions: abbr, attr_list, def_list, fenced_code, footnotes, tables 'markdown.extensions.codehilite' , # to generate code color scheme using pygments 'markdown.extensions.meta' , # to parse key:value pairs at the begining of file 'markdown.extensions.sane_lists' , # for better list 'markdown.extensions.toc' , # add Table of Content 'markdown.extensions.nl2br' , # easily to add new line, but make attr_list and legacy_attrs hard to control #'markdown.extensions.admonition', # to make alert box #'markdown.extensions.legacy_attrs', # insert attribs into element, but markdown already has a built-in function that do the same thing #'markdown.extensions.legacy_em', # to use legacy emphasis #'markdown.extensions.smarty', # converts ASCII dashes, quotes and ellipses to their HTML entity equivalents #'markdown.extensions.wikilinks', # 3rd party extensions #'markdown_captions', # convert <img> to <figure> and <figcaption> #'markdown_checklist.extension', # show checkbox in list ], 'extension_configs' : { 'markdown.extensions.codehilite' : { 'css_class' : 'highlight' }, }, 'output_format' : 'html5' , } Paragraphs Emphasis a word or a phrase: *italic* or **bold** or ***bold and italic*** or `in-line code` . Show input keys: <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>Del</kbd>. Emphasis a word or a phrase: italic or bold or bold and italic or in-line code . Show input keys: Ctrl Alt Del . As mentioned in how to comments in markdown you can (ab)use the link labels syntax to write your comments. Those lines will not be processed, so they are not included in rendered page nor page's source code. [ // ]: # (This may be the most platform independent comment) Markdown in HTML tags By default, text in HTML tags is not rendered. To support Markdown syntax in HTML tags, add markdown=\"1\" into the tag. <div markdown=\"0\"> This text is not **rendered** . </div> <div markdown=\"1\"> This text is **rendered** well. </div> This text is not **rendered**. This text is rendered well. Attribute Lists Official extension Element can have some attributes by using markdown.extensions.attr_list extension. This provides syntax: {: #someid .someclass somekey='some value' } to add attributes to a block or a span element. To use with a block element, the attribute list should be defined on the last line of the block . To use with a span element, the attribute list should be placd right after the generated span without space . A paragraph with dark background and light text, using `attr_list` extension. *Attribute list can be applied to a span element* {: .text-warning} if the attribute list is added right after the span without any space.{: .bg-dark .text-light .p-1} A paragraph with dark background and light text, using attr_list extension. Attribute list can be applied to a span element if the attribute list is added right after the span without any space.{: .bg-dark .text-light .p-1} Build-in parser Some Markdown version already has a built-in parser to process attribute lists. For example in Markdown 3.1.1 , below code generate the same HTML block. Use built-in parser ![ icon ]( {static}icon.png \"icon\" ){id=\"icon\" class=\"icon mx-auto\" style=\"display:block\"} Use attr_list extension ![ icon ]( {static}icon.png \"icon\" ){: #icon .icon .mx-auto style=display:block} This is a sample sentence in green. {class=\"text-success text-center\"} This is a sample sentence in green. Deprecated extenstion Another extension that also adds attribute into block or element is markdown.extensions.legacy_attrs . This extension has been deprecated in favor of Attribute Lists . Attributes are defined by including the syntax {@key=value} within the element. {@class=bg-dark text-warning p-1}A paragraph with dark background and yellow text, using `legacy_attrs` extension. _This text won't be formatter_ , but __this text will be formatted__ by the latter directive at the end of this block{@class=text-success} if nl2br extenstion is disabled, it will be more readable as below {@class=bg-dark text-warning p-1} A paragraph with dark background and yellow text, using `legacy_attrs` extension. _This text won't be formatter_ , but __this text will be formatted__ by the latter directive at the end of this block{@class=text-success} Blockquote Using default directive > with legacy_attrs or attr_list to get better result. > I do love you so much! > _Henry_ I do love you so much! Henry > I do love you so much! > _Henry_{class=blockquote-footer} or > I do love you so much! > _Henry_{: .blockquote-footer} I do love you so much! Henry I do love you so much! Henry Images Using <img> tag is enough to show image. Some people use markdown_captions extension to convert <img> to <figure> and <figcaption> which are new in HTML5 . Adding <figure> and <figcaption> manually can be done by using Markdown in HTML tags , but it doesn't look good in markdown file. <figure markdown=\"1\"> ![ my code doesn't work ]( {static}my-code-doesn_t-work.jpg \"my code doesn't work\" ){: .img-fluid .shadow-lg .mx-auto}<figcaption class=\"img-caption\">_my code doesn't work &copy; [ nerd4life.studio ]( https://nerd4life.studio/blogs/nerd4life-comic/my-code-doesnt-work )_</figcaption> </figure> There is another way to add caption and credit to image: ![ my code doesn't work ]( {static}my-code-doesn_t-work.jpg \"my code doesn't work\" ){: .img-fluid .shadow-lg .mx-auto}_my code doesn't work &copy; [ nerd4life.studio ]( https://nerd4life.studio/blogs/nerd4life-comic/my-code-doesnt-work )_{: .img-caption} . img-caption { display : block ; color : #6c757d !important ; text-align : center !important ; font-size : 80 % ; font-weight : 400 ; } my code doesn't work © nerd4life.studio Standard Codeblock Using Standard Codeblock with correct indent, code can be shown as below type of paragraph Show line number use Shebang #! instead of ::: to render line number. # !python hl_lines=\"1 3\" # This line is emphasized # This line isn't # This line is emphasized too will be: 1 2 3 # This line is emphasized # This line isn't # This line is emphasized too In paragraph :::python hl_lines=\"1 3\" # This line is emphasized # This line isn't # This line is emphasized too will be: # This line is emphasized # This line isn't # This line is emphasized too In nested list item - First item :::python hl_lines=\"1 3\" # This line is emphasized # This line isn't # This line is emphasized too - Second item - Third item will be: First item # This line is emphasized # This line isn't # This line is emphasized too Second item Third item In blockquote > This snippet of code > #!python from __future__ import me me.teleportTo(now) will be: This snippet of code 1 2 from __future__ import me me . teleportTo ( now ) Fenced Codeblock Using Fenced Codeblock allow the color highlight scheme to show in Markdown editor, but this won't support to show codeblock in list item or blockquote, and won't show line number. ````python hl_lines=\"2\" # You can highlight a line by adding hl_lines=\"2\" # so this line will be highlighted ```` will be: # You can highlight a line by adding hl_lines=\"2\" # so this line will be highlighted This is how codeblok looks line in SublimeText 3 using MarkdownExtended and MonokaiExtended packages Standard Codeblock Fenced Codenlock To add line number, a small jQuery code will be used to generate texts and few CCS styles will be used to format them ( function () { var pre = document . getElementsByTagName ( 'pre' ), pl = pre . length ; for ( var i = 0 ; i < pl ; i ++ ) { pre [ i ]. innerHTML = '<span class=\"line-number\"></span>' + pre [ i ]. innerHTML + '<span class=\"cl\"></span>' ; var num = pre [ i ]. innerHTML . split ( /\\n/ ). length ; for ( var j = 0 ; j < ( num - 1 ); j ++ ) { var line_num = pre [ i ]. getElementsByTagName ( 'span' )[ 0 ]; line_num . innerHTML += '<span>' + ( j + 1 ) + '</span>' ; } } })(); pre . line-number { display : block ; float : left ; margin : 0 1 em 0 -1 em ; border-right : 1 px solid #ddd ; text-align : right ; } pre . line-number span { display : block ; padding : 0 .5 em 0 1 em ; color : #ccc ; } pre . cl { display : block ; clear : both ; } Table Table with alignment and format text inside. There's still no effective method to add class into <table> tag in Markdown. We can use jQuery addClass() function to do this trick: $ ( \"table\" ). addClass ( \"table table-hover table-sm table-bordered\" ); $ ( \"thead\" ). addClass ( \"thead-light\" ); Define a table | Level | Description | Default | | :--- | :--- | ---: | | Debug | All information | _Off_ {: .badge .badge-danger} | | Info {: .text-info} | Useful infomation | _Off_ {: .badge .badge-danger} | | Warning {: .text-warning} | **Error, but system still runs** | _On_ {: .badge .badge-success} | | Error {: .text-danger} | ***Critical error, system halted*** | _On_ {: .badge .badge-success} | will get it rendered as: Level Description Default Debug All information Off Info Useful infomation Off Warning Error, but system still runs On Error Critical error, system halted On Admonition If you use admonition extension, the below text will change to a box with title and text !!! note \"How to use Admonition\" Add markdown.extensions.admonition into your Markdown extension settings Add CCS file for Admonition styles. Sane List Lists will not mixed thanks to markdown.extensions.sane_lists extension. Use legacy_attrs or attr_list to format list items. 1. First item {: .text-primary} 2. Second item {class=text-success} - a new list {: .text-primary} - not mixed {style=color:red} First item Second item a new list not mixed Dictionary A definition list can be render using markdown.extensions.def_list extension. Apple : Pomaceous fruit of plants of the genus Malus in the family Rosaceae. Orange : The fruit of an evergreen tree of the genus Citrus. Apple Pomaceous fruit of plants of the genus Malus in the family Rosaceae. Orange The fruit of an evergreen tree of the genus Citrus. Footnotes Footnotes 1 have a label 2 and the footnote's content. New-Line-to-Break Add markdown.extensions.nl2br into your Markdown extension settings . This causes newlines to be treated as hard breaks, like StackOverflow and GitHub flavored Markdown do. If this extension is not used, these 3 lines will become one line in HTML . Checklist To show a list with checkbox, install markdown_checklist extension and enable it in Markdown extensions list. The list item indicators still show, so add some CSS style to hide them. ul . checklist { list-style-type : none ; padding-left : inherit ; } Finally, a task list looks like below: - [ ] foo - [x] bar - [ ] baz foo bar baz This is a footnote content. ↩ A footnote on the label xyz . ↩","tags":"tutorial","url":"https://vuquangtrong.github.io/blog/simplify-article.html","loc":"https://vuquangtrong.github.io/blog/simplify-article.html"},{"title":"Simplify Theme","text":"A simple, clean, contentful Bootstrap 4 theme for Pelican blogger. You can use this theme to host programming articles, journals, or galeries. Live Demo Visit the live blog of the theme creator's blog: https://vuquangtrong.github.io to see theme in action, which is also has some articles about theme's documents. Source code simplify-bootstrap-theme Features Responsive layout for mobile and desktop (Bootstrap) Quick Search (Tipue Search and/or Google Search) OpenGraph (Facebook) and Twitter support SEO with contentful metadata, ready for search indexing Table of Content sidebar with highlight Back to Top floating button in long article Related posts, next/previous articles Collapsible lists in tags and categories Social Sharing (AddThis or direct links) Comments on articles (Diqus) Rich Snippets (metadata, json-ld, sitemap, robots.txt) Install Download the theme from simplify-bootstrap-theme or from pelican-themes . You may need to check the included example pelicanconf.py and publishconf.py for more information. Integrations AddThis : add sharing buttons Disqus : add comments support Google AdSense : show ads Google Analytics : track your site Google Tag Manager : new version to track your site Matomo : formerly Piwik Analytics : another site tracking service Plugins Support sitemap : generate sitemap document, see https://www.sitemaps.org post_stats : generate post statistics: words, estimated read time, tag cloud related_posts : find relate posts to the reading article neighbors : find next/preivious article share_post : share article via static buttons if don't use AddThis Markdown extensions By default Pelican enables below extensions to process your markdown files: markdown.extensions.extra includes abbr , attr_list , def_list , fenced_code , footnotes , and tables markdown.extensions.codehilite markdown.extensions.meta Simplify theme has some style configs to work with extra extenstions to render your page better: markdown.extensions.sane_lists markdown.extensions.toc markdown.extensions.nl2br markdown_checklist.extension Customized styles The theme also bring to you a clean, simple, but contenful layout. This Simplify Article will guide you how to write content in markdown and how it will be rendered on your page. Preview How to contribute Developing Simplify is my effort in some weekends. You are invited to help develop it further. Feel free to fork the [repository][], and submit pull requests. If you find any issues, or have a suggestion, then please open an [issue][]. License Simplify is released under the Creative Commons Attribution 4.0 International license. All contributors will be listed in Authors page. It maybe imcomplete but it is to honor in all they did. I would like you to have some words to refer to authors work in your page's footer . Thank you in advanced!","tags":"tutorial","url":"https://vuquangtrong.github.io/blog/simplify-theme.html","loc":"https://vuquangtrong.github.io/blog/simplify-theme.html"},{"title":"Setup blog with Bootstrap and Pelican","text":"Installing Pelican It's very simple to install Pelican and write your first post: Install Pelican Write content You may need to read the manual of Pelican Settings . There are many settings to configure how Pelican will render your article. You can use plugin , theme , extension too. Read more in: Pelican Plugins Pelican Themes jinja2 Extensions Markdown Extensions Apply theme You will need to apply a theme or create a new theme. By default, Pelican provides simple as a base theme, but you probaly want to change your blog appearance. Theme folder structure Pelican Themes Create a theme This a the main purpose of this article. If there is no theme that's fit to your need, Do it yourself! Start to create a simple page with Bootstrap . toggle code template <! doctype html > < html lang = \" en \" > < head > <!-- Required meta tags --> < meta charset = \" utf-8 \" > < meta name = \" viewport \" content = \" width=device-width, initial-scale=1, shrink-to-fit=no \" > <!-- Bootstrap CSS --> < link rel = \" stylesheet \" href = \" https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css \" integrity = \" sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T \" crossorigin = \" anonymous \" > < title > Hello , world !</ title > </ head > < body > < h1 > Hello , world !</ h1 > <!-- Optional JavaScript --> <!-- jQuery first , then Popper . js , then Bootstrap JS --> < script src = \" https://code.jquery.com/jquery-3.3.1.slim.min.js \" integrity = \" sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo \" crossorigin = \" anonymous \" ></ script > < script src = \" https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js \" integrity = \" sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1 \" crossorigin = \" anonymous \" ></ script > < script src = \" https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js \" integrity = \" sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM \" crossorigin = \" anonymous \" ></ script > </ body > </ html >","tags":"tutorial","url":"https://vuquangtrong.github.io/blog/setup-blog-with-bootstrap-and-pelican.html","loc":"https://vuquangtrong.github.io/blog/setup-blog-with-bootstrap-and-pelican.html"}]};