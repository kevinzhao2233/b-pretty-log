/**
 * 控制台输出好看的打印信息
 */
export declare type ColorType = 'primary' | 'success' | 'danger' | 'warning' | 'gray';
export interface Log {
    (text: any, content: any, color?: ColorType, back?: boolean): void;
    success: (title: string, content: any) => void;
    warn: (text: string, content: any) => void;
    error: (text: string, content: any) => void;
    info: (text: string, content: any) => void;
    pretty: (title: string, text: string, content: any, color?: ColorType) => void;
}
declare const log: Log;
export default log;
