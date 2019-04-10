<?php ?><!doctype html>
<?php include "inc/config.php.inc";
      include "inc/head.php.inc";
?>
<body>
  <div data-role="page" data-theme="h">
    <div data-role="header" data-theme="f" class="header container cf">
      <h1 class="page-title uppercase">Typeface Tester</h1>
      <h2 class="tagline"><span class="monospace">System Font Viewer - for</span>&nbsp;<em>iOS</em></h2>
    </div>

    <div class="select-menus ui-body-f">
      <div class="row pad cf flex switchers">
        <div class="typeface-switcher">
          <div class="ui-field-contain">
            <label for="typeface" class="select">Typeface:</label>
              <select name="typeface" id="typeface" data-native-menu="false">
                <option value="font" data-placeholder="true">font-family</option>
                <option value="AcademyEngravedLetPlain">AcademyEngravedLetPlain</option>
                <option value="AlNile-Bold">AlNile-Bold</option>
                <option value="AlNile">AlNile</option>
                <option value="AmericanTypewriter">AmericanTypewriter</option>
                <option value="AmericanTypewriter-Bold">AmericanTypewriter-Bold</option>
                <option value="AmericanTypewriter-Condensed">AmericanTypewriter-Condensed</option>
                <option value="AmericanTypewriter-CondensedBold">AmericanTypewriter-CondensedBold</option>
                <option value="AmericanTypewriter-CondensedLight">AmericanTypewriter-CondensedLight</option>
                <option value="AmericanTypewriter-Light">AmericanTypewriter-Light</option>
                <option value="AppleColorEmoji">AppleColorEmoji</option>
                <option value="AppleSDGothicNeo-Thin">AppleSDGothicNeo-Thin</option>
                <option value="AppleSDGothicNeo-UltraLight">AppleSDGothicNeo-UltraLight</option>
                <option value="AppleSDGothicNeo-Light">AppleSDGothicNeo-Light</option>
                <option value="AppleSDGothicNeo-Regular">AppleSDGothicNeo-Regular</option>
                <option value="AppleSDGothicNeo-Medium">AppleSDGothicNeo-Medium</option>
                <option value="AppleSDGothicNeo-SemiBold">AppleSDGothicNeo-SemiBold</option>
                <option value="AppleSDGothicNeo-Bold">AppleSDGothicNeo-Bold</option>
                <option value="ArialMT">ArialMT</option>
                <option value="Arial-BoldItalicMT">Arial-BoldItalicMT</option>
                <option value="Arial-BoldMT">Arial-BoldMT</option>
                <option value="Arial-ItalicMT">Arial-ItalicMT</option>
                <option value="ArialHebrew">ArialHebrew</option>
                <option value="ArialHebrew-Bold">ArialHebrew-Bold</option>
                <option value="ArialHebrew-Light">ArialHebrew-Light</option>
                <option value="ArialRoundedMTBold">ArialRoundedMTBold</option>
                <option value="Avenir-Black">Avenir-Black</option>
                <option value="Avenir-BlackOblique">Avenir-BlackOblique</option>
                <option value="Avenir-Book">Avenir-Book</option>
                <option value="Avenir-BookOblique">Avenir-BookOblique</option>
                <option value="Avenir-Heavy">Avenir-Heavy</option>
                <option value="Avenir-HeavyOblique">Avenir-HeavyOblique</option>
                <option value="Avenir-Light">Avenir-Light</option>
                <option value="Avenir-LightOblique">Avenir-LightOblique</option>
                <option value="Avenir-Medium">Avenir-Medium</option>
                <option value="Avenir-MediumOblique">Avenir-MediumOblique</option>
                <option value="Avenir-Oblique">Avenir-Oblique</option>
                <option value="Avenir-Roman">Avenir-Roman</option>
                <option value="AvenirNext-Bold">AvenirNext-Bold</option>
                <option value="AvenirNext-BoldItalic">AvenirNext-BoldItalic</option>
                <option value="AvenirNext-DemiBold">AvenirNext-DemiBold</option>
                <option value="AvenirNext-DemiBoldItalic">AvenirNext-DemiBoldItalic</option>
                <option value="AvenirNext-Heavy">AvenirNext-Heavy</option>
                <option value="AvenirNext-HeavyItalic">AvenirNext-HeavyItalic</option>
                <option value="AvenirNext-Italic">AvenirNext-Italic</option>
                <option value="AvenirNext-Medium">AvenirNext-Medium</option>
                <option value="AvenirNext-MediumItalic">AvenirNext-MediumItalic</option>
                <option value="AvenirNext-Regular">AvenirNext-Regular</option>
                <option value="AvenirNext-UltraLight">AvenirNext-UltraLight</option>
                <option value="AvenirNext-UltraLightItalic">AvenirNext-UltraLightItalic</option>
                <option value="AvenirNextCondensed-Bold">AvenirNextCondensed-Bold</option>
                <option value="AvenirNextCondensed-BoldItalic">AvenirNextCondensed-BoldItalic</option>
                <option value="AvenirNextCondensed-DemiBold">AvenirNextCondensed-DemiBold</option>
                <option value="AvenirNextCondensed-DemiBoldItalic">AvenirNextCondensed-DemiBoldItalic</option>
                <option value="AvenirNextCondensed-Heavy">AvenirNextCondensed-Heavy</option>
                <option value="AvenirNextCondensed-HeavyItalic">AvenirNextCondensed-HeavyItalic</option>
                <option value="AvenirNextCondensed-Italic">AvenirNextCondensed-Italic</option>
                <option value="AvenirNextCondensed-Medium">AvenirNextCondensed-Medium</option>
                <option value="AvenirNextCondensed-MediumItalic">AvenirNextCondensed-MediumItalic</option>
                <option value="AvenirNextCondensed-Regular">AvenirNextCondensed-Regular</option>
                <option value="AvenirNextCondensed-UltraLight">AvenirNextCondensed-UltraLight</option>
                <option value="AvenirNextCondensed-UltraLightItalic">AvenirNextCondensed-UltraLightItalic</option>
                <option value="BanglaSangamMN">BanglaSangamMN</option>
                <option value="BanglaSangamMN-Bold">BanglaSangamMN-Bold</option>
                <option value="Baskerville">Baskerville</option>
                <option value="Baskerville-Bold">Baskerville-Bold</option>
                <option value="Baskerville-BoldItalic">Baskerville-BoldItalic</option>
                <option value="Baskerville-Italic">Baskerville-Italic</option>
                <option value="Baskerville-SemiBold">Baskerville-SemiBold</option>
                <option value="Baskerville-SemiBoldItalic">Baskerville-SemiBoldItalic</option>
                <option value="BodoniOrnamentsITCTT">BodoniOrnamentsITCTT</option>
                <option value="BodoniSvtyTwoITCTT-Bold">BodoniSvtyTwoITCTT-Bold</option>
                <option value="BodoniSvtyTwoITCTT-Book">BodoniSvtyTwoITCTT-Book</option>
                <option value="BodoniSvtyTwoITCTT-BookIta">BodoniSvtyTwoITCTT-BookIta</option>
                <option value="BodoniSvtyTwoOSITCTT-Bold">BodoniSvtyTwoOSITCTT-Bold</option>
                <option value="BodoniSvtyTwoOSITCTT-Book">BodoniSvtyTwoOSITCTT-Book</option>
                <option value="BodoniSvtyTwoOSITCTT-BookIt">BodoniSvtyTwoOSITCTT-BookIt</option>
                <option value="BodoniSvtyTwoSCITCTT-Book">BodoniSvtyTwoSCITCTT-Book</option>
                <option value="BradleyHandITCTT-Bold">BradleyHandITCTT-Bold</option>
                <option value="ChalkboardSE-Bold">ChalkboardSE-Bold</option>
                <option value="ChalkboardSE-Light">ChalkboardSE-Light</option>
                <option value="ChalkboardSE-Regular">ChalkboardSE-Regular</option>
                <option value="Chalkduster">Chalkduster</option>
                <option value="Cochin">Cochin</option>
                <option value="Cochin-Bold">Cochin-Bold</option>
                <option value="Cochin-BoldItalic">Cochin-BoldItalic</option>
                <option value="Cochin-Italic">Cochin-Italic</option>
                <option value="Copperplate">Copperplate</option>
                <option value="Copperplate-Bold">Copperplate-Bold</option>
                <option value="Copperplate-Light">Copperplate-Light</option>
                <option value="Courier">Courier</option>
                <option value="Courier-Bold">Courier-Bold</option>
                <option value="Courier-BoldOblique">Courier-BoldOblique</option>
                <option value="Courier-Oblique">Courier-Oblique</option>
                <option value="CourierNewPS-BoldItalicMT">CourierNewPS-BoldItalicMT</option>
                <option value="CourierNewPS-BoldMT">CourierNewPS-BoldMT</option>
                <option value="CourierNewPS-ItalicMT">CourierNewPS-ItalicMT</option>
                <option value="CourierNewPSMT">CourierNewPSMT</option>
                <option value="DBLCDTempBlack">DBLCDTempBlack</option>
                <option value="DINAlternate-Bold">DINAlternate-Bold</option>
                <option value="DINCondensed-Bold">DINCondensed-Bold</option>
                <option value="DamascusBold">DamascusBold</option>
                <option value="Damascus">Damascus</option>
                <option value="DamascusLight">DamascusLight</option>
                <option value="DamascusMedium">DamascusMedium</option>
                <option value="DamascusSemiBold">DamascusSemiBold</option>
                <option value="DevanagariSangamMN">DevanagariSangamMN</option>
                <option value="DevanagariSangamMN-Bold">DevanagariSangamMN-Bold</option>
                <option value="Didot">Didot</option>
                <option value="Didot-Bold">Didot-Bold</option>
                <option value="Didot-Italic">Didot-Italic</option>
                <option value="DiwanMishafi">DiwanMishafi</option>
                <option value="EuphemiaUCAS">EuphemiaUCAS</option>
                <option value="EuphemiaUCAS-Bold">EuphemiaUCAS-Bold</option>
                <option value="EuphemiaUCAS-Italic">EuphemiaUCAS-Italic</option>
                <option value="Farah">Farah</option>
                <option value="Futura-CondensedExtraBold">Futura-CondensedExtraBold</option>
                <option value="Futura-CondensedMedium">Futura-CondensedMedium</option>
                <option value="Futura-Medium">Futura-Medium</option>
                <option value="Futura-MediumItalic">Futura-MediumItalic</option>
                <option value="GeezaPro">GeezaPro</option>
                <option value="GeezaPro-Bold">GeezaPro-Bold</option>
                <option value="Georgia">Georgia</option>
                <option value="Georgia-Bold">Georgia-Bold</option>
                <option value="Georgia-BoldItalic">Georgia-BoldItalic</option>
                <option value="Georgia-Italic">Georgia-Italic</option>
                <option value="GillSans">GillSans</option>
                <option value="GillSans-SemiBold">GillSans-SemiBold</option>
                <option value="GillSans-SemiBoldItalic">GillSans-SemiBoldItalic</option>
                <option value="GillSans-Bold">GillSans-Bold</option>
                <option value="GillSans-BoldItalic">GillSans-BoldItalic</option>
                <option value="GillSans-UltraBold">GillSans-UltraBold</option>
                <option value="GillSans-Italic">GillSans-Italic</option>
                <option value="GillSans-Light">GillSans-Light</option>
                <option value="GillSans-LightItalic">GillSans-LightItalic</option>
                <option value="GujaratiSangamMN">GujaratiSangamMN</option>
                <option value="GujaratiSangamMN-Bold">GujaratiSangamMN-Bold</option>
                <option value="GurmukhiMN">GurmukhiMN</option>
                <option value="GurmukhiMN-Bold">GurmukhiMN-Bold</option>
                <option value="STHeitiSC-Light">STHeitiSC-Light</option>
                <option value="STHeitiSC-Medium">STHeitiSC-Medium</option>
                <option value="STHeitiTC-Light">STHeitiTC-Light</option>
                <option value="STHeitiTC-Medium">STHeitiTC-Medium</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Helvetica-Bold">Helvetica-Bold</option>
                <option value="Helvetica-BoldOblique">Helvetica-BoldOblique</option>
                <option value="Helvetica-Light">Helvetica-Light</option>
                <option value="Helvetica-LightOblique">Helvetica-LightOblique</option>
                <option value="Helvetica-Oblique">Helvetica-Oblique</option>
                <option value="HelveticaNeue">HelveticaNeue</option>
                <option value="HelveticaNeue-Bold">HelveticaNeue-Bold</option>
                <option value="HelveticaNeue-BoldItalic">HelveticaNeue-BoldItalic</option>
                <option value="HelveticaNeue-CondensedBlack">HelveticaNeue-CondensedBlack</option>
                <option value="HelveticaNeue-CondensedBold">HelveticaNeue-CondensedBold</option>
                <option value="HelveticaNeue-Italic">HelveticaNeue-Italic</option>
                <option value="HelveticaNeue-Light">HelveticaNeue-Light</option>
                <option value="HelveticaNeue-LightItalic">HelveticaNeue-LightItalic</option>
                <option value="HelveticaNeue-Medium">HelveticaNeue-Medium</option>
                <option value="HelveticaNeue-MediumItalic">HelveticaNeue-MediumItalic</option>
                <option value="HelveticaNeue-UltraLight">HelveticaNeue-UltraLight</option>
                <option value="HelveticaNeue-UltraLightItalic">HelveticaNeue-UltraLightItalic</option>
                <option value="HelveticaNeue-Thin">HelveticaNeue-Thin</option>
                <option value="HelveticaNeue-ThinItalic">HelveticaNeue-ThinItalic</option>
                <option value="HiraKakuProN-W3">HiraKakuProN-W3</option>
                <option value="HiraKakuProN-W6">HiraKakuProN-W6</option>
                <option value="HiraMinProN-W3">HiraMinProN-W3</option>
                <option value="HiraMinProN-W6">HiraMinProN-W6</option>
                <option value="HiraginoSans-W3">HiraginoSans-W3</option>
                <option value="HiraginoSans-W6">HiraginoSans-W6</option>
                <option value="HoeflerText-Black">HoeflerText-Black</option>
                <option value="HoeflerText-BlackItalic">HoeflerText-BlackItalic</option>
                <option value="HoeflerText-Italic">HoeflerText-Italic</option>
                <option value="HoeflerText-Regular">HoeflerText-Regular</option>
                <option value="IowanOldStyle-Bold">IowanOldStyle-Bold</option>
                <option value="IowanOldStyle-BoldItalic">IowanOldStyle-BoldItalic</option>
                <option value="IowanOldStyle-Italic">IowanOldStyle-Italic</option>
                <option value="IowanOldStyle-Roman">IowanOldStyle-Roman</option>
                <option value="Kailasa">Kailasa</option>
                <option value="Kailasa-Bold">Kailasa-Bold</option>
                <option value="KannadaSangamMN">KannadaSangamMN</option>
                <option value="KannadaSangamMN-Bold">KannadaSangamMN-Bold</option>
                <option value="KhmerSangamMN">KhmerSangamMN</option>
                <option value="KohinoorBangla-Light">KohinoorBangla-Light</option>
                <option value="KohinoorBangla-Regular">KohinoorBangla-Regular</option>
                <option value="KohinoorBangla-Semibold">KohinoorBangla-SemiBold</option>
                <option value="KohinoorDevanagari-Book">KohinoorDevanagari-Light</option>
                <option value="KohinoorDevanagari-Regular">KohinoorDevanagari-Regular</option>
                <option value="KohinoorDevanagari-Medium">KohinoorDevanagari-Medium</option>
                <option value="KohinoorTelugu-Light">KohinoorTelugu-Light</option>
                <option value="KohinoorTelugu-Regular">KohinoorTelugu-Regular</option>
                <option value="KohinoorTelugu-Medium">KohinoorTelugu-Medium</option>
                <option value="LaoSangamMN">LaoSangamMN</option>
                <option value="MalayalamSangamMN">MalayalamSangamMN</option>
                <option value="MalayalamSangamMN-Bold">MalayalamSangamMN-Bold</option>
                <option value="Menlo-BoldItalic">Menlo-BoldItalic</option>
                <option value="Menlo-Regular">Menlo-Regular</option>
                <option value="Menlo-Bold">Menlo-Bold</option>
                <option value="Menlo-Italic">Menlo-Italic</option>
                <option value="Marion-Bold">Marion-Bold</option>
                <option value="Marion-Italic">Marion-Italic</option>
                <option value="Marion-Regular">Marion-Regular</option>
                <option value="MarkerFelt-Thin">MarkerFelt-Thin</option>
                <option value="MarkerFelt-Wide">MarkerFelt-Wide</option>
                <option value="Noteworthy-Bold">Noteworthy-Bold</option>
                <option value="Noteworthy-Light">Noteworthy-Light</option>
                <option value="Optima-Bold">Optima-Bold</option>
                <option value="Optima-BoldItalic">Optima-BoldItalic</option>
                <option value="Optima-ExtraBlack">Optima-ExtraBlack</option>
                <option value="Optima-Italic">Optima-Italic</option>
                <option value="Optima-Regular">Optima-Regular</option>
                <option value="OriyaSangamMN">OriyaSangamMN</option>
                <option value="OriyaSangamMN-Bold">OriyaSangamMN-Bold</option>
                <option value="Palatino-Bold">Palatino-Bold</option>
                <option value="Palatino-BoldItalic">Palatino-BoldItalic</option>
                <option value="Palatino-Italic">Palatino-Italic</option>
                <option value="Palatino-Roman">Palatino-Roman</option>
                <option value="Papyrus">Papyrus</option>
                <option value="Papyrus-Condensed">Papyrus-Condensed</option>
                <option value="PartyLetPlain">PartyLetPlain</option>
                <option value="PingFangHK-UltraLight">PingFangHK-UltraLight</option>
                <option value="PingFangHK-Light">PingFangHK-Light</option>
                <option value="PingFangHK-Thin">PingFangHK-Thin</option>
                <option value="PingFangHK-Regular">PingFangHK-Regular</option>
                <option value="PingFangHK-Medium">PingFangHK-Medium</option>
                <option value="PingFangHK-Semibold">PingFangHK-Semibold</option>
                <option value="PingFangSC-UltraLight">PingFangSC-UltraLight</option>
                <option value="PingFangSC-Light">PingFangSC-Light</option>
                <option value="PingFangSC-Thin">PingFangSC-Thin</option>
                <option value="PingFangSC-Regular">PingFangSC-Regular</option>
                <option value="PingFangSC-Medium">PingFangSC-Medium</option>
                <option value="PingFangSC-Semibold">PingFangSC-Semibold</option>
                <option value="PingFangTC-UltraLight">PingFangTC-UltraLight</option>
                <option value="PingFangTC-Light">PingFangTC-Light</option>
                <option value="PingFangTC-Thin">PingFangTC-Thin</option>
                <option value="PingFangTC-Regular">PingFangTC-Regular</option>
                <option value="PingFangTC-Medium">PingFangTC-Medium</option>
                <option value="PingFangTC-Semibold">PingFangTC-Semibold</option>
                <option value="SavoyeLetPlain">SavoyeLetPlain</option>
                <option value="SinhalaSangamMN">SinhalaSangamMN</option>
                <option value="SinhalaSangamMN-Bold">SinhalaSangamMN-Bold</option>
                <option value="SnellRoundhand">SnellRoundhand</option>
                <option value="SnellRoundhand-Black">SnellRoundhand-Black</option>
                <option value="SnellRoundhand-Bold">SnellRoundhand-Bold</option>
                <option value="Superclarendon-Regular">Superclarendon-Regular</option>
                <option value="Superclarendon-BoldItalic">Superclarendon-BoldItalic</option>
                <option value="Superclarendon-Light">Superclarendon-Light</option>
                <option value="Superclarendon-BlackItalic">Superclarendon-BlackItalic</option>
                <option value="Superclarendon-Italic">Superclarendon-Italic</option>
                <option value="Superclarendon-LightItalic">Superclarendon-LightItalic</option>
                <option value="Superclarendon-Bold">Superclarendon-Bold</option>
                <option value="Superclarendon-Black">Superclarendon-Black</option>
                <option value="Symbol">Symbol</option>
                <option value="TamilSangamMN">TamilSangamMN</option>
                <option value="TamilSangamMN-Bold">TamilSangamMN-Bold</option>
                <option value="TeluguSangamMN">TeluguSangamMN</option>
                <option value="TeluguSangamMN-Bold">TeluguSangamMN-Bold</option>
                <option value="Thonburi">Thonburi</option>
                <option value="Thonburi-Bold">Thonburi-Bold</option>
                <option value="Thonburi-Light">Thonburi-Light</option>
                <option value="TimesNewRomanPS-BoldItalicMT">TimesNewRomanPS-BoldItalicMT</option>
                <option value="TimesNewRomanPS-BoldMT">TimesNewRomanPS-BoldMT</option>
                <option value="TimesNewRomanPS-ItalicMT">TimesNewRomanPS-ItalicMT</option>
                <option value="TimesNewRomanPSMT">TimesNewRomanPSMT</option>
                <option value="Trebuchet-BoldItalic">Trebuchet-BoldItalic</option>
                <option value="TrebuchetMS">TrebuchetMS</option>
                <option value="TrebuchetMS-Bold">TrebuchetMS-Bold</option>
                <option value="TrebuchetMS-Italic">TrebuchetMS-Italic</option>
                <option value="Verdana">Verdana</option>
                <option value="Verdana-Bold">Verdana-Bold</option>
                <option value="Verdana-BoldItalic">Verdana-BoldItalic</option>
                <option value="Verdana-Italic">Verdana-Italic</option>
                <option value="ZapfDingbatsITC">ZapfDingbatsITC</option>
                <option value="Zapfino">Zapfino</option> </select>
          </div>
        </div>

        <div class="fontsize-switcher">
          <div class="ui-field-contain">
              <label for="font-size" class="select">Scale:</label>
              <select name="font-size" id="font-size" data-native-menu="false">
                <option value="size" data-placeholder="true">font-size</option>
                <option value="xx-small">xx-small</option>
                <option value="x-small">x-small</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
                <option value="x-large">x-large</option>
                <option value="xx-large">xx-large</option>
              </select>
          </div>
        </div>

        <div class="background-switcher">

          <div class="ui-field-contain">
              <label for="background">Background:</label>
              <select name="background" id="background" data-role="slider" data-theme="h" class="ui-overlay-h">
                <option value="positive">invert</option>
                <option value="negative">inverted</option>
              </select>
          </div>
        </div>
      </div>
    </div>

    <div class="container cf tt-box" id="ttBox">
      <div id="content-wrapper">
        <div data-role="content" id="font-viewer-display">
          <div id="content-display"><h2 class="tt-display-header" id="ttDisplayHeader">Verdana</h2><h3 class="bt-heading uppercase">A closer look at the typefaces on you&#8217;re mobile</h3>

            <p> This is meant to be used on an iOS-device, like an iPad, iPod or iPhone, by e-book editors, web-designers, and everyone else who enjoys typefaces. The default typeface of the body-text is set on &#8216;Verdana&#8217; with a fall-back of &#8216;Cursive&#8217;, which means that if the font from the select menu is not on you&#8217;re O.S., the font is rendered as &#8216;Cursive&#8217;, some kind of handwriting typeface. In iOS this will be the &#8216;Snellroundhand&#8217; typeface, on you&#8217;re PC it will most likely be different, depending on you&#8217;re operation system. </p><h3 class="bt-heading">Note:</h3>

            <p> Some typefaces are (exclusively) developed for a specific language, for example:</p>
            <dl>
              <dt>ArialHebrew</dt>
              <dd>Hebrew</dd>
              <dt>GeezaPro</dt>
              <dd>Arabic</dd>
              <dt>STHeiti</dt>
              <dd>simplified Chinese</dd>
              <dt>Hiragino Mincho</dt>
              <dd>Japanese</dd>
              <dt>Kailasa</dt>
              <dd>Tibetan</dd>
            </dl>

            <p> The &#8216;Symbol&#8217; typeface contains glyphs for system icons. &#8216;DBLCDTempBlack&#8217; - does not contain all of the characters, just numbers, and some other characters. </p>

            <div id="pangrams" class="pangrams box"><h3 class="bt-heading uppercase">The quick brown fox jumps over a lazy dog</h3>

              <p> The quick brown fox jumps over a lazy dog. Quest judge wizard bonks foxy chimp love. Waxy and quivering, jocks fumble the pizza. When zombies arrive, quickly fax judge Pat. Heavy boxes perform quick waltzes and jigs. A quick chop jolted my big sexy frozen wives. </p><h3 class="bt-heading uppercase">A wizard&#8217;s job is to vex chumps quickly in fog</h3>

              <p> A wizard&#8217;s job is to vex chumps quickly in fog. Sympathizing would fix Quaker objectives. Pack my red box with five dozen quality jugs. Quads of blowzy fjord ignite map vex&#8217;d chicks. Fake bugs put in wax jonquils drive him crazy. Watch &#8220;Jeopardy!&#8221;, Alex Trebek&#8217;s fun TV quiz game.</p>
            </div>
            <!-- .pangrams .box -->

            <div class="glyphs box">

              <p> 1 2 3 4 5 6 7 8 9 0 </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="subfooter ui-body-f">

      <div class="row pad cf"><h3 class="heading uppercase">resources</h3>

        <div class="unit size1of3"><h4 class="subheading">typeface</h4>
          <ul>
            <li><a href="https://support.apple.com/kb/HT4980">iOS fonts</a></li>
            <li><a href="https://iosfonts.com">iOS fonts list</a></li>
<li><a href="http://fontfamily.io/">Font Family Reunion</a></li>
          </ul>
        </div>

        <div class="unit size1of3"><h4 class="subheading">Pangrams</h4>
          <ul>
            <li><a href="https://en.wikipedia.org/wiki/List_of_pangrams">List of pangrams on Wikipedia</a></li>
            <li><a href="https://reference.sitepoint.com/html/lang-codes">language codes</a></li>
          </ul>
        </div>

        <div class="unit size1of3"><h4 class="subheading">jQuery mobile</h4>
          <ul>
            <li><a href="https://jquerymobile.com/demos/1.2.0/#">jQuery mobile demos</a></li>
            <li><a href="https://github.com/jquery/jquery-mobile">sources on Github</a></li>
          </ul>
        </div>
      </div>
    </div>
    <?php include "inc/foot.php.inc"; ?>
