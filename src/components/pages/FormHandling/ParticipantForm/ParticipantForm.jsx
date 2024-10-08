import "./ParticipantForm.css";
import { useFormStatus } from "react-dom";

function Submit() {
  const { pending } = useFormStatus(); // in order to use useFormStatus hook, it must be child compnent of a parrent Form-Component
  return (
    <button
      disabled={pending}
      className={`fsubmitButton ${pending ? "bg-black/60" : "bg-black"}`}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

const ParticipantForm = ({ setParticipants }) => {
  const formAction = async (formData) => {
    // console.log(formData.get("name"));
    // console.log(Object.fromEntries(formData));

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

    setParticipants((previousState) => [
      { id: crypto.randomUUID(), ...Object.fromEntries(formData) },
      ...previousState,
    ]);
  };

  return (
    <div className="formContainer">
      <h2 style={{ textAlign: "center" }}>Add a Participant</h2>
      <form className="myform" action={formAction}>
        <input
          type="text"
          placeholder="name"
          name="name"
          required
          className="finput"
        />

        <input
          type="text"
          placeholder="phone no."
          name="phoneNo"
          required
          className="finput"
        />
        <Submit />
      </form>
    </div>
  );
};

export default ParticipantForm;
