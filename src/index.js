import $ from 'jquery';
import './style.css';
// import Users from './users.json';
import webpackImg from './webpack.png'

// console.log(Users);

$('body').html('<h1>Hello Webpack </h1>');

let img = new Image();
img.src=webpackImg;
$('body').append(img);
