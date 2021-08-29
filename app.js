$(function(){

    let errorMessege = 'Combinação inválida. Não foi possível calcular'

    function mToKm (kilom) {
        return (kilom / 3.6).toFixed(2)
    }

    function kmToM (metro) {
        return (metro * 3.6).toFixed(2)
    }

    function reset(el) {
        el.val('')
    }

    $('input[type=text]').focus(function() {
        reset($(this))
    })

    $('#convert').submit(function (e) { 
        e.preventDefault();

        // let mVerification;
        // let kmVerification;
        let m = $('#m').val();
        let km = $('#km').val();

        if(m == '' && km > 0) {
            //  kmVerification = true;
            //  mVerification = false;
             $('#m').val(mToKm(km));
             $('#paragraph').text(`${km} km/h equivale a ${mToKm(km)} m/s`)
             //console.log('certo1')
             
        } else if (m > 0 && km == '') {
            // mVerification = true;
            // kmVerification = false;
            $('#km').val(kmToM(m));
            $('#paragraph').text(`${m} m/s equivale a ${kmToM(m)} km/h`)
            //console.log('certo2')

        } else if (m > 0 && km > 0) {
            alert(errorMessege)
            //console.log('certo3')

        } else if (m == '' && km == '') {
            alert(errorMessege)
            //console.log('certo4')
            
        }
        
    });
})  