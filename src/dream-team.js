module.exports = function createDreamTeam(members) {
   var name='';
  if (!Array.isArray(members)){
    return false;
  }; 
  for(let i=0; i<members.length; i++){
    if(typeof members[i] === 'string'){
    name=name+members[i].trim().charAt(0).toUpperCase();
    };
  };
   return name.split('').sort().join('');

};