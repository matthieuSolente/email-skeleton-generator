/***********************************************/
/* COPYRIGHT   */
/* **********************************************/
$(function () {
 thisyear = new Date().getFullYear();
 $('#year').text(thisyear);
});
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
'gmail' : $('#target13'),
'gmailmobile' : $('#target14'),
'gmailandroid' :$('#target15'),
'ios10' : $('#target16'),
'ios13' : $('#target17'),
'ios15' : $('#target18'),
'libero' : $('#target19'),
'newton' : $('#target20'),
'nine' : $('#target21'),
'notes' : $('#target22'),
'openxchange' : $('#target23'),
'outlook' :  $('#target24'),
'outlookdark' : $('#target25'),
'outlookmobile' : $('#target26'),
'outlookmobile2' : $('#target27'),
'outlookmac' : $('#target28'),
'outlookpwa' : $('#target29'),
'outlookweb' : $('#target30'),
'postbox' : $('#target31'),
'roundcube' : $('#target32'),
'samsung4' : $('#target33'),
'samsung5' : $('#target34'),
'sapo' : $('#target35'),
'seznam' : $('#target36'),
'spark' : $('#target37'),
'sparkapps' : $('#target38'),
'superhuman' : $('#target39'),
'tonline' : $('#target40'),
'thunderbird' : $('#target41'),
'windowsphone' : $('#target42'),
'yahoo' : $('#target43'),
'yahoo2' : $('#target44'),
};
$('#search').change(function() {
	$.each($.viewMap, function() { this.hide(); });
	$.viewMap[$(this).val()].show();
});
/***********************************************/
/* BUILDING PREVIEW COMPONENT   */
/* **********************************************/
var component_list = [];
var desktop = $(".desktop");

function build_component(type) {
	var controls = '<span class="controls glyphicon glyphicon-arrow-up move-up"></span><span class="controls glyphicon glyphicon-arrow-down move-down"></span><span class="controls glyphicon glyphicon-trash trash"></span>';
	switch (type) {
		case "add-one-row" :
			return '<div class="components full-width component-preview" data-component-type="add-one-row"><div class="delete-this">'+controls+'</div><div class="component-one-column"><div class="component-inner"></div></div></div>';
			break;
		case "add-two-columns" :
			return '<div class="components component-preview" data-component-type="add-two-columns"><div class="delete-this">'+controls+'</div><div class="component-two-column"><div class="component-inner"></div></div><div class="component-two-column"><div class="component-inner"></div></div></div>';
			break;
		case "add-three-columns" :
			return '<div class="components three-col component-preview" data-component-type="add-three-columns"><div class="delete-this">'+controls+'</div><div class="component-three-column"><div class="component-inner"></div></div><div class="component-three-column"><div class="component-inner"></div></div><div class="component-three-column"><div class="component-inner"></div></div></div>';
			break;
		case "add-one-third-columns" :
			return '<div class="components sidebar component-preview" data-component-type="add-one-third-columns"><div class="delete-this">'+controls+'</div><div class="component-one-third-column"><div class="component-inner"></div></div><div class="component-two-third-column"><div class="component-inner"></div></div></div>';
			break;
		case "add-two-third-columns" :
			return '<div class="components sidebar component-preview" data-component-type="add-two-third-columns"><div class="delete-this">'+controls+'</div><div class="component-two-third-column"><div class="component-inner"></div></div><div class="component-one-third-column"><div class="component-inner"></div></div></div>';
			break;
		case "add-four-columns-one" :
			return '<div class="components four-col  component-preview" data-component-type="add-four-columns-one"><div class="delete-this">'+controls+'</div><div class="component-four-column-one"><div class="component-inner"></div></div><div class="component-four-column-one"><div class="component-inner"></div></div><div class="component-four-column-one"><div class="component-inner"></div></div><div class="component-four-column-one"><div class="component-inner"></div></div></div>';
			break;
		case "add-four-columns-two" :
			return '<div class="components four-col component-preview" data-component-type="add-four-columns-two"><div class="delete-this">'+controls+'</div><div class="component-four-column-two"><div class="component-inner"></div></div><div class="component-four-column-two"><div class="component-inner"></div></div><div class="component-four-column-one"><div class="component-inner"></div></div><div class="component-four-column-one"><div class="component-inner"></div></div></div>';
			break;		
	}
}
/***********************************************/
/* SHOW CONTROLS ON HOVER   */
/* **********************************************/
$(document).on('mouseenter', ".component-preview", function() {
	var this_index = $(this).index();
	var desktop_index = $(".desktop").children().eq(this_index);
	desktop_index.children(".delete-this").css("display", "flex");
	check_controls($(this));
});
$(document).on('mouseleave', ".component-preview", function() {
	var this_index = $(this).index();
	var desktop_index = $(".desktop").children().eq(this_index);
	desktop_index.children(".delete-this").css("display", "none");
	$(this).find(".controls").each(function() {
		$(this).css("display", "none");
	});
});
/***********************************************/
/* PLACE TRASH CONTROL ON COMPONENTS   */
/* **********************************************/
function check_controls(component) {
	var this_index = component.index();
	var total_components = component_list.length;
	component.find(".trash").css("display", "inline-block");
}
/***********************************************/
/* TRASH AND DRAG ACTION   */
/* **********************************************/
$(document).on("click", ".controls", function(e){
	e.stopPropagation();
	var desktop = $(".desktop");
	var this_index = $(this).parents(".components").index();
	var d_clone = desktop.children().eq(this_index);
	desktop.children().eq(this_index).remove();
	if ($(this).hasClass("trash")) {
		var trashed_item = component_list.splice(this_index, 1);
		rebuild_component_list();build_email();
	}
});
$(".desktop").dad();
$(".desktop").on("dadDrop", function (e, targetElement) {
	rebuild_component_list();
})
/***********************************************/
/* REBUILD COMPONENT LIST   */
/* **********************************************/
function rebuild_component_list(){
	var desktop = $(".desktop");
	component_list = [];
	desktop.children(".components").each(function(){
		var this_type = $(this).attr("data-component-type");
		component_list.push(this_type);
		build_email();
	});	
}
/***********************************************/
/* CLICK ACTION ON BUTTONS   */
/* **********************************************/
$(".component").on("click", function() {
	var desktop = $(".desktop");
	var this_id = $(this).attr("id");
	var html = build_component(this_id)
	desktop.append(html);
	rebuild_component_list();
	build_email();
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
var lang,title,preheader,width,bgColor,showHide,
desktop,mobile,darkmodeMeta,darkmodeRoot,darkmodeCss, 
linkReset,janimation,layout,one63,airmail,androidV23,applemail10,
applemail12,applemail8,applemailipad,comcast,edison,edisonandroid,
edisonios,freenet,gmail,gmailmobile,gmailandroid,ios10,ios13,ios15,libero,
newton,nine,notes,openxchange,outlook,outlookdark,outlookmobile,outlookmobile2,outlookmac,outlookpwa,
outlookweb,postbox,roundcube,samsung4,samsung5,sapo,seznam,spark,sparkapps,superhuman,tonline,thunderbird,
windowsphone,yahoo,yahoo2;

function build_email(all_components) {
	lang=$('#lang').val();
	title=$('#title').val();
	preheader=$('#preheader').val();
	width=$('#width').val();
	bgColor=$('#bgColor').val();
	contentAreabgColor=$('#contentAreaBgColor').val();
	desktop=$('#desktop').val();
	mobile=$('#mobile').val();
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
			darkmodeMeta='';
			darkmodeRoot='';
			darkmodeCss='';
	};
	if($('#showHide').is(':checked')){
		showHide ='<style id="showHide">\n'				
				+'@media screen and (max-width:'+width+'px) {\n'
				+'	.'+desktop+' {\n'
				+'  		display: none !important;\n'
				+'  		height: 0 !important;\n'
				+'	}\n'
				+'	.'+mobile+' {\n'
				+'	  display: block !important;\n'
				+'	  width: auto !important;\n'
				+'	  max-height: none !important;\n'
				+'	  overflow: visible !important;\n'
				+'	  height: 100% !important;\n'
				+'	}\n'
				+'}\n'
				+'</style>\n';
				$('#showHideClass').show();
	}else{
			showHide = '';
			$('#showHideClass').hide();	
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
					+' .ms-outlook-linkify{\n'
					+' color: inherit !important;\n'
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
	if($('#janimation').is(':checked')){
		janimation='<style>\n'
					+'[data-markjs]{\n'
					+'  color:inherit;\n'
					+'  padding:0;\n'
					+'  background:none;\n'
					+'}\n'
					+'</style>\n'
	}else{
		janimation='';
	}
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
		+'@media screen and (min-width:0\\0) {\n'
	  	+'.your-class-name {\n'
	    +' /* Replace this comment with your styles */\n'
	  	+' }\n'
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
		+'/*or*/\n'
		+'#msgBody .your-class-name {\n'
		+'  /* Replace this comment with your styles */\n'
		+'}\n'
		+'/*or*/\n'
		+' meta ~ * .your-class-name {\n'
		+' /* Replace this comment with your styles */\n'
		+' }\n'
		+'/*or*/\n'
		+'title ~ * .your-class-name {\n'
		+' /* Replace this comment with your styles */\n'
		+'}\n'
		+' </style>\n'
		}else{
			freenet = '';       
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
		+' ALL OUTLOOK\n'
		+' <![endif]-->\n'

		+' <!--[if mso 9]>\n'
		+' OUTLOOK 2000\n'
		+' <![endif]-->\n'

		+' <!--[if  mso 10]>\n'
		+' OUTLOOK 2002\n'
		+' <![endif]-->\n'

		+' <!--[if  mso 11]>\n'
		+' OUTLOOK 2003\n'
		+' <![endif]-->\n'

		+' <!--[if mso 12 | mso 14 | mso 15 ]>\n'
		+' OUTLOOK 2007/10/13\n'
		+' <![endif]-->\n'

		+' <!--[if mso 12]>\n'
		+' OUTLOOK 2007\n'
		+' <![endif]-->\n'

		+' <!--[if mso 14]>\n'
		+' OUTLOOK 2010\n'
		+' <![endif]-->\n'

		+' <!--[if mso 15]>\n'
		+' OUTLOOK 2013\n'
		+' <![endif]-->\n'

		+' <!--[if mso 16]>\n'
		+' OUTLOOK 2016\n'
		+' <![endif]-->\n'

		+' <!--[if mso 16]>\n'
		+' <td>WINDOWS 10 MAIL\n'
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
		+' .your-class-name\\0{\n'
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
		+' .#converted-body .your-class-name {\n'
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
	if($('#postbox').is(':checked')){
		postbox  = '<style>\n'
		+' .moz-text-html .your-class-name {\n'
		+' /* Replace this comment with your styles */\n'
		+'}\n'
		+' </style>\n'
		}else{
		postbox = '';       
	};
		if($('#roundcube').is(':checked')){
		roundcube  = '<style>\n'
		+' #message-htmlpart1 div.rcmBody .v1your-class-name {\n'
		+' /* Replace this comment with your styles */\n'
		+'}\n'
		+' </style>\n'
		}else{
		roundcube = '';       
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
		+' /*or*/\n'
		+' title ~ * .your-class-name {\n'
		+' /* Replace this comment with your styles */\n'
		+'}\n'
		+' /*or*/\n'
		+'#MessageViewBody {\n'
		+'  /* Replace this comment with your styles */\n'
		+'}\n'
		+' /*or*/\n'
		+'.body > div > div > .wrapper .your-class-name {\n'
		+'  /* Replace this comment with your styles */\n'
		+'}\n'
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
		+' /*or*/\n'
		+'.-wm-your-class-name {\n'
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
	if($('#tonline').is(':checked')){
		tonline  = '\n'
		+'<!--[if tonline]> T-Online <![endif]-->\n'
		+'<!--[if false]> T-Online <![endif]-->\n'
		+'<!--[if !true]> T-Online <![endif]-->\n'
		}else{
		tonline = '';       
	};
	if($('#thunderbird').is(':checked')){
		thunderbird  = '<style>\n'
		+' @media screen and (-moz-device-pixel-ratio) {\n'
		+'   .your-class-name {\n'
		    +' /* Replace this comment with your styles */\n'
		+'   }\n'
		+' }\n'
		+'/*or*/\n'
		+'.moz-text-html .your-class-name {\n'
		+'  /* Replace this comment with your styles */\n'
		+'}\n'
		+' </style>\n'
		}else{
		thunderbird = '';       
	};
	if($('#windowsphone').is(':checked')){
		windowsphone  = '<style>\n'
		+' _:-ms-input-placeholder, :root .your-class-name {\n'
		  +' * Replace this comment with your styles */\n'
		+' }\n'
		+'/*or*/\n'
		+'_:-ms-fullscreen, :root .your-class-name {\n'
		+'  /* Replace this comment with your styles */\n'
		+'}\n'
		+' </style>\n'
		}else{
		windowsphone = '';       
	};
	if($('#yahoo').is(':checked')){
		yahoo  = '<style>\n'
		+' .your-class-name {\n'
		+'   background:/* red */;\n'
		+'   font-size: /* 50px */;\n'
		+'   color: /* white */;\n'
		+' }\n'
		+'/*or*/\n'
		+'.& .your-class-name {\n'
		+'  /* Replace this comment with your styles */\n'
		+'}\n'
		+' </style>\n'
		}else{
		yahoo = '';       
	};
	if($('#yahoo2').is(':checked')){
		yahoo2  = '<style>\n'
		+' .your-class-name { \n'
		+'   background: red !yahoo \n'
		+'} \n'
		+'</style>\n'
		}else{
		yahoo2 = '';       
	};
	if($('.desktop').html() !=''){
		layout='\n'
+'<style id="layout">\n'
+' .cc-half {\n'
+' 	width: 100% !important;\n'
+' 	max-width: 50% !important;\n'
+' }\n'
+' .cc-one-third {\n'
+' 	width: 100% !important;\n'
+' 	max-width: 33.3% !important;\n'
+' }\n'
+' .cc-two-third {\n'
+' 	width: 100% !important;\n'
+' 	max-width: 66.6% !important;\n'
+' }\n'
+' .cc-fourth {\n'
+' 	width: 100% !important;\n'
+' 	max-width: 25% !important;\n'
+' }\n'
+' @media screen and (max-width:'+width+'px) {\n'
+' 	.cc-half,\n'
+' 	.cc-one-third,\n'
+' 	.cc-two-third,\n'
+' 	.cc-fourth {\n'
+'		width: 100% !important;\n'
+' 		max-width: '+width+'px !important;\n'
+'	}\n'
+' }\n'
+'</style>\n'
	}else{
		layout='';
	}
	/***********************************************/
	/* Add code  */
	/*******************************************/
		var add_one_row= '\n'
+'		<!-----------------> \n'
+'		<!-- 1 COL STart -->\n'
+'		<!-----------------> \n'
+'		<tr>\n'
+'			<td style="font-size:0">\n'
+'  			<!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="'+width+'" role="presentation"><tr><td><![endif]-->\n'
+'			<table role="presentation" border="0" cellspacing="0" cellpadding="0" style="width:100%">\n'
+'		    	<tr>\n'
+'		        	<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'		          		<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'		        	</td>\n'
+'				</tr>\n'
+'			</table>\n'
+'			<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->\n'
+'  		</td>\n'
+'		</tr>\n'
+'		<!-----------------> \n'
+'		<!-- 1 COL End -->\n'
+'		<!-----------------> \n';
		 var add_two_columns= '\n'
+'		<!-----------------> \n'
+'		<!-- 2 COLS start -->\n'
+'		<!----------------->\n'
+'		<tr>\n'
+'  		<td style="font-size:0">\n'
+'  		<!--[if (gte mso 9)|(IE)]><table role="presentation" border="0" cellspacing="0" cellpadding="0" width="'+width+'"><tr><td valign="top" width="50%"><![endif]-->\n'
+'    		<div style="display:inline-block; margin:0; width:100%; min-width:200px; vertical-align:top;" class="cc-half">\n'
+'      		<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\n'
+'        			<tr>\n'
+'        				<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'          				<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'        				</td>\n'
+'        			</tr>\n'
+'      		</table>\n'
+'    		</div>\n'
+'  		<!--[if (gte mso 9)|(IE)]></td><td valign="top" width="50%"><![endif]-->\n'
+'    		<div style="display:inline-block; margin:0; width:100%; min-width:200px; vertical-align:top;" class="cc-half">\n'
+'      		<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\n'
+'        			<tr>\n'
+'        				<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'          				<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'        				</td>\n'
+'        			</tr>\n'
+'      		</table>\n'
+'    		</div>\n'
+'  		<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->\n'
+'  		</td>\n'
+'		</tr>\n'
+'		<!-----------------> \n'
+'		<!-- 2 COLS end -->\n'
+'		<!----------------->\n';
		var add_one_third_columns= '\n'
+'		<!-----------------> \n'
+'		<!-- 2 COLS 1/3 START -->\n'
+'		<!-----------------> \n'
+'		<tr>\n'
+'  		<td style="font-size:0">\n'
+'  		<!--[if (gte mso 9)|(IE)]><table role="presentation" border="0" cellspacing="0" cellpadding="0" width="'+width+'"><tr><td valign="top" width="33.3%"><![endif]-->\n'
+'    		<div style="display:inline-block; margin:0; width:100%; min-width:160px;vertical-align:top;" class="cc-one-third">\n'
+'      		<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\n'
+'        			<tr>\n'
+'        				<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'          				<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'        				</td>\n'
+'        			</tr>\n'
+'      		</table>\n'
+'    		</div>\n'
+'    		<!--[if (gte mso 9)|(IE)]></td><td valign="top" width="66.6%"><![endif]-->\n'
+'    		<div style="display:inline-block; margin:0; width:100%; min-width:200px;vertical-align:top;" class="cc-two-third">\n'
+'      		<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\n'
+'        			<tr>\n'
+'        				<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'          				<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'        				</td>\n'
+'        			</tr>\n'
+'      		</table>\n'
+'    		</div>\n'
+'    		<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->\n'
+'  		</td>\n'
+'		</tr>\n'
+'		<!-----------------> \n'
+'		<!-- 2 COLS 1/3 END -->\n'
+'		<!-----------------> \n';	
	 	var add_two_third_columns= '\n'
+'		<!-----------------> \n'
+'		<!-- 2 COLS 3/1 START -->\n'
+'		<!-----------------> \n'
+'		<tr>\n'
+'  		<td style="font-size:0">\n'
+'    			<table cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;">\n'
+'      			<tr>\n'
+'        				<td dir="rtl">\n'
+'          			<!--[if (gte mso 9)|(IE)]><table role="presentation" border="0" cellspacing="0" cellpadding="0" style="width:"'+width+'"><tr><td align="left" valign="top" width="33.3%"><![endif]-->\n'
+'          			<div style="display:inline-block;margin:0; width:100%; min-width:160px; vertical-align:top;padding:0;border:0" class="cc-one-third">\n'
+'            				<table dir="ltr" align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\n'
+'              				<tr>\n'
+'               					<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'                						<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'                					</td>\n'
+'              				</tr>\n'
+'            				</table>\n'
+'          			</div>\n'
+'          			<!--[if (gte mso 9)|(IE)]></td><td valign="top" align="left" width="66.6%"><![endif]-->\n'
+'          			<div style="display:inline-block; margin:0; width:100%; min-width:200px; vertical-align:top;padding:0;border:0" class="cc-two-third">\n'
+'            				<table dir="ltr" align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\n'
+'              				<tr>\n'
+'               					<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'                						<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'                					</td>\n'
+'              				</tr>\n'
+'            				</table>\n'
+'          			</div>\n'
+'        				<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->\n'
+'        				</td>\n'
+'      			</tr>\n'
+'    			</table>\n'
+'  		</td>\n'
+'		</tr>\n'
+'		<!-----------------> \n'
+'		<!-- 2 COLS 3/1 END -->\n'
+'		<!-----------------> \n';
		var add_three_columns= '\n'
+'		<!-----------------> \n'
+'		<!-- 3 COLS START -->\n'
+'		<!-----------------> \n'
+'		<tr>\n'
+'  		<td style="font-size:0">\n'
+'    		<!--[if (gte mso 9)|(IE)]><table role="presentation" border="0" cellspacing="0" cellpadding="0" width="'+width+'"><tr><td valign="top" width="33.3%"><![endif]-->\n'
+'    		<div style="display:inline-block; margin:0; width:100%; min-width:160px;vertical-align:top;" class="cc-one-third">\n'
+'      		<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\n'
+'        			<tr>\n'
+'           			<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'            				<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'            			</td>\n'
+'        			</tr>\n'
+'      		</table>\n'
+'    		</div>\n'
+'    		<!--[if (gte mso 9)|(IE)]></td><td valign="top" width="33.3%"><![endif]-->\n'
+'    		<div style="display:inline-block; margin:0; width:100%; min-width:160px;vertical-align:top;" class="cc-one-third">\n'
+'      		<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\n'
+'        			<tr>\n'
+'          			<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'           				<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'          			</td>\n'
+'        			</tr>\n'
+'      		</table>\n'
+'			</div>\n'
+'    		<!--[if (gte mso 9)|(IE)]></td><td valign="top" width="33.3%"><![endif]-->\n'
+'    		<div style="display:inline-block; margin:0; width:100%; min-width:160px;vertical-align:top;" class="cc-one-third">\n'
+'      		<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\n'
+'        			<tr>\n'
+'          			<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'           				<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'          			</td>\n'
+'        			</tr>\n'
+'      		</table>\n'
+'    		</div>\n'
+'    		<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->\n'
+'			</td>\n'
+'		</tr>\n'
+'		<!-----------------> \n'
+'		<!-- 3 COLS END -->\n'
+'		<!-----------------> \n'; 		
	 	var add_four_columns_one= '\n'
+'		<!-----------------> \n'
+'		<!-- 4 COLS 100% on mobile start-->\n'
+'		<!----------------->  \n'
+'		<tr>\n'
+'  		<td style="font-size:0">\n'
+'  		<!--[if (gte mso 9)|(IE)]><table role="presentation" border="0" cellspacing="0" cellpadding="0" width="'+width+'"><tr><td valign="top" width="25%"><![endif]-->\n'
+'    		<div style="display:inline-block; margin:0; min-width:120px; vertical-align:top; width:100%;" class="cc-fourth">\n'
+'      		<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\n'
+'        			<tr>\n'
+'          			<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'           				<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'          			</td>\n'
+'        			</tr>\n'
+'      		</table>\n'
+'    		</div>\n'
+'  		<!--[if (gte mso 9)|(IE)]></td><td valign="top" width="25%"><![endif]-->\n'
+'    		<div style="display:inline-block; margin:0; min-width:120px; vertical-align:top; width:100%;" class="cc-fourth">\n'
+'      		<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\n'
+'        			<tr>\n'
+'          			<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'           				<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'          			</td>\n'
+'        			</tr>\n'
+'      		</table>\n'
+'    		</div>\n'
+'    		<!--[if (gte mso 9)|(IE)]></td><td valign="top" width="25%"><![endif]-->\n'
+'    		<div style="display:inline-block; margin:0; min-width:120px; vertical-align:top; width:100%;" class="cc-fourth">\n'
+'      		<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\n'
+'        			<tr>\n'
+'          			<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'           				<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'          			</td>\n'
+'        			</tr>\n'
+'      		</table>\n'
+'    		</div>\n'
+'    		<!--[if (gte mso 9)|(IE)]></td><td valign="top" width="25%"><![endif]-->\n'
+'    		<div style="display:inline-block; margin:0; min-width:120px; vertical-align:top; width:100%;" class="cc-fourth">\n'
+'      		<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">\n'
+'        			<tr>\n'
+'          			<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'           				<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'          			</td>\n'
+'        			</tr>\n'
+'      		</table>\n'
+'    		</div>\n'
+'  		<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->\n'
+'  		</td>\n'
+'		</tr>\n'
+'		<!-----------------> \n'
+'		<!-- 4 COLS 100% on mobile end-->\n'
+'		<!-----------------> \n';
		var add_four_columns_two= '\n'
+'		<!-----------------> \n'
+'		<!-- 4 COLS 50% ON MOBILE start-->\n'
+'		<!-----------------> \n'
+'		<tr>\n'
+'  		<td style="font-size:0">\n'
+'  		<!--[if (gte mso 9)|(IE)]><table role="presentation" border="0" cellspacing="0" cellpadding="0" width="'+width+'"><tr><td valign="top" width="50%"><![endif]-->\n'
+'    		<div style="display:inline-block; margin: 0 -1px; min-width:120px; vertical-align:top; width:100%;" class="cc-half">\n'
+'      		<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%">\n'
+'        			<tr>\n'
+'          			<td align="center">\n'
+'            			<!--[if (gte mso 9)|(IE)]><table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"><tr><td valign="top" width="50%"><![endif]-->\n'
+'            			<div style="display:inline-block; margin: 0 -1px; max-width: 50%; min-width:120px; vertical-align:top; width:100%;">\n'
+'              			<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\n'
+'                				<tr>\n'
+'          						<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'           							<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'          						</td>\n'
+'                				</tr>\n'
+'              			</table>\n'
+'            			</div>\n'
+'            			<!--[if (gte mso 9)|(IE)]></td><td valign="top" width="50%"><![endif]-->\n'
+'            			<div style="display:inline-block; margin: 0 -1px; max-width: 50%; min-width:120px; vertical-align:top; width:100%;">\n'
+'              			<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%">\n'
+'                				<tr>\n'
+'          						<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'           							<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'          						</td>\n'
+'                				</tr>\n'
+'              			</table>\n'
+'            			</div>\n'
+'          			<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->\n'
+'          			</td>\n'
+'        			</tr>\n'
+'      		</table>\n'
+'    		</div>\n'
+'    		<!--[if (gte mso 9)|(IE)]></td><td valign="top" width="50%"><![endif]-->\n'
+'    		<div style="display:inline-block; margin: 0 -1px; min-width:120px; vertical-align:top; width:100%;" class="cc-half">\n'
+'      		<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%">\n'
+'        			<tr>\n'
+'          			<td>\n'
+'          			<!--[if (gte mso 9)|(IE)]><table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"><tr><td valign="top" width="50%"><![endif]-->\n'
+'            			<div style="display:inline-block; margin: 0 -1px; max-width:50%; min-width:120px; vertical-align:top; width:100%;">\n'
+'              			<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%">\n'
+'                				<tr>\n'
+'          						<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'           							<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'          						</td>\n'
+'                				</tr>\n'
+'              			</table>\n'
+'            			</div>\n'
+'            			<!--[if (gte mso 9)|(IE)]></td><td valign="top" width="50%"><![endif]-->\n'
+'            			<div style="display:inline-block; margin: 0 -1px; max-width: 50%; min-width:120px; vertical-align:top; width:100%;">\n'
+'              			<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%">\n'
+'                				<tr>\n'
+'          						<td style="font-family:Arial,sans-serif;font-size:14px;color:#000000;padding:10px">\n'
+'           							<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n'
+'          						</td>\n'
+'                				</tr>\n'
+'              			</table>\n'
+'            			</div>\n'
+'            			<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->\n'
+'          			</td>\n'
+'        			</tr>\n'
+'      		</table>\n'
+'    		</div>\n'
+'  		<!--[if (gte mso 9)|(IE)]></td></tr></table>\n'
+'  		<![endif]-->\n'
+'  		</td>\n'
+'		</tr>\n'
+'		<!-----------------> \n'
+'		<!-- 4 COLS 100% ON MOBILE end-->\n'
+'		<!-----------------> \n';
		

	
		var code = '\n'
+'<!DOCTYPE html>\n'
+'<html lang="'+lang+'" dir="ltr" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\n'
+'<head>\n'
+'<meta charset="utf-8">\n'
+'<meta http-equiv="X-UA-Compatible" content="IE=edge">\n'
+'<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">\n'
+'<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">\n'
+'<meta name="x-apple-disable-message-reformatting">\n'
+''+darkmodeMeta+'\n'
+'<title>'+title+'</title>\n'
+'<!--[if mso]>\n'
+'<noscript>\n'
+'	<xml>\n'
+'	<o:OfficeDocumentSettings>\n'
+'	<o:PixelsPerInch>96</o:PixelsPerInch>\n'
+'	</o:OfficeDocumentSettings>\n'
+' 	</xml>\n'
+'</noscript>\n'
+'<![endif]-->\n'
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
+' 	margin: 0 auto !important;\n'
+' 	padding: 0 !important;\n'
+' 	height: 100% !important;\n'
+' 	width: 100% !important;\n'
+'}\n'
+'div[style*="margin: 16px 0"] {\n'
+' 	margin: 0 !important;\n'
+'}\n'
+'table,\n'
+'td {\n'
+' 	mso-table-lspace: 0pt !important;\n'
+' 	mso-table-rspace: 0pt !important;\n'
+'}\n'
+'table {\n'
+' 	border-spacing: 0 !important;\n'
+' 	border-collapse: collapse !important;\n'
+' 	table-layout: fixed !important;\n'
+' 	margin: 0 auto !important;\n'
+' 	mso-table-lspace: 0;\n'
+' 	mso-table-rspace: 0;\n'
+'}\n'
+'</style>\n'
+''+layout+'\n'
+''+darkmodeCss+linkReset+showHide+janimation+one63+airmail+androidV23+applemail10+applemail12+applemail8+applemailipad+comcast+edison+edisonandroid+edisonios+freenet+gmail+gmailmobile+gmailandroid+ios10+ios13+ios15+libero+newton+nine+notes+openxchange+outlook+outlookdark+outlookmobile+outlookmobile2+outlookmac+outlookpwa+outlookweb+postbox+roundcube+samsung4+samsung5+sapo+seznam+spark+sparkapps+superhuman+tonline+thunderbird+windowsphone+yahoo+yahoo2+'\n'
+'</head>\n'
+'<body style="margin: 0 auto !important; padding: 0 !important;word-spacing:normal;background-color: '+bgColor+';">\n'
+' 	<div role="article" aria-roledescription="email" aria-label="'+title+'" lang="'+lang+'" dir="ltr" style="width: 100%;background-color:'+bgColor+'">\n'
+' 	<!--[if (gte mso 9)|(IE)]><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: '+bgColor+';"><tr><td><![endif]-->\n'
+' 	<div style="display:none;max-height:0;overflow:hidden">'+preheader+'&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+' 	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+' 	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+' 	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+' 	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+' 	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+' 	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+' 	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+' 	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+' 	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+' 	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+' 	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+' 	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+'	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+'	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+'	&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;\n'
+'	&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; \n'
+'	&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; \n'
+'	&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; \n'
+'	&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; \n'
+'	&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;\n'
+'	&nbsp;</div>\n'
+'	<div style="max-width:'+width+'px; margin: 0 auto;" class="email-container">\n'
+' 	<!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="'+width+'" role="presentation"><tr><td align="center" valign="top"><![endif]-->\n'
+'	<!-- Email Body : BEGIN -->\n'
+' 		<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;background-color:'+contentAreabgColor+'">\n'
var total_components = component_list.length;
for (var i = 0; i <= total_components - 1; i++) {
	switch (component_list[i]) {
		case "add-one-row" :
		code += add_one_row;
		break;
		case "add-two-columns" :
		code += add_two_columns;
		break;
		case "add-one-third-columns" :
		code += add_one_third_columns;
		break;
		case "add-two-third-columns" :
		code += add_two_third_columns;
		break;
		case "add-three-columns" :
		code += add_three_columns;
		break;
		case "add-four-columns-one" :
		code += add_four_columns_one;
		break;
		case "add-four-columns-two" :
		code += add_four_columns_two;
		break;
	}
}
	code +='\n'
+'		</table>\n'
+' 	<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->\n'
+' 	</div>\n'
+' 	<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->\n'
+' 	</div>\n'
+'	</body>\n'
+'</html>\n'
	code = safe_tags_replace(code);
		$('#output').html(code);		
}build_email();

$(document).ready(function(){
	build_email();
})
$('input,select').on('change',function(){
	build_email();
})
 $('.component').on('click',function(){   
   $('aside').animate({scrollTop: $('aside').prop("scrollHeight")}, 300);
});
