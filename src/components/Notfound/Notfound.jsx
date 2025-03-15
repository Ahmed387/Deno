import img404 from "../../../public/e404.webp";
export default function Notfound() {
  return (
    <>
      <div className="w-full h-auto text-center">
        <img
          className="w-full h-auto"
          src={img404}
          alt="error image"
          loading="lazy"
        />
      </div>
    </>
  );
}
