<script setup></script>

<template>
  <router-link to="/">Home</router-link>
  <router-link to="/top-gainers">Top Gainers</router-link>
  <router-link to="/top-loosers">Top Loosers</router-link>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
