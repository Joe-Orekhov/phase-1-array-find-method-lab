function superbowlWin(x){
    const winningObj = x.find(obj => (obj.result === 'W'))
      if(winningObj === undefined){
          return undefined;
      }else(winningObj.result === 'W')
        return winningObj.year
}
