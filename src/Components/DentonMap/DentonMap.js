import React, {Component, useState, useEffect} from 'react';

const DentonMap = props => {
    const [parkData, setParkData] = useState([])

    const unMounter = () => {

    }

    useEffect(()=> {
       axios.get('get/dentonInfo')
       .then(resp => {
           console.log(resp)
       })
       .catch(err => console.log('Error gathering Dentons data'))
        return () =>  unMounter()
    }, [])

    return (
        <div>
            Here is Denton's data
        </div>   
    )
}