jQuery(function(e){var t=function(){var t=nextgen_lightbox_filter_selector(e,e([]));t.addClass("shutterset"),window.shutterSettings={imageCount:!0,msgLoading:nextgen_shutter_i18n.msgLoading,msgClose:nextgen_shutter_i18n.msgClose},shutterReloaded.init()};e(this).bind("refreshed",t);var n="shutter";"undefined"==typeof e(window).data(n)&&(e(window).data(n,!0),t())});