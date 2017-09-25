# dva-admin
dva-admin  dva学习


文件夹命名说明:

components：组件（方法）为单位以文件夹保存，文件夹名组件首字母大写（如DataTable），方法首字母小写（如layer）,文件夹内主文件与文件夹同名，多文件以index.js导出对象（如./src/components/Layout）。
routes：页面为单位以文件夹保存，文件夹名首字母小写（特殊除外，如UIElement）,文件夹内主文件以index.js导出，多文件时可建立components文件夹（如./src/routes/dashboard），如果有子路由，依次按照路由层次建立文件夹（如./src/routes/UIElement）。


# 启动
cnpm/npm
npm   install
npm   start
