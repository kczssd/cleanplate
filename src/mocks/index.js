import Mock from 'mockjs';
import { test } from './mock/index.js'
Mock.setup({
    timeout: '200-600'
});
function addToMock(list) {
    list.forEach(n => Mock.mock(n.path, n.data))
}

addToMock(test)

export default Mock

