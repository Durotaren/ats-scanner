import Upload from './components/Upload';
import JobDesc from './components/JobDesc';
import Notice from './components/Notice';
import Analyze from './components/Analyze';

export default function App() {
  return (
    <main className="grid grid-cols-2 grid-rows-10 gap-6 p-6 w-full h-screen bg-[#1F1F1E]">
      <Upload />
      <JobDesc />
      <Notice />
      <Analyze />
    </main>
  );
}
