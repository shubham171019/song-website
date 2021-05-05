        var divlength= document.querySelectorAll('.image').length;
        console.log(divlength);
        for(var i=0;i <divlength; i++){
            var demo = document.querySelectorAll('.image')[i].addEventListener('click', playsong);
            var demo = document.querySelectorAll('.image')[i].addEventListener('dblclick', pausesong);
        }

        var song1 = new Audio();
        song1.src='song/song1.mp3';

        var song2 = new Audio();
        song2.src='song/song2.mp3';
        
        var song3 = new Audio();
        song3.src='song/song3.mp3';

        var song4 = new Audio();
        song4.src='song/song4.mp3';

        var song5 = new Audio();
        song5.src='song/song5.mp3';

        var song6 = new Audio();
        song6.src='song/song6.mp3';

        function playsong(){
            // alert("hello");
            var songId = this.id;
            // console.log(songId);
            switch(songId){
                case "img1":
                    song1.play();
                    break;
                case "img2":
                    song2.play();
                    break;
                case "img3":
                    song3.play();
                    break;
                case "img4":
                    song4.play();
                    break;
                case "img5":
                    song5.play();
                    break;
                case "img6":
                    song6.play();
                    break;
            }
        }

        function pausesong(){
            var songId = this.id;
            // console.log(songId);
            switch(songId){
                case "img1":
                    song1.pause();
                    break;
                case "img2":
                    song2.pause();
                    break;
                case "img3":
                    song3.pause();
                    break;
                case "img4":
                    song4.pause();
                    break;
                case "img5":
                    song5.pause();
                    break;
                case "img6":
                    song6.pause();
                    break;
            }
        }


        // function styling(){
        //     document.getElementById('img1').setAttribute("style","filter: drop-shadow(10px 10px 5px red);");
        // }
        // function styleout(){
        //     document.getElementById('img1').setAttribute("style","filter: drop-shadow();");
        // }
        // var mysong = new Audio();
        // mysong.src='song/song1.mp3';
        // function playsong(){
        //     mysong.play();
        // }
        // function pausesong(){
        //     mysong.pause();
        // }