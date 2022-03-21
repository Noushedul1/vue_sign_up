export default {
    data(){
        return {
            count: 0
        }
    },
    methods: {
        counterValueUpdate(){
            this.count +=1;
        } 
    },
    watch: {
        count(val,previousvalue){
            if(val>5 && previousvalue>5){
                this.count = 0;
            }
        }
    }
}