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
           $('.dinamic-input2').html('<h3 style="color:black">Insira os valores da questão:</h3><br /><div class="flexInput"><input class="So2" type="text" placeholder="Espaço inicial"><input class="V2" type="text" placeholder="Velocidade Inicial"><input class="T2" type="text" placeholder="Tempo"><input class="A" type="text" placeholder="Aceleração"></div>');
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
           $('.dinamic-input2').html('<h3 style="color:black">Insira os valores da questão:</h3><br /><div class="flexInput"><input class="S2" type="text" placeholder="Espaço Final"><input class="V2" type="text" placeholder="Velocidade Inicial"><input class="T2" type="text" placeholder="Tempo"><input class="A" type="text" placeholder="Aceleração"></div>');
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
           $('.dinamic-input2').html('<h3 style="color:black">Insira os valores da questão:</h3><br /><div class="flexInput"><input class="S2" type="text" placeholder="Espaço Final"><input class="So2" type="text" placeholder="Espaço Inicial"><input class="V2" type="text" placeholder="Velocidade Inicial"><input class="A" type="text" placeholder="Aceleração"></div>');
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
           $('.dinamic-input2').html('<h3 style="color:black">Insira os valores da questão:</h3><br /><div class="flexInput"><input class="S2" type="text" placeholder="Espaço Final"><input class="So2" type="text" placeholder="Espaço Inicial"><input class="V2" type="text" placeholder="Velocidade Inicial"><input class="T2" type="text" placeholder="Tempo"></div>');
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

    $('.makeFormula2').click(function() {
        switch (incognita1) {
            case true:
                var pass;
                var pass2;
                var case1 = parseInt($('.So2').val());
                var case2 = parseInt($('.V2').val());
                var case3 = parseInt($('.T2').val());
                var case4 = parseInt($('.A').val());
                pass = case1 + case2 * case3;
                pass2 = case4 * (case3**2);
                pass2 = pass2 / 2;
                pass = pass + pass2;
                $('#paragraph3').text(`S = ${case1} + ${case2} * ${case3} + (${case4} * ${case3}² / 2)`)
                $('#explain3').text(`S = ${pass}`)
                break;
            // default:
            //     alert('diferente de 1 marcado')
            //     break;
        }

        switch (incognita2) {
            case true:
                var pass;
                var pass2;
                var case1 = parseInt($('.S2').val());
                var case2 = parseInt($('.V2').val());
                var case3 = parseInt($('.T2').val());
                var case4 = parseInt($('.A').val());
                pass = (case1 * -1) + case2 * case3;
                pass2 = case4 * (case3**2);
                pass2 = pass2 / 2;
                pass = pass + pass2;
                pass = pass * -1
                $('#paragraph3').text(`${case1} = So + ${case2} * ${case3} + (${case4} * ${case3}² / 2)`)
                $('#explain3').text(`So = ${pass}`)
                break;
            // default:
            //     alert('diferente de 2 marcado')
            //     break;
        }

        switch (incognita3) {
            case true:
                var incognita = 1;
                var pass;
                var pass2;
                var pass3;
                var case1 = parseInt($('.S2').val());
                var case2 = parseInt($('.So2').val());
                var case3 = parseInt($('.T2').val());
                var case4 = parseInt($('.A').val());
                pass = case1 * 2
                pass2 = case2 * 2
                incognita *= 2
                incognita = incognita * case3
                pass3 = case3**2
                pass3 = pass3 * case4
                pass3 = pass2 + pass3
                pass = pass - pass3
                pass = pass / incognita
                $('#paragraph3').text(`${case1} = ${case2} + Vo * ${case3} + (${case4} * ${case3}² / 2)`)
                $('#explain3').text(`Vo = ${pass}`)
                break;
            // default:
            //     alert('diferente de 2 marcado')
            //     break;
        }

        switch (incognita4) {
            case true:
                var incognita = 1;
                var incognita2 = 1;
                var pass;
                var pass2;
                var pass3;
                var a;
                var b;
                var c;
                var case1 = parseInt($('.S2').val());
                var case2 = parseInt($('.So2').val());
                var case3 = parseInt($('.V2').val());
                var case4 = parseInt($('.A').val());
                pass = case1 * 2;
                // console.log(pass)
                pass2 = case2 * 2;
                // console.log(pass2)
                incognita = case3 * incognita;
                incognita = incognita * 2;
                // console.log(incognita)
                incognita2 = incognita2 * case4; //elevado ao quadrado
                // console.log(incognita2)
                pass = pass2 - pass;
                // console.log(pass);
                a = incognita2
                b = incognita
                c = pass
                // console.log(a, b, c)
                var BhaskaraDelta = (b**2) - (4 * a * c)
                var BhaskaraX1 = (-b + Math.sqrt(BhaskaraDelta)) / (2 * a)
                var BhaskaraX2 = (-b - Math.sqrt(BhaskaraDelta)) / (2 * a)
                // console.log(BhaskaraDelta, BhaskaraX1, BhaskaraX2)
                if(Number.isInteger(BhaskaraX1)){ pass = BhaskaraX1 }
                if(Number.isInteger(BhaskaraX2)){ pass = BhaskaraX2 }
                $('#paragraph3').text(`${case1} = ${case2} + ${case3} * T + (${case4} * T² / 2)`)
                $('#explain3').text(`T = ${pass}`)
                break;
            // default:
            //     alert('diferente de 2 marcado')
            //     break;
        }

        switch (incognita5) {
            case true:
                var incognita = 1;
                var pass;
                var pass2;
                var pass3;
                var case1 = parseInt($('.S2').val());
                var case2 = parseInt($('.So2').val());
                var case3 = parseInt($('.V2').val());
                var case4 = parseInt($('.T2').val());
                
                $('#paragraph3').text(`${case1} = ${case2} + ${case3} * ${case4} + (A * ${case4}² / 2)`)

                case1 = case1 * 2
                //console.log(case1)
                case2 = case2 * 2
                //console.log(case2)
                case3 = case3 * 2
                //console.log(case3)
                pass = case4 * case3
                //console.log(pass)
                pass = pass + case2
                //console.log(pass)
                pass2 = case4**2
                //console.log(pass2)
                case1 = case1 - pass
                //console.log(case1)
                case1 = case1 / pass2
                //console.log(case1)

                pass = case1

                $('#explain3').text(`A = ${pass}`)
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