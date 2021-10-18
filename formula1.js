$(function() {
    let incognita1;
    let incognita2;
    let incognita3;
    let incognita4;

    $('.ig1').click(function() {
        // $('#ig2').not(":checked");
        // $('#ig3').not(":checked");
        // $('#ig4').not(":checked");
        if($('#ig1').is(":checked")) {
           incognita1 = true;
           $('.makeFormula').css('opacity', '1')
           $('.dinamic-input').html('<h3 style="color:black">Insira os valores da questão:</h3><br /><div class="flexInput"><input class="So" type="text" placeholder="Espaço inicial"><input class="V" type="text" placeholder="Velocidade"><input class="T" type="text" placeholder="Tempo"></div>');
        }else{
           incognita1 = false;
           $('.makeFormula').css('opacity', '0')
           $('.dinamic-input').html('');
           $('#paragraph2').text('');
            $('#explain2').text('');
        }
     });

     $('.ig2').click(function() {
        // $('#ig1').not(":checked");
        // $('#ig3').not(":checked");
        // $('#ig4').not(":checked");
        if($('#ig2').is(":checked")) {
           incognita2 = true;
           $('.makeFormula').css('opacity', '1')
           $('.dinamic-input').html('<h3 style="color:black">Insira os valores da questão:</h3><br /><div class="flexInput"><input class="S" type="text" placeholder="Espaço Final"><input class="V" type="text" placeholder="Velocidade"><input class="T" type="text" placeholder="Tempo"></div>');
        }else{
            incognita2 = false;
            $('.makeFormula').css('opacity', '0')
            $('.dinamic-input').html('');
            $('#paragraph2').text('');
            $('#explain2').text('');
         }
     });

     $('.ig3').click(function() {
        // $('#ig1').not(":checked");
        // $('#ig2').not(":checked");
        // $('#ig4').not(":checked");
        if($('#ig3').is(":checked")) {
           incognita3 = true;
           $('.makeFormula').css('opacity', '1')
           $('.dinamic-input').html('<h3 style="color:black">Insira os valores da questão:</h3><br /><div class="flexInput"><input class="S" type="text" placeholder="Espaço Final"><input class="So" type="text" placeholder="Espaço Inicial"><input class="T" type="text" placeholder="Tempo"></div>');
        }else{
            incognita3 = false;
            $('.makeFormula').css('opacity', '0')
            $('.dinamic-input').html('');
            $('#paragraph2').text('');
            $('#explain2').text('');
         }
     });

     $('.ig4').click(function() {
        // $('#ig1').not(":checked");
        // $('#ig2').not(":checked");
        // $('#ig3').not(":checked");
        if($('#ig4').is(":checked")) {
           incognita4 = true;
           $('.makeFormula').css('opacity', '1')
           $('.dinamic-input').html('<h3 style="color:black">Insira os valores da questão:</h3><br /><div class="flexInput"><input class="S" type="text" placeholder="Espaço Final"><input class="So" type="text" placeholder="Espaço Inicial"><input class="V" type="text" placeholder="Velocidade"></div>');
        }else{
            incognita4 = false;
            $('.makeFormula').css('opacity', '0')
            $('.dinamic-input').html('');
            $('#paragraph2').text('');
            $('#explain2').text('');
         }
     });

     // function init() {
    //  if($('#ig1').checked = false){
    //     incognita1 = false;
    //     $('.dinamic-input').html('');
    //  }

    //  if($('#ig2').checked = false){
    //     incognita2 = false;
    //     $('.dinamic-input').html('');
    //  }

    //  if($('#ig3').checked = false){
    //     incognita3 = false;
    //     $('.dinamic-input').html('');
    //  }

    //  if($('#ig4').checked = false){
    //     incognita4 = false;
    //     $('.dinamic-input').html('');
    //  }
    //}

    $('.makeFormula').click(function() {
        switch (incognita1) {
            case true:
                var pass;
                var case1 = parseInt($('.So').val());
                var case2 = parseInt($('.V').val());
                var case3 = parseInt($('.T').val());
                pass = case2 * case3;
                pass = case1 + pass;
                $('#paragraph2').text(`S = ${case1} + ${case2} * ${case3}`)
                $('#explain2').text(`S = ${pass}`)
                break;
            // default:
            //     alert('diferente de 1 marcado')
            //     break;
        }

        switch (incognita2) {
            case true:
                var pass;
                var case1 = parseInt($('.S').val());
                var case2 = parseInt($('.V').val());
                var case3 = parseInt($('.T').val());
                pass = case2 * case3;
                pass = case1 - pass;
                $('#paragraph2').text(`${case1} = So + ${case2} * ${case3}`)
                $('#explain2').text(`So = ${pass}`)
                break;
            // default:
            //     alert('diferente de 2 marcado')
            //     break;
        }

        switch (incognita3) {
            case true:
                var pass;
                var case1 = parseInt($('.S').val());
                var case2 = parseInt($('.So').val());
                var case3 = parseInt($('.T').val());
                pass =  case1 - case2
                pass = pass / case3
                $('#paragraph2').text(`${case1} = ${case2} + V * ${case3}`)
                $('#explain2').text(`V = ${pass}`)
                break;
            // default:
            //     alert('diferente de 2 marcado')
            //     break;
        }

        switch (incognita4) {
            case true:
                var pass;
                var case1 = parseInt($('.S').val());
                var case2 = parseInt($('.So').val());
                var case3 = parseInt($('.V').val());
                pass = case1 - case2
                pass = pass / case3
                $('#paragraph2').text(`${case1} = ${case2} + ${case3} * T`)
                $('#explain2').text(`T = ${pass}`)
                break;
            // default:
            //     alert('diferente de 2 marcado')
            //     break;
        }

        // if(incognita1) {
        //     alert('marcado1')
        // }else if(incognita2){
        //     alert('marcado2')
        // }else if(incognita3){
        //     alert('marcado3')
        // }else if(incognita4){
        //     alert('marcado4')
        // }else {
        //     alert('marque alguma incógnita')
        // }
    })
})