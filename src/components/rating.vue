// Rating ordered book
<template>
    <div id="show-blogs">
        <div class = "star">
            <img src="./review/star.png">
        </div>
        <div v-for="(product) in cart" :key="product.id">
            <div>
                <div class="detail">
                    <img v-bind:src=product.img>
                    <h>{{ product.name }}</h>
                </div>
                <star-rating @rating-selected ="setRating($event,order.orderID)"></star-rating>
                <p>{{ rating }}</p>
                <br/>
            </div>
        </div>
        <div class="a bt"><button v-on:click="rrating()" value="ratingOrder">Confirm</button></div>
    </div>
</template>
<script>
    import {mapState, mapGetters} from 'vuex'
    export default{
        data() {
            return{

            };
        },
        computed: {
            ...mapState([
                "cart"
            ]),
            ...mapGetters([
                "cartSize",
                "cartTotalAmount",
                "discountTotalAmount"
            ])
        }
    }
</script>