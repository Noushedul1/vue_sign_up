const state = {
    books: [
        {id: 1,bookname: 'web design',writter: 'noushedul',price: 300},
        {id: 2,bookname: 'web developmenr',writter: 'akib',price: 400},
        {id: 3,bookname: 'front end',writter: 'farhad',price: 260},
        {id: 4,bookname: 'back end',writter: 'nuhash',price: 500},
        {id: 5,bookname: 'full stack',writter: 'joy',price: 799},
      ],
      players: [
        {id:1,type: 'allrounder',playername: 'Shakib',run: 600},
        {id:2,type: 'allrounder',playername: 'Mehedi',run: 599},
        {id:1,type: 'allrounder',playername: 'Afif',run: 367},
        {id:1,type: 'batsman',playername: 'Tamin',run: 834},
        {id:1,type: 'keeper',playername: 'Mushfiq',run: 557},
      ]
};
const getters = {
    bookPrice: (state)=>{
        const bookPrice = state.books.map((book)=>{
          return {
            price: book.price/2,
            bookname: book.bookname,
            writter: book.writter
          }
        });
        return bookPrice;
      },
      playerRun: (state)=>{
        const playerRun = state.players.map((player)=>{
          return {
            type: player.type,
            playername: player.playername,
            run: player.run/2
          }
        });
        return playerRun;
      }
};
const mutations = {
    PRICE_REDUCE(state){
        state.books.forEach((book)=>{
          book.price= book.price/2
        });
      }
};
const actions = {
    priceReduce: ({commit})=>{
        commit("PRICE_REDUCE");
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}