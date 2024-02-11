import { useNavigation } from 'react-router-dom';
import Loader from './Loader';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block uppercase"
      disabled={isSubmitting}
    >
      {isSubmitting ? <Loader text="login..." /> : text || 'login'}
    </button>
  );
};
export default SubmitBtn;
