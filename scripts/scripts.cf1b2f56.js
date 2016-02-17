"use strict";angular.module("smartUshiApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/login.html",controller:"LoginCtrl",controllerAs:"login"}).when("/menu",{templateUrl:"views/menu.html",controller:"MenuCtrl",controllerAs:"menu"}).when("/header",{templateUrl:"views/header.html",controller:"HeaderCtrl",controllerAs:"header"}).when("/search",{templateUrl:"views/search.html",controller:"SearchCtrl",controllerAs:"search"}).when("/result",{templateUrl:"views/result.html",controller:"ResultCtrl",controllerAs:"result",reloadOnSearch:!1}).when("/basic",{templateUrl:"views/basic.html",controller:"BasicCtrl",controllerAs:"basic",reloadOnSearch:!1}).when("/suitei",{templateUrl:"views/suitei.html",controller:"SuiteiCtrl",controllerAs:"suitei"}).when("/BCSGraph",{templateUrl:"views/bcsgraph.html",controller:"BcsgraphCtrl",controllerAs:"BCSGraph"}).when("/weightGraph",{templateUrl:"views/weightgraph.html",controller:"WeightgraphCtrl",controllerAs:"weightGraph"}).otherwise({redirectTo:"/"})}]),angular.module("smartUshiApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("smartUshiApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("smartUshiApp").controller("LoginCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("smartUshiApp").controller("MenuCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("smartUshiApp").controller("HeaderCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("smartUshiApp").controller("SearchCtrl",["$scope","$location",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.pageBack=function(){b.path("/menu")}}]),angular.module("smartUshiApp").controller("ResultCtrl",["$scope","$location",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.colOpen=function(a){"1"==a?$("#collapseOne").collapse("toggle"):"2"==a?$("#collapseTwo").collapse("toggle"):"3"==a&&$("#collapseThree").collapse("toggle")},a.pageBack=function(){b.path("/menu")}}]),angular.module("smartUshiApp").controller("BasicCtrl",["$scope","$location",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.pageBack=function(){b.path("/result")}}]),angular.module("smartUshiApp").controller("SuiteiCtrl",["$scope","$location",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.closeSuitei=function(){$("#suitei-panel").fadeOut("300"),$("#mycanvas").fadeOut("300"),$("#add-button").fadeIn("300")},a.openWeightModal=function(){$("#loading").modal({backdrop:"static"}),setTimeout(function(){$("#loading").modal("hide"),$("#weightModal").fadeIn("300")},3e3)},a.closeWeightModal=function(){$("#weightModal").fadeOut("300")},a.closeBCSModal=function(){$("#BCSModal").fadeOut("300")},a.goWeightGraph=function(){b.path("/weightGraph")},a.goBCSGraph=function(){b.path("/BCSGraph")},a.openBCSModal=function(){$("#loading").modal({backdrop:"static"}),setTimeout(function(){$("#loading").modal("hide"),$("#BCSModal").fadeIn("300")},3e3)},a.change=function(a){$("#suitei-panel").fadeIn("300"),$("#mycanvas").fadeIn("300"),$("#add-button").fadeOut("300")},a.pageBack=function(){b.path("/result")}}]),angular.module("smartUshiApp").controller("WeightgraphCtrl",["$scope","$location",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.pageBack=function(){b.path("/suitei")}}]),angular.module("smartUshiApp").controller("BcsgraphCtrl",["$scope","$location",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.pageBack=function(){b.path("/suitei")}}]),angular.module("smartUshiApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/basic.html",'<div ng-include="\'views/header.html\'" ng-controller="HeaderCtrl" class="header-content"></div> <div ng-click="pageBack()" class="back-button-box"> <div class="back-button"> <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span> </div> </div> <div class="content-main"> <div class="basic-tab"> <ul class="nav nav-tabs"> <li role="presentation" class="active"><a href="#/basic#basicTab" data-toggle="tab">基本</a></li> <li role="presentation"><a href="#/basic#tane" data-toggle="tab">種付</a></li> <li role="presentation"><a href="#/basic#bunb" data-toggle="tab">分娩</a></li> <li role="presentation"><a href="#/basic#soku" data-toggle="tab">測定</a></li> </ul> </div> <div class="tab-content"> <div id="basicTab" class="tab-pane fade in active"> <h3>基本情報</h3> <table class="table table-bordered table-hover"> <tbody> <tr> <td>名号</td> <td>こう1125</td> </tr> <tr> <td>個体識別番号</td> <td>1204166929</td> </tr> <tr> <td>耳標色・耳標番号</td> <td>なし・1125</td> </tr> <tr> <td>種別</td> <td>黒毛和種</td> </tr> <tr> <td>性別</td> <td>雌</td> </tr> <tr> <td>生年月日</td> <td>2007/04/18</td> </tr> <tr> <td>産次数</td> <td>0</td> </tr> <tr> <td>受胎率</td> <td>0</td> </tr> <tr> <td>種付日</td> <td>-</td> </tr> <tr> <td>分娩日</td> <td>-</td> </tr> </tbody> </table> </div> <div id="tane" class="tab-pane fade"> <h3>種付情報</h3> <table class="table table-bordered table-hover"> <tbody> <tr> <td>産次</td> <td>0</td> </tr> <tr> <td>種付順</td> <td>-</td> </tr> <tr> <td>種付年月日</td> <td>-</td> </tr> <tr> <td>種付牛名号</td> <td>-</td> </tr> <tr> <td>授精師</td> <td>-</td> </tr> <tr> <td>分娩予定日</td> <td>-</td> </tr> </tbody> </table> </div> <div id="bunb" class="tab-pane fade"> <h3>分娩情報</h3> <table class="table table-bordered table-hover"> <tbody> <tr> <td>産次</td> <td>0</td> </tr> <tr> <td>種付順</td> <td>-</td> </tr> <tr> <td>種付年月日</td> <td>-</td> </tr> <tr> <td>種雄牛名号</td> <td>-</td> </tr> <tr> <td>授精師</td> <td>-</td> </tr> <tr> <td>分娩予定日</td> <td>-</td> </tr> <tr> <td>分娩日</td> <td>-</td> </tr> <tr> <td>分娩区分</td> <td>-</td> </tr> <tr> <td>性別</td> <td>-</td> </tr> <tr> <td>耳標色</td> <td>-</td> </tr> <tr> <td>耳標番号</td> <td>-</td> </tr> <tr> <td>個体識別番号</td> <td>-</td> </tr> <tr> <td>名号</td> <td>-</td> </tr> <tr> <td>検温・治療</td> <td>-</td> </tr> <tr> <td>枝肉成績</td> <td>-</td> </tr> <tr> <td>備考</td> <td></td> </tr> </tbody> </table> </div> <div id="soku" class="tab-pane fade"> <h3>測定情報</h3> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <th>測定日</th> <th>体重</th> <th>体高</th> <th>第一腰椎位</th> <th>十字部高</th> <th>体長</th> <th>胸囲</th> <th>胴囲</th> <th>管囲</th> <th>胸幅</th> <th>胸深</th> <th>尻長</th> <th>腰角幅</th> <th>寛幅</th> <th>座骨幅</th> <th>BCS</th> <th>備考</th> </thead> <tbody> <tr> <td>2016/01/12</td> <td>506.0</td> <td>126.4</td> <td>-</td> <td>127.6</td> <td>157.8</td> <td>182.0</td> <td>213.0</td> <td>-</td> <td>42.0</td> <td>69.0</td> <td>47.5</td> <td>45.0</td> <td>47.0</td> <td>23.0</td> <td>2</td> <td>-</td> </tr> <tr> <td>2016/01/12</td> <td>506.0</td> <td>126.4</td> <td>-</td> <td>127.6</td> <td>157.8</td> <td>182.0</td> <td>213.0</td> <td>-</td> <td>42.0</td> <td>69.0</td> <td>47.5</td> <td>45.0</td> <td>47.0</td> <td>23.0</td> <td>2</td> <td>-</td> </tr> <tr> <td>2016/01/12</td> <td>506.0</td> <td>126.4</td> <td>-</td> <td>127.6</td> <td>157.8</td> <td>182.0</td> <td>213.0</td> <td>-</td> <td>42.0</td> <td>69.0</td> <td>47.5</td> <td>45.0</td> <td>47.0</td> <td>23.0</td> <td>2</td> <td>-</td> </tr> <tr> <td>2016/01/12</td> <td>506.0</td> <td>126.4</td> <td>-</td> <td>127.6</td> <td>157.8</td> <td>182.0</td> <td>213.0</td> <td>-</td> <td>42.0</td> <td>69.0</td> <td>47.5</td> <td>45.0</td> <td>47.0</td> <td>23.0</td> <td>2</td> <td>-</td> </tr> <tr> <td>2016/01/12</td> <td>506.0</td> <td>126.4</td> <td>-</td> <td>127.6</td> <td>157.8</td> <td>182.0</td> <td>213.0</td> <td>-</td> <td>42.0</td> <td>69.0</td> <td>47.5</td> <td>45.0</td> <td>47.0</td> <td>23.0</td> <td>2</td> <td>-</td> </tr> </tbody> </table> </div> </div> </div> </div>'),a.put("views/bcsgraph.html",'<div ng-include="\'views/header.html\'" ng-controller="HeaderCtrl" class="header-content"></div> <div ng-click="pageBack()" class="back-button-box"> <div class="back-button"> <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span> </div> </div> <div class="content-main"> <div class="row"> <div class="col-xs-12"> <img src="images/bg.02303945.png" class="graph"> </div> </div> <div class="col-xs-12"> <h2 class="text-center">過去の実績</h2> </div> <h5 class="text-right">１：やせている　２：標準　３：太っている</h5> <table class="table table-bordered table-hover"> <thead> <th class="success"></th> <th class="success">4/16</th> <th class="success">4/20</th> <th class="success">4/26</th> <th class="success">4/30</th> </thead> <tbody> <tr> <td class="success">きこう</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> </tr> <tr> <td class="success">背骨</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> </tr> <tr> <td class="success">腰角</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> </tr> <tr> <td class="success">臀部</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> </tr> <tr> <td class="success">尾根</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> </tr> <tr> <td class="success">肋骨</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> </tr> </tbody> </table> <div class="row"> <div class="col-xs-12 align-center"> <div class="suitei-button-box"> <a class="btn btn-success result-button" href="./#/basic" role="button"> <span class="glyphicon glyphicon-book pull-left btn-icon" aria-hidden="true"></span> 詳細</a> </div> </div> </div> </div>'),a.put("views/header.html",'<div class="header bg-success"> <div class="text-center"> <a href="./#/menu" class="header-text">牛重ダッシュボード</a> </div> </div>'),a.put("views/login.html",'<div class="login-content"> <div class="login-table-box"> <div class="row"> <div class="col-md-12 text-left"> <h3 class="noto600">牛重ダッシュボード</h3> </div> </div> <div class="row"> <div class="col-xs-12"> <div class="form-group"> <input type="text" class="textbox-common form-control" id="farmNo" placeholder="農場番号"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <div class="form-group"> <input type="text" class="textbox-common form-control" id="userId" placeholder="ユーザID"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <div class="form-group"> <input type="password" class="textbox-common form-control" id="passWd" placeholder="パスワード"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <a class="btn btn-success login-button vertical-center pull-right" href="./#/menu" role="button">ログイン</a> </div> </div> </div> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.42092f92.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/menu.html",'<div ng-include="\'views/header.html\'" ng-controller="HeaderCtrl" class="header-content"></div> <div class="content-main"> <div class="row"> <div class="col-md-12 text-center"> <h2 class="noto900">メニュー</h2> </div> </div> <div class="row"> <div class="col-md-12 align-center"> <div class="menu-button-box"> <a class="btn btn-success menu-button" href="./#/search" role="button"> <span class="glyphicon glyphicon-search pull-left btn-icon" aria-hidden="true"></span> 耳標番号で検索する</a> </div> </div> </div> <div class="row"> <div class="col-md-12 align-center"> <div class="menu-button-box"> <a class="btn btn-success menu-button" href="" role="button"> <span class="glyphicon glyphicon-camera pull-left btn-icon" aria-hidden="true"></span> 耳標タグを読み取る</a> </div> </div> </div> <div class="row"> <div class="col-md-12 align-center"> <div class="menu-button-box"> <a class="btn btn-success menu-button" href="" role="button"> <span class="glyphicon glyphicon-search pull-left btn-icon" aria-hidden="true"></span> 音声で検索する</a> </div> </div> </div> </div>'),a.put("views/result.html",'<div ng-include="\'views/header.html\'" ng-controller="HeaderCtrl" class="header-content"></div> <div ng-click="pageBack()" class="back-button-box"> <div class="back-button"> <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span> </div> </div> <div class="content-main"> <div class="row"> <div class="col-md-12"> <div class="form-group search-box"> <input type="text" class="form-control textbox-common" id="tagNo" placeholder="耳標番号を入力"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <a class="btn btn-danger btn-circle search-button vertical-center pull-right" href="#" role="button"> <span class="glyphicon glyphicon-search" aria-hidden="true"></span> </a> </div> </div> <div class="panel-group result-box" id="accordion" role="tablist" aria-multiselectable="false"> <div class="panel panel-default"> <div ng-click="colOpen(1)" class="panel-heading" role="tab" id="headingOne"> <h4 class="panel-title"> こう1125 </h4> </div> <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne"> <div class="panel-body"> <div class="row"> <div class="col-md-12 align-center"> <div class="result-button-box"> <a class="btn btn-success menu-button" href="./#/basic" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> 基本情報</a> </div> </div> </div> <div class="row"> <div class="col-md-12 align-center"> <div class="menu-button-box"> <a class="btn btn-success menu-button" href="./#/suitei" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> 体重・BCS推定</a> </div> </div> </div> </div> </div> </div> <div class="panel panel-default"> <div ng-click="colOpen(2)" class="panel-heading" role="tab" id="headingTwo"> <h4 class="panel-title"> こう1157 </h4> </div> <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo"> <div class="panel-body"> <div class="row"> <div class="col-md-12 align-center"> <div class="result-button-box"> <a class="btn btn-success menu-button" href="./#/basic" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> 基本情報</a> </div> </div> </div> <div class="row"> <div class="col-md-12 align-center"> <div class="menu-button-box"> <a class="btn btn-success menu-button" href="./#/suitei" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> 体重・BCS推定</a> </div> </div> </div> </div> </div> </div> <div class="panel panel-default"> <div ng-click="colOpen(\'3\')" class="panel-heading" role="tab" id="headingThree"> <h4 class="panel-title"> こう1258 </h4> </div> <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree"> <div class="panel-body"> <div class="row"> <div class="col-md-12 align-center"> <div class="result-button-box"> <a class="btn btn-success menu-button" href="./#/basic" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> 基本情報</a> </div> </div> </div> <div class="row"> <div class="col-md-12 align-center"> <div class="menu-button-box"> <a class="btn btn-success menu-button" href="./#/suitei" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> 体重・BCS推定</a> </div> </div> </div> </div> </div> </div> </div> </div>'),a.put("views/search.html",'<div ng-include="\'views/header.html\'" ng-controller="HeaderCtrl" class="header-content"></div> <div ng-click="pageBack()" class="back-button-box"> <div class="back-button"> <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span> </div> </div> <div class="content-main"> <div class="row"> <div class="col-md-12"> <div class="form-group search-box"> <input type="text" class="form-control textbox-common" id="tagNo" placeholder="耳標番号を入力"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <a class="btn btn-danger btn-circle search-button vertical-center pull-right" href="./#/result" role="button"> <span class="glyphicon glyphicon-search" aria-hidden="true"></span> </a> </div> </div> </div>'),a.put("views/suitei.html",'<div ng-include="\'views/header.html\'" ng-controller="HeaderCtrl" class="header-content"></div> <div ng-click="pageBack()" class="back-button-box"> <div class="back-button"> <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span> </div> </div> <div class="content-main"> <h3 class="text-center noto900">体重・BCS推定</h3> <div class="canvas-box"> <img id="mycanvas" src="images/1125.666d4a06.jpg"> </div> <div class="row"> <div class="col-md-12 align-center"> <label for="file-image" class="btn btn-danger btn-circle photo-button vertical-center" id="add-button"> <span class="glyphicon glyphicon-camera" aria-hidden="true"></span> <input onchange="angular.element(this).scope().change(this)" type="file" capture="camera" id="file-image"> </label> </div> </div> <div class="panel panel-default" id="suitei-panel"> <div class="panel-body"> <div class="row"> <div class="col-xs-9"> <h3>機能選択</h3> </div> <div class="col-xs-3"> <div ng-click="closeSuitei()" class="btn btn-danger btn-circle close-button vertical-center" role="button"> <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> </div> </div> </div> <div class="row"> <div class="col-xs-12 align-center"> <div class="suitei-button-box"> <!-- Button trigger modal --> <button ng-click="openWeightModal()" type="button" class="btn btn-success result-button"> <span class="glyphicon glyphicon-scale pull-left btn-icon" aria-hidden="true"></span> 体重推定 </button> </div> </div> </div> <div class="row"> <div class="col-xs-12 align-center"> <div class="suitei-button-box"> <!-- Button trigger modal --> <button ng-click="openBCSModal()" type="button" class="btn btn-success result-button"> <span class="glyphicon glyphicon-stats pull-left btn-icon" aria-hidden="true"></span> BCS推定 </button> </div> </div> </div> <div class="row"> <div class="col-xs-12 align-center"> <div class="suitei-button-box"> <a class="btn btn-success result-button" href="./#/basic" role="button"> <span class="glyphicon glyphicon-book pull-left btn-icon" aria-hidden="true"></span> 詳細</a> </div> </div> </div> </div> </div> </div> <div class="myModal" id="weightModal"> <div class="panel panel-default modal-panel"> <div class="panel-body"> <div class="row"> <div class="col-xs-10"> <h3 class="noto600">推定が完了しました！</h3> </div> <div class="col-xs-2 vertical-center modal-close"> <button ng-click="closeWeightModal()" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> </div> </div> <div class="modal-line"></div> <div class="row"> <div class="col-xs-12"> <h3 class="noto300">推定体重</h3> </div> <div class="col-xs-12"> <h1 class="noto900 text-center margin-10-0">500kg</h1> </div> <div class="col-xs-12"> <h5>予定通り成長しています。</h5> </div> <div class="col-xs-12 align-center"> <div class="suitei-button-box"> <div ng-click="goWeightGraph()" class="btn btn-success result-button" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> グラフ </div> </div> </div> </div> <div class="modal-line"></div> <div class="row"> <div class="col-xs-12"> <button ng-click="closeWeightModal()" type="button" class="btn btn-default pull-right margin-10-0">閉じる</button> </div> </div> </div> </div> </div> <div class="myModal" id="BCSModal"> <div class="panel panel-default modal-panel"> <div class="panel-body"> <div class="row"> <div class="col-xs-10"> <h3 class="noto600">推定が完了しました！</h3> </div> <div class="col-xs-2 vertical-center modal-close"> <button ng-click="closeBCSModal()" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> </div> </div> <div class="modal-line"></div> <div class="row"> <div class="col-xs-12"> <h3 class="noto300">推定BCS（総評）</h3> </div> <div class="col-xs-12"> <h1 class="noto900 text-center margin-10-0">標準です。</h1> </div> <div class="col-xs-12"> <h5></h5> </div> <div class="col-xs-12 align-center"> <div class="suitei-button-box"> <div ng-click="goBCSGraph()" class="btn btn-success result-button" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> グラフ </div> </div> </div> </div> <div class="modal-line"></div> <div class="row"> <div class="col-xs-12"> <button ng-click="closeBCSModal()" type="button" class="btn btn-default pull-right margin-10-0">閉じる</button> </div> </div> </div> </div> </div> <div class="modal fade" tabindex="-1" role="dialog" id="loading"> <div class="loader-position"> <style type="text/css">@-webkit-keyframes uil-default-anim { 0% { opacity: 1} 100% {opacity: 0} }@keyframes uil-default-anim { 0% { opacity: 1} 100% {opacity: 0} }.uil-default-css > div:nth-of-type(1){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.5s;animation-delay: -0.5s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(2){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.4166666666666667s;animation-delay: -0.4166666666666667s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(3){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.33333333333333337s;animation-delay: -0.33333333333333337s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(4){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.25s;animation-delay: -0.25s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(5){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.16666666666666669s;animation-delay: -0.16666666666666669s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(6){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.08333333333333331s;animation-delay: -0.08333333333333331s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(7){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0s;animation-delay: 0s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(8){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.08333333333333337s;animation-delay: 0.08333333333333337s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(9){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.16666666666666663s;animation-delay: 0.16666666666666663s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(10){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.25s;animation-delay: 0.25s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(11){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.33333333333333337s;animation-delay: 0.33333333333333337s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(12){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.41666666666666663s;animation-delay: 0.41666666666666663s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}</style><div class="uil-default-css" style="transform:scale(0.6)"><div style="top:80px;left:93px;width:14px;height:40px;background:#b2b2b2;-webkit-transform:rotate(0deg) translate(0,-60px);transform:rotate(0deg) translate(0,-60px);border-radius:10px;position:absolute"></div><div style="top:80px;left:93px;width:14px;height:40px;background:#b2b2b2;-webkit-transform:rotate(30deg) translate(0,-60px);transform:rotate(30deg) translate(0,-60px);border-radius:10px;position:absolute"></div><div style="top:80px;left:93px;width:14px;height:40px;background:#b2b2b2;-webkit-transform:rotate(60deg) translate(0,-60px);transform:rotate(60deg) translate(0,-60px);border-radius:10px;position:absolute"></div><div style="top:80px;left:93px;width:14px;height:40px;background:#b2b2b2;-webkit-transform:rotate(90deg) translate(0,-60px);transform:rotate(90deg) translate(0,-60px);border-radius:10px;position:absolute"></div><div style="top:80px;left:93px;width:14px;height:40px;background:#b2b2b2;-webkit-transform:rotate(120deg) translate(0,-60px);transform:rotate(120deg) translate(0,-60px);border-radius:10px;position:absolute"></div><div style="top:80px;left:93px;width:14px;height:40px;background:#b2b2b2;-webkit-transform:rotate(150deg) translate(0,-60px);transform:rotate(150deg) translate(0,-60px);border-radius:10px;position:absolute"></div><div style="top:80px;left:93px;width:14px;height:40px;background:#b2b2b2;-webkit-transform:rotate(180deg) translate(0,-60px);transform:rotate(180deg) translate(0,-60px);border-radius:10px;position:absolute"></div><div style="top:80px;left:93px;width:14px;height:40px;background:#b2b2b2;-webkit-transform:rotate(210deg) translate(0,-60px);transform:rotate(210deg) translate(0,-60px);border-radius:10px;position:absolute"></div><div style="top:80px;left:93px;width:14px;height:40px;background:#b2b2b2;-webkit-transform:rotate(240deg) translate(0,-60px);transform:rotate(240deg) translate(0,-60px);border-radius:10px;position:absolute"></div><div style="top:80px;left:93px;width:14px;height:40px;background:#b2b2b2;-webkit-transform:rotate(270deg) translate(0,-60px);transform:rotate(270deg) translate(0,-60px);border-radius:10px;position:absolute"></div><div style="top:80px;left:93px;width:14px;height:40px;background:#b2b2b2;-webkit-transform:rotate(300deg) translate(0,-60px);transform:rotate(300deg) translate(0,-60px);border-radius:10px;position:absolute"></div><div style="top:80px;left:93px;width:14px;height:40px;background:#b2b2b2;-webkit-transform:rotate(330deg) translate(0,-60px);transform:rotate(330deg) translate(0,-60px);border-radius:10px;position:absolute"></div></div> </div> </div><!-- /.modal -->'),a.put("views/weightgraph.html",'<div ng-include="\'views/header.html\'" ng-controller="HeaderCtrl" class="header-content"></div> <div ng-click="pageBack()" class="back-button-box"> <div class="back-button"> <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span> </div> </div> <div class="content-main"> <div class="row"> <div class="col-xs-12"> <img src="images/wg.f6da85cc.png" class="graph"> </div> </div> <div class="col-xs-12"> <h2 class="text-center">過去の実績</h2> </div> <table class="table table-bordered table-hover"> <thead> <th class="success">4/12</th> <th class="success">4/16</th> <th class="success">4/20</th> <th class="success">4/26</th> <th class="success">4/30</th> </thead> <tbody> <tr> <td>480kg</td> <td>484kg</td> <td>493kg</td> <td>501kg</td> <td>504kg</td> </tr> </tbody> </table> <div class="row"> <div class="col-xs-12 align-center"> <div class="suitei-button-box"> <a class="btn btn-success result-button" href="./#/basic" role="button"> <span class="glyphicon glyphicon-book pull-left btn-icon" aria-hidden="true"></span> 詳細</a> </div> </div> </div> </div>')}]);