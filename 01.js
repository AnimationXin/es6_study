
    <script>
      //对象的结构赋值
        var { name,age,id } = {id: 4, name: "conan",age: 28 }

        var object = { id: 5,name: '小哥' }
        var str = {id: nowid,name: nowname} = object
        /*对象默认赋值*/
        var { message: msg = "you are A Person!" } = {}

        console.log(nowid,nowname)
        console.log(name)
        console.log(age)
        //对象的最大好处就是不需要按照顺序来赋值
        console.log(id)
        console.log(msg)
        //字符串的结构赋值
        var [a,b,c,d,e] = 'hello';

        console.log(a)
        const { length: len } = 'str'
        console.log(len)
        //函数的参数结构化赋值
        function sum ([x,y]) {
            return x+y
        }
        console.log(sum([1,2]))
        //对象的结构化赋值
        function fun ({x,y} = { x:0 , y: 0 }) {
            return [x,y]
        }
        console.log( fun({x:100,y:200}) ) //100 200
        console.log( fun({x: 100}) ) // 100 undefined
        console.log(fun());//0 0
        console.log(fun({}));
    </script>
