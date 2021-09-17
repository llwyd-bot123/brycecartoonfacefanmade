<template>
  <div
    class="flex lg:flex-row xs:flex-col xs:space-y-16 sm:flex-col lg:space-x-24 justify-center items-center xs:pt-12 xs:pb-12 sm:pt-12 sm:pb-12  bg-gradient-to-tr px-2  from-purple-400 to-purple-600 lg:h-screen"
  >
    <!--BACKGROUND-->
    <div
      class="bg-gray-300 w-97 h-97 xs:w-85 xs:h-85 sm:w-85 sm:h-85 rounded-100 flex justify-center items-center "
    >
      <!-- HEAD -->
      <div
        class="flex justify-center items-center mt-12 bg-skin w-72 h-72 xs:w-64 xs:h-64 sm:w-64 sm:h-64 rounded-face "
      >
        <!-- HAIR -->
        <div class="absolute bg-beard w-72 xs:w-64 sm:w-64 h-24 mb-64 rounded-t-100">
          <div class="bg-beard w-2 h-20 absolute top-23">
            <div class="bg-beard w-6 h-9 ml-1 rounded"></div>
          </div>
          <div class="bg-beard w-2 h-20 absolute top-23 right-0">
            <div class="bg-beard w-6 h-9 rounded right-1 ml-2 absolute"></div>
          </div>
        </div>

        <!-- BROWS -->
        <div class="flex absolute space-x-12 flex-row mb-8">
          <div v-if="happy" class="border-t-8 rounded-100 border-black w-16 h-8"></div>
          <div v-if="happy" class="border-t-8 rounded-100 border-black w-16 h-8"></div>
          <div v-if="sleep" class="border-t-8 rounded-lg border-black w-16"></div>
          <div v-if="sleep" class="border-t-8 rounded-lg border-black w-16 h-8"></div>
          <div v-if="sad" class="border-b-8 transform pl-10 -rotate-45 rounded border-black w-16 mb-8"></div>
          <div v-if="sad" class="border-b-8 transform pr-10 rotate-45 rounded border-black w-16 mb-8"></div>
        </div>

        <!-- EYES -->
        <div class="flex absolute space-x-12">
          <div v-if="sleep"
            class="flex overflow-hidden justify-center items-center w-16 h-10 "
          >
            <div
              class="flex justify-center items-center w-14 h-8 rounded-100 border-b-8 border-gray-700"
            >
            </div>
          </div>

          <div v-if="happy"
            class="flex overflow-hidden justify-center items-center bg-white w-16 h-10 rounded-100 border-t-2 border-b-2 border-gray-700"
          >
            <div
              class="flex justify-center items-center bg-gradient-to-r from-gray-600 to-gray-500 w-10 h-10 rounded-100"
            >
              <div class="flex w-4 h-4 bg-beard rounded-lg"></div>
            </div>
          </div>

         <div v-if="sad"
            class="flex overflow-hidden justify-center items-center w-16 h-10 "
          >
            <div
              class="flex justify-center items-center w-14 h-8 rounded-100 border-b-8 border-gray-700"
            >
            </div>
          </div>

         <div v-if="sleep"
            class="flex overflow-hidden justify-center items-center w-16 h-10 "
          >
            <div
              class="flex justify-center items-center w-14 h-8 rounded-100 border-b-8 border-gray-700"
            >
            </div>
          </div>

           <div v-if="sad"
            class="flex overflow-hidden justify-center items-center w-16 h-10 "
          >
            <div
              class="flex justify-center items-center w-14 h-8 rounded-100 border-b-8 border-gray-700"
            >
            </div>
          </div>

          <div v-if="happy"
            class="flex overflow-hidden justify-center items-center bg-white w-16 h-10 rounded-100 border-t-2 border-b-2 border-gray-700"
          >
            <div
              class="flex justify-center items-center bg-gradient-to-r from-gray-600 to-gray-500 w-10 h-10 rounded-100"
            >
              <div class="flex w-4 h-4 bg-beard rounded-lg"></div>
            </div>
          </div>
        </div>

        <!-- NOSE -->
        <div
          class="flex absolute border-2 rounded-b-100 border-t-0 w-9 h-7 mt-24 border-beard"
        ></div>

        <!-- MOUTH -->
        <div v-if="happy"
          class="flex absolute w-24 xs:w-20 xs:h-8 sm:w-20 sm:h-8 h-9 bg-white mt-52 border-2 rounded-b-100 rounded-t-xl border-beard border-l border-r border-t-2"
        ></div>

        <div v-if="sleep"
          class="flex absolute w-9 h-9 rounded-100 bg-gray-700 mt-52"
        ></div>

        <div v-if="sad"
          class="flex absolute w-24 h-9 rounded-100 border-t-8 border-gray-700 mt-56"
        ></div>

        <!-- BEARD -->
        <div
          class="flex absolute w-32 h-18 xs:w-28 xs:h-18 sm:w-28 sm:h-18 mt-56 xs:mt-54 sm:mt-54 rounded-b-100 rounded-t-2xl border-beard border-6 border-b-16"
        >
          <div class="bg-beard hidden w-36 h-10 rounded-b-100 mt-10"></div>
        </div>

        <!-- EARS -->
        <div class="flex absolute justify-between w-96 xs:w-85 sm:w-85 ">
          <div
            class="w-7 ml-6 h-14 bg-skin bg-opacity-95 rounded-t-100 rounded-bl-100"
          ></div>
          <div
            class="w-7 mr-6 h-14 bg-skin bg-opacity-95 rounded-t-100 rounded-br-100"
          ></div>
        </div>
      </div>

    </div>

      
    <div class="flex flex-col space-y-6">

      <!--BRYCE EMOTES mobile-->
      <div class="flex lg:hidden flex-col space-y-6 items-center text-center sm:mt-8 lg:mt-0">
        <p class="font-bold text-4xl tracking-wide text-white font-serif">Make Bryce:</p>
        <div class="flex flex-row space-x-6">
          <button @click="bryceHappy" class="flex flex-col space-y-2">
            <p class="text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">🙂</p>
            <div v-if="happy" class="bg-gray-600 w-4 h-2 rounded-100 ml-4  "></div>
          </button>
          <button @click="bryceSad" class="flex flex-col space-y-2">
            <p class="text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">😞</p>
            <div v-if="sad" class="bg-gray-600 w-4 h-2 rounded-100 ml-4"></div>
          </button>
          <button @click="bryceSleeping" class="flex flex-col space-y-2">
            <p class="text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">😴</p>
            <div v-if="sleep" class="bg-gray-600 w-4 h-2 rounded-100 ml-4"></div>
          </button>
        </div>
        </div>

      <div class="inline-flex text-center justify-start">
        <p class="font-bold text-5xl text-white tracking-wide font-serif italic border-b-6 border-gray-300"> BRYCENT <span class="invisible">..</span></p>
      </div>
        <div class="flex xs:flex-col sm:flex-col lg:flex-row lg:space-x-6 lg:space-y-0 md:space-y-6 sm:space-y-6 xs:space-y-6">
          <a href="https://twitter.com/brycent_" target="blank_" class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-md">
        <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 16 16"><path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/><path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/></svg>  
      <span>Twitch</span>
      </a>
      <a href="https://twitter.com/brycent_" target="blank_" class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-md">
        <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
        <span>Twitter</span>
      </a>
      <a href="https://www.youtube.com/channel/UCAkAWIowrffoAIkaEfEexQg" target="blank_" class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-md">
      <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/></svg>
      <span>Youtube</span>
      </a>
      <a href="https://discord.com/invite/BhJEAbVjrb" target="blank_" class="bg-gray-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-md">
      <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"/><path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z"/></svg>      <span>LootSquad</span>
      </a>
      </div>

      <!--BRYCE EMOTES-->
      <div class="hidden lg:flex flex-col space-y-6">
        <p class="font-bold text-4xl tracking-wide text-white font-serif">Make Bryce:</p>
        <div class="flex flex-row space-x-6">
          <button @click="bryceHappy" class="flex flex-col space-y-2">
            <p class="text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">🙂</p>
            <div v-if="happy" class="bg-gray-600 w-4 h-2 rounded-100 ml-4  "></div>
          </button>
          <button @click="bryceSad" class="flex flex-col space-y-2">
            <p class="text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">😞</p>
            <div v-if="sad" class="bg-gray-600 w-4 h-2 rounded-100 ml-4"></div>
          </button>
          <button @click="bryceSleeping" class="flex flex-col space-y-2">
            <p class="text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">😴</p>
            <div v-if="sleep" class="bg-gray-600 w-4 h-2 rounded-100 ml-4"></div>
          </button>
        </div>
        </div>
    </div>
  
  </div>
</template>

<script>
export default {
  data(){
    return{
      sad: false,
      happy: true,
      sleep: false,
    }
  },

  methods:{
    bryceSad(){
      this.sad = true;
      this.happy = false;
      this.sleep = false;
    },
    bryceHappy(){
      this.sad =false;
      this.happy = true;
      this.sleep = false;
    },
    bryceSleeping(){
      this.sad = false;
      this.happy = false;
      this.sleep = true;
    }
  },
}
</script>
