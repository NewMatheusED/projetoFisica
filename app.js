$(function(){

    let errorMessege = 'Combinação inválida. Não foi possível calcular'

    $('#convert').submit(function (e) { 
        e.preventDefault();

        let mVerification;
        let kmVerification;
        let m = $('#m').val();
        let km = $('#km').val();

        if(m == '' && km > 0) {
             kmVerification = true;
             mVerification = false;
             console.log('certo1')
             
        } else if (m > 0 && km == '') {
            mVerification = true;
            kmVerification = false;
            console.log('certo2')

        } else if (m > 0 && km > 0) {
            alert(errorMessege)
            console.log('certo3')

        } else if (m == '' && km == '') {
            alert(errorMessege)
            console.log('certo4')
            
        }
        
    });
})  