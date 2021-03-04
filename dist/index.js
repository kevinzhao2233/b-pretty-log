/**
 * 控制台输出好看的打印信息
 * - log.print(text, content, color = 'primary', isBack = false)
 * - log.pretty(title, text, content, color = 'primary')
 */
// 定义 log 对象
const log = {
  print: () => { },
  pretty: () => { }
};
/**
* 普通的输出
* @param text 输出文本
* @param content 输出详细内容
* @param type 输出样式，可以是5个状态值，也可以是自定义颜色
* @param back 是否将色值应用于背景色
*/
log.print = function (text, content, color = 'primary', back = false) {
  if (typeof text === 'object') {
      // 如果是对象则调用打印对象方式
      console.dir(text);
      return;
  }
  if (back) {
      // 如果是打印带背景块的
      console.log(`%c ${text} `, `background:${type2Color(color)}; padding: 2px; border-radius: 4px;color: #fff;`, content);
  }
  else {
      console.log(`%c ${text} `, `color: ${type2Color(color)}; padding: 2px; border-radius: 4px; border:1px solid ${type2Color(color)}`, content);
  }
};
/**
* 更漂亮的输出, 前面背景，后面边框
* @param title 前面的标题
* @param text 输出文本
* @param content 输出详细内容
* @param type 输出样式，可以是5个状态值，也可以是自定义颜色
*/
log.pretty = function (title, text, content, color = 'primary') {
  console.log(`%c ${title} %c ${text} %c`, `background:${type2Color(color)};border:1px solid ${type2Color(color)}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`, `border:1px solid ${type2Color(color)}; padding: 1px; border-radius: 0 4px 4px 0; color: ${type2Color(color)};`, 'background:transparent', content);
};
// 颜色值，取自 Ant Design
const colors = {
  primary: '#1890ff',
  success: '#52c41a',
  warning: '#faad14',
  danger: '#ff4d4f',
  gray: '#4C6080'
};
/**
* 返回颜色值
* @param {String} type 样式名称, 或十六进制色值
*/
function type2Color(type = 'primary') {
  if (type[0] === '#') {
      return type;
  }
  return colors[type] || colors.primary;
}
export default log;