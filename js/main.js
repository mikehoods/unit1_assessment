$(()=> {
    let $inputValue = $('#input-number').val();
    let $countValue = 0;
    
    $('#result').text($countValue)

    $('#add').on('click', () => {
        $inputValue = parseInt($('#input-number').val());
        $countValue += $inputValue;
        $('#result').text($countValue)
        $checkForNeg()
    }) 
    $('#subtract').on('click', () => {
        $inputValue = $('#input-number').val();
        $countValue -= $inputValue;
        $('#result').text($countValue)
        $checkForNeg()
    })
    const $checkForNeg = () => {
        if ($countValue < 0) {
            $('#result').css("color", "red");
        } else {
            $('#result').css("color", "black");
        }
    }
})