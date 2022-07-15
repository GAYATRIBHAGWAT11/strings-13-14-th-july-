let fname='         gayatri'
console.log(fname.trim());


fname[0]='G'
console.log(fname.replace('g','G'));
console.log(fname.replaceAll('a','A'));


// regex=>regular expresiion

let news='Ajmer dargah cleric nabbed in Hyd for beheading slogans'
console.log(news.replace(/a/ig,'ajmer'));

// split=>

let headline='Actor-director Pratap Pothen passes away'
console.log(headline.split(' '));
console.log(headline.split(' ').length);

console.log(headline.split('Pratap',1));

