window.addEventListener('load', function(){
    this.setTimeout(
        function open (event){
            document.querySelector('.popup_parent').classList.remove('hidden');
        },
        1000
    )
});


document.getElementById('close').addEventListener("click", function(){
    document.querySelector('.popup_parent').classList.add('hidden');
});