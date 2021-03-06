import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale';
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from './zh'
import enLocale from './en'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

console.log(messages.en)

// 可以在初始化VueI18n实例时，通过 localStorage 来为 locale 对象赋值
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  messages
})

// locale.i18n((key, value) => i18n.t(key, value)) //为了实现element插件的多语言切换

export default i18n