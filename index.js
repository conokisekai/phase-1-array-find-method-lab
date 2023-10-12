function superbowlWin(superbowlArray) {
    // Using the find() method to search for a win ("W") in the array
    const winningYearObject = superbowlArray.find(superbowl => superbowl.result === 'W');
  
    // If a win is found, return the year, else return undefined
    return winningYearObject ? winningYearObject.year : undefined;
  }
