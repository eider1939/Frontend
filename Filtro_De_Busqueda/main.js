document.addEventListener('DOMContentLoaded', function(){
    const searchInput=document.getElementById('search-input');
    const cards=document.querySelectorAll('.cards');

    function filterIconos(searchQuery){
        const nothingfound=document.getElementById('nothing-alert');
        let number=0;
        cards.forEach(function (card){
            const name=card.querySelectorAll('h2').textContent.toLowerCase();
            if(name.includes(searchQuery.toLowerCase())){
                nothingfound.style.display='none';
                card.style.display='flex';
                number++;
            }else{
                card.style.display='none';
            }
        });
        if(number==0){
            nothingfound.style.display='block';
        }
    }
    searchInput.addEventListener('input',function (){
        const searchQuery=searchInput.value.trim();
        filterIconos(searchQuery);
    });
});