<template>
  <div>
    <h1>About {{ name }}</h1>
    <Button type="primary">Primary</Button>
    <ColorPicker v-model="color" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Button, ColorPicker } from "iview";
export default {
  name: "About",
  computed: {
    ...mapState("about", ["name"]),
    color: {
      get() {
        return this.$store.state.about.color;
      },
      set(color) {
        this.$store.commit("about/updateColor", color);
      }
    }
  },
  components: { Button, ColorPicker }
};
</script>