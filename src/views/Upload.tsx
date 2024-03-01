import {Controller, useForm} from 'react-hook-form';
import {Button, Card, Input} from '@rneui/base';
import {Credentials} from '../types/LocalTypes';
import {useFile, useMedia} from '../hooks/apiHooks';

const Upload = () => {
  const {postFile} = useFile();
  const {postMedia} = useMedia();
  const initValues = {title: '', description: ''};
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: initValues,
  });

  const doUpload = async (inputs) => {
    await postFile();
    await postMedia();
  };

  return (
    <Card>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Title tarvitaan',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Title"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.title?.message}
          />
        )}
        title="username"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 400,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Description"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.description?.message}
            multiline={true}
            numberOfLines={5}
            style={{height: 100, textAlignVertical: 'top'}}
          />
        )}
        description="password"
      />
      <Button title="Upload" onPress={handleSubmit(doUpload)} />
    </Card>
  );
};

export default Upload;
