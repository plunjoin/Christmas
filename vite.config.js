import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    // 基本路径
    base: './',
    // 开发服务器配置
    server: {
        port: 3000, // 服务器端口
        open: true, // 自动打开浏览器
    },
    // 构建配置
    build: {
        outDir: 'dist', // 输出目录
        sourcemap: false, // 生成 source map
    },
    // 插件配置
    plugins: [react()],
});
