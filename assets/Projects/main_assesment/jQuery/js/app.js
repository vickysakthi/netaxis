$(document).ready(function () {
        $('#heading').css('background-color', '#3399ff');
        $('#heading').append(`<h1 class='text-center text-white'>Welcome to Hand Cricket Game</h1>`);
        $('h1').css({ 'font-family':' "Cinzel", serif' });

        $('#heading').append(`<p id='game' class='text-white text-center'>It's Toss Time</p>`);
        $('p').css('font-family', 'Kalam-Light');

        let $content = $('#content');
        $content.append(`<p id='status' class='text-center'>Who's win</p>`);
        $content.append(`<div id='target' class='text-center'>Target: <span>0</span></div>`);
        $content.append(`<div id='score' class='text-center'>Your Score: <span>0</span></div>`);
        $('#teamcontainer').append(`<div id='team' class='container d-flex justify-content-between'></div>`);
    
        // User team
        let $team1 = $(`<div class='text-center'></div>`);
        $($team1).append(`<h4>Your Team</h4>`);
        $('h4').css(  {'font-family': '"Tapestry", serif'});
        $($team1).append(`<img src='./assets/images/five.jpg' class='card' id='userimg'>`);
       
        // Opposite team
        let $team2 = $(`<div class='text-center'></div>`);
        $($team2).append(`<h4>Opposite Team</h4>`);
        $($team2).append(`<img src='./assets/images/five.jpg' class='card' id='opponentimg'>`);
        $('#team').append($team1, $team2);
    
        let dynamicImages = [
            './assets/images/one.jpg',
            './assets/images/two.jpg',
            './assets/images/three.jpg',
            './assets/images/four.jpg',
            './assets/images/five.jpg',
            './assets/images/six.jpg'
        ];
    
        const tossImages = document.querySelectorAll('.tossImg');
        let gameStarted = false;
        let yourTeamScore = 0;
        let opponentTeamScore = 0;
        let target = 0;
        let batting = 'Your Team';


    
        tossImages.forEach(img => {
            img.addEventListener('click', function() {
                if (!gameStarted) {

                    let tossResult = Math.random() < 0.5 ? 'Your Team' : 'Opposite Team';
                    $('#exampleModal').modal('hide');
                    $('#game').text('Game started');

                    $('#status').text(tossResult + ' wins the toss');
                    gameStarted = true;
                    startGame(tossResult);
                }
            });
        });
    
        function startGame(tossWinner) {


            if (tossWinner === 'Your Team') {
                batting = 'Your Team';
                $('#status').text('Your Team batting');
            } else {
                batting = 'Opposite Team';
                $('#status').text('Opposite Team batting');
            }
            createImageButtons();
        }
    
        function createImageButtons() {
            let $buttons = $('<div id="image-buttons" class="text-center mt-1"></div>');
            for (let i = 0; i < 6; i++) {
                $buttons.append(`<img src="${dynamicImages[i]}" class="score-img  thumb" data-score="${i + 1}" >`);
            }
            $('#teamcontainer').append($buttons);
    
            $('.score-img').click(function() {
                let userScore = parseInt($(this).data('score'));
                let opponentScore = Math.floor(Math.random() * 6) + 1;
                $('#userimg').attr('src', dynamicImages[userScore - 1]);
                $('#opponentimg').attr('src', dynamicImages[opponentScore - 1]);
                                if (batting === 'Your Team') {
                                        if (userScore === opponentScore) {
                                            $('#status').text('You are out! Opposite team batting now.');
                                            target = yourTeamScore;
                                            $('#target span').text(target);
                                            batting = 'Opposite Team';
                                            $('#score span').text(0);
                                        } else {
                                            yourTeamScore += userScore;
                                            $('#score span').text(yourTeamScore);
                                        }
                                    } else {
                                        if (userScore === opponentScore) {
                                            $('#status').text('Opponent is out! Your team wins!');
                                            gameReset();
                                        } else {
                                            opponentTeamScore += opponentScore;
                                            if (opponentTeamScore >= target) {
                                                $('#status').text('Opponent wins!');
                                                gameReset();
                                            } else {
                                                $('#score span').text(opponentTeamScore);
                                            }
                                        }
                                    }
                        
                                    if (batting === 'Opposite Team' && opponentTeamScore >= target) {
                                        $('#status').text('Opponent wins!');
                                        $('#game').text('Game end');
                                        gameReset();
                                    }
                                });
                            }
                        
                            function gameReset() {
                                gameStarted = false;
                                yourTeamScore = 0;
                                opponentTeamScore = 0;
                                target = 0;
                                batting = 'Your Team';
                                $('#image-buttons').remove();
                                $('#score span').text(0);
                                $('#target span').text(0);
                            }
                        });