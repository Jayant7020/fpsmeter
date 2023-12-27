<script setup>
const myFps = useFps();

onMounted(()=>{

    const getFPS = () =>
    new Promise(resolve =>
      requestAnimationFrame(t1 =>
      requestAnimationFrame(t2 => resolve(1000 / (t2 - t1)))
     )
    ) 
    getFPS().then((fps)=>{
        
        if(fps==Infinity){
          myFps.value=60;   
        }else{
          myFps.value = fps.toFixed(2)
        }

        });
})
function refreshPage(){
    window.location.reload();
} 
</script>

<template>
    <div class="flex justify-around items-center">
        <div class="mt-8">
            <h2 class="text-7xl font-semibold font-Amaranth text-[#236c7e] md:animate-fade-right md:animate-duration-[2000ms] md:animate-delay-100"><span class="text-[#fa9323]">Play</span> And <span class="text-[#fa9323]">Run</span> <br/>Different FPS Test</h2><br/>
            <p class="text-2xl font-Mukta">Your Screen Working On <span class="font-bold text-3xl"> {{ myFps }} </span> FPS </p>
            <p class="mt-3 text-xl font-Mukta"><span class="font-bold"> Warning: </span>  It often returns an incorrect FPS because sometimes <br/> an animation frame is skipped when your CPU is busy with other tasks.</p>
            <p class="mt-3 text-xl font-Mukta">Refresh Page To Get Exact FPS of Screen</p>
            <div class="mt-4">
                <button @click="refreshPage()" class="rounded-md py-2 px-5 bg-[#236c7e] text-white font-semibold text-lg animate-shake animate-duration-[2000ms] animate-delay-100 font-Mukta">Refresh</button>
            </div>
        </div>
        <div class="container md:block hidden">
          <div class="ball"></div>
        </div> 
    </div><br/>
</template>

<style scoped>

.container {
    position: relative;
    width: 300px;
    height: 300px;
}

.container::before {
    position: absolute;
    content: "";
    width: 70px;
    height: 25px;
    left: 50%;
    top: 90%;
    transform: translateX(-50%);
    background: #a5a5a5;
    box-shadow: 0 0 30px #a5a5a5, 0 0 30px #a5a5a5;
    border-radius: 50%;
    animation: shadow-animate 5s infinite;
}

.container .ball {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    top: 0;
    background: #fa9323;
    border-radius: 50%;
    box-shadow: 0 0 10px #fa9323, 0 0 30px #fa9323;
    animation: ball-animate 5s infinite;
}

@keyframes ball-animate {
    5% {
        width: 100px;
        height: 100px;
    }
    20% {
        height: 120px;
    }
    30% {
        width: 90px;
        height: 120px;
    }
    50% {
        width: 114px;
        height: 70px;
        transform: translateY(175px);
    }
    75% {
        width: 100px;
        height: 100px;
    }
}

@keyframes shadow-animate {
    25% {
        width: 70px;
        height: 25px;
    }
    50% {
        width: 80px;
        height: 25px;
    }
    75% {
        width: 70px;
        height: 25px;
    }
}

</style>