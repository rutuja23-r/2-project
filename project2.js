const lis = document.querySelectorAll("li")

lis.forEach((node) => {

    node.addEventListener('mousedown',function(event) {
      //  event.preventDefault()
       const value = node.innerText.trim()
       const $result = document.querySelector(".result")
       // $result.innerText = value
      // console.log($result)
        const resultText = $result.innerText.trim()

        if(resultText == '0'|| resultText == 'undefined' 
        || resultText == 'Infinity' ) {
            $result.innerText = ''
        }
        

    
        if(value =='=') {
            let solultion = eval(resultText)
            $result.innerText = solultion
            return true
        }
     


        if (value.toLowerCase() == 'c') {
          $result.innerText = ''
          return true
        }

        $result.append(value)

    })
})
