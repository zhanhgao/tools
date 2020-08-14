export const extendsTest = {
    methods: {
        hello3() {
            console.log("hello extends");
        }
    },
    beforeCreate(){
        console.log("extends的beforeCreated");
        
    },
    created() {
        this.hello3();
    },
}