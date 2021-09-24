var cssbasic = cssbasic || {};
cssbasic.tabs = {};

cssbasic.tabs.onClick = (tabs, href) => {
  return function () {
    cssbasic.tabs.Toggle(tabs, href);
  };
};

cssbasic.tabs.Toggle = (tabs, href) => {
  tabs.forEach((tab) => {
    if (tab.classList.contains("active"))
      if (tab.dataset.id == href) tab.classList.add("active");
      else tab.classList.remove("active");

    document
      .querySelectorAll("a[href='" + tab.dataset.id + "']")
      .forEach((el) => {
        if (tab.dataset.id == href) el.classList.remove("hidden");
        else el.classList.add("hidden");
      });
  });
};

cssbasic.tabs.init = (selector) => {
  document.querySelectorAll(selector).forEach((block) => {
    var id = false;
    var tabs = block.querySelectorAll(".tab");

    tabs.forEach((tab) => {
      tab.onclick = cssbasic.tabs.onClick(tabs, tab.dataset.id);
      if (tab.classList.contains("active")) id = tab.dataset.id;
    });

    if (!id) {
      id = tabs[0].dataset.id;
    }

    cssbasic.tabs.Toggle(selector, id);
  });
};
