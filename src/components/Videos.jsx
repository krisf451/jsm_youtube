import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from '.';

const Videos = ({ videos, position, direction }) => {
  if (!videos?.length) return 'Loading...';

  return (
    <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent={position} gap={2}>
      {videos?.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && (<VideoCard video={item} />)}
          {item.id.channelId && (<ChannelCard channelDetail={item} />)}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
