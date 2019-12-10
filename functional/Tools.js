class Tools {
    constructor(context, canvas) {
        this.canvas = canvas;
        this.ctx = context;

        this.selectedTool = 'Pencil';

        this.colorPickerValue = '';

        this.canvasLength = 0;
        this.matrixSize = 0;
        this.color = '';

        this.isDrawing = false;
        this.pointState = {
            initx: 0,
            inity: 0,
        };

        this.init = () => {
            this.canvasLength = this.canvas.offsetWidth;
            this.matrixSize = 4;
            this.color = '#000000';
        };

        this.setSelectedTool = tool => {
            this.selectedTool = tool;
        };

        this.mouseDownHandler = e => {
            const { offsetX, offsetY } = e;
            switch (this.selectedTool) {
                case 'Pencil':
                    this.isDrawing = true;
                    this.pointState.initx = offsetX;
                    this.pointState.inity = offsetY;
                    break;
                case 'Paint bucket':
                    this.pointState.initx = offsetX;
                    this.pointState.inity = offsetY;
                    this.fill();
                    break;
                case 'Choose color':
                    this.colorPicker(offsetX, offsetY);
                    break;
                default:
                    break;
            }
        };

        this.mouseMoveHandler = e => {
            const { offsetX, offsetY } = e;
            if (this.isDrawing) {
                this.drawLine(this.pointState.initx, this.pointState.inity, offsetX, offsetY);
                this.pointState.initx = offsetX;
                this.pointState.inity = offsetY;
            }
        };

        this.mouseUpHandler = () => {
            this.isDrawing = false;
            this.pointState.initx = 0;
            this.pointState.inity = 0;
        };

        this.toggleDrawing = () => {
            if (this.isDrawing) {
                this.isDrawing = false;
            } else {
                this.isDrawing = true;
            }
        };

        this.getDrawingStatus = () => {
            return this.isDrawing;
        };

        this.setMatrixSize = size => {
            this.matrixSize = size;
        };

        this.setColor = color => {
            this.color = color;
        };

        this.setCanvasLength = length => {
            this.canvasLength = length;
        };

        this.drawLine = (x1, y1, x2, y2) => {
            let x;
            let y;

            let px;
            let py;

            let xe;
            let ye;
            let i;

            const dx = x2 - x1;
            const dy = y2 - y1;
            const dx1 = Math.abs(x2 - x1);
            const dy1 = Math.abs(y2 - y1);

            px = 2 * dy1 - dx1;
            py = 2 * dx1 - dy1;

            if (dy1 <= dx1) {
                if (dx >= 0) {
                    x = x1;
                    y = y1;
                    xe = x2;
                } else {
                    x = x2;
                    y = y2;
                    xe = x1;
                }

                this.drawPxl(x, y);

                for (i = 0; x < xe; i += 1) {
                    x += 1;
                    if (px < 0) {
                        px += 2 * dy1;
                    } else {
                        if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                            y += 1;
                        } else {
                            y -= 1;
                        }
                        px += 2 * (dy1 - dx1);
                    }

                    this.drawPxl(x, y);
                }
            } else {
                if (dy >= 0) {
                    x = x1;
                    y = y1;
                    ye = y2;
                } else {
                    x = x2;
                    y = y2;
                    ye = y1;
                }

                this.drawPxl(x, y);

                for (i = 0; y < ye; i += 1) {
                    y += 1;
                    if (py <= 0) {
                        py += 2 * dx1;
                    } else {
                        if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                            x += 1;
                        } else {
                            x -= 1;
                        }
                        py += 2 * (dx1 - dy1);
                    }
                    this.drawPxl(x, y);
                }
            }
        };

        this.drawPxl = (x, y) => {
            const pxlSize = this.canvasLength / this.matrixSize;
            this.ctx.fillStyle = this.color;
            if (this.matrixSize === 512) {
                const x1 = x;
                const y1 = y;

                this.ctx.fillRect(x1, y1, pxlSize, pxlSize);
            } else {
                const [x1, y1] = this.getPixelSize(x, y);
                this.ctx.fillRect(x1, y1, pxlSize, pxlSize);
            }
        };

        this.getPixelSize = (coord1, coord2) => {
            const arr = [];
            const columnSize = this.canvasLength / this.matrixSize;
            arr.push(Math.floor(coord1 / columnSize) * columnSize, Math.floor(coord2 / columnSize) * columnSize);
            return arr;
        };

        this.clear = () => {
            this.ctx.clearRect(0, 0, this.canvasLength, this.canvasLength);
        };

        this.fill = () => {
            this.ctx.fillStyle = this.color;
            const pxlSize = this.canvasLength / this.matrixSize;
            for (let i = 0; i < this.matrixSize; i += 1) {
                for (let j = 0; j < this.matrixSize; j += 1) {
                    this.ctx.fillRect(pxlSize * j, pxlSize * i, pxlSize, pxlSize);
                }
            }
        };

        this.colorPicker = (x, y) => {
            const pixel = this.ctx.getImageData(x, y, 1, 1);
            const { data } = pixel;
            const rgba = `rgba(${data[0]},${data[1]},${data[2]},${data[3] / 255})`;
            this.colorPickerValue = rgba;
        };
    }
}

export default Tools;
