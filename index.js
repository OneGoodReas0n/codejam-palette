import './style.scss';
import Palette from './functional/Palette';

window.onload = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const palette = new Palette(ctx);
    palette.init();
};
