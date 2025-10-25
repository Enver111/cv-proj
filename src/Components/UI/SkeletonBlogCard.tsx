// components/UI/SkeletonBlogCard.tsx
export default function SkeletonBlogCard() {
  return (
    // <div className=" animate-pulse max-w-[700px]  flex">
    //   <div className="h-48 w-2.5 bg-gray-700 rounded-xl "></div>

    //   <div className="h-6 bg-gray-600 rounded "></div>
    //   <div className="h-4 bg-gray-600 rounded "></div>
    //   <div className="h-4 bg-gray-600 rounded "></div>
    // </div>

    <div className="flex justify-center gap-[50px] border-t border-b py-[65px] my-[64px] animate-pulse">
      <div className="w-[300px]">
        <div className="relative w-full h-[200px] rounded-xl overflow-hidden bg-gray-700 "></div>
      </div>

      <div className="max-w-[700px] ">
        <div className=" mb-[24px] bg-gray-700 h-6 w-[400px] rounded-xl"></div>
        <div className=" bg-gray-700 h-6 w-[540px] rounded-xl"></div>
        <p className="mt-[24px] bg-gray-700 h-4 w-[700px] rounded-xl" />
        <p className="mt-[24px] bg-gray-700 h-4 w-[650px] rounded-xl" />
        <p className="mt-[24px] bg-gray-700 h-4 w-[600px] rounded-xl" />
        <p className="mt-[24px] bg-gray-700 h-4 w-[630px] rounded-xl" />
        <p className="mt-[24px] bg-gray-700 h-4 w-[680px] rounded-xl" />
        <p className="mt-[24px] bg-gray-700 h-4 w-[610px] rounded-xl" />
        <div className="my-[24px] flex gap-1 items-center cursor-pointer group">
          <div className="border-b text-[#12F7D6] group-hover:opacity-80 transition"></div>
          <div className="group-hover:translate-x-1 transition"></div>
        </div>

        <div className="py-1 px-3 bg-[#43454D] rounded-xl h-3 w-[200px]"></div>
      </div>
    </div>
  );
}
