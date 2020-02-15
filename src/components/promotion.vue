// promotion book list page
<template>
    <div class="container mt-5 py-2">
  		<h1 class="my-2">Harry Potter</h1> &nbsp;
        <div class="borderStyle">
            <b>Promotion detail</b>
            <p>Buy 2 unique books, 10% off of those 2 books</p>
            <p>Buy 3 unique books, 20% off of those 3 books</p>
            <p>Buy 4 unique books, 30% off of those 4 books</p>
            <p>Buy 5 unique books, 50% off of those 5 books</p>
            <p>Buy 6 unique books, 50% off of those 6 books</p>
            <p>Buy 7 unique books, 60% off of those 7 books</p>
        </div>
         &nbsp;
        <div class="row">
            <!-- loop for show all promotion book type -->
           <div v-for="product in products" :key="product.id" class="col-sm-6 col-md-4 p-2">
                <div v-if=product.promotion>
                    <single-product :product="product"></single-product>
                </div>
           </div>
       </div>
   </div>
</template>

<script>
    import SingleProduct from "./SingleProduct.vue"
    export default{
        components: {
            SingleProduct
        },
        computed: {
            products(){
                return this.$store.state.products;
            }
        },
        created(){
            this.$store.dispatch("fetchProducts");
        }
    }
</script>
<style scoped>
    .borderStyle {
    margin: auto;
    width: 100%;
    padding: 10px;
    border-left: 6px solid #5A2B17;
    }

</style>