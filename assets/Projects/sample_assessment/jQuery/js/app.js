$(document).ready(function () {
        $('#head').prepend('<h2 class="text-center text-primary">Color Generate</h2>');
        $('h2').append('<h3 class="d-flex justify-content-end">Attempt:<span>0</span></h3>');
        $('#color-gen').after('<h3 class="fs-3 fst-italic">progress:<span>0</span></h3>');
        $('#color-gen').after('<button id=submit class="btn btn-success d-flex justify-content-center">Submit</button>')
        $('#color-gen').after('<div id="incorrect" class="mt-3"></div>');
        let $count = 0;
        let functionColor = getRandomColor();

        function getRandomColor() {
                let $array = [];
                for (let i = 0; i < 10; i++) {
                        let $valrow = [];
                        for (let j = 0; j < 3; j++) {
                                let $valcol = []
                                for (let k = 0; k < 3; k++) {
                                        let bgcolor = Math.floor(Math.random() * 256);
                                        $valcol.push(bgcolor);
                                }
                                $valrow.push($valcol);
                        }
                        $array.push($valrow);
                }
                return $array;
        }
        function genrate() {
                for (let i = 0; i < 10; i++) {
                        let num = Math.floor(Math.random() * 3);
                        let newdiv = $(`<div class='container '></div>`).addClass('main');
                        $('#color-gen').append(newdiv);

                        let text = $(`<h1 class='container fs-3 fst-italic'></h1>`)
                                    .text(`rgb(${functionColor[i][num][0]} ${functionColor[i][num][1]} ${functionColor[i][num][2]})`)
                        newdiv.append(text)

                        for (let j = 0; j < 3; j++) {
                                let ptag = createbGround(functionColor[i][j], i, j, num);
                                newdiv.append(ptag);
                        }
                }
        }

        function createbGround(data, i, k, num) {
                let r = data[0];
                let g = data[1];
                let b = data[2];
                let paratag = $('<input id="radio" class="fs-6" type="radio"><div></div>')
                           .addClass('color').css('background-color', `rgb(${r},${g},${b})`);
                
                paratag.on('click', function () { validateFun(k, num, i); })

                return paratag;
        }

        
        function validateFun(data, num, id) {
                if (data == num) {
                        $('#color-gen').find('.main').eq(id).empty();
                        $count++;
                } else {
                       
                }

        }
        genrate();     

        $('#submit').on('click', function () {
                validateFun();
            });
        });

