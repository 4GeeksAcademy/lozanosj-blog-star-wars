import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'


const Characters = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.getCharacters()
    }, [])

    return (
        <div>{
            store.characters && store.characaters.map((obj) => {
                return (
                    <div>
                        {
                            obj.result.properties.name
                        }
                    </div>
                )
            })
        }

        </div>
    )
}

export default Characters