/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };

  window.addEventListener("load", () => {
    let showSchedule = false;
    let btnClick = false;
    const deviceType = getDeviceType();
    const btnPortada = document.querySelector(".info-btn");
    let portadaEl = document.querySelector(".portada");
    if (deviceType === "mobile") {
      portadaEl.classList.add("mobile");
    }
    if (btnPortada) {
      if (deviceType !== "mobile") {
        btnPortada.addEventListener("mouseenter", () => {
          if (!btnClick) {
            showSchedule = true;
            toggleShowSchedule();
          }
        });
        btnPortada.addEventListener("mouseleave", () => {
          if (!btnClick) {
            showSchedule = false;
            toggleShowSchedule();
          }
        });
      }
      btnPortada.addEventListener("click", (e) => {
        e.stopPropagation();
        btnClick = !btnClick;
        showSchedule = btnClick;
        toggleShowSchedule();
      });
    }
    function toggleShowSchedule() {
      if (showSchedule) {
        portadaEl.classList.add("show-schedule");
      } else {
        portadaEl.classList.remove("show-schedule");
      }
    }
  });
})();
