import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const {id} = useParams();
  console.log(channelDetail,videos);
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };
    
    fetchResults();
    }, [id]);
  return (
    <Box minHeight="95vh">
     <Box>
       <div style={{
          height:'200px',
          background: 'radial-gradient(circle, rgba(158,61,218,1) 0%, rgba(214,73,117,1) 100%)',
          zIndex: 10,
        }} />
         <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
     </Box>
     <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>


  )
}

export default ChannelDetail