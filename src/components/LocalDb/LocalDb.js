const getStoreReadList=()=>{
//read-list
const storeListStr=localStorage.getItem('read-list')
if(storeListStr){
    const storeList=JSON.parse(storeListStr)
    return storeList;
}
else{
return [];
}
}


const setToAddStoreReadList =(id)=>{
    const storeList=getStoreReadList();
    if(storeList.includes(id)){
        console.log('Id already exist in read list')
    }
    else{
        storeList.push(id);
        const storeListStr=JSON.stringify(storeList)
      localStorage.setItem('read-list',storeListStr)
    }

}
export {setToAddStoreReadList}