const Sidebar = () => {
  return (
    <>
      <div className="w-[15%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
        <div className="bg-red-500 h-[100%] rounded flex flex-col justify-around">
          <div className="flex items-center gap-3 pl-3 cursor-pointer">
            Sidebar
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
