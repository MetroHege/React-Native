import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MediaItemWithOwner} from '../types/DBTypes';

const MediaListItem = ({item}: {item: MediaItemWithOwner}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('clicked', item.title);
      }}
    >
      <Image style={{height: 300}} source={{uri: 'http:' + item.thumbnail}} />
      <Text>{item.title}</Text>
      <Text>{new Date(item.created_at).toLocaleString('fi-FI')}</Text>
    </TouchableOpacity>
  );
};

export default MediaListItem;
