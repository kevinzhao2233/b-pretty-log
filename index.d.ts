/**
 * 控制台输出好看的打印信息
 * - log.print(text, content, color = 'primary', isBack = false)
 * - log.pretty(title, text, content, color = 'primary')
 */
export declare type ColorType = 'primary' | 'success' | 'danger' | 'warning' | 'gray';
export interface Log {
    print: (text: any, content: any, color?: ColorType, back?: boolean) => void;
    pretty: (title: string, text: string, content: any, color?: ColorType) => void;
}
declare const log: Log;
export default log;