function left() {
    //  var i-showa = document.getElementById(i-content);
    // // var i-showb = "display: inline-block";
    // // i-showa.inner =
    // i-showa.style.display = 'block';
    // document.getElementById(i-content).style.display =

    var showText = document.getElementById("show_text").value;
    var obj = {publish:showText};
    $.post(
        '/center',
        obj,
        function (result) {
            var span_content = `
                <div class="saysay"><div style="height: 50px;width: 562px;position: relative;top: 15px;margin:auto">
                <div style="width: 50px;height: 50px"><img style="width:50px; border-radius:100%" src=${result[result.length-1].homejpg }>
                </div>
                <div><span style="position: relative;top: -45px;left: 57px">${result[result.length-1].nickname}</span>
                <span style="position: relative;top: -22px;left: 2px">${result[result.length-1].date}</span></div>
                <hr style="margin-top: -14px;color: rgba(241, 241, 241, 0.5)"/>
</div><span id="show_text_span" style="position: relative; left: 21px;top: 23px">${showText}</span></div>
                `;
            document.getElementById('show_text_span').innerHTML = span_content;
        },
        'json'
    );
}

