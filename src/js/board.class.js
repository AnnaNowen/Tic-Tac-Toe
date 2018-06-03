class Board {

    constructor (selector) {
        this.container = $(selector);
    }

    render (elements) {
        this.container.empty();
        elements.forEach((element, index) => {
            this.container.append($(`
                <div class="element-${element}" data-index="${index}"></div>
            `))
        })
    }
}