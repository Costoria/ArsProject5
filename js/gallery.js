(function () {
  "use strict";

  const ORIGINAL_TEXT = "Hover over or focus on an image below to display here.";
  const ORIGINAL_BG = "url('')";

  function upDate(previewPic) {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.textContent = previewPic.alt;
  }

  function unDo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = ORIGINAL_BG;
    imageDiv.textContent = ORIGINAL_TEXT;
  }

  function addTabFocus() {
    console.log("onload: addTabFocus triggered ✅");

    const previews = document.querySelectorAll(".preview");
    for (let i = 0; i < previews.length; i++) {
      previews[i].setAttribute("tabindex", "0");
    }
  }

  function addEventListeners() {
    const previews = document.querySelectorAll(".preview");

    for (let i = 0; i < previews.length; i++) {
      const img = previews[i];

      img.addEventListener("mouseover", function () { upDate(img); });
      img.addEventListener("mouseleave", function () { unDo(); });

      img.addEventListener("focus", function () { upDate(img); });
      img.addEventListener("blur", function () { unDo(); });

      img.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          upDate(img);
        }
        if (event.key === "Escape") {
          unDo();
        }
      });
    }
  }

  window.addEventListener("load", function () {
    addTabFocus();
    addEventListeners();
  });
  window.upDate = upDate;
  window.unDo = unDo;
})();
