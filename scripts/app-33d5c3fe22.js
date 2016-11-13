!function(){"use strict";angular.module("mysite",["ngSanitize","ngAria","ngResource","ui.router","ngMaterial","toastr","minimalPiechart","ngMaterial","ngMessages","angular-meter-polyfill","angular-timeline","angular-scroll-animate","ngMap"])}(),function(){"use strict";function e(){function e(){var e=this;e.events=[{badgeClass:"work work-1",badgeIconClass:"computer",title:"Web integrator / UI designer consultant",subtitle:"Alten - France",content:"Restyling and creation by scratch of graphic design of UIs, thinking about the User Experience and the possible technical issues . Using of the Material Design guidelines provided by Google. Create functional web pages using HTML5 and CSS3 starting from the mockups. Cross browser and cross device development"},{badgeClass:"work work-2",badgeIconClass:"work",title:"Frontend developer",subtitle:"Bitmama - Italy",content:"Client side development and management on web portals in the automotive sector (Fiat, Lancia) for several European markets. Use of Microsoft SharePoint CMS, version control SVN and cross browser development using HTML5, CSS3 and Javascript (with JQuery and AJAX)."},{badgeClass:"work work-3",badgeIconClass:"computer",title:"Intern for Master Thesis",subtitle:"Eurecom Telecom Paris Tech - France",content:"Design and development of HyperTED: a web application able to browse and search through Media Fragments of TED Talks recommending related contents according to semantic entities extracted in the subtitles."}],e.animateElementIn=function(e){e.removeClass("timeline-hidden"),e.addClass("bounce-in")}}var t={restrict:"E",templateUrl:"app/components/work/work.html",scope:{creationDate:"="},controller:e,controllerAs:"w",bindToController:!0};return t}angular.module("mysite").directive("myWork",e)}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Stylus",url:"http://learnboost.github.io/stylus/",description:"Stylus is a revolutionary new language, providing an efficient, dynamic, and expressive way to generate CSS. Supporting both an indented syntax and regular CSS style.",logo:"stylus.png"}];this.getTec=e}angular.module("mysite").service("webDevTec",e)}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",templateUrl:"app/components/quote/quote.html",scope:{creationDate:"="},controller:e,controllerAs:"qu",bindToController:!0};return t}angular.module("mysite").directive("myQuote",e)}(),function(){"use strict";function e(){function e(){this.animateElementIn=function(e){e.removeClass("timeline-hidden"),e.addClass("animated fadeInUp")}}var t={restrict:"E",templateUrl:"app/components/skills/skills.html",scope:{creationDate:"="},controller:e,controllerAs:"sk",bindToController:!0};return t}angular.module("mysite").directive("mySkills",e)}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",templateUrl:"app/components/home/home.html",scope:{creationDate:"="},controller:e,controllerAs:"mh",bindToController:!0};return t}angular.module("mysite").directive("myHome",e)}(),function(){"use strict";function e(){function e(){var e=this;e.imagePath="../assets/images/me.jpg"}var t={restrict:"E",templateUrl:"app/components/presentation/presentation.html",scope:{creationDate:"="},controller:e,controllerAs:"pr",bindToController:!0};return t}angular.module("mysite").directive("myPresentation",e)}(),function(){"use strict";function e(){function e(e){e.currentNavItem="home"}e.$inject=["$scope"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"nav",bindToController:!0};return t}angular.module("mysite").directive("myNav",e)}(),function(){"use strict";function e(){function e(){var e=this;e.events=[{badgeClass:"education education-1",badgeIconClass:"school",title:"Cinema and Media Engineering Master Degree",subtitle:"March 2015",content:"Politecnico di Torino - Torino, Italy"},{badgeClass:"education education-2",badgeIconClass:"school",title:"Erasmus",subtitle:"April - September 2014",content:"Eurecom Telecom Paris Tech - Sophia Antipolis, France"},{badgeClass:"education education-3",badgeIconClass:"school",title:"Cinema and Media Engineering Bachelor's Degree",subtitle:"September 2012",content:"Politecnico di Torino - Torino, Italy"},{badgeClass:"education education-4",badgeIconClass:"school",title:"Classical High School Diploma",subtitle:"2008",content:"Liceo Classico D'Adda - Varallo (VC), Italy"}],e.animateElementIn=function(e){e.removeClass("timeline-hidden"),e.addClass("bounce-in")}}var t={restrict:"E",templateUrl:"app/components/education/education.html",scope:{creationDate:"="},controller:e,controllerAs:"ed",bindToController:!0};return t}angular.module("mysite").directive("myEducation",e)}(),function(){"use strict";function e(e,t){function a(a){function n(e){return e.data}function l(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return a||(a=30),t.get(i+"/contributors?per_page="+a).then(n)["catch"](l)}var i="https://api.github.com/repos/Swiip/generator-gulp-angular",n={apiHost:i,getContributors:a};return n}e.$inject=["$log","$http"],angular.module("mysite").factory("githubContributor",e)}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",templateUrl:"app/components/contacts/contacts.html",scope:{creationDate:"="},controller:e,controllerAs:"c",bindToController:!0};return t}angular.module("mysite").directive("myContacts",e)}(),function(){"use strict";function e(e,t,a){function i(){l(),e(function(){s.classAnimation="rubberBand"},4e3)}function n(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),s.classAnimation=""}function l(){s.awesomeThings=t.getTec(),angular.forEach(s.awesomeThings,function(e){e.rank=Math.random()})}var s=this;s.awesomeThings=[],s.classAnimation="",s.creationDate=1469368529468,s.showToastr=n,i()}e.$inject=["$timeout","webDevTec","toastr"],angular.module("mysite").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("mysite").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("work",{url:"/#work",templateUrl:"app/main/main.html#work",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("mysite").config(e)}(),function(){"use strict";angular.module("mysite").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("mysite").config(e)}(),angular.module("mysite").run(["$templateCache",function(e){e.put("app/main/main.html","<div layout=vertical layout-fill><md-content><header><!-- <my-nav></my-nav> --></header><section class=section id=home><my-home></my-home></section><section class=section id=quote><my-quote></my-quote></section><section class=section id=presentation><my-presentation></my-presentation></section><section class=section id=skills><my-skills></my-skills></section><section class=section id=work><my-work></my-work></section><section class=section id=education><my-education></my-education></section><section class=section id=contacts><my-contacts></my-contacts></section><footer><p>© Mariella Sabatino, 2016. v. 1.0.1</p></footer></md-content></div>"),e.put("app/components/contacts/contacts.html",'<h1 class=title>Contacts</h1><div class=contacts__container><div class=contacts__map><ng-map center="[43.7101728, 7.2619532]" default-style=false></ng-map></div><div class=contacts__links><div layout=column layout-align=center><div layout=row layout-align="space-between center"><md-button href=mailto:mll.sabatino@gmail.com target=_blank class="md-icon-button social_logo" aria-label=email><i class=material-icons>email</i></md-button><label><a href=mailto:mll.sabatino@gmail.com target=_blank>mll.sabatino@gmail.com</a></label></div><div layout=row layout-align="space-between center"><md-button href=tel:0033665132555 class="md-icon-button social_logo" aria-label=phone><i class=material-icons>phone_android</i></md-button><div class=contacts-links__half><label><a href=tel:0033665132555>+33 (0) 6 65 13 25 55</a></label></div></div><div layout=row layout-align="space-between center"><md-button href=/ class="md-icon-button social_logo" aria-label=webpage><i class=material-icons>language</i></md-button><div class=contacts-links__half><label><a href=/ >https://marsab.github.io/</a></label></div></div><div layout=row layout-align="space-between center"><md-button href=skype:mellasab8?call class="md-icon-button social_logo" aria-label=skype><md-icon md-svg-icon=../assets/images/social/skype.svg class=material-icons></md-icon></md-button><div class=contacts-links__half><label><a href=skype:mellasab8?call>mellasab8</a></label></div></div></div></div><div class=contacts__social><div layout=column layout-align=center><div layout=row layout-align="space-between center"><md-button href=https://github.com/MarSab target=_blank class="md-icon-button social_logo" aria-label=github><md-icon md-svg-icon=../assets/images/social/github-logo.svg></md-icon></md-button><label><a href=https://github.com/MarSab target=_blank>/MarSab</a></label></div><div layout=row layout-align="space-between center"><md-button href=https://www.linkedin.com/in/mariellasabatino target=_blank class="md-icon-button social_logo" aria-label=linkedin><md-icon md-svg-icon=../assets/images/social/linkedin.svg></md-icon></md-button><label><a href=https://www.linkedin.com/in/mariellasabatino target=_blank>/mariellasabatino</a></label></div><div layout=row layout-align="space-between center"><md-button href=https://www.instagram.com/marsab8/ target=_blank class="md-icon-button social_logo" aria-label=instagram><md-icon md-svg-icon=../assets/images/social/instagram.svg></md-icon></md-button><label><a href=https://www.instagram.com/marsab8/ target=_blank>/marsab8</a></label></div><div layout=row layout-align="space-between center"><md-button href=http://www.slideshare.net/MariellaSabatino target=_blank class="md-icon-button social_logo" aria-label=Slideshare><md-icon md-svg-icon=../assets/images/social/slideshare-logo.svg></md-icon></md-button><label><a href=http://www.slideshare.net/MariellaSabatino target=_blank>/MariellaSabatino</a></label></div></div></div></div>'),e.put("app/components/education/education.html",'<h1 class="title title--right">What did I study?</h1><timeline><timeline-event ng-repeat="event in ed.events" side=alternate><timeline-badge class={{event.badgeClass}} when-visible=ed.animateElementIn class=timeline-hidden><i class="material-icons icon-white">{{event.badgeIconClass}}</i></timeline-badge><timeline-panel class={{event.badgeClass}} when-visible=ed.animateElementIn class=timeline-hidden><timeline-heading><h4 class="subtitle subtitle--orange subtitle--timeline">{{event.title}}</h4><h5>{{event.subtitle}}</h5></timeline-heading><p>{{event.content}}</p></timeline-panel></timeline-event></timeline>'),e.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-nav-bar md-selected-nav-item=currentNavItem nav-bar-aria-label="navigation links"><md-nav-item md-nav-click=/#home name=home>home</md-nav-item><md-nav-item md-nav-click=#presentation name=about>about</md-nav-item><md-nav-item md-nav-click=#skills name=skills>skills</md-nav-item><md-nav-item md-nav-click=/#work name=work>work</md-nav-item><md-nav-item md-nav-click=#education name=education>education</md-nav-item><md-nav-item md-nav-click=#contacts name=contacts>contacts</md-nav-item><!-- these require actual routing with ui-router or ng-route, so they won\'t work in the demo\n        <md-nav-item md-nav-sref="app.page4" name="page4">Page Four</md-nav-item>\n        <md-nav-item md-nav-href="#page5" name="page5">Page Five</md-nav-item>\n        --></md-nav-bar></md-toolbar>'),e.put("app/components/home/home.html",'<div class=home_container><div class=container__logo><img src=../assets/images/mylogo.svg alt=logo></div><div class=container__text><h1 class=title>Mariella Sabatino</h1><h3 class="subtitle subtitle--basic">Frontend web engineer and designer</h3></div></div>'),e.put("app/components/presentation/presentation.html",'<div class=presentation__container><md-card class=presentation__idCard><img ng-src={{pr.imagePath}} class=md-card-image alt="Mariella Sabatino picture"><md-card-content><div class=id_card><div class=id_card__row><div class="id_card__half id_card__half--icon"><i class=material-icons>cake</i></div><div class=id_card__half><h4>28 / 12 / 1989</h4></div></div><div class=id_card__row><div class="id_card__half id_card__half--icon"><i class=material-icons>place</i></div><div class=id_card__half><h4>Nice, France</h4></div></div><div class=id_card__row><div class="id_card__half id_card__half--icon"><i class=material-icons>email</i></div><div class=id_card__half><h4><a href=mailto:mll.sabatino@gmail.com target=_blank>mll.sabatino@gmail.com</a></h4></div></div><div class=id_card__row><div class="id_card__half id_card__half--icon"><i class=material-icons>phone_android</i></div><div class=id_card__half><h4>+33 (0) 6 65 13 25 55</h4></div></div></div></md-card-content><md-card-actions layout=row layout-align=center><md-button href=https://github.com/MarSab target=_blank class="md-icon-button social_logo" aria-label=github><md-icon md-svg-icon=../assets/images/social/github-logo.svg></md-icon></md-button><md-button href=https://www.linkedin.com/in/mariellasabatino target=_blank class="md-icon-button social_logo" aria-label=linkedin><md-icon md-svg-icon=../assets/images/social/linkedin.svg></md-icon></md-button><md-button href=https://www.instagram.com/marsab8/ target=_blank class="md-icon-button social_logo" aria-label=instagram><md-icon md-svg-icon=../assets/images/social/instagram.svg></md-icon></md-button><md-button href=http://www.slideshare.net/MariellaSabatino target=_blank class="md-icon-button social_logo" aria-label=Slideshare><md-icon md-svg-icon=../assets/images/social/slideshare-logo.svg></md-icon></md-button></md-card-actions></md-card><div class=presentation__about><h3 class="subtitle subtitle--orange subtitle--margin">Who am I?</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h3 class="subtitle subtitle--orange">my interests?</h3><div class=presentation__about--interests><i class="material-icons interest">camera_alt<md-tooltip>Photography</md-tooltip></i><i class="material-icons interest">airplanemode_active<md-tooltip>Travel</md-tooltip></i><i class="material-icons interest">directions_run<md-tooltip>Sport</md-tooltip></i><i class="material-icons interest">restaurant_menu<md-tooltip>Cook</md-tooltip></i></div></div></div>'),e.put("app/components/quote/quote.html",'<h1 class=title>"make the web a better place"</h1>'),e.put("app/components/skills/skills.html",'<h1 class="title title--right">What can I do?</h1><md-card class="tech_skills__card skills__card timeline-hidden" when-visible=sk.animateElementIn><div class=tech_skills__container><div class=tech_skills__block><div class=tech_skills__block--row><h2 class="subtitle subtitle--orange">Technical stuff</h2></div><div class=tech_skills__block--row><meter value=0.95>95%</meter><label>html5 - css3 - sass - webstorm</label></div><div class=tech_skills__block--row><meter value=0.8>80%</meter><label>git - gulp - jquery - js</label></div><div class=tech_skills__block--row><meter value=0.3>30%</meter><label>nodejs - java - sql - mongodb</label></div></div><div class=tech_skills__block><div class=tech_skills__block--row><h2 class="subtitle subtitle--orange subtitle--margin">Design & graphics</h2></div><div class=tech_skills__block--row><meter value=0.8>80%</meter><label>photoshop - illustrator - balsamiq - svg - responsive - material design - bootstrap - foundation</label></div><div class=tech_skills__block--row><meter value=0.6>60%</meter><label>video editing - premiere - motion design - after effects</label></div></div><div class=tech_skills__block><div class=tech_skills__block--row><h2 class="subtitle subtitle--orange subtitle--margin">Communication skills</h2></div><div class=tech_skills__block--row><meter value=0.6>60%</meter><label>ux design - ergonomy and usability</label></div></div></div></md-card><div class=skills__box><md-card class="skills__card timeline-hidden" when-visible=sk.animateElementIn><md-card-title><md-card-title-text><span class="md-headline subtitle subtitle--orange">Talk with me</span></md-card-title-text></md-card-title><div class=skills__card--lang><div class=lang_container><donutchart value=101></donutchart><label class=lang--text>IT</label></div><div class=lang_container><donutchart value=90></donutchart><label class=lang--text>EN</label></div><div class=lang_container><donutchart value=80></donutchart><label class=lang--text>FR</label></div></div></md-card><md-card class="skills__card timeline-hidden" when-visible=sk.animateElementIn><md-card-title class=title--noflex><md-card-title-text><span class="md-headline subtitle subtitle--orange">Personal skills</span></md-card-title-text></md-card-title><div class=skills__card--pers><label>creativity - team worker - fast learner - flexibility - can do attitude - problem solving - adaptability - desire to learn - detail oriented - pixel picky</label></div></md-card></div>'),e.put("app/components/work/work.html",'<h1 class="title title--right">What did I do?</h1><timeline><timeline-event ng-repeat="event in w.events" side=alternate><timeline-badge class={{event.badgeClass}} when-visible=w.animateElementIn class=timeline-hidden><i class="material-icons icon-white">{{event.badgeIconClass}}</i></timeline-badge><timeline-panel class={{event.badgeClass}} when-visible=w.animateElementIn class=timeline-hidden><timeline-heading><h4 class="subtitle subtitle--timeline">{{event.title}}</h4><h5>{{event.subtitle}}</h5></timeline-heading><p>{{event.content}}</p></timeline-panel></timeline-event></timeline>')}]);
//# sourceMappingURL=../maps/scripts/app-33d5c3fe22.js.map
