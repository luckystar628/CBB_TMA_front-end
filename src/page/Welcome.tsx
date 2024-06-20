
import { Link } from 'react-router-dom'
import {AnnounceList} from '../assets/const'
import AnnounceItem from '../component/AnnounceItem'
export default function Welcome() {
  return (
    <div className="mt-5 w-[90%] mx-auto gap-5 flex flex-col mb-5">
      {
        AnnounceList.map((item, index) => {
          return <AnnounceItem key={index} {...item} />
        })
      }
      <Link to="/daily" className="text-center bg-white py-5 text-black hover:text-black rounded-md hover:opacity-80 active:opacity-50">get started</Link>
    </div>
  )
}
