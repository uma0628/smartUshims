"use strict";angular.module("smartUshiApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/login.html",controller:"LoginCtrl",controllerAs:"login"}).when("/menu",{templateUrl:"views/menu.html",controller:"MenuCtrl",controllerAs:"menu"}).when("/header",{templateUrl:"views/header.html",controller:"HeaderCtrl",controllerAs:"header"}).when("/search",{templateUrl:"views/search.html",controller:"SearchCtrl",controllerAs:"search"}).when("/result",{templateUrl:"views/result.html",controller:"ResultCtrl",controllerAs:"result",reloadOnSearch:!1}).when("/basic",{templateUrl:"views/basic.html",controller:"BasicCtrl",controllerAs:"basic",reloadOnSearch:!1}).when("/suitei",{templateUrl:"views/suitei.html",controller:"SuiteiCtrl",controllerAs:"suitei"}).when("/BCSGraph",{templateUrl:"views/BCSGraph.html",controller:"BcsgraphCtrl",controllerAs:"BCSGraph"}).when("/weightGraph",{templateUrl:"views/weightGraph.html",controller:"WeightgraphCtrl",controllerAs:"weightGraph"}).otherwise({redirectTo:"/"})}]),angular.module("smartUshiApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("smartUshiApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("smartUshiApp").controller("LoginCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("smartUshiApp").controller("MenuCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("smartUshiApp").controller("HeaderCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("smartUshiApp").controller("SearchCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("smartUshiApp").controller("ResultCtrl",["$scope",function(a){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.colOpen=function(a){"1"==a?$("#collapseOne").collapse("toggle"):"2"==a?$("#collapseTwo").collapse("toggle"):"3"==a&&$("#collapseThree").collapse("toggle")}}]),angular.module("smartUshiApp").controller("BasicCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("smartUshiApp").controller("SuiteiCtrl",["$scope","$location",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.closeSuitei=function(){$("#suitei-panel").fadeOut("300"),$("#mycanvas").fadeOut("300"),$("#add-button").fadeIn("300")},a.openWeightModal=function(){$("#loading").modal({backdrop:"static"}),setTimeout(function(){$("#loading").modal("hide"),$("#weightModal").modal("show")},3e3)},a.closeWeightModal=function(){b.path("/weightGraph",function(){$("#weightModal").modal("hide")})},a.closeBCSModal=function(){b.path("/BCSGraph",function(){$("#BCSModal").modal("hide")})},a.openBCSModal=function(){$("#loading").modal({backdrop:"static"}),setTimeout(function(){$("#loading").modal("hide"),$("#BCSModal").modal("show")},3e3)}}]),angular.module("smartUshiApp").controller("WeightgraphCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("smartUshiApp").controller("BcsgraphCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("smartUshiApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/basic.html",'<div ng-include="\'views/header.html\'" ng-controller="HeaderCtrl" class="header-content"></div> <div class="content-main"> <div class="basic-tab"> <ul class="nav nav-tabs"> <li role="presentation" class="active"><a href="#/basic#basicTab" data-toggle="tab">基本情報</a></li> <li role="presentation"><a href="#/basic#donyu" data-toggle="tab">導入</a></li> <li role="presentation"><a href="#/basic#tane" data-toggle="tab">種付</a></li> <li role="presentation"><a href="#/basic#bunb" data-toggle="tab">分娩</a></li> <li role="presentation"><a href="#/basic#ido" data-toggle="tab">移動</a></li> <li role="presentation"><a href="#/basic#ken" data-toggle="tab">検温</a></li> <li role="presentation"><a href="#/basic#tana" data-toggle="tab">棚卸</a></li> <li role="presentation"><a href="#/basic#soku" data-toggle="tab">測定情報</a></li> </ul> </div> <div class="tab-content"> <div id="basicTab" class="tab-pane fade in active"> <h3>基本情報</h3> <table class="table table-bordered table-hover"> <tbody> <tr> <td>個体識別番号</td> <td>1457240575</td> </tr> </tbody> </table> </div> <div id="donyu" class="tab-pane fade"> <h3>繁殖導入情報</h3> <p>Some content in menu 1.</p> </div> <div id="tane" class="tab-pane fade"> <h3>種付情報</h3> <p>Some content in menu 2.</p> </div> <div id="bunb" class="tab-pane fade"> <h3>分娩情報</h3> <p>Some content in menu 2.</p> </div> <div id="ido" class="tab-pane fade"> <h3>移動履歴</h3> <p>Some content in menu 2.</p> </div> <div id="ken" class="tab-pane fade"> <h3>検温・治療履歴</h3> <p>Some content in menu 2.</p> </div> <div id="tana" class="tab-pane fade"> <h3>棚卸情報</h3> <p>Some content in menu 2.</p> </div> <div id="soku" class="tab-pane fade"> <h3>測定情報</h3> <p>Some content in menu 2.</p> </div> </div> </div>'),a.put("views/bcsgraph.html",'<div ng-include="\'views/header.html\'" ng-controller="HeaderCtrl" class="header-content"></div> <div class="content-main"> <div class="row"> <div class="col-xs-12"> <img src="images/bg.02303945.png" class="graph"> </div> </div> <table class="table table-bordered table-hover"> <thead> <th class="success"></th> <th class="success">4/16</th> <th class="success">4/20</th> <th class="success">4/26</th> <th class="success">4/30</th> </thead> <tbody> <tr> <td class="success">きこう</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> </tr> <tr> <td class="success">背骨</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> </tr> <tr> <td class="success">腰角</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> </tr> <tr> <td class="success">臀部</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> </tr> <tr> <td class="success">尾根</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> </tr> <tr> <td class="success">肋骨</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> </tr> </tbody> </table> <div class="row"> <div class="col-xs-12 align-center"> <div class="suitei-button-box"> <a class="btn btn-success result-button" href="./#/basic" role="button"> <span class="glyphicon glyphicon-book pull-left btn-icon" aria-hidden="true"></span> 詳細</a> </div> </div> </div> </div>'),a.put("views/header.html",'<div class="header bg-success"> <div class="text-center"> <a href="./#/menu" class="header-text">牛重ダッシュボード</a> </div> </div>'),a.put("views/login.html",'<div class="login-content"> <div class="login-table-box"> <div class="row"> <div class="col-md-12 text-left"> <h3 class="noto600">牛重ダッシュボード</h3> </div> </div> <div class="row"> <div class="col-xs-12"> <div class="form-group"> <input type="text" class="textbox-common form-control" id="farmNo" placeholder="農場番号"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <div class="form-group"> <input type="text" class="textbox-common form-control" id="userId" placeholder="ユーザID"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <div class="form-group"> <input type="password" class="textbox-common form-control" id="passWd" placeholder="パスワード"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <a class="btn btn-success login-button vertical-center pull-right" href="./#/menu" role="button">ログイン</a> </div> </div> </div> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.42092f92.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/menu.html",'<div ng-include="\'views/header.html\'" ng-controller="HeaderCtrl" class="header-content"></div> <div class="content-main"> <div class="row"> <div class="col-md-12 text-center"> <h2 class="noto900">メニュー</h2> </div> </div> <div class="row"> <div class="col-md-12 align-center"> <div class="menu-button-box"> <a class="btn btn-success menu-button" href="./#/search" role="button"> <span class="glyphicon glyphicon-search pull-left btn-icon" aria-hidden="true"></span> 耳標番号で検索する</a> </div> </div> </div> <div class="row"> <div class="col-md-12 align-center"> <div class="menu-button-box"> <a class="btn btn-success menu-button" href="" role="button"> <span class="glyphicon glyphicon-camera pull-left btn-icon" aria-hidden="true"></span> 耳標タグを読み取る</a> </div> </div> </div> <div class="row"> <div class="col-md-12 align-center"> <div class="menu-button-box"> <a class="btn btn-success menu-button" href="" role="button"> <span class="glyphicon glyphicon-search pull-left btn-icon" aria-hidden="true"></span> 音声で検索する</a> </div> </div> </div> </div>'),a.put("views/result.html",'<div ng-include="\'views/header.html\'" ng-controller="HeaderCtrl" class="header-content"></div> <div class="content-main"> <div class="row"> <div class="col-md-12"> <div class="form-group search-box"> <input type="text" class="form-control textbox-common" id="tagNo" placeholder="耳標番号を入力"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <a class="btn btn-danger btn-circle search-button vertical-center pull-right" href="#" role="button"> <span class="glyphicon glyphicon-search" aria-hidden="true"></span> </a> </div> </div> <div class="panel-group result-box" id="accordion" role="tablist" aria-multiselectable="false"> <div class="panel panel-default"> <div ng-click="colOpen(1)" class="panel-heading" role="tab" id="headingOne"> <h4 class="panel-title"> こう1125 </h4> </div> <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne"> <div class="panel-body"> <div class="row"> <div class="col-md-12 align-center"> <div class="result-button-box"> <a class="btn btn-success menu-button" href="./#/basic" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> 基本情報</a> </div> </div> </div> <div class="row"> <div class="col-md-12 align-center"> <div class="menu-button-box"> <a class="btn btn-success menu-button" href="./#/suitei" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> 体重・BCS推定</a> </div> </div> </div> </div> </div> </div> <div class="panel panel-default"> <div ng-click="colOpen(2)" class="panel-heading" role="tab" id="headingTwo"> <h4 class="panel-title"> こう1157 </h4> </div> <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo"> <div class="panel-body"> <div class="row"> <div class="col-md-12 align-center"> <div class="result-button-box"> <a class="btn btn-success menu-button" href="./#/basic" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> 基本情報</a> </div> </div> </div> <div class="row"> <div class="col-md-12 align-center"> <div class="menu-button-box"> <a class="btn btn-success menu-button" href="./#/suitei" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> 体重・BCS推定</a> </div> </div> </div> </div> </div> </div> <div class="panel panel-default"> <div ng-click="colOpen(\'3\')" class="panel-heading" role="tab" id="headingThree"> <h4 class="panel-title"> こう1258 </h4> </div> <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree"> <div class="panel-body"> <div class="row"> <div class="col-md-12 align-center"> <div class="result-button-box"> <a class="btn btn-success menu-button" href="./#/basic" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> 基本情報</a> </div> </div> </div> <div class="row"> <div class="col-md-12 align-center"> <div class="menu-button-box"> <a class="btn btn-success menu-button" href="./#/suitei" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> 体重・BCS推定</a> </div> </div> </div> </div> </div> </div> </div> </div>'),a.put("views/search.html",'<div ng-include="\'views/header.html\'" ng-controller="HeaderCtrl" class="header-content"></div> <div class="content-main"> <div class="row"> <div class="col-md-12"> <div class="form-group search-box"> <input type="text" class="form-control textbox-common" id="tagNo" placeholder="耳標番号を入力"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <a class="btn btn-danger btn-circle search-button vertical-center pull-right" href="./#/result" role="button"> <span class="glyphicon glyphicon-search" aria-hidden="true"></span> </a> </div> </div> </div>'),a.put("views/suitei.html",'<div ng-include="\'views/header.html\'" ng-controller="HeaderCtrl" class="header-content"></div> <div class="content-main"> <h3 class="text-center noto900">体重・BCS推定</h3> <div class="canvas-box"> <img id="mycanvas" src="images/1125.666d4a06.jpg"> </div> <div class="row"> <div class="col-md-12 align-center"> <label for="file-image" class="btn btn-danger btn-circle photo-button vertical-center" id="add-button"> <span class="glyphicon glyphicon-camera" aria-hidden="true"></span> <input type="file" accept="image/*" capture="camera" id="file-image"> </label> </div> </div> <div class="panel panel-default" id="suitei-panel"> <div class="panel-body"> <div class="row"> <div class="col-xs-9"> <h3>機能選択</h3> </div> <div class="col-xs-3"> <div ng-click="closeSuitei()" class="btn btn-danger btn-circle close-button vertical-center" role="button"> <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> </div> </div> </div> <div class="row"> <div class="col-xs-12 align-center"> <div class="suitei-button-box"> <!-- Button trigger modal --> <button ng-click="openWeightModal()" type="button" class="btn btn-success result-button"> <span class="glyphicon glyphicon-scale pull-left btn-icon" aria-hidden="true"></span> 体重推定 </button> </div> </div> </div> <div class="row"> <div class="col-xs-12 align-center"> <div class="suitei-button-box"> <!-- Button trigger modal --> <button ng-click="openBCSModal()" type="button" class="btn btn-success result-button"> <span class="glyphicon glyphicon-stats pull-left btn-icon" aria-hidden="true"></span> BCS推定 </button> </div> </div> </div> <div class="row"> <div class="col-xs-12 align-center"> <div class="suitei-button-box"> <a class="btn btn-success result-button" href="./#/basic" role="button"> <span class="glyphicon glyphicon-book pull-left btn-icon" aria-hidden="true"></span> 詳細</a> </div> </div> </div> </div> </div> </div> <div class="modal fade" tabindex="-1" role="dialog" id="BCSModal"> <div class="modal-dialog modal-center"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h3 class="modal-title noto600">推定が完了しました！</h3> </div> <div class="modal-body"> <h3>推定BCS（総評）</h3> <h1 class="text-center noto900">やせています。</h1> <h5></h5> <div class="row"> <div class="col-xs-12 align-center"> <div class="suitei-button-box"> <div data-dismiss="modal" ng-click="closeBCSModal()" class="btn btn-success result-button" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> グラフ </div> </div> </div> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">閉じる</button> </div> </div><!-- /.modal-content --> </div><!-- /.modal-dialog --> </div><!-- /.modal --> <div class="modal fade" tabindex="-1" role="dialog" id="weightModal"> <div class="modal-dialog modal-center"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h3 class="modal-title noto600">推定が完了しました！</h3> </div> <div class="modal-body"> <h3>推定体重</h3> <h1 class="text-center noto900">500kg</h1> <h5>予定通り成長しています。</h5> <div class="row"> <div class="col-xs-12 align-center"> <div class="suitei-button-box"> <div ng-click="closeWeightModal()" class="btn btn-success result-button" role="button"> <span class="glyphicon glyphicon-cloud pull-left btn-icon" aria-hidden="true"></span> グラフ </div> </div> </div> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">閉じる</button> </div> </div><!-- /.modal-content --> </div><!-- /.modal-dialog --> </div><!-- /.modal --> <div class="modal fade" tabindex="-1" role="dialog" id="loading"> <div class="loader loader-position"> <div class="loader-inner line-spin-fade-loader"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div> </div> </div><!-- /.modal --> <script>(function() {\n  var canvas = document.getElementById(\'mycanvas\');\n  window.onload = function(){\n    if (checkFileApi()){\n      //ファイル選択\n      var file_image = document.getElementById(\'file-image\');\n      file_image.addEventListener(\'change\', selectReadfile, false);\n    }\n  }\n  // FileAPIに対応しているか\n  function checkFileApi() {\n    // Check for the various File API support.\n    if (window.File && window.FileReader && window.FileList && window.Blob) {\n      // Great success! All the File APIs are supported.\n      return true;\n    }\n    alert(\'The File APIs are not fully  in this browser.\');\n    return false;\n  }\n  //ファイルが選択されたら読み込む\n  function selectReadfile(e) {\n    var file = e.target.files;\n    var reader = new FileReader();\n    //dataURL形式でファイルを読み込む\n    reader.readAsDataURL(file[0]);\n    //ファイルの読込が終了した時の処理\n    reader.onload = function(){\n'+"      $('#suitei-panel').fadeIn('300');\n      $('#mycanvas').fadeIn('300');\n      $('#add-button').fadeOut('300');\n    }\n  }\n})();</script>"),a.put("views/weightgraph.html",'<div ng-include="\'views/header.html\'" ng-controller="HeaderCtrl" class="header-content"></div> <div class="content-main"> <div class="row"> <div class="col-xs-12"> <img src="images/wg.f6da85cc.png" class="graph"> </div> </div> <table class="table table-bordered table-hover"> <thead> <th class="success">4/12</th> <th class="success">4/16</th> <th class="success">4/20</th> <th class="success">4/26</th> <th class="success">4/30</th> </thead> <tbody> <tr> <td>480kg</td> <td>484kg</td> <td>493kg</td> <td>501kg</td> <td>504kg</td> </tr> </tbody> </table> <div class="row"> <div class="col-xs-12 align-center"> <div class="suitei-button-box"> <a class="btn btn-success result-button" href="./#/basic" role="button"> <span class="glyphicon glyphicon-book pull-left btn-icon" aria-hidden="true"></span> 詳細</a> </div> </div> </div> </div>')}]);