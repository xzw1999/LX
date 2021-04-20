import BasicLayout from '@/components/main'

const meta = {
    auth: true
}

const pre = 'statistic_'

export default {
    path: '/admin/statistic',
    name: 'statistic',
    header: 'statistic',
    redirect: {
        name: `${pre}product`
    },
    component: BasicLayout,
    children: [
        {
            path: 'product',
            name: `${pre}product`,
            meta: {
               // auth: ['setting-system-role'],
                title: '商品统计'
            },
            component: () => import('@/pages/statistic/product/index')
        },
        {
            path: 'user',
            name: `${pre}user`,
            meta: {
               // auth: ['setting-system-role'],
                title: '用户统计'
            },
            component: () => import('@/pages/statistic/user/index')
        },
        {
            path: 'transaction',
            name: `${pre}transaction`,
            meta: {
                // auth: ['setting-system-role'],
                title: '交易统计'
            },
            component: () => import('@/pages/statistic/transaction/index')
        }
    ]
}
