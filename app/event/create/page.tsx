import { createClient } from "@/app/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function CreateEventPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/user/login");
  }

  console.log("User:", user);
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <form>
        <div>
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            name="eventName"
            id="eventName"
            required
            className="outline p-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="eventDate">Event Date:</label>
          <input
            type="date"
            name="eventDate"
            id="eventDate"
            required
            className="outline p-2 rounded-md"
            min={today}
          />
        </div>

        <div>
          <label htmlFor="eventTime">Event Time:</label>
          <input
            type="time"
            name="eventTime"
            id="eventTime"
            required
            className="outline p-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="eventLocation">Event Location:</label>
          <input
            type="text"
            name="eventLocation"
            id="eventLocation"
            required
            className="outline p-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="eventDescription">Event Description:</label>
          <textarea
            name="eventDescription"
            id="eventDescription"
            className="outline p-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="eventInvitations">Invitations:</label>
          <textarea
            name="eventInvitations"
            id="eventInvitations"
            className="outline p-2 rounded-md"
          />
        </div>

        <div>
          <button
            type="submit"
            className="block px-5 py-3 rounded-lg bg-rose font-bold"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}
