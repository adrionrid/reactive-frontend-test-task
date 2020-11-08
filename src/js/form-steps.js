window.selectTab = selectTab;
window.nextTab = nextTab;

var currentTab = 0;
var tabClassName = "step";

setActive(currentTab);
function nextTab() {
  if (!validateForm()) {
    return false;
  }
  selectTab(++currentTab)
};

function selectTab(n) {
  currentTab = n;
  var x = document.getElementsByClassName(tabClassName);
  if (currentTab >= x.length) {
    return false;
  }
  setActive(currentTab);
};

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName(tabClassName);
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (!y[i].checkValidity()) {
      return false;
    }
  }
  return valid;
};

function setActive(tab) {
  var x = document.getElementsByClassName(tabClassName);
  for (i = 0; i < x.length; i++) {
    if(i < tab) {
      $(x[i]).removeClass("step--active");
      $(x[i]).removeClass("step--disabled");
      $(x[i]).addClass("step--success");
      $(x[i]).addClass("step--hide-content");
    } else if (i == tab) {
      $(x[i]).removeClass("step--disabled");
      $(x[i]).removeClass("step--success");
      $(x[i]).removeClass("step--hide-content");
      $(x[i]).addClass("step--active");
    } else if (i > tab) {
      $(x[i]).removeClass("step--active");
      $(x[i]).removeClass("step--success");
      $(x[i]).addClass("step--disabled");
      $(x[i]).addClass("step--hide-content");
    }
  }
};