<template>
    <div id="app" class="app">
        <nav class="nav">
            <ul>
                <li><router-link to="/button">Button</router-link></li>
                <li><router-link to="/input">Input</router-link></li>
                <li><router-link to="/radio">Radio</router-link></li>
                <li><router-link to="/checkbox">Checkbox</router-link></li>
                <li><router-link to="/alert">Alert</router-link></li>
                <li><router-link to="/tag">Tag</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            data: "app"
        };
    },
    methods: {
        active() {
        }
    },
    watch: {
        '$route': {
            handler(newData) {
                this.data = newData;
            }
        }
    }
};
</script>

<style lang="less">
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
        font-size: 16px;
        -webkit-text-size-adjust: 100%;
    }

    body, html, section, article, div, ul, li, h3, h4, h5, p {
        margin: 0;
        padding: 0;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;

        color: #409EFF;
    }

    body {
        width: 800px;
        margin: 20px auto;
    }

    .app {
        font-family: 'Roboto Slab', Roboto, Noto, sans-serif;
        .nav {
            float: left;
            line-height: 50px;
        }
    }
</style>