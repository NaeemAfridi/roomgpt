import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-gray-500">
        Powered by{" "}
        <a
          href="https://replicate.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition hover:text-gray-300 underline-offset-2"
        >
          Replicate,{" "}
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0 text-gray-500">
        <p>Created by M Awais , Hassan Shinwari</p>
      </div>
    </footer>
  );
}
