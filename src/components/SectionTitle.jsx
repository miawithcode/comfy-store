const SectionTitle = ({ title, desc }) => {
  return (
    <div className="">
      <p className="text-lg font-bold tracking-widest text-secondary uppercase">{title}</p>
      <h2 className="text-4xl tracking-wide font-bold sm:text-5xl mt-2">{desc}</h2>
    </div>
  );
};
export default SectionTitle;
