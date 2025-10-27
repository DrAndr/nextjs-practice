// OLD APPROACH

import {useEffect, useState} from "react";

const INIT_DATA = {title: '', counter: 0};

export default function Page(props) {
    console.log('props', props)
    const [data, setData] = useState(props || INIT_DATA)

    // useEffect(()=>{
    //     setData(props)
    // }, [props])

    return <div onClick={()=>{setData({...data,counter:data.counter+1})}}>
        {data.title}, Counter: {data.counter}
    </div>
}

export function getServerSideProps() {
    return {props: {title: 'Dashboard Page', counter: 0}}
}