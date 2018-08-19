<template>
    <div class="lu-btn" :class="[
            type ? `lu-btn--${type}` : '',
            size ? `lu-btn--${size}` : '',
            outline ? `outline` : ''
        ]" :disabled="disabled" :type="nativeType" @click="handleClick">
        <span class="lu-button__slot">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: "lu-button",
    props: {
        type: {
            type: String,
            default: "default"
        },
        nativeType: {
            type: String,
            default: "button"
        },
        size: String,
        disabled: {
            type: Boolean,
            default: false
        },
        outline: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick(e) {
            this.$emit("click", e);
        }
    }
};
</script>
