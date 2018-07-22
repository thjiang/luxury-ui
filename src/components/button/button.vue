<template>
    <button class="lu-btn" :class="[
            type ? `lu-btn--${type}` : '',
            size ? `lu-btn--${size}` : '',
            outline ? `lu-btn--${type}--outline` : ''
        ]" :disabled="disabled" :type="nativeType" @click="handleClick">
        <span v-if="showSlot" ref="slot">
            <slot></slot>
        </span>
    </button>
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
