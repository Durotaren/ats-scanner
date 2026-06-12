import CvSvg from './svgs/CvSvg';

export default function Upload() {
  return (
    <section className="col-start-1 col-end-2 row-span-8 rounded-lg p-5 bg-[#30302E] text-[#9c9a92]">
      <div className="flex items-center gap-1">
        <CvSvg />
        <p>Your Resume</p>
      </div>
    </section>
  );
}
