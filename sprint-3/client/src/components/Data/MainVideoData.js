import MainVideoImage from '../../Assets/Images/video-list-0.jpg';
import MainVideoMovie from '../../Assets/Video/BrainStation\ \Sample\ \Video.mp4';

const MainVideoData = {
  id: 'video-list-0',
  title: 'BMX Rampage: 2018 Highlights',
  description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the',
  channel: 'Red Cow',
  image: {MainVideoImage},
  views: '1,001,023',
  likes: '110,985',
  duration: '0:42',
  video: {MainVideoMovie},
  timestamp: '12/18/2018',
  comments: [
    {
      userName: 'Micheal Lyons',
      usertimestamp: '12/18/2018',
      usertext: 'They BLEW the ROOF off at their last show, once everyone started figuring out'
    }, {
      userName: 'Gary Wong',
      usertimestamp: '12/12/2018',
      usertext: 'Every time I see him shred I feel so motivated to get off my couch and hop on '
    }, {
      userName: 'Theodore Duncan',
      usertimestamp: '11/15/2018',
      usertext: 'How can someone be so good!!! You can tell he lives for this and loves to do '
    }
  ]
};
export default MainVideoData;