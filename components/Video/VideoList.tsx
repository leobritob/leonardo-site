import { VideoItem, VideoItemProps } from './VideoItem';

type VideoListProps = {
  items: VideoItemProps[];
};

export const VideoList: React.FC<VideoListProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap">
      {items.map((item, index) => (
        <VideoItem key={index} {...item} />
      ))}
    </div>
  );
};
