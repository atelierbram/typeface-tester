<?php ?><!DOCTYPE html>
<html lang="en" class="is-loading no-js core no-flexbox dombuilding">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <link rel="apple-touch-icon" href="<?= $assetPath; ?>img/ios/apple-touch-icon-57x57-precomposed.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="<?= $assetPath; ?>img/ios/apple-touch-icon-72x72-precomposed.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="<?= $assetPath; ?>img/ios/apple-touch-icon-114x114-precomposed.png" />
    <link rel="apple-touch-startup-image" href="<?= $assetPath; ?>img/ios/apple-touch-startup-image.png">
    <link rel="icon" type="image/x-icon" href="<?= $assetPath; ?>img/favicon.ico">
    <title>Typeface Tester ~/ System Font Viewer for IOS</title>

    <link rel="preload" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css"></noscript>
    <script><?php include "inc/cssrelpreload.js.inc"; ?></script>
    <script><?php include "inc/head-detect.js.inc"; ?></script>

    <link rel="stylesheet" href="<?= $assetPath; ?>css/style.min.css" />
    <link rel="preload" href="<?= $assetPath; ?>css/typefaces.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="<?= $assetPath; ?>css/typefaces.min.css"></noscript>

    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
    <script>$.mobile.document.on("listviewcreate","#filter-menu-menu,#title-filter-menu-menu",function(event){var input,list=$(event.target),form=list.jqmData("filter-form");if(!form){input=$("<input data-type='search'></input>");form=$("<form></form>").append(input);input.textinput();list.before(form).jqmData("filter-form",form);form.jqmData("listview",list)}list.filterable({input:input,children:"> li:not(:jqmData(placeholder='true'))"})}).on("pagecontainerbeforeshow",function(event,data){var listview,form, id=data.toPage&&data.toPage.attr("id");if(!(id==="filter-menu-dialog"||id==="title-filter-menu-dialog"))return;listview=data.toPage.find("ul");form=listview.jqmData("filter-form");data.toPage.jqmData("listview",listview);listview.before(form)}).on("pagecontainerhide",function(event,data){var listview,form,id=data.toPage&&data.toPage.attr("id");if(!(id==="filter-menu-dialog"||id==="title-filter-menu-dialog"))return;listview=data.toPage.jqmData("listview"),form=listview.jqmData("filter-form");listview.before(form)});</script></head>

