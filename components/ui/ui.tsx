export default function BG() {
  return (
    <div className="fixed inset-0 bg-[#02040a] -z-20">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 md:w-300 h-150 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
      />
    </div>
  );
}
// 