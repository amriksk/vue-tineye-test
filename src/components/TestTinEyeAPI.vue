<template>
  <div class="hello">
    <p>This page will test TinEye API!</p>
    <hr />
    <button type="button" v-on:click="test_tineye_api">Test TinEye API</button>
  </div>
</template>

<script>
import TinEye from "tineye-api";

export default {
  name: "TestTinEyeAPI",
  computed: {
    console: () => console,
    window: () => window,
  },
  methods: {
    test_tineye_api() {
      this.console.log("Inside test_tineye_api");
      var tineye_api = new TinEye(
        "https://api.tineye.com/rest/",
        "6mm60lsCNIB,FwOWjJqA80QZHh9BMwc-ber4u=t^"
      );
      var melon_url = "https://tineye.com/images/meloncat.jpg";
      var test_params = {
        offset: 0,
        limit: 10,
        sort: "score",
        order: "desc",
      };
      tineye_api
        .searchUrl(melon_url, test_params)
        .then((response) => {
          this.response = response;
          this.console.log(response);
          return response;
        })
        .catch((err) => {
          this.console.log(err);
          this.response = err;
        });
    },
  },
};
</script>

