import { useEffect, useState } from "react"
import { getdata } from "../http"
import Post from "./Post"

function Listposts() {
    const [obj, setObj] = useState([])
    useEffect(() => {
        getdata().then(
            data => {
                setObj(data)
            })

    }, [])
    return (
        <div >
            {obj.map(post => <Post post={post} />)}
        </div>
    );
}

export default Listposts;