module.exports = {
    register: async (name, pd) => {
        let data;
        if (name==='admin' && pd === 'admin') {
            data = '登录成功';
        } else {
            data = '登录失败';
        }

        return data;
    }
};