// React Spinner Library
import {Radio} from 'react-loader-spinner'


export default function Loader()
{
    return(
<>
<Radio
  visible={true}
  height="60"
  width="60"
  ariaLabel="radio-loading"
  wrapperStyle={{}}
  wrapperClass="radio-wrapper"
/>
</>
    )
}