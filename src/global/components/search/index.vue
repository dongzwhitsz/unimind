<script setup lang="ts">
import { reactive, ref } from "vue";
import  {ISearchItem} from "./search.d"

const isShow = ref(false);
const showItems = reactive<{values:ISearchItem[]}>({values:[]})
const show = (items: ISearchItem[]) =>{ 
  isShow.value = true
  showItems.values = items
}

const hide = () => (isShow.value = false);

defineExpose([show, hide]);
</script>

<template>
  <div>
    <input class="input" placeholder="input your mind" />
    <ol>
      <li v-for="item in showItems.values">
        <div class="show-item" @click="item.callback('iamclicked')">type: {{ item.type }}, value: {{ item.value }}</div>
      </li>
    </ol>
  </div>
</template>

<style scoped>
input {
  width: 100%;
  background-color: gray;
  height: 20;
}

show-item {
  font-size: 14px;
  color: red;
}
</style>
