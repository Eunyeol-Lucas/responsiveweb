$(function () {
  const select_language = $(".select_language");
  const search_container = $(".search-container");
  const h_open_Btn = $(".h_open_search");
  const h_close = $(".sch_close");

  select_language.click(function () {
    $(this).toggleClass("show");
  });
  h_open_Btn.click(function () {
    search_container.addClass("show");
  });
  h_close.click(function () {
    search_container.removeClass("show")
})

});
