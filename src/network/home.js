import {request} from './request';

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeRecommenddata() {
    return request({
        url: '/recommend'
    })
}

export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params:{
            page,
            type
            
        }
    })
}