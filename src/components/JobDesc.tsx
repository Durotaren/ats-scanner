import JobDescSvg from './svgs/JobDescSvg';

export default function JobDesc() {
  return (
    <section className="col-start-2 col-end-3 row-span-8 p-5 rounded-lg bg-[#30302E] text-[#9c9a92]">
      <div className="flex items-center gap-1">
        <JobDescSvg />
        <p>Job Description</p>
      </div>
    </section>
  );
}
