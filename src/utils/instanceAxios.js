import axios from "axios";

var  instanceAxios = axios.create()
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// instanceAxios.defaults.headers.post['Access-Control-Allow-Origin']='*'
// instanceAxios.defaults.headers.post['Access-Control-Allow-Headers']='Content-Type'

instanceAxios.interceptors.request.use(
    function(config){
        config.headers['Access-Control-Allow-Origin']='*'
        config.headers['Access-Control-Allow-Headers']='Content-Type'
        return config
    }
)

export {  instanceAxios };