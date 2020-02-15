//Single card
<template>
    <div class="card">
        <img class="card-img-top" v-bind:src=product.image alt="Card image cap">
        <div class="card-body">
           <h5 class="card-title">{{product.name}}</h5>
           <h7 class="card-title">{{product.author}}</h7>
           <p class="card-text">Price: <b>{{product.price}}</b></p>
           <div class="star">
                <!-- loop for shaw yellow star -->
                <span v-for="indexX in product.rating" :key="indexX" >
                    <yellowStar></yellowStar>
                </span>
                <!-- loop for gray yellow star -->
                <span v-for="indexX in 5-product.rating" :key="indexX" >
                    <grayStar></grayStar>
                </span>
                <li class="list-inline-item" style="cursor:pointer;"><p class="text-muted" style="font-size: 0.9em;">&nbsp; {{ product.rating }}</p></li>
            </div>
            <!-- toggle for read book detail-->
           <p v-if="isHidden" class="readMoreLess" v-on:click="isHidden = !isHidden" style="cursor:pointer;">Read more</p>
           <p v-if="!isHidden" class="readMoreLess" v-on:click="isHidden = !isHidden" style="cursor:pointer;">Read less</p>
           <p v-if="!isHidden">{{ product.detail }}</p>
           <!-- Add to cart button -->
           <button pill variant="info"
               class="btn mt-3"
               :class="inCartQuantity ? 'btn-success' :  'btn-danger'"
               @click="addToCart(product.id)"
               :disabled="!inCartQuantity">
               {{inCartQuantity ? "Add to Cart" : "Out of stock"}}
           </button>
       </div>
   </div>
</template>

<script>
import yellowStar from './YellowStar.vue'
import grayStar from './GrayStar.vue'

    export default{
        components: {
            'yellowStar' : yellowStar,
            'grayStar' : grayStar
        },
        data() {
            return{
                isHidden: true
            }
        },
        props: ["product"],
        computed: {
            inCartQuantity() {
                return this.product.quantity;
            }
        },
        methods: {
            addToCart(id){
                this.$store.dispatch("addToCart", id);
            }
        }
    }
</script>

<style scoped>
    .btn{
        background-color: #41291D;
        color: white;
        border-color: #5A2B17;
    }
    .btn:hover{
        background-color: #BA8458;
        border-color: #BA8458;
    }
    .btn:focus{
        background-color: #BA8458;
        border-color: #BA8458;
    }
    .btn:active{
        background-color: #BA8458;
        border-color: #BA8458;
    }
    .readMoreLess{
        color: #41291D;
        font-weight:bold;
    }
    .readMoreLess:active{
        color: #BA8458;
        font-weight:bold;
    }
    .readMoreLess:hover{
        color: #BA8458;
        font-weight:bold;
    }
</style>