<script setup lang="ts">
import { inject, onMounted, reactive, ref } from "vue";
import { useAuthStore } from "../stores/AuthStore";

const isLoggedIn = ref(false);
const authStore = useAuthStore();

onMounted(async () => {
    await checkIfUserIsLoggedIn();
});

async function checkIfUserIsLoggedIn() {
    const response = authStore.isLoggedIn();
    isLoggedIn.value = response;
}
</script>


<template>
    <div class="main">
        Landing page
        <div v-if="isLoggedIn" class="wrapper">
            <RouterLink to="/dashboard" class="no-decoration">
                <div class="box">
                    Dashboard
                </div>
            </RouterLink>
        </div>
    </div>

</template>

<style scoped>
.main {
    text-align: center;
    justify-content: center;
    margin-bottom: 20px;
}

.no-decoration {
    text-decoration: none;
}

* {
    box-sizing: border-box;
}

.wrapper {
    /* border: 5px dotted black; */
    width: 150px;
    height: 100px;
}

.box {
    background-color: rgb(55, 55, 110);
    color: white;
    padding: 20px;
    border-radius: .5em;
    margin: 1%;
}

body {
    font: 1.4em/1.3 "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
    margin: 2em 3em;
}
</style>