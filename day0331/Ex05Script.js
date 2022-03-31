
$(function(){
    // Now 클릭시 노래 목록 나오게 하기
    $("h1.title").click(function(){
        $("ul.music-list").slideDown('slow');
    });

    // 노래 제목 클릭시 목록 다시 없애기
    $("ul.music-list li").click(function(){
        // 1. 클릭한 곳의 노래 제목을 변수 title에 저장
        var title = $(this).text();
        // alert(title);

        // 2. title을 h1.title에 넣기
        $("h1.title").text(title);

        // 3. class 이름을 얻는다(변수명 clname)
        var clname = $(this).attr("class");

        // 4. cd change #cd 의 width를 0으로 하고 완료시
        //   호출되는 함수에서 #cd에 clname을 class로 추가
        //   하고 width를 다시 300px로 변경
        $("#cd").animate({"width":0}, 'slow', function(){
            $("#cd").attr("class", clname);
            $(this).animate({"width":"300px"}, 'slow');
        });
        
        // 목록 없애기
        $("ul.music-list").slideUp('slow');
    });
});