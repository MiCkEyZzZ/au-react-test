import React, { FC } from 'react'

import { TreeItem } from '../../components/index'
import { RegionNode } from '../../types'

import './Tree.css'

interface ITreeProps {
    trees: {
        id: number
        path: string
        name: string
        items?: RegionNode[]
    }[]
}

const Tree: FC<ITreeProps> = ({ trees }) => {
    return (
        <div className='tree'>
            <ul className='tree-list'>
                { trees.map((child, i: number) => {
                    return <TreeItem key={ i } tree={ child }/>
                }) }
            </ul>
        </div>
    )
}

export default Tree
