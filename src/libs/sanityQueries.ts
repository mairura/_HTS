import { groq } from "next-sanity";

export const getFeaturedRoomQuery = groq`*[_type == "hotelRoom" && isFeatured == true][0] {
    _id,
    descrition,
    discount,
    images,
    isFeatured,
    name,
    price,
    slug
}`;
