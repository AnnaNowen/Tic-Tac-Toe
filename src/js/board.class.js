class Board {

    constructor (selector) {
        this.selector = selector;
    }

    render (elements) {
        const container = $(this.selector);
        container.empty();
        elements.forEach((element, index) => {
            container.append($(`
                <div class="element-${element}" data-index="${index}"></div>
            `))
        })
    }
}