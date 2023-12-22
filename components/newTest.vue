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
    <div class="flex justify-around items-center ">
        <div class="mt-8">
            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> -->
            <h2 class="text-7xl font-semibold text-[#236c7e]"><span class="text-[#fa9323] ">Play</span> And <span class="text-[#fa9323]">Run</span> <br/>Different FPS Test</h2><br/>
            <p class="text-2xl">Your Monitor Working On <span class="font-bold text-3xl"> {{ myFps }} </span> FPS </p>
            <p class="mt-3 text-xl"><span class="font-bold"> Warning: </span> It often returns an incorrect FPS because sometimes <br/> an animation frame is skipped when your CPU is busy with other tasks.</p>
            <p class="mt-3 text-xl">Refresh Page To Get Exact FPS of Monitor</p>
            <div class="mt-4">
                <button @click="refreshPage()" class="rounded-md py-2 px-5 bg-[#236c7e] text-white font-semibold text-lg">Refresh</button>
                <!-- <button class="rounded-md py-1 px-3 ml-4 bg-[#236c7e] text-white font-semibold">Start</button> -->
            </div>
        </div>
        <div class="container">
          <div class="ball"></div>
        </div> 
    </div>
</template>

<style scoped>

.container {
    position: relative;
    width: 300px;
    height: 300px;
    /* margin: 0 auto; */
}

.container::before {
    position: absolute;
    content: "";
    width: 50px;
    height: 10px;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    background: #6d6d6d;
    box-shadow: 0 0 30px #555, 0 0 30px #555;
    border-radius: 50%;
    animation: shadow-animate 3s infinite;
}

.container .ball {
    position: relative;
    margin: 0 auto;
    width: 50px;
    height: 50px;
    top: 0;
    background: #fa9323;
    border-radius: 50%;
    box-shadow: 0 0 10px #fa9323, 0 0 30px #fa9323;
    animation: ball-animate 3s infinite;
}

@keyframes ball-animate {
    5% {
        width: 50px;
        height: 50px;
    }

    20% {
        height: 60px;
    }

    30% {
        width: 45px;
        height: 60px;
    }

    50% {
        width: 57px;
        height: 35px;
        transform: translateY(275px);
    }

    75% {
        width: 50px;
        height: 50px;
    }
}

@keyframes shadow-animate {
    25% {
        width: 50px;
        height: 10px;
    }

    50% {
        width: 57px;
        height: 10px;
    }

    75% {
        width: 50px;
        height: 10px;
    }
}

</style>