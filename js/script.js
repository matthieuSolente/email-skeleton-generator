/***********************************************/
/* COPY PASTE   */
/* **********************************************/
function copyPaste(element) {
	var range = document.createRange();
	range.selectNode(document.getElementById("output"));
	 window.getSelection().removeAllRanges(); // clear current selection
	window.getSelection().addRange(range); // to select text
	document.execCommand("copy");
	window.getSelection().removeAllRanges();// to deselect
}
/***********************************************/
/* TARGET CSS FILTERS   */
/* **********************************************/

		$.viewMap = {
		'0' : $([]),
		'one63' : $('#target1'),
		'airmail' : $('#target2'),
		'androidV23' : $('#target3'),
		'applemail10' : $('#target4'),
		'applemail12' : $('#target5'),
		'applemail8' : $('#target6'),
		'applemailipad' : $('#target7'),
		'comcast' : $('#target8'),
		'edison' : $('#target9'),
		'edisonandroid' : $('#target10'),
		'edisonios' : $('#target11'),
		'freenet' : $('#target12'),
		'freenet2' : $('#target13'),
		'gmail' : $('#target14'),
		'gmailmobile' : $('#target15'),
		'gmailandroid' :$('#target16'),
		'ios10' : $('#target17'),
		'ios13' : $('#target18'),
		'ios15' : $('#target19'),
		'libero' : $('#target20'),
		'newton' : $('#target21'),
		'nine' : $('#target22'),
		'notes' : $('#target23'),
		'openxchange' : $('#target24'),
		'outlook' :  $('#target26'),
		'outlookdark' : $('#target27'),
		'outkmobile' : $('#target28'),
		'outlookmobile2' : $('#target29'),
		'outlookmac' : $('#target30'),
		'outlookpwa' : $('#target31'),
		'outlookweb' : $('#target32'),
		'samsung4' : $('#target33'),
		'samsung5' : $('#target34'),
		'sapo' : $('#target35'),
		'seznam' : $('#target36'),
		'spark' : $('#target37'),
		'sparkapps' : $('#target38'),
		'Superhuman' : $('#target39'),
		'thunderbird' : $('#target40'),
		'windowsphone' : $('#target41'),
		'windowsphone2' : $('#target42'),
		'yahoo' : $('#target43'),
		'yahoo2' : $('#target44'),
		'yahoo3' : $('#target45')
	};


	$('#search').change(function() {
	$.each($.viewMap, function() { this.hide(); });
	// show current
	$.viewMap[$(this).val()].show();
	});



/***********************************************/
/* REPLACE TAGS   */
/* **********************************************/
var tagsToReplace = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;'
};
function replaceTag(tag) {
	return tagsToReplace[tag] || tag;
}

function safe_tags_replace(str) {
	return str.replace(/[&<>]/g, replaceTag);
}
/***********************************************/
/* TARGET CSS FILTER  */
/* **********************************************/

var component =[];
var component_list = [];
	var lang, title,preheader,width,bgColor,darkmodeMeta,darkmodeRoot,darkmodeCss, linkReset,one63,airmail,androidV23,applemail10,applemail12,applemail8,applemailipad,comcast,
	edison,edisonandroid,edisonios,freenet,freenet2,gmail,gmailmobile,gmailandroid,ios10,
	ios13,ios15,libero,newton,nine,notes,openxchange,outlook,outlookdark,
	outlookmobile,outlookmobile2,outlookmac,outlookpwa,outlookweb,samsung4,samsung5,sapo,
	seznam,spark,sparkapps,superhuman,thunderbird,windowsphone,windowsphone2,yahoo,yahoo2,yahoo3,halfwidth,halfwidth2,onethird,twothird,onefourth;
	




function build_email() {


		lang=$('#lang').val();
		title=$('#title').val();
		preheader=$('#preheader').val();
		width=$('#width').val();
		bgColor=$('#bgColor').val();

		if($('#darkmode').is(':checked')){
			darkmodeMeta = '<meta name="color-scheme" content="light dark">\n' 
						 +' <meta name="supported-color-schemes" content="light dark">';
			darkmodeRoot = ':root {\n'
						 +'  color-scheme: light dark;\n'
						 +' supported-color-schemes: light dark;}';
			darkmodeCss ='<style id="darkmode">\n'
						+' @media (prefers-color-scheme: dark ) {}\n'
						+' [data-ogsc] .my-class {}\n'
						+'</style>\n'
			}else{
				darkmodeMeta = '';
				darkmodeRoot ='';
				darkmodeCss = '';
		};

		if($('#linkReset').is(':checked')){
			linkReset = '<style id="linkReset">\n'
					  +' /* fix for Outlook links and visited links color */\n'
					  +' span.MsoHyperlink {\n'
					  +'  color: inherit !important;\n'
					  +'  mso-style-priority: 99 !important;\n'
					  +' }\n'
					  +' span.MsoHyperlinkFollowed {\n'
					  +'  color: inherit !important;\n'
					  +'  mso-style-priority: 99 !important;\n'
						+' }\n'
						+' /*  Apple Mail / iOS Mail apps */\n'
						+' #root [x-apple-data-detectors=true],\n'
						+' a[x-apple-data-detectors=true]{ \n'
						+'  color: inherit !important;\n'
						+'  text-decoration: none !important;\n'
						+'  font-size: inherit !important;\n'
						+'  font-family: inherit !important;\n'
						+'  font-weight: inherit !important;\n'
						+'  line-height: inherit !important;\n'
						+' }\n'
						+' [x-apple-data-detectors-type="calendar-event"] {\n'
						+'  color: inherit !important;\n'
						+'  -webkit-text-decoration-color: inherit !important;\n'
						+'  text-decoration: none !important;\n'
						+'}\n'
						+' /*Gmail*/\n'
						+' u+.body a {\n'
						+'  color: inherit;\n'
						+'  text-decoration: none;\n'
						+'  font-size: inherit;\n'
						+'  font-weight: inherit;\n'
						+'  line-height: inherit;\n'
						+' }\n'
						+' /*Samsung Mail*/\n'
						+' #MessageViewBody a {\n'
						+'  color: inherit;\n'
						+'  text-decoration: none;\n'
						+'  font-size: inherit;\n'
						+'  font-family: inherit;\n'
						+'  font-weight: inherit;\n'
						+'  line-height: inherit;\n'
						+' }\n'
						+' </style>\n'
			}else{
			linkReset = '';
		};

		if($('#one63').is(':checked')){
			one63  ='<style>\n'
			+'.netease_mail_readhtml .your-class-name, .netease_mail_readhtml .your-class-name {\n'
	  		+' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			one63 = '';       
		};

		if($('#airmail').is(':checked')){
			airmail  ='<style>\n'
				+'.bloop_container .your-class-name {\n'
		  	+' /* Replace this comment with your styles */\n'
				+' }\n'
			+' </style>\n'
			}else{
			airmail = '';       
		};

		if($('#androidV23').is(':checked')){
			androidV23  = '<style>\n'
			+'@media screen and (min-width:0\0) {\n'
		  	+'.your-class-name {\n'
		    +' /* Replace this comment with your styles */\n'
		  	+' }\n'
			+' </style>\n'
			}else{
			androidV23 = '';       
		};

		if($('#applemail10').is(':checked')){
			applemail10  ='<style>\n'
			+'.Singleton .your-class-name {\n'
		  	+' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			applemail10 = '';       
		};

		if($('#applemail12').is(':checked')){
			applemail12  ='<style>\n'
			+'[class^="apple-mail"] .your-class-name {\n'
		  	+' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			applemail12 = '';       
		};

		if($('#applemail8').is(':checked')){
			applemail8  ='<style>\n'
			+'_:-webkit-full-screen, _::-webkit-full-page-media, _:future, :root .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			applemail8 = '';       
			};

		if($('#applemailipad').is(':checked')){
			applemailipad  ='<style>\n'
			+'@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) and (hover: none) {\n'
			+'  _:-webkit-full-screen, _::-webkit-full-page-media, _:future, :root body:not(.Singleton) .your-class-name {\n'
			    +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' }\n'
			+' </style>\n'
			}else{
			applemailipad = '';       
		};

		if($('#comcast').is(':checked')){
			comcast  = '<style>\n'
			+'.mail-detail-content .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
				comcast = '';       
		};

		if($('#edison').is(':checked')){
			edison  ='<style>\n'
			+'#edo-container .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
				edison = '';       
		};

		if($('#edisonandroid').is(':checked')){
			edisonandroid  =  '<style>\n'
			+'.edo-email-view .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
				edisonandroid = '';       
		};

		if($('#edisonios').is(':checked')){
			edisonios  = '<style>\n'
			+'.edo .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
				edisonios = '';       
		};

		if($('#freenet').is(':checked')){
			freenet  = '<style>\n'
			+'body[marginwidth][marginheight] .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
				freenet = '';       
		};

		if($('#freenet2').is(':checked')){
			freenet2 = 	'<style>\n'
			+' meta ~ * .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			freenet2 = '';       
		};

		if($('#gmail').is(':checked')){
			gmail  = '<style>\n' 

			+' u + .body .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			gmail = '';       
		};

		if($('#gmailmobile').is(':checked')){
			gmailmobile  = '<style>\n'
			+' @media screen and (max-width: 480px) {\n'
			+'  u + .body .gmailmobile {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' }\n'
			+' </style>\n'
			}else{
			gmailmobile = '';       
		};

		if($('#gmailandroid').is(':checked')){
			gmailandroid  = '<style>\n'
			+'div > u + .body .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			gmailandroid = '';       
		};

		if($('#ios10').is(':checked')){
			ios10  = '<style>\n'
			+'@supports (-webkit-overflow-scrolling:touch) and (color:#ffff) {\n'
			+'  .your-class-name {\n'
			    +' /* Replace this comment with your styles */\n'
			+'  }\n'
			+' }\n'
			+' </style>\n'
			}else{
			ios10 = '';       
		};

		if($('#ios13').is(':checked')){
			ios13  = '<style>\n'
			+' [class^="apple-mail"] .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			ios13 = '';       
		};

		if($('#ios15').is(':checked')){
			ios15  = '<style>\n'
			+'@supports (-webkit-overflow-scrolling:touch) and (aspect-ratio: 1 / 1) {\n'
			+'  .your-class-name {\n'
			    +' /* Replace this comment with your styles */\n'
			+'  }\n'
			+' }\n'
			+' </style>\n'
			}else{
			ios15 = '';       
		};

		if($('#libero').is(':checked')){
			libero  = '<style>\n'
			+'.mail-detail-content .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			libero = '';       
		};

		if($('#newton').is(':checked')){
			newton  = '<style>\n'
			+' #cm_mail_smart_body .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			newton = '';       
		};

		if($('#nine').is(':checked')){
			nine  = '<style>\n'
			+' .body > div > div > .wrapper .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			nine = '';       
		};

		if($('#notes').is(':checked')){
			notes  = '<style>\n'
			+' .unused.your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			notes = '';       
		};

		if($('#openxchange').is(':checked')){
			openxchange  = '<style>\n'
			+' .your-class-name[class^="ox-"] {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			openxchange = '';       
		};

		if($('#outlook').is(':checked')){
			outlook  = '<style>\n'
			+' <!--[if mso | ie]>\n'
			+' <td>ALL OUTLOOK</td>\n'
			+' <![endif]-->\n'

			+' <!--[if mso 9]>\n'
			+' <td>OUTLOOK 2000</td>\n'
			+' <![endif]-->\n'

			+' <!--[if  mso 10]>\n'
			+' <td>OUTLOOK 2002</td>\n'
			+' <![endif]-->\n'

			+' <!--[if  mso 11]>\n'
			+' <td>OUTLOOK 2003</td>\n'
			+' <![endif]-->\n'

			+' <!--[if mso 12 | mso 14 | mso 15 ]>\n'
			+' <td>OUTLOOK 2007/10/13</td>\n'
			+' <![endif]-->\n'

			+' <!--[if mso 12]>\n'
			+' <td>OUTLOOK 2007</td>\n'
			+' <![endif]-->\n'

			+' <!--[if mso 14]>\n'
			+' <td>OUTLOOK 2010</td>\n'
			+' <![endif]-->\n'

			+' <!--[if mso 15]>\n'
			+' <td>OUTLOOK 2013</td>\n'
			+' <![endif]-->\n'

			+' <!--[if mso 16]>\n'
			+' <td>OUTLOOK 2016</td>\n'
			+' <![endif]-->\n'

			+' <!--[if mso 16]>\n'
			+' <td>WINDOWS 10 MAIL</td>\n'
			+' <![endif]-->\n'
			+' }\n'
			+' </style>\n'
			}else{
			outlook = '';       
		};

		if($('#outlookdark').is(':checked')){
			outlookdark  = '<style>\n'
			+' [data-ogsc] .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			outlookdark = '';       
		};

		if($('#outlookmobile').is(':checked')){
			outlookmobile  = '<style>\n'
			+' .your-class-name\0{\n'
			 +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			outlookmobile = '';       
		};

		if($('#outlookmobile2').is(':checked')){
			outlookmobile2  = '<style>\n'
			+' .olm-fragment-custom .your-class-name {\n'
			 +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			outlookmobile2 = '';       
		};

		if($('#outlookmac').is(':checked')){
			outlookmac  = '<style>\n'
			+'_:-webkit-full-screen, _::-webkit-full-page-media, _:future, :root body:not(.Singleton) .your-class-name {\n'
			 +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			outlookmac = '';       
		};

		if($('#outlookpwa').is(':checked')){
			outlookpwa  = '<style>\n'
			+' @media (display-mode: standalone) {\n'
			+'   [class~=""x_your-class-name""] {\n'
			    +' /* Replace this comment with your styles */\n'
			+'   }\n'
			+' }\n'
			+' </style>\n'
			}else{
			outlookpwa = '';       
		};

		if($('#outlookweb').is(':checked')){
			outlookweb  = '<style>\n'
			+' [class~="x_your-class-name"] {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			outlookweb = '';       
		};

		if($('#samsung4').is(':checked')){
			samsung4  = '<style>\n'
			+' #secdiv .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			samsung4 = '';       
		};

		if($('#samsung5').is(':checked')){
			samsung5  = '<style>\n'
			+' meta ~ * .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			+' or\n'
			+' #MessageViewBody {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			+' or\n'
			+' .body > div > div > .wrapper .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			samsung5 = '';       
		};

		if($('#sapo').is(':checked')){
			sapo  = '<style>\n'
			+' body[style="overflow-y:hidden;width:auto !important; font-family: sans-serif"] .your-class-name {\n'
			+'   /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			sapo = '';       
		};

		if($('#seznam').is(':checked')){
			seznam  = '<style>\n'
			+' blockquote[data-color] + .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			seznam = '';       
		};

		if($('#spark').is(':checked')){
			spark  = '<style>\n'
			+' _:-webkit-full-screen, _::-webkit-full-page-media, _:future, :root .body:not(.Singleton) .your-class-name{\n'
			+'  /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			spark = '';       
		};

		if($('#sparkapps').is(':checked')){
			sparkapps  = '<style>\n'
			+' .c17637 .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			sparkapps = '';       
		};

		if($('#superhuman').is(':checked')){
			superhuman  = '<style>\n'
			+' .ShadowHTML .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			superhuman = '';       
		};

		if($('#thunderbird').is(':checked')){
			thunderbird  = '<style>\n'
			+' @media screen and (-moz-device-pixel-ratio) {\n'
			+'   .your-class-name {\n'
			    +' /* Replace this comment with your styles */\n'
			+'   }\n'
			+' }\n'
			+' </style>\n'
			}else{
			thunderbird = '';       
		};

		if($('#windowsphone').is(':checked')){
			windowsphone  = '<style>\n'
			+' _:-ms-input-placeholder, :root .your-class-name {\n'
			  +' * Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			windowsphone = '';       
		};

		if($('#windowsphone2').is(':checked')){
			windowsphone2  = '<style>\n'
			+' _:-ms-fullscreen, :root .your-class-name {\n'
			  +' /* Replace this comment with your styles */\n'
			+' }</style>\n'
			}else{
			windowsphone2 = '';       
		};
		if($('#yahoo').is(':checked')){
			yahoo  = '<style>\n'
			+' .your-class-name {\n'
			+'   background:/* red */;\n'
			+'   font-size: /* 50px */;\n'
			+'   color: /* white */;\n'
			+' }\n'
			+' </style>\n'
			}else{
			yahoo = '';       
		};

		if($('#yahoo2').is(':checked')){ 
			yahoo2  = '<style>\n'
			+' .&amp; .your-class-name {\n'
			   +' /* Replace this comment with your styles */\n'
			+' }\n'
			+' </style>\n'
			}else{
			yahoo2 = '';       
		};

		if($('#yahoo3').is(':checked')){
			yahoo3  = '<style>\n'
			+' .your-class-name { \n'
			+'   background: red !yahoo \n'
			+'}</style>\n'
			}else{
			yahoo3 = '';       
		}; 

		/***********************************************/
		/* Add code  */
		/*******************************************/


		
		

		var code = '<!DOCTYPE html>\n'
		+'<html lang="'+lang+'" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\n'
		+'<head>\n'
		+' <meta charset="utf-8">\n'
		+'  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n'
		+'  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">\n'
		+'  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">\n'
		+'  <meta name="x-apple-disable-message-reformatting">\n'
		+''+darkmodeMeta+'\n'
		+'<title>'+title+'</title>\n'
		+' <!--[if mso]>\n'
		+'  <noscript>\n'
		+'    <xml>\n'
		+'      <o:OfficeDocumentSettings>\n'
		+'        <o:PixelsPerInch>96</o:PixelsPerInch>\n'
		+'      </o:OfficeDocumentSettings>\n'
		+'    </xml>\n'
		+'  </noscript>\n'
		+'  <![endif]-->\n'
		+'<!-- CSS Reset : BEGIN -->\n'
		+'<!--[if (gte mso 9)|(IE)]>\n'
		+'<style>\n'
		+'table,td,p,a,span {font-family: Arial, sans-serif !important;}\n'
		+'a {text-decoration: none;}\n'
		+'</style>\n'
		+'<![endif]-->\n'
		+'<style>\n'
		+''+darkmodeRoot+'\n'
		+'html,\n'
		+'body {\n'
		+'  margin: 0 auto !important;\n'
		+'  padding: 0 !important;\n'
		+'  height: 100% !important;\n'
		+'  width: 100% !important;\n'
		+'}\n'
		+'/* center email on Android 4.4 - margin reset */\n'
		+'div[style*="margin: 16px 0"] {\n'
		+'  margin: 0 !important;\n'
		+'}\n'
		+'table,\n'
		+'td {\n'
		+'  mso-table-lspace: 0pt !important;\n'
		+'  mso-table-rspace: 0pt !important;\n'
		+'}\n'
		+'table {\n'
		+'  border-spacing: 0 !important;\n'
		+'  border-collapse: collapse !important;\n'
		+'  table-layout: fixed !important;\n'
		+'  margin: 0 auto !important;\n'
		+'  mso-table-lspace: 0;\n'
		+'  mso-table-rspace: 0;\n'
		+'}\n'
		+'/* La poste hack*/\n'
		+'h2,\n'
		+'h3 {\n'
		+'  padding: 0;\n'
		+'  margin: 0;\n'
		+'  border: 0;\n'
		+'  background: none;\n'
		+'}\n'
		+'</style>\n'
		+''+darkmodeCss+linkReset+one63+airmail+androidV23+applemail10+applemail12+applemail8+applemailipad+comcast+edison+edisonandroid+edisonios+freenet+freenet2+gmail+gmailmobile+gmailandroid+ios10+ios13+ios15+libero+newton+nine+notes+openxchange+outlook+outlookdark+outlookmobile+outlookmobile2+outlookmac+outlookpwa+outlookweb+samsung4+samsung5+sapo+seznam+spark+sparkapps+superhuman+thunderbird+windowsphone+windowsphone2+yahoo+yahoo2+yahoo3+'\n'
		+'<style>\n'
		+'  .m-content {\n'
		+'    display: none !important;\n'
		+'    max-height: none !important;\n'
		+'    mso-hide: all !important;\n'
		+'    height: 0 !important;\n'
		+'  }\n'
		+'</style>\n'
		+'<style>\n'
		+'  @media screen and (max-width: '+width+'px) {\n'
		+'    .d-content {\n'
		+'      display: none !important;\n'
		+'      height: 0 !important;\n'
		+'    }\n'
		+'    .m-content {\n'
		+'      display: block !important;\n'
		+'      width: auto !important;\n'
		+'      max-height: none !important;\n'
		+'      overflow: visible !important;\n'
		+'      height: 100% !important;\n'
		+'    }\n'
		+'    /*SPECIFIC CSS: BEGIN*/\n'
		+'    /*SPECIFIC CSS: END*/\n'
		+'  }\n'
		+'</style>\n'
		+'<style id="layout">\n'
		+'  .cc-half {\n'
		+'    width: 100% !important;\n'
		+'    max-width: 50% !important;\n'
		+'  }\n'
		+'  .cc-one-third {\n'
		+'    width: 100% !important;\n'
		+'    max-width: 30% !important;\n'
		+'  }\n'
		+'  .cc-two-third {\n'
		+'    width: 100% !important;\n'
		+'    max-width: 70% !important;\n'
		+'  }\n'
		+'  .cc-fourth {\n'
		+'    width: 100% !important;\n'
		+'    max-width: 25% !important;\n'
		+'  }\n'
		+'  @media screen and (max-width:'+width+'px) {\n'
		+'    .cc-half,\n'
		+'    .cc-one-third,\n'
		+'    .cc-two-third,\n'
		+'    .cc-fourth {\n'
		+'      width: 100% !important;\n'
		+'      max-width: '+width+'px !important;\n'
		+'    }\n'
		+'  }\n'
		+'</style>\n'
		+'<style>\n'
		+'  ul {\n'
		+'    padding-left: 17px;\n'
		+'  }\n'
		+'  ol {\n'
		+'    padding-left: 20px;\n'
		+'  }\n'
		+'</style>\n'
		+'</head>\n'
		+'<body xml:lang="'+lang+'" style="margin: 0 auto !important; padding: 0 !important;background-color: '+bgColor+';">\n'
		+'  <div role="article" aria-roledescription="email" aria-label="'+title+'" lang="'+lang+'" dir="ltr" style="width: 100%;background-color:'+bgColor+'">\n'
		+'      <!--[if (gte mso 9)|(IE)]>\n'
		+'    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: '+bgColor+';">\n'
		+'    <tr>\n'
		+'    <td>\n'
		+'    <![endif]-->  \n'
		+'    <div style="display:none;max-height:0;overflow:hidden">'+preheader+'&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
		+'    &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; \n'
		+'    &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; \n'
		+'    &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; \n'
		+'    &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; \n'
		+'    &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;\n'
		+'    &nbsp;</div>\n'
		+'    <div style="max-width:'+width+'px; margin: 0 auto;" class="email-container">\n'
		+'      <!--[if (gte mso 9)|(IE)]>\n'
		+'      <table align="center" border="0" cellspacing="0" cellpadding="0" width="'+width+'" role="presentation">\n'
		+'      <tr>\n'
		+'      <td align="center" valign="top">\n'
		+'      <![endif]-->\n'
		+'            <!-- Email Body : BEGIN -->\n'
		+'      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">\n'
		+'      </table>\n'
		+'      <!--[if (gte mso 9)|(IE)]>\n'
		+'      </td>\n'
		+'      </tr>\n'
		+'      </table>\n'
		+'      <![endif]-->\n'
		+'    </div>\n'
		+'    <!--[if (gte mso 9)|(IE)]>\n'
		+'    </td>\n'
		+'    </tr>\n'
		+'    </table>\n'
		+'    <![endif]-->\n'
		+'  </div>\n'
		+'</body>\n'
		+'</html>\n'

	code = safe_tags_replace(code);
		$('#output').html(code);		
	}
	 $(document).ready(function(){		
    build_email();
	$( "input, select" ).on('change',function() {
    build_email();
	});

	$('.component').on('click', function() {
		build_email();
	})
})