function temParam(param) {
    return process.argv.indexOf(param) !== -1
}

if(temParam('--produção')) {
    console.log('Atençao Total!!!')
} else {
    console.log('Tranquilo!!!')
}