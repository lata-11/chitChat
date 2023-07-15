import "./addFriend.css";
import AddFriendForm from "./addFriendForm";

function AddFriend() {
  const [isOpen, setIsOpen] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsOpen(true);
  };

  const closeModal = () => {
    // Function to close the modal
    setIsOpen(false);
  };
  return (
    <div>
      <div>
        <ul>
          <li>Lata</li>
        </ul>
      </div>
      <div class="add-friend-btn">
        <button class="add-btn">+</button>
        <AddFriend />
      </div>
    </div>
  );
}

export default AddFriend;
