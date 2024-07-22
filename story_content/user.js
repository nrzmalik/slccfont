function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6oFohzPTIIM":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function addCssToHead(cssRules) {
    var styleElement = document.createElement('style');
    styleElement.textContent = cssRules;
    document.head.appendChild(styleElement);
}

var css = `select {
  display: inline-block;
  padding: 4px 4px;
  font-size: 15px;
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #585858; 
  cursor: pointer;
  outline: none;
}

select option {
  padding: 10px 15px;
  font-size: 15px;
  color: #585858; 
  cursor: pointer;
}

select:focus {
  border-color: #007bff; 
}
   .view-phone #bottom-bar * {
    pointer-events: auto;
}
  `;

addCssToHead(css);

var fontFamilyLabel = document.createElement("label");
    fontFamilyLabel.textContent = "CC Font Family";
	 fontFamilyLabel.classList.add("switch-label");

    var fontFamilySelect = document.createElement("select");
    fontFamilySelect.id = "fontFamily";
    var fontFamilies = [
        "Arial",
        "Helvetica",
        "Times New Roman",
        "Verdana",
        "Georgia",
        "Palatino",
        "Garamond",
        "Courier New",
        "Brush Script MT"
    ];
    fontFamilies.forEach(function(fontFamily) {
        var option = document.createElement("option");
        option.value = fontFamily;
        option.textContent = fontFamily;
        fontFamilySelect.appendChild(option);
    });

    var fontSizeLabel = document.createElement("label");
    fontSizeLabel.textContent = "CC Font Size";
	fontSizeLabel.classList.add("switch-label");

    var fontSizeSelect = document.createElement("select");
    fontSizeSelect.id = "fontSize";
    var fontSizes = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72];
    fontSizes.forEach(function(fontSize) {
        var option = document.createElement("option");
        option.value = fontSize;
        option.textContent = fontSize;
        fontSizeSelect.appendChild(option);
    });
fontSizeSelect.value = "14";
    var shortcutsSwitch = document.querySelector('[data-ref="acctextSwitch"]');

	shortcutsSwitch.insertAdjacentHTML('afterend', '<br><br>');
	shortcutsSwitch.insertAdjacentElement('afterend', fontFamilySelect);
    shortcutsSwitch.insertAdjacentElement('afterend', fontFamilyLabel);
    shortcutsSwitch.insertAdjacentHTML('afterend', '<br><br>');
	shortcutsSwitch.insertAdjacentElement('afterend', fontSizeSelect);
    shortcutsSwitch.insertAdjacentElement('afterend', fontSizeLabel);
    
	

    fontFamilySelect.addEventListener("change", applyFont);
    fontSizeSelect.addEventListener("change", applyFont);
	
	function applyFont() {
    var selectedFont = document.getElementById("fontFamily").value;
    var selectedSize = document.getElementById("fontSize").value;

    var styleElement = document.createElement("style");
    styleElement.type = "text/css";

    var cssRule = ".caption { font-family: " + selectedFont + " !important; font-size: " + selectedSize + "px !important; }";

    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = cssRule;
    } else {
        styleElement.appendChild(document.createTextNode(cssRule));
    }

    var existingStyleElement = document.getElementById("fontStyle");
    if (existingStyleElement) {
        existingStyleElement.parentNode.removeChild(existingStyleElement);
    }

    styleElement.id = "fontStyle";

    document.head.appendChild(styleElement);
}

}

};
