$(function () {
  const visu_slide = $(".visu_slide");
  const visu_btm_list = $(".visu_btm_list");
  const visu_right = $(".visu_arrow.right"); //오른쪽버튼
  const visu_left = $(".visu_arrow.left"); //왼쪽버튼

  first();

  function first() {
    visu_slide.eq(0).addClass("On");

    slide_Event();
  }

  function slide_Event() {
    const on_slide = $(".visual_wrap>li.On"); //활성화된 슬라이드 저장
    const idx = on_slide.index(); //활성화된 슬라이드의 순서값 저장
    const veil = on_slide.children(".visu_veil"); //활성화된 슬라이드 자식 veil
    const txt_wrap = on_slide.children(".visu_txt_wrap");

    veil.animate({ width: "44%", opacity: "1" }, 1000);
    txt_wrap.delay(500).animate({ opacity: "1" }, 1000);

    visu_btm_list.eq(idx).addClass("Act");
  }

  visu_right.click(function () {
    const idx = $(".visual_wrap>li.On").index();

    visu_slide.removeClass("On");
    visu_btm_list.removeClass("Act");

    reset();

    if (idx < 2) {
      visu_slide.eq(idx + 1).addClass("On");
    }
    if (idx == 2) {
      visu_slide.eq(0).addClass("On");
    }

    slide_Event();
  });

  function reset() {
    visu_slide.removeClass("On");
    visu_btm_list.removeClass("Act");

    visu_slide
      .children(".visu_veil")
      .animate({ width: "0%", opacity: "0" }, 1000);
    visu_slide
      .children(".visu_txt_wrap")
      .delay(1000)
      .animate({ opacity: "0" }, 1000);
  }
});
