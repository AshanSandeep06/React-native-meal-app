import axios from 'axios';

export const getMeals = async() => {
    axios.get('https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=nature%20background&position=0&from_view=keyword&track=ais')
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    });
};