"use client";

import { getRoom } from "@/libs/apis";
import { get } from "http";
import useSWR from "swr";
import LoadingSpinner from "../../loading";

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

  return <div>RoomDetails</div>;
};

export default RoomDetails;
