(function () {
  window.a = new XEModel({
    el: '#app',
    data: function () {
      return {
        className: 'aa',
        isActive: true,
        display: 'block',
        show: true,
        info: {
          name: 'aaaa'
        },
        styles: {
          color: 'red'
        },
        btnList: [],
        list: [
          {
            name: 'test1',
            num: 1
          },
          {
            name: 'test2',
            num: 2
          }
        ]
      }
    },
    created: function () {
      var btnList = []
      for (var index = 0; index < 50000; index++) {
        btnList.push({
          label: '按钮' + index
        })
      }
      this.btnList = btnList
    },
    render: function (h) {
      var $ = this.$
      return h('div', [
        h('div', this.btnList.map(function (item) {
          return h('button', {
            domProps: {
              innerText: item.label
            },
            events: {
              click: function (evnt) {
                alert(item.label)
              }
            }
          })
        })),
        h('input', {
          visible: $(this, 'show'),
          class: ['hhh', $(this, 'className'), {
            active: $(this, 'isActive')
          }],
          style: {
            display: $(this, 'display')
          },
          domProps: {
            type: 'text',
            value: $(this.info, 'name')
          },
          events: {
            input: function (evnt) {
              this.name = evnt.target.value
            }
          }
        }, []),
        h('div', this.list.map(function (item) {
          return h('input', {
            domProps: {
              type: 'text',
              value: $(item, 'name')
            },
            events: {
              input: function (evnt) {
                item.age = evnt.target.value
              }
            }
          }, [])
        }))
      ])
    }
  })
})()
