"use client";

import { getRoom } from "@/libs/apis";
import { get } from "http";
import useSWR from "swr";
import LoadingSpinner from "../../loading";
import HotelPhotoGallery from "@/components/HotelPhotoGallery/HotelPhotoGallery";

const RoomDetails = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const fetchRoom = async () => getRoom(slug);

  const { data: room, error, isLoading } = useSWR("/api/room", fetchRoom);

  if (error) throw new Error("Cannot fetch room data");
  if (typeof room === "undefined" && !isLoading)
    throw new Error("Cannot fetch room data");

  if (!room) return <LoadingSpinner />;

  console.log("Room", room);

  return (
    <div>
      <HotelPhotoGallery photos={room.images} />

      <div className="container mx-auto mt-20">
        <div className="md:grid md:grid-cols-12 gap-10 px-3">
          <div className="md:col-span-8 md:w-full">
            {/* HOTEL INFORMATION */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
