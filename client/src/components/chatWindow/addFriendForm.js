import Modal from "../../UI/Modal/addFriendModal"

function AddFriendForm() {
    return (
        <Modal>
        <form>
            <label>Add friend</label>
            <input type="text" name="username" placeholder="Enter username.."/>

        </form>
        </Modal>
    )
}

export default AddFriendForm;