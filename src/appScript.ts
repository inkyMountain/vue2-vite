import { defineComponent } from "@vue/composition-api";
import { add } from "./utils";

const result = add(1, 2);
console.log("result ==========>", result);

export default defineComponent({
  setup(props, ctx) {
    return {
      hello: "world",
    };
  },
});
