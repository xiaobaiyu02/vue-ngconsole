<template>
    <ul class="menu">
        <li
            class="menuItem"
            v-for="(menu) in menus"
            :key="menu.key"
            :class="{'open': menu.key==open.key}">
            <span
                class="row no-gutters align-items-center"
                v-if="menu.sublist"
                @click="openMenu(menu)">
                <span class='col'>
                    <i class="icon fa fa-lg fa-fw" :class="[menu.icon]"></i>
                    {{ menu.value }}
                </span>
                <i class="fa right" :style="{width:'20px'}" :class="[menu.key==open.key?'fa-angle-up':'fa-angle-down']"></i>
            </span>
            <router-link
                v-if="!menu.sublist"
                :to="menu.url">
                <i class="icon fa fa-lg fa-fw" :class="[menu.icon]"></i>
                {{ menu.value }}
            </router-link>
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @leave="leave"
                :css="false">
                <ul 
                    class="submenu"
                    v-if="menu.key==open.key">
                    <li 
                        class="subMenuItem"
                        v-for="(subMenu) in menu.sublist"
                        :key="subMenu.key"
                        @click="selectSubmenu(subMenu)">
                        <router-link
                            :to="subMenu.url">
                            {{ subMenu.value }}
                        </router-link>
                    </li>
                </ul>
            </transition>
        </li>
    </ul>
</template>

<script>
import Consts from "../js/consts"

export default {
  name: 'Menu',
  data () {
    return {
        menus: Consts.nvigatorLink,
        open:{},
        select: {}
    }
  },
  methods:{
    openMenu: function(menu){
        if(this.open.key==menu.key){
            this.open = {};
        }else{
            this.open = menu;
        }
    },
    selectSubmenu: function(subMenu){
        this.select = subMenu;
    },
    beforeEnter: function(el){
        el.style.opacity = 0;
        el.style.height = 0;
    },
    enter: function (el, done) {
        Velocity(el, { opacity: 1, height: '100%' }, { duration: 300, progress: function(elements, complete, remaining, start, tweenValue) {
            $(el).height($(el).height()*complete)
        } },{ complete: done })
    },
    leave: function(el, done){
       Velocity(el, { opacity: 0, height: 0 }, { duration: 300 },{ complete: done })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../less/variable.less";
.menu{
    border-right: 1px solid @menu-border-right;
    font-size: 14px;
}
.menu .menuItem{
    line-height: 49px;
    z-index: 999;
}
.menu .menuItem>a:hover,.menu .menuItem>span:hover,.menu .subMenuItem>a:hover{
    cursor: pointer;
    background: @menu-hover-bg;
}
.menu .menuItem>span,.menu .menuItem>a{
    padding: 0 20px;
    color: @menu-menuItem;
}
.menu .menuItem .icon{
    font-size: 16px;
    padding-right: 25px;
}
.menu a{
    display: block;
}
.menu .subMenuItem a{
    color: @menu-submenu;
    padding-left: 40px;
}
.menuItem .router-link-active{
    margin-right: -1px;
    border-right: 2px solid @menu-submenu;
}
</style>
