export const test = [
    {
        // 验证token
        path: '/check',
        method: 'get',
        data: {
            "status": 10000,
            "infor": "success"
        }
    },
    {
        // 注册
        path: '/log_up',
        method: 'post',
        data: {
            "status": 10000,
            "infor": "success"
            // 发送数据{name:string,account:number,password:string}
        }
    },
    {
        // 登录
        path: '/log_in',
        method: 'post',
        data: {
            "status": 10000,
            "infor": "success"

            // 发送数据{account:number,password:string}
        }
    },
    {
        // 个人
        path: '/myinfor',
        method: 'get',
        data: {
            "status": 10000,
            "infor": "success",
            "data": {
                "name": "cname",
                "count": 999
            },
        }
    },
    {
        // 上传
        path: '/upload',
        method: 'post',
        data: {
            "status": 10000,
            "infor": "success"
        }
    },
    {
        // 排行榜
        path: '/toplist',
        method: 'get',
        data: {
            "status": 10000,
            "infor": "success",
            "data": [
                { "name": "cname", "account": 9 },
                { "name": "cname", "account": 8 },
                { "name": "cname", "account": 7 },
                { "name": "cname", "account": 6 },
            ]
        }
    }
]