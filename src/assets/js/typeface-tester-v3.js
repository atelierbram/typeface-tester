$(document).bind("pageinit", function() {
$(function() {
  // https://stackoverflow.com/questions/12443229/get-clicked-element-html-with-jquery#12443263
  // https://stackoverflow.com/questions/1309452/how-to-replace-innerhtml-of-a-div-using-jquery#answer-7024363
  $('#typeface-menu .ui-btn').click( function(event) {
    var htmlString = $(this).html();
    $('#ttDisplayHeader').empty().append( htmlString );
  });
});
  $("#typeface-menu").addClass("tf-menu");
  $("#typeface-menu [data-option-index='1'] .ui-btn").click(function() {
      $("#content-display").removeClass().addClass("AcademyEngravedLetPlain")
  });
  $("#typeface-menu [data-option-index='2'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AlNile-Bold")
  });
  $("#typeface-menu [data-option-index='3'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AlNile")
  });
  $("#typeface-menu [data-option-index='4'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AmericanTypewriter")
  });
  $("#typeface-menu [data-option-index='5'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AmericanTypewriter-Bold")
  });
  $("#typeface-menu [data-option-index='6'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AmericanTypewriter-Condensed")
  });
  $("#typeface-menu [data-option-index='7'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AmericanTypewriter-CondensedBold")
  });
  $("#typeface-menu [data-option-index='8'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AmericanTypewriter-CondensedLight")
  });
  $("#typeface-menu [data-option-index='9'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AmericanTypewriter-Light")
  });
  $("#typeface-menu [data-option-index='10'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AppleColorEmoji")
  });
  $("#typeface-menu [data-option-index='11'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AppleSDGothicNeo-Thin")
  });
  $("#typeface-menu [data-option-index='12'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AppleSDGothicNeo-UltraLight")
  });
  $("#typeface-menu [data-option-index='13'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AppleSDGothicNeo-Light")
  });
  $("#typeface-menu [data-option-index='14'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AppleSDGothicNeo-Regular")
  });
  $("#typeface-menu [data-option-index='15'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AppleSDGothicNeo-Medium")
  });
  $("#typeface-menu [data-option-index='16'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AppleSDGothicNeo-SemiBold")
  });
  $("#typeface-menu [data-option-index='17'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AppleSDGothicNeo-Bold")
  });
  $("#typeface-menu [data-option-index='18'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("ArialMT")
  });
  $("#typeface-menu [data-option-index='19'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Arial-BoldItalicMT")
  });
  $("#typeface-menu [data-option-index='20'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Arial-BoldMT")
  });
  $("#typeface-menu [data-option-index='21'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Arial-ItalicMT")
  });
  $("#typeface-menu [data-option-index='22'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("ArialHebrew")
  });
  $("#typeface-menu [data-option-index='23'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("ArialHebrew-Bold")
  });
  $("#typeface-menu [data-option-index='24'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("ArialHebrew-Light")
  });
  $("#typeface-menu [data-option-index='25'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("ArialRoundedMTBold")
  });
  $("#typeface-menu [data-option-index='26'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Avenir-Black")
  });
  $("#typeface-menu [data-option-index='27'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Avenir-BlackOblique")
  });
  $("#typeface-menu [data-option-index='28'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Avenir-Book")
  });
  $("#typeface-menu [data-option-index='29'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Avenir-BookOblique")
  });
  $("#typeface-menu [data-option-index='30'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Avenir-Heavy")
  });
  $("#typeface-menu [data-option-index='31'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Avenir-HeavyOblique")
  });
  $("#typeface-menu [data-option-index='32'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Avenir-Light")
  });
  $("#typeface-menu [data-option-index='33'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Avenir-LightOblique")
  });
  $("#typeface-menu [data-option-index='34'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Avenir-Medium")
  });
  $("#typeface-menu [data-option-index='35'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Avenir-MediumOblique")
  });
  $("#typeface-menu [data-option-index='36'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Avenir-Oblique")
  });
  $("#typeface-menu [data-option-index='37'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Avenir-Roman")
  });
  $("#typeface-menu [data-option-index='38'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNext-Bold")
  });
  $("#typeface-menu [data-option-index='39'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNext-BoldItalic")
  });
  $("#typeface-menu [data-option-index='40'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNext-DemiBold")
  });
  $("#typeface-menu [data-option-index='41'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNext-DemiBoldItalic")
  });
  $("#typeface-menu [data-option-index='42'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNext-Heavy")
  });
  $("#typeface-menu [data-option-index='43'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNext-HeavyItalic")
  });
  $("#typeface-menu [data-option-index='44'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNext-Italic")
  });
  $("#typeface-menu [data-option-index='45'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNext-Medium")
  });
  $("#typeface-menu [data-option-index='46'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNext-MediumItalic")
  });
  $("#typeface-menu [data-option-index='47'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNext-Regular")
  });
  $("#typeface-menu [data-option-index='48'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNext-UltraLight")
  });
  $("#typeface-menu [data-option-index='49'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNext-UltraLightItalic")
  });
  $("#typeface-menu [data-option-index='50'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNextCondensed-Bold")
  });
  $("#typeface-menu [data-option-index='51'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNextCondensed-BoldItalic")
  });
  $("#typeface-menu [data-option-index='52'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNextCondensed-DemiBold")
  });
  $("#typeface-menu [data-option-index='53'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNextCondensed-DemiBoldItalic")
  });
  $("#typeface-menu [data-option-index='54'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNextCondensed-Heavy")
  });
  $("#typeface-menu [data-option-index='55'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNextCondensed-HeavyItalic")
  });
  $("#typeface-menu [data-option-index='56'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNextCondensed-Italic")
  });
  $("#typeface-menu [data-option-index='57'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNextCondensed-Medium")
  });
  $("#typeface-menu [data-option-index='58'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNextCondensed-MediumItalic")
  });
  $("#typeface-menu [data-option-index='59'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNextCondensed-Regular")
  });
  $("#typeface-menu [data-option-index='60'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNextCondensed-UltraLight")
  });
  $("#typeface-menu [data-option-index='61'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("AvenirNextCondensed-UltraLightItalic")
  });
  $("#typeface-menu [data-option-index='62'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("BanglaSangamMN")
  });
  $("#typeface-menu [data-option-index='63'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("BanglaSangamMN-Bold")
  });
  $("#typeface-menu [data-option-index='64'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Baskerville")
  });
  $("#typeface-menu [data-option-index='65'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Baskerville-Bold")
  });
  $("#typeface-menu [data-option-index='66'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Baskerville-BoldItalic")
  });
  $("#typeface-menu [data-option-index='67'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Baskerville-Italic")
  });
  $("#typeface-menu [data-option-index='68'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Baskerville-SemiBold")
  });
  $("#typeface-menu [data-option-index='69'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Baskerville-SemiBoldItalic")
  });
  $("#typeface-menu [data-option-index='70'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("BodoniOrnamentsITCTT")
  });
  $("#typeface-menu [data-option-index='71'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("BodoniSvtyTwoITCTT-Bold")
  });
  $("#typeface-menu [data-option-index='72'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("BodoniSvtyTwoITCTT-Book")
  });
  $("#typeface-menu [data-option-index='73'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("BodoniSvtyTwoITCTT-BookIta")
  });
  $("#typeface-menu [data-option-index='74'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("BodoniSvtyTwoOSITCTT-Bold")
  });
  $("#typeface-menu [data-option-index='75'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("BodoniSvtyTwoOSITCTT-Book")
  });
  $("#typeface-menu [data-option-index='76'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("BodoniSvtyTwoOSITCTT-BookIt")
  });
  $("#typeface-menu [data-option-index='77'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("BodoniSvtyTwoSCITCTT-Book")
  });
  $("#typeface-menu [data-option-index='78'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("BradleyHandITCTT-Bold")
  });
  $("#typeface-menu [data-option-index='79'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("ChalkboardSE-Bold")
  });
  $("#typeface-menu [data-option-index='80'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("ChalkboardSE-Light")
  });
  $("#typeface-menu [data-option-index='81'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("ChalkboardSE-Regular")
  });
  $("#typeface-menu [data-option-index='82'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Chalkduster")
  });
  $("#typeface-menu [data-option-index='83'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Cochin")
  });
  $("#typeface-menu [data-option-index='84'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Cochin-Bold")
  });
  $("#typeface-menu [data-option-index='85'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Cochin-BoldItalic")
  });
  $("#typeface-menu [data-option-index='86'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Cochin-Italic")
  });
  $("#typeface-menu [data-option-index='87'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Copperplate")
  });
  $("#typeface-menu [data-option-index='88'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Copperplate-Bold")
  });
  $("#typeface-menu [data-option-index='89'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Copperplate-Light")
  });
  $("#typeface-menu [data-option-index='90'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Courier")
  });
  $("#typeface-menu [data-option-index='91'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Courier-Bold")
  });
  $("#typeface-menu [data-option-index='92'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Courier-BoldOblique")
  });
  $("#typeface-menu [data-option-index='93'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Courier-Oblique")
  });
  $("#typeface-menu [data-option-index='94'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("CourierNewPS-BoldItalicMT")
  });
  $("#typeface-menu [data-option-index='95'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("CourierNewPS-BoldMT")
  });
  $("#typeface-menu [data-option-index='96'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("CourierNewPS-ItalicMT")
  });
  $("#typeface-menu [data-option-index='97'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("CourierNewPSMT")
  });
  $("#typeface-menu [data-option-index='98'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("DBLCDTempBlack")
  });
  $("#typeface-menu [data-option-index='99'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("DINAlternate-Bold")
  });
  $("#typeface-menu [data-option-index='100'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("DINCondensed-Bold")
  });
  $("#typeface-menu [data-option-index='101'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("DamascusBold")
  });
  $("#typeface-menu [data-option-index='102'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Damascus")
  });
  $("#typeface-menu [data-option-index='103'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("DamascusLight")
  });
  $("#typeface-menu [data-option-index='104'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("DamascusMedium")
  });
  $("#typeface-menu [data-option-index='105'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("DamascusSemiBold")
  });
  $("#typeface-menu [data-option-index='106'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("DevanagariSangamMN")
  });
  $("#typeface-menu [data-option-index='107'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("DevanagariSangamMN-Bold")
  });
  $("#typeface-menu [data-option-index='108'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Didot")
  });
  $("#typeface-menu [data-option-index='109'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Didot-Bold")
  });
  $("#typeface-menu [data-option-index='110'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Didot-Italic")
  });
  $("#typeface-menu [data-option-index='111'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("DiwanMishafi")
  });
  $("#typeface-menu [data-option-index='112'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("EuphemiaUCAS")
  });
  $("#typeface-menu [data-option-index='113'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("EuphemiaUCAS-Bold")
  });
  $("#typeface-menu [data-option-index='114'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("EuphemiaUCAS-Italic")
  });
  $("#typeface-menu [data-option-index='115'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Farah")
  });
  $("#typeface-menu [data-option-index='116'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Futura-CondensedExtraBold")
  });
  $("#typeface-menu [data-option-index='117'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Futura-CondensedMedium")
  });
  $("#typeface-menu [data-option-index='118'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Futura-Medium")
  });
  $("#typeface-menu [data-option-index='119'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Futura-MediumItalic")
  });
  $("#typeface-menu [data-option-index='120'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GeezaPro")
  });
  $("#typeface-menu [data-option-index='121'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GeezaPro-Bold")
  });
  $("#typeface-menu [data-option-index='122'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Georgia")
  });
  $("#typeface-menu [data-option-index='123'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Georgia-Bold")
  });
  $("#typeface-menu [data-option-index='124'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Georgia-BoldItalic")
  });
  $("#typeface-menu [data-option-index='125'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Georgia-Italic")
  });
  $("#typeface-menu [data-option-index='126'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GillSans")
  });
  $("#typeface-menu [data-option-index='127'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GillSans-SemiBold")
  });
  $("#typeface-menu [data-option-index='128'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GillSans-SemiBoldItalic")
  });
  $("#typeface-menu [data-option-index='129'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GillSans-Bold")
  });
  $("#typeface-menu [data-option-index='130'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GillSans-BoldItalic")
  });
  $("#typeface-menu [data-option-index='131'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GillSans-UltraBold")
  });
  $("#typeface-menu [data-option-index='132'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GillSans-Italic")
  });
  $("#typeface-menu [data-option-index='133'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GillSans-Light")
  }); 
  $("#typeface-menu [data-option-index='134'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GillSans-LightItalic")
  });
  $("#typeface-menu [data-option-index='135'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GujaratiSangamMN")
  });
  $("#typeface-menu [data-option-index='136'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GujaratiSangamMN-Bold")
  });
  $("#typeface-menu [data-option-index='137'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GurmukhiMN")
  });
  $("#typeface-menu [data-option-index='138'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("GurmukhiMN-Bold")
  });
  $("#typeface-menu [data-option-index='139'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("STHeitiSC-Light")
  });
  $("#typeface-menu [data-option-index='140'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("STHeitiSC-Medium")
  });
  $("#typeface-menu [data-option-index='141'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("STHeitiTC-Light")
  });
  $("#typeface-menu [data-option-index='142'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("STHeitiTC-Medium")
  });
  $("#typeface-menu [data-option-index='143'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Helvetica")
  });
  $("#typeface-menu [data-option-index='144'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Helvetica-Bold")
  });
  $("#typeface-menu [data-option-index='145'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Helvetica-BoldOblique")
  });
  $("#typeface-menu [data-option-index='146'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Helvetica-Light")
  });
  $("#typeface-menu [data-option-index='147'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Helvetica-LightOblique")
  });
  $("#typeface-menu [data-option-index='148'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Helvetica-Oblique")
  });
  $("#typeface-menu [data-option-index='149'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HelveticaNeue")
  });
  $("#typeface-menu [data-option-index='150'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HelveticaNeue-Bold")
  });
  $("#typeface-menu [data-option-index='151'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HelveticaNeue-BoldItalic")
  });
  $("#typeface-menu [data-option-index='152'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HelveticaNeue-CondensedBlack")
  });
  $("#typeface-menu [data-option-index='153'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HelveticaNeue-CondensedBold")
  });
  $("#typeface-menu [data-option-index='154'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HelveticaNeue-Italic")
  });
  $("#typeface-menu [data-option-index='155'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HelveticaNeue-Light")
  });
  $("#typeface-menu [data-option-index='156'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HelveticaNeue-LightItalic")
  });
  $("#typeface-menu [data-option-index='157'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HelveticaNeue-Medium")
  });
  $("#typeface-menu [data-option-index='158'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HelveticaNeue-MediumItalic")
  });
  $("#typeface-menu [data-option-index='159'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HelveticaNeue-UltraLight")
  });
  $("#typeface-menu [data-option-index='160'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HelveticaNeue-UltraLightItalic")
  });
  $("#typeface-menu [data-option-index='161'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HelveticaNeue-Thin")
  });
  $("#typeface-menu [data-option-index='162'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HelveticaNeue-ThinItalic")
  });
  $("#typeface-menu [data-option-index='163'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HiraKakuProN-W3")
  });
  $("#typeface-menu [data-option-index='164'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HiraKakuProN-W6")
  });

  $("#typeface-menu [data-option-index='165'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HiraMinProN-W3")
  });
  $("#typeface-menu [data-option-index='166'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HiraMinProN-W6")
  });
  $("#typeface-menu [data-option-index='167'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HiraginoSans-W3")
  });
  $("#typeface-menu [data-option-index='168'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HiraginoSans-W6")
  });
  $("#typeface-menu [data-option-index='169'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HoeflerText-Black")
  });
  $("#typeface-menu [data-option-index='172'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HoeflerText-BlackItalic")
  });
  $("#typeface-menu [data-option-index='171'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HoeflerText-Italic")
  });
  $("#typeface-menu [data-option-index='172'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("HoeflerText-Regular")
  });
  $("#typeface-menu [data-option-index='173'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("IowanOldStyle-Bold")
  });
  $("#typeface-menu [data-option-index='174'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("IowanOldStyle-BoldItalic")
  });
  $("#typeface-menu [data-option-index='175'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("IowanOldStyle-Italic")
  });
  $("#typeface-menu [data-option-index='176'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("IowanOldStyle-Roman")
  });
  $("#typeface-menu [data-option-index='177'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Kailasa")
  });
  $("#typeface-menu [data-option-index='178'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Kailasa-Bold")
  });
  $("#typeface-menu [data-option-index='179'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("KannadaSangamMN")
  });
  $("#typeface-menu [data-option-index='180'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("KannadaSangamMN-Bold")
  });
  $("#typeface-menu [data-option-index='181'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("KhmerSangamMN")
  });
  $("#typeface-menu [data-option-index='182'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("KohinoorBangla-Light")
  });
  $("#typeface-menu [data-option-index='183'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("KohinoorBangla-Regular")
  });
  $("#typeface-menu [data-option-index='184'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("KohinoorBangla-SemiBold")
  });
  $("#typeface-menu [data-option-index='185'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("KohinoorDevanagari-Book")
  });
  $("#typeface-menu [data-option-index='186'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("KohinoorDevanagari-Light")
  });
  $("#typeface-menu [data-option-index='187'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("KohinoorDevanagari-Medium")
  });
  $("#typeface-menu [data-option-index='188'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("KohinoorTelugu-Light")
  });
  $("#typeface-menu [data-option-index='189'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("KohinoorTelugu-Regular")
  });
  $("#typeface-menu [data-option-index='190'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("KohinoorTelugu-Medium")
  });
  $("#typeface-menu [data-option-index='191'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("LaoSangamMN")
  });
  $("#typeface-menu [data-option-index='192'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("MalayalamSangamMN")
  });
  $("#typeface-menu [data-option-index='193'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("MalayalamSangamMN-Bold")
  });
  $("#typeface-menu [data-option-index='194'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Menlo-BoldItalic")
  });
  $("#typeface-menu [data-option-index='195'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Menlo-Regular")
  });
  $("#typeface-menu [data-option-index='196'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Menlo-Bold")
  });
  $("#typeface-menu [data-option-index='197'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Menlo-Italic")
  });
  $("#typeface-menu [data-option-index='198'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Marion-Bold")
  });
  $("#typeface-menu [data-option-index='199'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Marion-Italic")
  });
  $("#typeface-menu [data-option-index='200'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Marion-Regular")
  });
  $("#typeface-menu [data-option-index='201'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("MarkerFelt-Thin")
  });
  $("#typeface-menu [data-option-index='202'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("MarkerFelt-Wide")
  });
  $("#typeface-menu [data-option-index='203'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Noteworthy-Bold")
  });
  $("#typeface-menu [data-option-index='204'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Noteworthy-Light")
  });
  $("#typeface-menu [data-option-index='205'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Optima-Bold")
  });
  $("#typeface-menu [data-option-index='206'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Optima-BoldItalic")
  });
  $("#typeface-menu [data-option-index='207'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Optima-ExtraBlack")
  });
  $("#typeface-menu [data-option-index='208'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Optima-Italic")
  });
  $("#typeface-menu [data-option-index='209'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Optima-Regular")
  });
  $("#typeface-menu [data-option-index='210'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("OriyaSangamMN")
  });
  $("#typeface-menu [data-option-index='211'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("OriyaSangamMN-Bold")
  });
  $("#typeface-menu [data-option-index='212'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Palatino-Bold")
  });
  $("#typeface-menu [data-option-index='213'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Palatino-BoldItalic")
  });
  $("#typeface-menu [data-option-index='214'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Palatino-Italic")
  });
  $("#typeface-menu [data-option-index='215'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Palatino-Roman")
  });
  $("#typeface-menu [data-option-index='216'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Papyrus")
  });
  $("#typeface-menu [data-option-index='217'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Papyrus-Condensed")
  });
  $("#typeface-menu [data-option-index='218'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PartyLetPlain")
  });
  $("#typeface-menu [data-option-index='219'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangHK-Ultralight")
  });
  $("#typeface-menu [data-option-index='220'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangHK-Light")
  });
  $("#typeface-menu [data-option-index='221'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangHK-Thin")
  });
  $("#typeface-menu [data-option-index='222'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangHK-Regular")
  });
  $("#typeface-menu [data-option-index='223'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangHK-Medium")
  });
  $("#typeface-menu [data-option-index='224'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangHK-Semibold")
  });
  $("#typeface-menu [data-option-index='225'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangSC-Ultralight")
  });
  $("#typeface-menu [data-option-index='226'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangSC-Light")
  });
  $("#typeface-menu [data-option-index='227'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangSC-Thin")
  });
  $("#typeface-menu [data-option-index='228'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangSC-Regular")
  });
  $("#typeface-menu [data-option-index='229'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangSC-Medium")
  });
  $("#typeface-menu [data-option-index='230'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangSC-Semibold")
  });
  $("#typeface-menu [data-option-index='231'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangTC-Ultralight")
  });
  $("#typeface-menu [data-option-index='232'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangTC-Light")
  });
  $("#typeface-menu [data-option-index='233'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangTC-Thin")
  });
  $("#typeface-menu [data-option-index='234'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangTC-Regular")
  });
  $("#typeface-menu [data-option-index='235'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangTC-Medium")
  });
  $("#typeface-menu [data-option-index='236'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("PingFangTC-Semibold")
  });
  $("#typeface-menu [data-option-index='237'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("SavoyeLetPlain")
  });
  $("#typeface-menu [data-option-index='238'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("SinhalaSangamMN")
  });
  $("#typeface-menu [data-option-index='239'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("SinhalaSangamMN-Bold")
  });
  $("#typeface-menu [data-option-index='240'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("SnellRoundhand")
  });
  $("#typeface-menu [data-option-index='241'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("SnellRoundhand-Black")
  });
  $("#typeface-menu [data-option-index='242'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("SnellRoundhand-Bold")
  });
  $("#typeface-menu [data-option-index='243'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Superclarendon-Regular")
  });
  $("#typeface-menu [data-option-index='244'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Superclarendon-BoldItalic")
  });
  $("#typeface-menu [data-option-index='245'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Superclarendon-Light")
  });
  $("#typeface-menu [data-option-index='246'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Superclarendon-BlackItalic")
  });
  $("#typeface-menu [data-option-index='247'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Superclarendon-Italic")
  });
  $("#typeface-menu [data-option-index='248'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Superclarendon-LightItalic")
  });
  $("#typeface-menu [data-option-index='249'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Superclarendon-Bold")
  });
  $("#typeface-menu [data-option-index='250'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Superclarendon-Black")
  });
  $("#typeface-menu [data-option-index='251'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Symbol")
  });
  $("#typeface-menu [data-option-index='252'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("TamilSangamMN")
  });
  $("#typeface-menu [data-option-index='253'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("TamilSangamMN-Bold")
  });
  $("#typeface-menu [data-option-index='254'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("TeluguSangamMN")
  });
  $("#typeface-menu [data-option-index='255'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("TeluguSangamMN-Bold")
  });
  $("#typeface-menu [data-option-index='256'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Thonburi")
  });
  $("#typeface-menu [data-option-index='257'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Thonburi-Bold")
  });
  $("#typeface-menu [data-option-index='258'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Thonburi-Light")
  });
  $("#typeface-menu [data-option-index='259'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("TimesNewRomanPS-BoldItalicMT")
  });
  $("#typeface-menu [data-option-index='260'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("TimesNewRomanPS-BoldMT")
  });
  $("#typeface-menu [data-option-index='261'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("TimesNewRomanPS-ItalicMT")
  });
  $("#typeface-menu [data-option-index='262'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("TimesNewRomanPSMT")
  });
  $("#typeface-menu [data-option-index='263'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Trebuchet-BoldItalic")
  });
  $("#typeface-menu [data-option-index='264'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("TrebuchetMS")
  });
  $("#typeface-menu [data-option-index='265'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("TrebuchetMS-Bold")
  });
  $("#typeface-menu [data-option-index='266'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("TrebuchetMS-Italic")
  });
  $("#typeface-menu [data-option-index='267'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Verdana")
  });
  $("#typeface-menu [data-option-index='268'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Verdana-Bold")
  });
  $("#typeface-menu [data-option-index='269'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Verdana-BoldItalic")
  });
  $("#typeface-menu [data-option-index='270'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Verdana-Italic")
  });
  $("#typeface-menu [data-option-index='271'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("ZapfDingbatsITC")
  });
  $("#typeface-menu [data-option-index='272'] .ui-btn").click(function() {
    $("#content-display").removeClass().addClass("Zapfino")
  });
  $("#font-size-menu [data-option-index='1'] .ui-btn").click(function() {
    $("#font-viewer-display").removeClass().addClass("xx-small")
  });
  $("#font-size-menu [data-option-index='2'] .ui-btn").click(function() {
    $("#font-viewer-display").removeClass().addClass("x-small")
  });
  $("#font-size-menu [data-option-index='3'] .ui-btn").click(function() {
    $("#font-viewer-display").removeClass().addClass("small")
  });
  $("#font-size-menu [data-option-index='4'] .ui-btn").click(function() {
    $("#font-viewer-display").removeClass().addClass("medium")
  });
  $("#font-size-menu [data-option-index='5'] .ui-btn").click(function() {
    $("#font-viewer-display").removeClass().addClass("large")
  });
  $("#font-size-menu [data-option-index='6'] .ui-btn").click(function() {
    $("#font-viewer-display").removeClass().addClass("x-large")
  });
  $("#font-size-menu [data-option-index='7'] .ui-btn").click(function() {
    $("#font-viewer-display").removeClass().addClass("xx-large")
  })
});
$("#background").on("slidestart", function() {
  $("#ttBox").toggleClass("negative").removeClass("positive")
});
