$(document).ready(function(){
    $('.ayam').click(function(){
        $('.ayam').attr('src', './images/ayam.jpg') 
        var audioElement = document.createElement('audio')
        audioElement.setAttribute('src', './audio/ayam.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        $('#pause1').click(function(){
        $('.ayam').attr('src', './images/bg.jpg') 
          audioElement.pause();
        })
        });

        $('.angsa').click(function(){
            $('.angsa').attr('src', './images/angsa.jpg')
            var audioElement = document.createElement('audio')
            audioElement.setAttribute('src', './audio/angsa.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            $('#pause2').click(function(){
              $('.angsa').attr('src', './images/bg.jpg')
              audioElement.pause();
            })
        });

        $('.bebek').click(function(){
            $('.bebek').attr('src', './images/bebek.jpg')
            var audioElement = document.createElement('audio')
            audioElement.setAttribute('src', './audio/bebek.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            $('#pause3').click(function(){
              $('.bebek').attr('src', './images/bg.jpg')
              audioElement.pause();
            })
        });

        $('.burung').click(function(){
            $('.burung').attr('src', './images/burung.jpeg')
            var audioElement = document.createElement('audio')
            audioElement.setAttribute('src', './audio/burung.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            $('#pause4').click(function(){
              $('.burung').attr('src', './images/bg.jpg')
              audioElement.pause();
            })
        });

        $('.kambing').click(function(){
            $('.kambing').attr('src', './images/kambing.webp')
            var audioElement = document.createElement('audio')
            audioElement.setAttribute('src', './audio/kambing.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            $('#pause5').click(function(){
              $('.kambing').attr('src', './images/bg.jpg')
              audioElement.pause();
            })
        });

        $('.kucing').click(function(){
            $('.kucing').attr('src', './images/kucing.jpg')
            var audioElement = document.createElement('audio')
            audioElement.setAttribute('src', './audio/kucing.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            $('#pause6').click(function(){
              $('.kucing').attr('src', './images/bg.jpg')
              audioElement.pause();
            })
        });

        $('.kuda').click(function(){
            $('.kuda').attr('src', './images/kuda.jpg')
            var audioElement = document.createElement('audio')
            audioElement.setAttribute('src', './audio/kuda.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            $('#pause7').click(function(){
              $('.kuda').attr('src', './images/bg.jpg')
              audioElement.pause();
            })
        });

        $('.sapi').click(function(){
            $('.sapi').attr('src', './images/sapi.jpg')
            var audioElement = document.createElement('audio')
            audioElement.setAttribute('src', './audio/sapi.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            $('#pause8').click(function(){
              $('.sapi').attr('src', './images/bg.jpg')
              audioElement.pause();
            })
        });

        $('.harimau').click(function(){
            $('.harimau').attr('src', './images/harimau.jpg')
            var audioElement = document.createElement('audio')
            audioElement.setAttribute('src', './audio/harimau.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            $('#pause9').click(function(){
              $('.harimau').attr('src', './images/bg.jpg')
              audioElement.pause();
            })
        });

        $('.buaya').click(function(){
            $('.buaya').attr('src', './images/buaya.jpg')
            var audioElement = document.createElement('audio')
            audioElement.setAttribute('src', './audio/buaya.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            $('#pause10').click(function(){
              $('.buaya').attr('src', './images/bg.jpg')
              audioElement.pause();
            })
        });

        $('.serigala').click(function(){
            $('.serigala').attr('src', './images/serigala.jpg')
            var audioElement = document.createElement('audio')
            audioElement.setAttribute('src', './audio/serigala.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            $('#pause11').click(function(){
              $('.serigala').attr('src', './images/bg.jpg')
              audioElement.pause();
            })
        });

        $('.singa').click(function(){
            $('.singa').attr('src', './images/singa.jpg')
            var audioElement = document.createElement('audio')
            audioElement.setAttribute('src', './audio/singa.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            $('#pause12').click(function(){
              $('.singa').attr('src', './images/bg.jpg')
              audioElement.pause();
            })
        });
    });
