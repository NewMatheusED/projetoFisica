$(function(){

    // variável para a conversão ------------

    let errorMessage = 'Combinação inválida. Não foi possível calcular';
    let incognita1;
    let incognita2;
    let incognita3;
    let incognita4;

    // funções para a conversão ------------

    function mToKm (kilom) {
        return (kilom / 3.6).toFixed(2)
    }

    function kmToM (metro) {
        return (metro * 3.6).toFixed(2)
    }

    function reset(el) {
        // el.css('border', '1px solid #000');
        el.css('color', 'black');
        el.val('');
    }

    function error(el, message) {
        // el.css('border', '1px solid red');
        el.css('color', 'red');
        el.val(message);
    }

    $('input[type=text]').focus(function() {
        reset($(this))
    })

    // ação para a conversão ------------

    $('#convert').submit(function (e) { 
        e.preventDefault();

        // let mVerification;
        // let kmVerification;
        let m = $('#m').val();
        let km = $('#km').val();

        if(m.indexOf(',') > -1){
            // console.log('trocou');
            m = $('#m').val().replace(',','.');
        }

        if(km.indexOf(',') > -1){
            // console.log('trocou');
            km = $('#km').val().replace(',','.');
        }

        if(m == '' && km > 0) {
            //  kmVerification = true;
            //  mVerification = false;
             $('#m').val(mToKm(km));
             $('#paragraph').text(`${km} km/h equivale a ${mToKm(km)} m/s`)
             $('#explain').text(`A conta feita foi: ${km} / 3,6`)
             $('input[type=text]').click(function() {
                // $('#paragraph').text(`Insira um valor`)
                $('#paragraph').text('')
                $('#explain').text('')
             })
             // console.log('certo1')
             
        } else if (m > 0 && km == '') {
            // mVerification = true;
            // kmVerification = false;
            $('#km').val(kmToM(m));
            $('#paragraph').text(`${m} m/s equivale a ${kmToM(m)} km/h`)
            $('#explain').text(`A conta feita foi: ${m} X 3,6`)
            $('input[type=text]').click(function() {
                // $('#paragraph').text(`Insira um valor`)
                $('#paragraph').text('')
                $('#explain').text('')
             })
            // console.log('certo2')

        } else if (m > 0 && km > 0) {
            error($('input[type=text]'), 'Inválido')
            $('#paragraph').text(errorMessage)
            $('#explain').text('')
            // $('input[type=text]').click(function() {
            //     $('#paragraph').text(`Insira um valor`)
            //  })
            // console.log('certo3')

        } else if (m == '' && km == '') {
            error($('input[type=text]'), 'Elemento faltando')
            $('#paragraph').text(errorMessage)
            $('#explain').text('')
            // $('input[type=text]').click(function() {
            //     $('#paragraph').text(`Insira um valor`)
            //  })
            // console.log('certo4')
            
        }
        
    });


     $('.ig1').click(function() {
        $('#ig2').not(":checked");
        $('#ig3').not(":checked");
        $('#ig4').not(":checked");
        if($('#ig1').is(":checked")) {
           incognita1 = true;
           $('.dinamic-input').html('<h3>Insira os valores da questão:</h3><br /><input class="So" type="text" placeholder="Espaço inicial"><input class="V" type="text" placeholder="Velocidade"><input class="T" type="text" placeholder="Tempo">');
        }else{
           incognita1 = false;
           $('.dinamic-input').html('');
        }
     });

     $('.ig2').click(function() {
        $('#ig1').not(":checked");
        $('#ig3').not(":checked");
        $('#ig4').not(":checked");
        if($('#ig2').is(":checked")) {
           incognita2 = true;
           $('.dinamic-input').html('<h3>Insira os valores da questão:</h3><br /><input class="S" type="text" placeholder="Espaço Final"><input class="V" type="text" placeholder="Velocidade"><input class="T" type="text" placeholder="Tempo">');
        }else{
            incognita2 = false;
            $('.dinamic-input').html('');
         }
     });

     $('.ig3').click(function() {
        $('#ig1').not(":checked");
        $('#ig2').not(":checked");
        $('#ig4').not(":checked");
        if($('#ig3').is(":checked")) {
           incognita3 = true;
           $('.dinamic-input').html('<h3>Insira os valores da questão:</h3><br /><input class="S" type="text" placeholder="Espaço Final"><input class="So" type="text" placeholder="Espaço Inicial"><input class="T" type="text" placeholder="Tempo">');
        }else{
            incognita3 = false;
            $('.dinamic-input').html('');
         }
     });

     $('.ig4').click(function() {
        $('#ig1').not(":checked");
        $('#ig2').not(":checked");
        $('#ig3').not(":checked");
        if($('#ig4').is(":checked")) {
           incognita4 = true;
           $('.dinamic-input').html('<h3>Insira os valores da questão:</h3><br /><input class="S" type="text" placeholder="Espaço Final"><input class="So" type="text" placeholder="Espaço Inicial"><input class="V" type="text" placeholder="Velocidade">');
        }else{
            incognita4 = false;
            $('.dinamic-input').html('');
         }
     });

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

    $('.test').click(function() {
        if(incognita1) {
            alert('marcado1')
        }else if(incognita2){
            alert('marcado2')
        }else if(incognita3){
            alert('marcado3')
        }else if(incognita4){
            alert('marcado4')
        }else {
            alert('marque alguma incógnita')
        }
    })
})