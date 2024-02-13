import { useNavigation } from 'react-router-dom';
import Loading from './Loading';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block uppercase"
      disabled={isSubmitting}
    >
      {isSubmitting ? <Loading text="login..." /> : text || 'login'}
    </button>
  );
};
export default SubmitBtn;
