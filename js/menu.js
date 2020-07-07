<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Underwater Navigation | Codrops</title>
		<meta name="description" content="A set of ideas of animating images and other elements while smooth scrolling a page." />
		<meta name="keywords" content="smooth scrolling, animation, scroll, website, images, web development, javascript" />
		<meta name="author" content="Codrops" />
		<link rel="shortcut icon" href="favicon.ico">
		<link rel="stylesheet" href="https://use.typekit.net/dec4mzz.css">
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="css/base.css" />
		<link rel="stylesheet" type="text/css" href="css/menu.css" />
		<script src="https://code.jquery.com/pep/0.4.3/pep.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
		<script src="js/pixi.min.js"></script>

		<script>document.documentElement.className="js";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");</script>
	</head>
	<body class="demo-1">
		<main>
			<div class="frame">
				<div class="frame__nav">
					<label class="main-nav-open nav-toggle" for="main-nav-toggle" tabindex="0" aria-label="Menu">
						<svg aria-hidden="true" width="28px" height="20px" viewBox="0 0 28 20">
							<rect x="0" y="2" width="28" height="2"></rect>
							<rect x="0" y="10" width="24" height="2"></rect>
							<rect x="0" y="18" width="28" height="2"></rect>
						</svg>
					</label>
					<input type="checkbox" id="main-nav-toggle" />
					<nav class="main-nav">
						<ul class="main-nav__fallback">
							<li>
								<a href="#observatory">Observatory</a>
							</li>
							<li>
								<a href="#research">Research</a>
							</li>
							<li>
								<a href="#events">Events</a>
							</li>
							<li>
								<a href="#members">Members</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
						<label class="main-nav__close nav-toggle" for="main-nav-toggle" tabindex="0" aria-label="Close menu">
							<svg aria-hidden="true" width="24" height="22px" viewBox="0 0 24 22">
								<path d="M11 9.586L20.192.393l1.415 1.415L12.414 11l9.193 9.192-1.415 1.415L11 12.414l-9.192 9.193-1.415-1.415L9.586 11 .393 1.808 1.808.393 11 9.586z">
							</svg>
						</label>
					</nav>
				</div>
				<div data-scroll class="page page--layout-2">
				
				<div class="content content--full content--alternate">
					<div class="content__item content__item--wide">
						<span class="content__item-number">01</span>
						<div class="content__item-imgwrap"><a href="ilustraçao.html"><div class="content__item-img" style="background-image: url(images/ilustraçoes/covid2.png);"></div></div></a>
						<div class="content__item-deco"></div>
						<h2 class="content__item-title">Ilustrações</h2>
						<p class="content__item-description">Little trees and bushes grow however makes them happy.</p>
					</div>
					<div class="content__item content__item--wide">
						<span class="content__item-number">02</span>
						<div class="content__item-imgwrap"><a href="myhome.html"><div class="content__item-img" style="background-image: url(images/myhome/capa2.jpg);"></div></div></a>
						<div class="content__item-deco"></div>
						<h2 class="content__item-title">MyHome</h2>
						<p class="content__item-description">We don't have to be committed. We are just playing here.</p>
					</div>
					<div class="content__item content__item--wide">
						<span class="content__item-number">03</span>
						<div class="content__item-imgwrap"><a href="cadeira.html"><div class="content__item-img" style="background-image: url(images/infinita/capa1.jpg);"></div></div></a>
						<div class="content__item-deco"></div>
						<h2 class="content__item-title">Cadeira Infinita</h2>
						<p class="content__item-description">I thought today we would do a happy little picture.</p>
					</div>
					<div class="content__item content__item--wide">
						<span class="content__item-number">04</span>
						<div class="content__item-imgwrap"><div class="content__item-img" style="background-image: url(img/20.jpg);"></div></div>
						<div class="content__item-deco"></div>
						<h2 class="content__item-title">Mo</h2>
						<p class="content__item-description">Nature is so fantastic, enjoy it. Let it make you happy.</p>
					</div>
					<div class="content__item content__item--wide">
						<span class="content__item-number">05</span>
						<div class="content__item-imgwrap"><div class="content__item-img" style="background-image: url(img/18.jpg);"></div></div>
						<div class="content__item-deco"></div>
						<h2 class="content__item-title">Ne</h2>
						<p class="content__item-description">We need a shadow side and a highlight side.</p>
					</div>
					<div class="content__item content__item--wide">
						<span class="content__item-number">06</span>
						<div class="content__item-imgwrap"><div class="content__item-img" style="background-image: url(img/16.jpg);"></div></div>
						<div class="content__item-deco"></div>
						<h2 class="content__item-title">Wy</h2>
						<p class="content__item-description">We'll put some happy little leaves here and there.</p>
					</div>
					<div class="content__item content__item--wide">
						<span class="content__item-number">07</span>
						<div class="content__item-imgwrap"><div class="content__item-img" style="background-image: url(img/11.jpg);"></div></div>
						<div class="content__item-deco"></div>
						<h2 class="content__item-title">Tx</h2>
						<p class="content__item-description">With something so strong, a little bit can go a long way.</p>
					</div>
					<div class="content__item content__item--wide">
						<span class="content__item-number">08</span>
						<div class="content__item-imgwrap"><div class="content__item-img" style="background-image: url(img/4.jpg);"></div></div>
						<div class="content__item-deco"></div>
						<h2 class="content__item-title">Sd</h2>
						<p class="content__item-description">There are no limits in this world.</p>
					</div>

					
				</div>
      <footer class="unslate_co--footer unslate_co--section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-7">
              
              <div class="footer-site-logo"><a href="#">Aline Anzai<span>.</span></a></div>

              <ul class="footer-site-social">
                <li><a href="https://www.linkedin.com/in/aline-ayumi-anzai-4333691a8/">LinkedIn</a></li>
                <li><a href="https://www.behance.net/ayumi03ca">Behance</a></li>
                <li><a href="https://www.instagram.com/dsgn.ayumi/">Instagram</a></li>
                <li><a href="https://dribbble.com/ayumianz">Dribbble</a></li>
              </ul>

              <p class="site-copyright">
                Copyright &copy;
                <script>
                  document.write(new Date().getFullYear());
                </script> <i class="icon-heart"
                  aria-hidden="true"></i>
              
              </p>

            </div>
          </div>
        </div>
      </footer>
			</div>
		</main>
		<script src="js/main.js"></script>
		<script src="js/menu.js"></script>
			<script src="js/imagesloaded.pkgd.min.js"></script>
		<script src="js/demo.js"></script>
	</body>
</html>
