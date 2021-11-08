$(function () {
  const visu_slide = $(".visu_slide");
  const visu_btm_list = $(".visu_btm_list");
  const visu_right = $(".visu_arrow.right"); //오른쪽버튼
  const visu_left = $(".visu_arrow.left"); //왼쪽버튼
  const play_btn = $(".visu_btm_wrap li.controls_wrap .control.start");
  const stop_btn = $(".visu_btm_wrap li.controls_wrap .control.stop");

  let slider_play = setInterval(auto, 6000); // 6초에 한번씩 auto 함수가 시행됨
  let slider_stop;

  first();

  function auto() {
    visu_right.trigger("click"); // trigger: 어떤 행위를 반복적으로 하게 할 때 사용

  }

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

  visu_right.click(right);
  visu_left.click(left);
  visu_btm_list.click(bottom);
  stop_btn.click(stop);
  play_btn.click(play);

  function play() {
    stop_btn.fadeIn();
    play_btn.fadeOut();

    slider_play = setInterval(auto, 6000);
  }

  function stop() {
    stop_btn.fadeOut();
    play_btn.fadeIn();

    slider_stop = clearInterval(slider_play);
  }

  function right(e) {
    e.preventDefault();
    e.stopPropagation(); //이벤트 부모노드로 전파 하지 않음

    const idx = $(".visual_wrap>li.On").index();

    reset();

    if (idx < 2) {
      visu_slide.eq(idx + 1).addClass("On");
    }
    if (idx == 2) {
      visu_slide.eq(0).addClass("On");
    }

    slide_Event();
    e.stopPropagation(); //이벤트 부모노드로 전파 하지 않음
    e.preventDefault();
  }

  function left(e) {
    e.preventDefault();
    const idx = $(".visual_wrap>li.On").index();

    visu_slide.removeClass("On");
    visu_btm_list.removeClass("Act");

    reset();

    if (idx > 0) {
      visu_slide.eq(idx - 1).addClass("On");
    }
    if (idx == 0) {
      visu_slide.eq(-1).addClass("On");
    }

    slide_Event();
  }

  function bottom(e) {
    e.preventDefault();

    const idx = $(this).index();

    reset();
    visu_slide.eq(idx).addClass("On");
    slide_Event();
  }

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
