import { redirect } from "next/navigation";

export default resourcesRedirectPage;

function resourcesRedirectPage() {
  redirect("/resources/getting-started");
}
