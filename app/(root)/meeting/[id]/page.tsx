import React from "react"

const Meeting = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <div> meeting room with id # {id}</div>
}

export default Meeting
