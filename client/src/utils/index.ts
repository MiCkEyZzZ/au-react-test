import { RegionNode } from '../types'

export const makeTreeArrayRegions = (data: RegionNode[]): RegionNode[] => {
    const newArr = [...data]
    const items: any = []

    for (const obj of newArr) {

        const pathParts = obj.path.split('.')

        let t = items

        for (let i = 0; i < pathParts.length - 1; ++i) {
            const parentPath = pathParts.slice(0, i + 1).join('.')

            const parent = (t.items || t).find(
                (item: RegionNode) => item.path === parentPath,
            )

            if (parent) {
                t = parent
            } else {
                throw new Error('Invalid data')
            }
        }

        if (t instanceof Array) {
            t.push(Object.assign({}, obj))
        } else {
            (t.items = t.items || []).push(Object.assign({}, obj))
        }
    }

    return items
}
