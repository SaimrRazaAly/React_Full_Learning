import 'react-toastify/dist/ReactToastify.css';
import 'react-notifications/lib/Notifications.css';
import { ToastContainer, toast } from 'react-toastify';
const Notification = () => {

  const notify = () => toast("Wow so easy!");
  return (
  <>
  <button onClick={notify}>Sucess</button>
  <button  onClick={notify}>Warning</button>
   <ToastContainer />
  </>
  
  )
}

export default Notification
