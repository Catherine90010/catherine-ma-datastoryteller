
// document.querySelector("#testing").load("html/testing.html");

document.addEventListener('DOMContentLoaded', function(){

    // const scrollTrigger = document.getElementById("scrollContainer");
    // const scrollFrame = document.getElementById("scrollFrame");
    // window.addEventListener('scroll', function(){
    //     const scrollPosition = window.scrollY;
    //     const viewportHeight = scrollTrigger.offsetHeight;
    //     if(scrollPosition > scrollTrigger.offsetTop && scrollPosition < scrollTrigger.offsetTop + viewportHeight){
    //         const scrollPercentage = scrollPosition / viewportHeight;
    //         const horizontalScrollPosition = scrollPercentage * scrollFrame.scrollWidth;
    //         scrollFrame.scrollLeft = horizontalScrollPosition / 4;
    //     }else{
    //         scrollFrame.scrollLeft = 0;
    //     }
    // })

    const projectpre = document.querySelectorAll('div.projectpre');  
    const bodybg = document.querySelector('body');
    const overlay = document.querySelector("div.dialogbox_overlay")
    projectpre.forEach(function(item){
        const projectprecard = item.querySelector('div.projectprecard'); 

        if(item.querySelector('div.imghover') === null){
            return;
        }else{
            const imghover = item.querySelector('div.imghover');
            projectprecard.addEventListener('mouseover', function(){
                imghover.style.display = 'block';
            })
            projectprecard.addEventListener('mouseout', function(){
                imghover.style.display = 'none';
            })
        }

        if(item.querySelector('div.dialogbox') === null){
            return;
        }else{
            const dialogbox = item.querySelector('div.dialogbox'); // console.log(dialogbox);
                
            const close = item.querySelector('img.close'); 
            projectprecard.addEventListener('click', function(e){
                dialogbox.style.display = 'block';
                bodybg.classList.toggle('active');
                overlay.style.display = 'block';
                // dialogbox.addEventListener('click', function(e){
                // dialogbox.style.display = 'none';});
                e.stopPropagation();
            })
            document.addEventListener("click", function(e){
                if(e.target.closest('div.dialogbox') === null){
                    dialogbox.style.display = 'none';
                    overlay.style.display = 'none';
                    bodybg.classList.remove('active');
                }
            })
            close.addEventListener('click', function(e){
                dialogbox.style.display = 'none';
                bodybg.classList.remove('active');
                overlay.style.display = 'none';
            })
        }
    });    
})