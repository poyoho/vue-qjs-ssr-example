import { renderToString } from "@vue/server-renderer";
import { createApp, h } from "vue";
renderToString(
  createApp({
    data() {
      return { msg: 'hello' }
    },
    render(this: any) {
      return h('div', this.msg)
    },
  }),
).then(res => {
  console.log(res);
  
})