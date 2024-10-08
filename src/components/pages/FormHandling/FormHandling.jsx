import React, { useState } from "react";
import ParticipantForm from "./ParticipantForm/ParticipantForm";
import ParticipantList from "./ParticipantList/ParticipantList";

const FormHandling = () => {
  const [participants, setParticipants] = useState([]);

  return (
    <div>
      <ParticipantForm setParticipants={setParticipants} />
      {participants.length ? (
        <ParticipantList
          participants={participants}
          setParticipants={setParticipants}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default FormHandling;
