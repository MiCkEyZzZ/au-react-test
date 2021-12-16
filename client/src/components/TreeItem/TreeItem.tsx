import React, { memo, useState } from 'react'

import { Tree } from '../../pages'
import { RegionNode } from '../../types'

import './TreeItem.css'

interface ITreeItemProps {
    tree: {
        name: string
        items?: RegionNode[]
    }
}

const TreeItem = memo<ITreeItemProps>(function TreeItem({ tree }) {
    const [folder, setFolder] = useState<boolean>(false)

    const toggleOpen = (evt: React.MouseEvent<HTMLElement>) => {
        evt.stopPropagation()
        setFolder(!folder)
    }

    return (
        <li
            className='tree-node'
            onClick={ (evt) => toggleOpen(evt) }
        >
            <div className='tree-node__label'>
                <p className='tree-node__label-txt'>{ tree.name }</p>
            </div>
            { tree.items != null && tree.items.length > 0 && folder && (
                <ul className='tree-node__list'>
                    <li className='tree-node__list-item'>
                        <Tree trees={ tree.items } />
                    </li>
                </ul>
            ) }
        </li>
    )
})

export default TreeItem
