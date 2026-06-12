import Info from './svgs/Info';

export default function Notice() {
  return (
    <div className="col-span-2 flex justify-center items-center gap-1">
      <Info />
      <p className="text-[#9c9a92]">
        Your resume is never stored. Analysis runs in-memory and is discarded
        immediately after results are shown.
      </p>
    </div>
  );
}
