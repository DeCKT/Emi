export default function DashboardPage() {
  return (
    <div className="w-full h-full grid grid-cols-[1fr_280px] gap-3 py-3">
      <div className="flex flex-col gap-3 h-full w-full">
        <div className="bg-rose/15 shadow-md hover:shadow-lg duration-200 rounded-md p-3">
          Quick Actions
        </div>
        <div className="bg-rose/15 shadow-md hover:shadow-lg duration-200 rounded-md p-3 flex-1">
          Events
        </div>
        <div className="bg-rose/15 shadow-md hover:shadow-lg duration-200 rounded-md p-3">
          Additional Items
        </div>
      </div>
      <div className="flex flex-col gap-3 h-full w-full">
        <div className="bg-rose/15 shadow-md hover:shadow-lg duration-200 rounded-md p-3 flex-1">
          Activity Feed
        </div>
        <div className="bg-rose/15 shadow-md hover:shadow-lg duration-200 rounded-md p-3 h-[230px]">
          Calendar
        </div>
      </div>
    </div>
  );
}
