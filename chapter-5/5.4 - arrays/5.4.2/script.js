let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');
const middle = Math.floor((styles.length - 1) / 2);
styles[middle] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги');
