class Board {

    constructor (selector) {
        this.container = $(selector);
    }

    render (values) {
        this.container.empty();
        values.forEach((element) => {
            this.container.append(`<div class="element element-${element}"></div>`)
        });
    }
}