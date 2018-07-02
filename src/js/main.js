$(() => {

    const playButton = $('#play-btn');

    playButton.on('click', () => {

        const engine = new Engine();
        const board = new Board('.board');
        board.render(engine.board);

        board.container.on('click', event => {

            try {
                engine.play($(event.target).index());
                board.render(engine.board);

                if (engine.hasWinner()) {
                    setTimeout(() => {
                        alert(`Player ${engine.currentPlayer} is the winner`)
                    });
                    board.container.off('click');
                    playButton.prop('disabled', false);

                } else if (engine.isDraw()) {
                    setTimeout(() => {
                        alert(`Draw!`);
                    });
                    board.container.off('click');
                    playButton.prop('disabled', false);

                } else {
                    engine.updatePlayer();
                }

            } catch (er) {
                console.error(er);
            }

        });


        playButton.prop('disabled', true);
    });

});
