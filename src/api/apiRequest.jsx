import axios from "axios";

export default axios.create({
    baseURL:'https://json-server-social-media-ic2i.vercel.app/db.json'
})