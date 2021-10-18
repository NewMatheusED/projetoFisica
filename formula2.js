$(function() {
    let incognita1;
    let incognita2;
    let incognita3;
    let incognita4;
    let incognita5;

    $('.ig5').click(function() {
        // $('#ig2').not(":checked");
        // $('#ig3').not(":checked");
        // $('#ig4').not(":checked");
        if($('#ig5').is(":checked")) {
           incognita1 = true;
           $('.makeFormula2').css('opacity', '1')
           $('.dinamic-input2').html('<h3 style="color:black">Insira os valores da questão:</h3><br /><div class="flexInput"><input class="So2" type="text" placeholder="Espaço inicial"><input class="V2" type="text" placeholder="Velocidade"><input class="T2" type="text" placeholder="Tempo"><input class="A" type="text" placeholder="Aceleração"></div>');
        }else{
           incognita1 = false;
           $('.makeFormula2').css('opacity', '0')
           $('.dinamic-input2').html('');
           $('#paragraph3').text('');
            $('#explain3').text('');
        }
     });

     $('.ig6').click(function() {
        // $('#ig1').not(":checked");
        // $('#ig3').not(":checked");
        // $('#ig4').not(":checked");
        if($('#ig6').is(":checked")) {
           incognita2 = true;
           $('.makeFormula2').css('opacity', '1')
           $('.dinamic-input2').html('<h3 style="color:black">Insira os valores da questão:</h3><br /><div class="flexInput"><input class="S2" type="text" placeholder="Espaço Final"><input class="V2" type="text" placeholder="Velocidade"><input class="T2" type="text" placeholder="Tempo"><input class="A" type="text" placeholder="Aceleração"></div>');
        }else{
            incognita2 = false;
            $('.makeFormula2').css('opacity', '0')
            $('.dinamic-input2').html('');
            $('#paragraph3').text('');
            $('#explain3').text('');
         }
     });

     $('.ig7').click(function() {
        // $('#ig1').not(":checked");
        // $('#ig2').not(":checked");
        // $('#ig4').not(":checked");
        if($('#ig7').is(":checked")) {
           incognita3 = true;
           $('.makeFormula2').css('opacity', '1')
           $('.dinamic-input2').html('<h3 style="color:black">Insira os valores da questão:</h3><br /><div class="flexInput"><input class="S2" type="text" placeholder="Espaço Final"><input class="So2" type="text" placeholder="Espaço Inicial"><input class="T2" type="text" placeholder="Tempo"><input class="A" type="text" placeholder="Aceleração"></div>');
        }else{
            incognita3 = false;
            $('.makeFormula2').css('opacity', '0')
            $('.dinamic-input2').html('');
            $('#paragraph3').text('');
            $('#explain3').text('');
         }
     });

     $('.ig8').click(function() {
        // $('#ig1').not(":checked");
        // $('#ig2').not(":checked");
        // $('#ig3').not(":checked");
        if($('#ig8').is(":checked")) {
           incognita4 = true;
           $('.makeFormula2').css('opacity', '1')
           $('.dinamic-input2').html('<h3 style="color:black">Insira os valores da questão:</h3><br /><div class="flexInput"><input class="S2" type="text" placeholder="Espaço Final"><input class="So2" type="text" placeholder="Espaço Inicial"><input class="V2" type="text" placeholder="Velocidade"><input class="A" type="text" placeholder="Aceleração"></div>');
        }else{
            incognita4 = false;
            $('.makeFormula2').css('opacity', '0')
            $('.dinamic-input2').html('');
            $('#paragraph3').text('');
            $('#explain3').text('');
         }
     });

     $('.ig9').click(function() {
        // $('#ig1').not(":checked");
        // $('#ig2').not(":checked");
        // $('#ig3').not(":checked");
        if($('#ig9').is(":checked")) {
           incognita5 = true;
           $('.makeFormula2').css('opacity', '1')
           $('.dinamic-input2').html('<h3 style="color:black">Insira os valores da questão:</h3><br /><div class="flexInput"><input class="S2" type="text" placeholder="Espaço Final"><input class="So2" type="text" placeholder="Espaço Inicial"><input class="V2" type="text" placeholder="Velocidade"><input class="T2" type="text" placeholder="Tempo"></div>');
        }else{
            incognita5 = false;
            $('.makeFormula2').css('opacity', '0')
            $('.dinamic-input2').html('');
            $('#paragraph3').text('');
            $('#explain3').text('');
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
                var case1 = parseInt($('.So2').val());
                var case2 = parseInt($('.V2').val());
                var case3 = parseInt($('.T2').val());
                pass = case2 * case3;
                pass = case1 + pass;
                $('#paragraph3').text(`S = ${case1} + ${case2} * ${case3}`)
                $('#explain3').text(`S = ${pass}`)
                break;
            // default:
            //     alert('diferente de 1 marcado')
            //     break;
        }

        switch (incognita2) {
            case true:
                var pass;
                var case1 = parseInt($('.S2').val());
                var case2 = parseInt($('.V2').val());
                var case3 = parseInt($('.T2').val());
                pass = case2 * case3;
                pass = case1 - pass;
                $('#paragraph3').text(`${case1} = So2 + ${case2} * ${case3}`)
                $('#explain3').text(`So2 = ${pass}`)
                break;
            // default:
            //     alert('diferente de 2 marcado')
            //     break;
        }

        switch (incognita3) {
            case true:
                var pass;
                var case1 = parseInt($('.S2').val());
                var case2 = parseInt($('.So2').val());
                var case3 = parseInt($('.T2').val());
                pass =  case1 - case2
                pass = pass / case3
                $('#paragraph3').text(`${case1} = ${case2} + V * ${case3}`)
                $('#explain3').text(`V = ${pass}`)
                break;
            // default:
            //     alert('diferente de 2 marcado')
            //     break;
        }

        switch (incognita4) {
            case true:
                var pass;
                var case1 = parseInt($('.S2').val());
                var case2 = parseInt($('.So2').val());
                var case3 = parseInt($('.V2').val());
                pass = case1 - case2
                pass = pass / case3
                $('#paragraph3').text(`${case1} = ${case2} + ${case3} * T`)
                $('#explain3').text(`T = ${pass}`)
                break;
            // default:
            //     alert('diferente de 2 marcado')
            //     break;
        }

        switch (incognita5) {
            case true:
                var pass;
                var case1 = parseInt($('.S2').val());
                var case2 = parseInt($('.So2').val());
                var case3 = parseInt($('.V2').val());
                pass = case1 - case2
                pass = pass / case3
                $('#paragraph3').text(`${case1} = ${case2} + ${case3} * T`)
                $('#explain3').text(`T = ${pass}`)
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