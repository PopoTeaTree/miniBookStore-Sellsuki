//Cart component to show bill including order list, name, quality, discount, total and net total
<template>
    <div class="container">
        <h1 class="my-2">Cart</h1>
        <br>
        <!-- Show alert text that is empty -->
        <div v-if="!cartSize" role="alert">
            <p class="alert alert-secondary alert-style">Cart is empty! Please add some products.</p>
            <router-link to="/" class="btnn">Shop Now</router-link>
        </div>
        <!-- Order list -->
        <table v-else class="table table-striped mb-5">
          <thead class="theadColor">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Delete</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in cart" :key="product.id">
              <th scope="row">{{index + 1}}</th>
              <td>{{product.name}}</td>
              <td>$ {{product.price}}</td>
              <td>
                  <button
                      @click="removeFromCart(product.id)"
                      :disabled="product.quantity === 1"
                      class="btn btn-outline-danger btn-small">
                      -
                  </button>
                  <span class="mx-2">{{product.quantity}}</span>
                  <button
                      @click="addToCart(product.id)"
                      :disabled="product.quantity === product.stock"
                      class="btn btn-outline-success btn-small">
                      +
                  </button>
              </td>
              <td><button
                  @click="deleteFromCart(product.id)"
                  class="btn btn-danger btn-small">
                  Delete
              </button></td>
              <td>$ {{product.quantity* product.price}}</td>
            </tr>
            <tr class="table-footer">
                <td colspan="5" class="total">Total:</td>
                <td>$ {{cartTotalAmount}}</td>
            </tr>
                        <tr class="table-footer">
                <td colspan="5" class="total">Discount:</td>
                <td>$ {{discountTotalAmount}}</td>
            </tr>
            <tr class="table-footer">
                <td colspan="5" class="total">NetTotal:</td>
                <td>$ {{cartTotalAmount - discountTotalAmount}} </td>
            </tr>
          </tbody>
        </table>
    <!-- <router-link to="/payment" class="btnn">Order Now</router-link> -->
    <br><br>
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
        },
        methods: {
            addToCart(id) {
                this.$store.dispatch("addToCart", id);
            },
            removeFromCart(id) {
                this.$store.dispatch("removeFromCart", id);
            },
            deleteFromCart(id) {
                this.$store.dispatch("deleteFromCart", id);
            }
        }
    }
</script>

<style scoped>
    .table-footer{
        font-size: 1.2em;
        font-weight: bold;
    }
    .total{
        text-align: right;
    }
    .alert-style{
        background: #41291D;
        color: #BA8458
    }
    .table{
        background: #BA8458;
    }
    .theadColor{
        background: #41291D;
        color:  #BA8458;
    }
    .btnn{
        background-color: #41291D;
        color: white;
        width: 130px;
        height: 30px;
        border-color: #5A2B17;
        position: absolute;
        border-radius: 12px;
        box-sizing: border-box;
        text-align: center;
    }
    .btnn:hover{
        background-color: #BA8458;
        border-color: #BA8458;
    }
    .btnn:focus{
        background-color: #BA8458;
        border-color: #BA8458;
    }
    .btnn:active{
        background-color: #BA8458;
        border-color: #BA8458;
    }
</style>