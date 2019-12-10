import Tools from './Tools';

class Palette {
    constructor(context) {
        this.context = context;
        this.canvas = {};
        this.canvasLength = 0;
        this.initBackground = '';
        this.colorWheel = {};
        this.colorWheelValue = '';
        this.matrixSizeMap = new Map();

        this.selectedTool = 'Pencil';

        this.initColorsArr = ['#000000', '#ffffff', '', '#e74c3c', '#2980b9'];

        this.sizebarDiv = {};
        this.colorbarDiv = {};
        this.toolbarDiv = {};

        this.tools = {};

        this.init = () => {
            this.canvas = document.getElementById('canvas');
            this.sizebarDiv = document.getElementById('sizebar');
            this.colorbarDiv = document.getElementById('colorbar');
            this.toolbarDiv = document.getElementById('toolbar');
            this.colorWheel = document.getElementById('colorWhell');

            this.canvasLength = this.canvas.offsetWidth;
            this.initBackground = '#ffffff';

            this.matrixSizeMap.set('4x4', 4);
            this.matrixSizeMap.set('16x16', 16);
            this.matrixSizeMap.set('32x32', 32);

            this.tools = new Tools(this.context, this.canvas);

            this.tools.init();

            this.canvas.addEventListener('mousedown', this.tools.mouseDownHandler);

            this.canvas.addEventListener('mousedown', this.setCurrentColor);

            this.canvas.addEventListener('mousemove', this.tools.mouseMoveHandler);

            this.canvas.addEventListener('mouseup', this.tools.mouseUpHandler);

            const sizeBarArr = document.getElementsByClassName('select-list__item');
            for (let i = 0; i < sizeBarArr.length; i += 1) {
                sizeBarArr[i].addEventListener('click', this.changeMatrixSize);
            }

            const colorBarArr = document.getElementsByClassName('colors-bar__item');
            for (let i = 0; i < colorBarArr.length; i += 1) {
                colorBarArr[i].addEventListener('click', this.changeColorHandler);
            }

            for (let i = 0; i < this.colorbarDiv.children.length; i += 1) {
                if (this.initColorsArr[i]) {
                    this.colorbarDiv.children[i].children[0].setAttribute(
                        'style',
                        `background-color:${this.initColorsArr[i]}`
                    );
                }
            }

            for (let i = 0; i < this.toolbarDiv.children.length; i += 1) {
                this.toolbarDiv.children[i].addEventListener('click', this.changeToolhandler);
            }

            this.colorWheelValue = '#554433';
            this.colorWheel.value = this.colorWheelValue;

            this.colorWheel.addEventListener('change', this.setColorWheelColor);

            document.addEventListener('keydown', e => {
                const { code } = e;
                const arr = ['Pencil', 'Paint bucket', 'Choose color'];
                switch (code) {
                    case 'KeyB':
                        this.changeToolhandler(arr[1]);
                        break;
                    case 'KeyC':
                        this.changeToolhandler(arr[2]);
                        break;
                    case 'KeyP':
                        this.changeToolhandler(arr[0]);
                        break;
                    default:
                        break;
                }
            });
        };

        this.setCurrentColor = () => {
            if (this.tools.colorPickerValue !== undefined && this.tools.colorPickerValue !== '') {
                const currentColorDiv = this.colorbarDiv.children.item(0).children.item(0);
                currentColorDiv.setAttribute('style', `background-color:${this.tools.colorPickerValue}`);
            }
        };

        this.setColorWheelColor = e => {
            this.colorWheelValue = e.target.value;
        };

        this.getCanvas = () => {
            if (this.canvas !== undefined) {
                return this.canvas;
            }
            return null;
        };

        this.getMatrixSizeMap = () => {
            return this.matrixSizeMap;
        };

        this.getContext = () => {
            return this.context;
        };

        this.getCanvasLength = () => {
            return this.canvasLength;
        };

        this.changeMatrixSize = e => {
            const { target } = e;
            const name = target.children.item(1).innerHTML;
            switch (name) {
                case '4x4':
                    this.sizebarDiv.childNodes.forEach(el => {
                        if (el.nodeName === 'DIV') {
                            if (el.id === name) {
                                el.classList.add('select-list__item_active');
                                this.tools.setMatrixSize(this.matrixSizeMap.get(name));
                            } else {
                                el.classList.remove('select-list__item_active');
                            }
                        }
                    });
                    break;
                case '16x16':
                    this.sizebarDiv.childNodes.forEach(el => {
                        if (el.nodeName === 'DIV') {
                            if (el.id === name) {
                                el.classList.add('select-list__item_active');
                                this.tools.setMatrixSize(this.matrixSizeMap.get(name));
                            } else {
                                el.classList.remove('select-list__item_active');
                            }
                        }
                    });
                    break;
                case '32x32':
                    this.sizebarDiv.childNodes.forEach(el => {
                        if (el.nodeName === 'DIV') {
                            if (el.id === name) {
                                el.classList.add('select-list__item_active');
                                this.tools.setMatrixSize(this.matrixSizeMap.get(name));
                            } else {
                                el.classList.remove('select-list__item_active');
                            }
                        }
                    });
                    break;
                default:
                    break;
            }
        };

        this.changeColorHandler = e => {
            const { target } = e;
            const currentColorDiv = this.colorbarDiv.children.item(0).children.item(0);
            const currentColor = currentColorDiv.style.backgroundColor;
            const prevColorDiv = this.colorbarDiv.children.item(1).children.item(0);
            const clickedDiv = target.children.item(0);
            const divName = target.nodeName === 'INPUT' ? target.id : target.children.item(1).innerHTML;
            switch (divName) {
                case 'red':
                    currentColorDiv.setAttribute('style', `background-color:${clickedDiv.style.backgroundColor}`);
                    prevColorDiv.setAttribute('style', `background-color:${currentColor}`);
                    this.tools.setColor(clickedDiv.style.backgroundColor);
                    break;
                case 'blue':
                    currentColorDiv.setAttribute('style', `background-color:${clickedDiv.style.backgroundColor}`);
                    prevColorDiv.setAttribute('style', `background-color:${currentColor}`);
                    this.tools.setColor(clickedDiv.style.backgroundColor);
                    break;
                case 'Prev color':
                    currentColorDiv.setAttribute('style', `background-color:${clickedDiv.style.backgroundColor}`);
                    this.tools.setColor(clickedDiv.style.backgroundColor);
                    break;
                case 'Color selection':
                    prevColorDiv.setAttribute('style', `background-color:${currentColor}`);
                    currentColorDiv.setAttribute('style', `background-color:${this.colorWheelValue}`);
                    this.tools.setColor(this.colorWheelValue);
                    break;
                case 'Current color':
                default:
                    break;
            }
        };

        this.changeToolhandler = e => {
            let name = '';
            if (e.target !== undefined) {
                const { target } = e;
                name = target.children[1].innerHTML;
            } else {
                name = e;
            }
            switch (name) {
                case 'Pencil':
                    this.toolbarDiv.childNodes.forEach(el => {
                        if (el.nodeName === 'DIV') {
                            if (el.children[1].innerHTML === name) {
                                el.classList.add('tools-bar__item_active');
                                this.selectedTool = name;
                                this.tools.setSelectedTool(this.selectedTool);
                            } else {
                                el.classList.remove('tools-bar__item_active');
                            }
                        }
                    });
                    break;
                case 'Paint bucket':
                    this.toolbarDiv.childNodes.forEach(el => {
                        if (el.nodeName === 'DIV') {
                            if (el.children[1].innerHTML === name) {
                                el.classList.add('tools-bar__item_active');
                                this.selectedTool = name;
                                this.tools.setSelectedTool(this.selectedTool);
                            } else {
                                el.classList.remove('tools-bar__item_active');
                            }
                        }
                    });
                    break;
                case 'Choose color':
                    this.toolbarDiv.childNodes.forEach(el => {
                        if (el.nodeName === 'DIV') {
                            if (el.children[1].innerHTML === name) {
                                el.classList.add('tools-bar__item_active');
                                this.selectedTool = name;
                                this.tools.setSelectedTool(this.selectedTool);
                            } else {
                                el.classList.remove('tools-bar__item_active');
                            }
                        }
                    });
                    break;
                default:
                    break;
            }
        };
    }
}
export default Palette;
