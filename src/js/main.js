$(document).ready(
    function () {
        const board = new Board('.board');

        board.render([0, 1, 2, 0, 1, 2, 0, 1, 2,]);
        board.render([0, 1, 2, 0, 1, 2, 0, 1, 2,]);

        board.container.on('click', event => {
            console.log($(event.target).data());
        });
    });