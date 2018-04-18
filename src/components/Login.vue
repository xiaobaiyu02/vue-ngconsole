<template>
  <div class="login container">
    <form>
        <div class="row justify-content-md-center">
            <div class="col-auto">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><span class="fa fa-user"></span></div>
                    </div>
                    <input type="text" class="form-control"
                        placeholder="user name"
                        autofocus="autofocus"
                        maxlength="20"
                        v-model.trim="name"
                        required>
                </div>
            </div>
            <div class="col-auto">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><span class="fa fa-lock"></span></div>
                    </div>
                    <input type="password" class="form-control"
                        placeholder="password"
                        maxlength="20"
                        v-model.trim="password"
                        required>
                </div>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2" @click='onLogin()'>登录</button>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
import mixin from '../js/mixins'
export default {
  name: 'Login',
  mixins: [mixin],
  data(){
    return {
        name: "",
        password: ""
    }
  },
  methods:{
    onLogin: function(){
        var self = this;
        self.api('login',{username: this.name, password: this.password}).then(function(res){

        },function(err){

        })
    }
  }
}
</script>
