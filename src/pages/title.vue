<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>Vue.jsの簡単なデモ</title>
</head>
<body>
 
 <div id="demo">
     <p>{{message}}</p>
         <input v-model="message">
         </div>
          
          <script src="vue.min.js"></script><!--パスは適宜変更してください。-->
          <script>
          var demo = new Vue({
                el: '#demo',
                    data: {
                              message: 'Hello Vue.js!'
                                  }
          })
          </script>
          </body>
          </html>

