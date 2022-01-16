const app = new Vue({
    el :'#app',
    data:{
        titulo :"Lista de tareas simple en VUE",
        tareas:[],
        nuevaTarea:''
    },
    methods:{
        agregarTarea : function (){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado : false
            });
            this.nuevaTarea ='';
        },
        editarTarea : function (index){
                   this.tareas[index].estado = true;
        },
        eliminarTarea : function (index){

            this.tareas.splice(index,1);
        },
    
    }
    
})