<template>
    <div class="message" ref="message" :style="{ animation: fadeOutAnimation }" v-if="show" :class="`message-${type}`"
        @click="cleanScreen">
        <p class="message__text">
            {{ message }}
        </p>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'Message',
    data() {
        return {
            fadeOutAnimation: ''
        }
    },
    methods: {
        ...mapMutations('ui', ['cleanMessage']),

        cleanScreen(event) {
            event.target.style.animation = 'fadeOut'
            event.target.style.animationDuration = '1s'
            setTimeout(() => {
                this.cleanMessage()
            }, 1000)
        },

    },
    computed: {
        ...mapState('ui', ['show', 'type', 'message'])
    },
    watch: {
        show(n, o) {
            if (n) {
                setTimeout(() => {
                    this.$refs.message.click()
                }, 2400)
                
            }
        }
    }
}
</script>

<style lang="scss">
.message {
    display: flex;
    width: 88.88vw;
    padding: 1.6rem;
    color: var(--clr-white);
    font-family: 'Ubuntu', Arial;
    font-size: 2rem;
    font-weight: 800;
    position: absolute;
    border-radius: 8px;
    bottom: 0;
    margin-bottom: 1.6rem;
    z-index: 1;

    &-alert {
        background-color: var(--clr-alert);
    }

    &-success {
        background-color: var(--clr-success);
    }

    &-info {
        background-color: var(--clr-info);
    }

    &-warning {
        background-color: var(--clr-warning);
    }

    // refactor!
    @media only screen and (min-width: 50em) {
        width: 40vw;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
        display: none;
    }
}
</style>