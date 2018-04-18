import axios from 'axios'
let apis = require("./api.json")

window.$$$storage = {
	getSessionStorage(key){
		return sessionStorage.getItem('vdi_'+ key);
	},
	setSessionStorage(key, value){
		sessionStorage.setItem('vdi_'+ key, value);
	},
	clearSessionStorage(){
		sessionStorage.clear()
	}
}

let host = location.hostname;
let domain = location.protocol + "//" + host + ":8081"; // 多数用这个
let controllerDomain = location.protocol + "//" + host + ":19891"; // 很少用
let interfaceDomain = location.protocol + "//" + host + ":19893"; // 很少用
if(process.env.NODE_ENV=='development') {
	host = $$$storage.getSessionStorage('dev_host');
	// use dev_host
	if(host) {
		domain = "http://" + host + ":8081";
		controllerDomain = "http://" + host + ":19891";
		interfaceDomain = "http://" + host + ":19893";
	} else {
		// use mock server
		domain = controllerDomain = interfaceDomain = location.origin;
	}
}

export default{
	methods:{
		api:function(name,data){
			return	axios({
					method: apis[name].method,
					url: domain + apis[name].url,
					data: data
				});
		}
	}
    
}