function handleAccordions() {
  const accordionHeaders = document.querySelectorAll(".accordion__header");

  accordionHeaders.forEach(function(header) {
    header.addEventListener("click", function() {
      // Get parent of the element
      const clickedAccordion = this.parentElement;
  
      // Get content of the accordion
      const clickedAccordionContent = clickedAccordion.querySelector(".accordion__content");
  
      // Open or close the clicked accordion
      if (hasClass(clickedAccordion, "open")) {
        removeClass(clickedAccordion, "open");
        addClass(clickedAccordionContent, "hidden");
      }
      else {
        addClass(clickedAccordion, "open");
        removeClass(clickedAccordionContent, "hidden");
      }
  
      // Check if only one accordion is open
      accordionHeaders.forEach(function(otherHeader) {
        const otherAccordion = otherHeader.parentElement;
        const otherAccordionContent = otherAccordion.querySelector(".accordion__content");
        if (clickedAccordion != otherAccordion) {
          if (hasClass(otherAccordion, "open")) {
            removeClass(otherAccordion, "open");
            addClass(otherAccordionContent, "hidden");
          };
        };
      });
    });
  });
};

function handleTabsOnMovieDetailsPage() {
  const btnTabs = document.querySelectorAll("#movieFileTabs button");

  btnTabs.forEach(function(btn) {
    btn.addEventListener("click", function() {
      const articleVideo = document.querySelector("#movieFileVideo");
      const articleDetails = document.querySelector("#movieFileDetails");
      const articleCast = document.querySelector("#movieFileCast");
      const articleCrew = document.querySelector("#movieFileCrew");
      const articleScreening = document.querySelector("#movieFileShows");

      console.log(this.id)

      if (this.id === "movieFileTabDetails") {
        removeClass(articleVideo, "hide");
        removeClass(articleDetails, "hide");
        removeClass(articleCast, "hide");
        removeClass(articleCrew, "hide");
        removeClass(articleScreening, "hide");
      }
      if (this.id === "movieFileTabCast") {
        addClass(articleVideo, "hide");
        addClass(articleDetails, "hide");
        removeClass(articleCast, "hide");
        removeClass(articleCrew, "hide");
        addClass(articleScreening, "hide");
      }
      if (this.id === "movieFileTabShows") {
        addClass(articleVideo, "hide");
        addClass(articleDetails, "hide");
        addClass(articleCast, "hide");
        addClass(articleCrew, "hide");
        removeClass(articleScreening, "hide");
      }

      btnTabs.forEach(function(otherBtnTabs) {
        removeClass(otherBtnTabs, "active");
      });

      addClass(this, "active");
      document.activeElement?.blur();

    })
  })
};

handleTabsOnMovieDetailsPage();
handleAccordions();