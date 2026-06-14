import CvSvg from './svgs/CvSvg';

export default function Upload() {
  return (
    <section className="col-start-1 col-end-2 row-span-8 rounded-lg p-5 bg-[#30302E] text-[#9c9a92]">
      <div className="flex items-center gap-1 pb-6">
        <CvSvg />
        <p>Your Resume</p>
      </div>

      <div className="bg-[#262624] flex flex-col justify-center items-center h-[45%] gap-1 rounded-lg border-dashed border-2 border-[#9c9a92] cursor-pointer">
        <CvSvg />
        <p className="pt-1 text-lg">Drop your PDF here</p>
        <p>or click to browse</p>
      </div>

      <div className="flex mt-3 items-center gap-2">
        <div className="w-[43%] bg-[#9c9a92] h-[1px]"></div>
        <p className="text-lg">or paste text</p>
        <div className="w-[42%] bg-[#9c9a92] h-[1px]"></div>
      </div>
    </section>
  );
}
