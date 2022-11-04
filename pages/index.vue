<template>
  <div class="min-h-screen bg-Verydarkbluemain">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="flex flex-col bg-Verydarkbluecard p-4 w-[270px] rounded-2xl font-outfit">
        <div class="nftImage flex justify-center mb-5">
          <div class="relative">
            <img v-on:mouseover="mouseOver" class="w-[250px] rounded-xl z-10" src="images/image-equilibrium.jpg"/>
            <div v-on:mouseleave="mouseOver" v-show="onMouse" class="flex cursor-pointer rounded-xl items-center justify-center absolute w-full h-full bgCyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <img class=" w-[40px] " src="images/icon-view.svg"/>
            </div>
          </div>
        </div>
        <div class="nameImg flex flex-col justify-start mb-3">
          <div class="titleNft mb-4">
            <p class="text-White text-[19px] font-[600] hover:text-Cyan cursor-pointer">Equilibrium #3429</p>
          </div>
          <div class="descNft">
            <p class="text-Softblue text-[14px] font-[300]">Our Equilibrium collection promotes balance and calm.</p>
          </div>
        </div>
        <div class="priceDay flex justify-between mb-4">
          <div class="price flex flex-row items-center">
            <img class="w-[8px] h-fit" src="images/icon-ethereum.svg"/>
            <p class="text-Cyan text-[13px] ml-1 font-[600]">0.041 ETH</p>
          </div>
          <div class="day flex flex-row items-center">
            <img class="w-[14px] h-fit" src="images/icon-clock.svg"/>
            <p class="text-Softblue text-[13px] ml-1 font-[400]">3 days left</p>
          </div>
        </div>
        <div class="border-t-[0.2px] opacity-20 mb-3"></div>
        <div class="creator flex items-center mb-2">
          <img class="h-[22px] border border-white rounded-full mr-2" src="images/image-avatar.png"/>
          <p class="text-[13px] text-Softblue font-[300] mr-1">Creation of</p>
          <p class="text-[13px] text-White font-[400] hover:text-Cyan cursor-pointer">Jules Wyvern</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      onMouse: false
    }
  },
  methods: {
    mouseOver(){
      this.onMouse = !this.onMouse
    }
  }
}
</script>
