function ParticipantListItem({ participant, handleRemove }) {
  const { id, name, phoneNo } = participant;

  return (
    <tr>
      <td>{name}</td>
      <td>{phoneNo}</td>

      <td>
        <button
          type="button"
          className="deleteButton"
          onClick={() => handleRemove(id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
}

export default ParticipantListItem;
