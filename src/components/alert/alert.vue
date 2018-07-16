<template>
    <div class="lu-alert" :class="[type ? `lu-alert--${type}` : '', outline ? 'outline' : '']" v-show="isShow">
        <div class="lu-alert__content">
            <p class="lu-alert__message" v-if="message" v-text="message"></p>
            <p class="lu-alert__description" v-if="description" v-text="description"></p>
        </div>
        <i class="lu-alert__close" v-show="closable" @click="handleClose" v-text="closeText"></i>
    </div>
</template>

<script>
export default {
    name: "lu-alert",
    props: {
        type: {
            type: String,
            default: "info"
        },
        message: {
            type: String,
            default: ""
        },
        description: String,
        outline: {
            type: Boolean,
            default: false
        },
        closable: {
            type: Boolean,
            default: false
        },
        closeText: {
            type: String,
            default: "关闭"
        }
    },
    data() {
        return {
            isShow: true
        };
    },
    methods: {
        handleClose() {
            this.isShow = false;
            this.$emit("on-close");
        }
    }
};
</script>

