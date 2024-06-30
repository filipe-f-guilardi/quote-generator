const button = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="w-auto h-16 px-3 m-2 rounded-sm text-xl font-bold text-white bg-indigo-600 
                       active:border-0 active:bg-indigo-500 active:text-black"
    >
      {children}
    </button>
  );
};

export default button;
