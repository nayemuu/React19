import "./ParticipantList.css";
import ParticipantListItem from "./ParticipantListItem";

const ParticipantList = ({ participants, setParticipants }) => {
  //   console.log("participants = ", participants);
  const handleRemove = (id) => {
    // console.log("id = ", id);
    setParticipants((previousState) =>
      previousState.filter((participant) => participant.id !== id)
    );
  };
  return (
    <div className="participantListContainer">
      <h2 style={{ textAlign: "center" }}>Participant List</h2>
      <br />

      <table id="customers">
        <thead>
          <tr>
            <th>Participant</th>
            <th>Phone no.</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {participants.map((participant, index) => (
            <ParticipantListItem
              participant={participant}
              key={index}
              handleRemove={handleRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipantList;
