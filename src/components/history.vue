// History book list page
<template>
    <div class="container mt-5 py-2">
  		<h1 class="my-2">Novel</h1> &nbsp;
         &nbsp;
        <div class="row">
            <!-- loop for show all history book type -->
           <div v-for="product in products" :key="product.id" class="col-sm-6 col-md-4 p-2">
                <div v-if="product.type === 'history'">
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