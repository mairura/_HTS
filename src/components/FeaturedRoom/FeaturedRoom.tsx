import { Room } from "@/app/models/room"
import { FC } from "react"

type Props = {
    featuredRoom: Room;
}

const FeaturedRoom: FC<Props> = () => {
  return (
    <div>FeaturedRoom</div>
  )
}

export default FeaturedRoom