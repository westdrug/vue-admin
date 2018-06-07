<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
      <Button type="primary" @click="modal2 = true">Display dialog box</Button>
      <Modal
          v-model="modal2"
          title="Common Modal dialog box title"
          @on-ok="ok"
          @on-cancel="cancel">
          <p>Content of dialog</p>
          <p>Content of dialog</p>
          <p>Content of dialog</p>
      </Modal>
    <ul>
      <li>
          <Checkbox v-model="single">Checkbox</Checkbox>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
          <Select v-model="model1" style="width:200px">
              <Option v-for="(item, index) in cityList" :value="item.value" :key="index">{{ item.label }}</Option>
          </Select>
      </li>
    </ul>
  </div>
</template>

<script>
    import { Button, Select, Checkbox, Message, Modal } from 'iview'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                single: false,
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: '',
                modal2: false
            }
        },
        components: {
            Button,
            Checkbox,
            Select,
            Modal
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
