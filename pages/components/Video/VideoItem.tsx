export type VideoItemProps = {
  youtubeId: string;
  title?: string;
};

export const VideoItem: React.FC<VideoItemProps> = ({ youtubeId, title }) => {
  return (
    <div className="w-full sm:w-80 my-2 sm:mx-1">
      <iframe
        width="100%"
        height="250"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
