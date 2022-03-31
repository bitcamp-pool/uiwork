src="https://code.jquery.com/jquery-3.5.0.js">
$(function(){
    // [이벤트1]
    // 총을 클릭하면 0~11사이의 랜덤값 발생
    // 해당 인형을 안보이게 처리
    // 메시지창 : 1번째 인형을 맞췄네요
    // 1번이 이미 사라지고 없는 경우 : "1번 인형은 이미 처리되었습니다"
    // 12개의 인형이 모두 사라지면 "You Win!! Game Over!!"
    // n = 맞춘 인형 개수
    var n = 0; 
    $(".gun").click(function(){
        var idx = parseInt(Math.random()*12);           // 0~11 : 12개인형
        // var idx = Math.floor(Math.random()*12);      // 무조건 내림
        if($(".sunban li img").eq(idx).is(":hidden")){
            $("#msg").html((idx+1)+"번 인형은 이미 처리되었습니다");
        }else{
            $("#msg").html((idx+1)+"번째 인형을 맞췄네요!!");
            $(".sunban li img").eq(idx).hide();
            // $(".sunban li img").eq(idx).fadeOut('slow');
            n++; // 새로운 인형을 맞출때마다 1증가
        }

        if(n>=12){
            $("#msg").html("Game Over, You Win!!");
        }
    });

    // [이벤트2]
    // money를 클릭하면 모두 초기화(사라진 인형 재배치,
    // , 메시지창 지우기 등)후 해당 지페는 안보이게 처리
    $(".money img").click(function(){
        $(this).hide(); // 자리를 차지하지 않음
        $(this).css("opacity", 0); // 투명도 0, 자리를 차지함
        n=0;
        $(".sunban li img").show();
        $("#msg").html("");
    });

});