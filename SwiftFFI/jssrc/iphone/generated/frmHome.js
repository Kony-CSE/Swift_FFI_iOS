//Form JS File
function frmHome_button999296733483948_onClick_seq0(eventobject) {
    addition.call(this);
};

function frmHome_button999296733483983_onClick_seq0(eventobject) {
    substraction.call(this);
};

function frmHome_button999296733483987_onClick_seq0(eventobject) {
    multiplication.call(this);
};

function frmHome_button999296733487643_onClick_seq0(eventobject) {
    additionSwift.call(this);
};

function frmHome_button999296733487713_onClick_seq0(eventobject) {
    substractionSwift.call(this);
};

function frmHome_button999296733487731_onClick_seq0(eventobject) {
    multiplicationSwift.call(this);
};

function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var label999296733483874 = new kony.ui.Label({
        "height": "26dp",
        "id": "label999296733483874",
        "isVisible": true,
        "left": "5%",
        "skin": "lblWhile",
        "text": "FFI Integration with Kony Application",
        "top": "10%",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label999296733483875 = new kony.ui.Label({
        "height": "26dp",
        "id": "label999296733483875",
        "isVisible": true,
        "left": "5%",
        "skin": "lblGray",
        "text": "Number 1",
        "top": "18%",
        "width": "25%",
        "zIndex": 1
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label999296733483876 = new kony.ui.Label({
        "height": "26dp",
        "id": "label999296733483876",
        "isVisible": true,
        "left": "5%",
        "skin": "lblGray",
        "text": "Number 2",
        "top": "26.0%",
        "width": "25%",
        "zIndex": 1
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var textbox2999296733483877 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "tbx2Focus",
        "height": "26dp",
        "id": "textbox2999296733483877",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "35%",
        "placeholder": "Enter some number",
        "secureTextEntry": false,
        "skin": "txtWhite",
        "text": null,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "18%",
        "width": "60%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "leftViewImage": null,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var textbox2999296733483880 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "tbx2Focus",
        "height": "26dp",
        "id": "textbox2999296733483880",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "35%",
        "placeholder": "Enter some number",
        "secureTextEntry": false,
        "skin": "txtWhite",
        "text": null,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "26.0%",
        "width": "60%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "leftViewImage": null,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var button999296733483948 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "height": "30dp",
        "id": "button999296733483948",
        "isVisible": true,
        "left": "5%",
        "onClick": frmHome_button999296733483948_onClick_seq0,
        "skin": "btnWhite",
        "text": "Addition",
        "top": "35.0%",
        "width": "25%",
        "zIndex": 1
    }, {
        "containerWeight": 7,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label999296733483956 = new kony.ui.Label({
        "height": "30dp",
        "id": "label999296733483956",
        "isVisible": true,
        "left": "34.89%",
        "skin": "lblWhile",
        "text": null,
        "top": "35.0%",
        "width": "15%",
        "zIndex": 1
    }, {
        "containerWeight": 7,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var button999296733483983 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "height": "30dp",
        "id": "button999296733483983",
        "isVisible": true,
        "left": "5%",
        "onClick": frmHome_button999296733483983_onClick_seq0,
        "skin": "btnWhite",
        "text": "Sub",
        "top": "43.0%",
        "width": "25%",
        "zIndex": 1
    }, {
        "containerWeight": 7,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button999296733483987 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "height": "30dp",
        "id": "button999296733483987",
        "isVisible": true,
        "left": "5%",
        "onClick": frmHome_button999296733483987_onClick_seq0,
        "skin": "btnWhite",
        "text": "Mult",
        "top": "51.0%",
        "width": "25%",
        "zIndex": 1
    }, {
        "containerWeight": 7,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label999296733484003 = new kony.ui.Label({
        "height": "30dp",
        "id": "label999296733484003",
        "isVisible": true,
        "left": "34.89%",
        "skin": "lblWhile",
        "text": null,
        "top": "43.0%",
        "width": "15%",
        "zIndex": 1
    }, {
        "containerWeight": 7,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label999296733484007 = new kony.ui.Label({
        "height": "30dp",
        "id": "label999296733484007",
        "isVisible": true,
        "left": "34.89%",
        "skin": "lblWhile",
        "text": null,
        "top": "51.0%",
        "width": "15%",
        "zIndex": 1
    }, {
        "containerWeight": 7,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var button999296733487643 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "height": "30dp",
        "id": "button999296733487643",
        "isVisible": true,
        "onClick": frmHome_button999296733487643_onClick_seq0,
        "right": "5%",
        "skin": "btnWhite",
        "text": "Swift-Add",
        "top": "35.0%",
        "width": "25%",
        "zIndex": 1
    }, {
        "containerWeight": 7,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button999296733487713 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "height": "30dp",
        "id": "button999296733487713",
        "isVisible": true,
        "onClick": frmHome_button999296733487713_onClick_seq0,
        "right": "5%",
        "skin": "btnWhite",
        "text": "Swift-Sub",
        "top": "43.0%",
        "width": "25%",
        "zIndex": 1
    }, {
        "containerWeight": 7,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button999296733487731 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "height": "30dp",
        "id": "button999296733487731",
        "isVisible": true,
        "onClick": frmHome_button999296733487731_onClick_seq0,
        "right": "5%",
        "skin": "btnWhite",
        "text": "Swift-Mult",
        "top": "51.0%",
        "width": "25%",
        "zIndex": 1
    }, {
        "containerWeight": 7,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label999296733487815 = new kony.ui.Label({
        "height": "30dp",
        "id": "label999296733487815",
        "isVisible": true,
        "left": "52.0%",
        "skin": "lblWhile",
        "text": null,
        "top": "35.0%",
        "width": "15%",
        "zIndex": 1
    }, {
        "containerWeight": 7,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label999296733487855 = new kony.ui.Label({
        "height": "30dp",
        "id": "label999296733487855",
        "isVisible": true,
        "left": "52.0%",
        "skin": "lblWhile",
        "text": null,
        "top": "43.0%",
        "width": "15%",
        "zIndex": 1
    }, {
        "containerWeight": 0,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label999296733487941 = new kony.ui.Label({
        "height": "30dp",
        "id": "label999296733487941",
        "isVisible": true,
        "left": "52.0%",
        "skin": "lblWhile",
        "text": null,
        "top": "51.0%",
        "width": "15%",
        "zIndex": 1
    }, {
        "containerWeight": 0,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmHome.add(
    label999296733483874, label999296733483875, label999296733483876, textbox2999296733483877, textbox2999296733483880, button999296733483948, label999296733483956, button999296733483983, button999296733483987, label999296733484003, label999296733484007, button999296733487643, button999296733487713, button999296733487731, label999296733487815, label999296733487855, label999296733487941);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "bouncesZoom": true,
        "enabledForIdleTimeout": false,
        "enableScrolling": true,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "maxZoomScale": 1.0,
        "minZoomScale": 1.0,
        "needAppMenu": true,
        "pagingEnabled": false,
        "skin": "frmBGSkin",
        "title": null,
        "zoomScale": 1.0
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
};