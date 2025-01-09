
// "use client";

// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";

// import { disableDraftMode } from "./actions";

// const emptySubscribe = () => () => {};

export default function AlertBanner() {
  // const router = useRouter();
  // const [pending, startTransition] = useTransition();

  // const shouldShow = useSyncExternalStore(
  //   emptySubscribe,
  //   () => window.top === window,
  //   () => false,
  // );

  // if (!shouldShow) return null;

  return (
    <div
      className=
       "fixed top-0 left-0 z-50 w-full border-b bg-white/20 text-black backdrop-blur">
      <div className="py-2 text-center text-sm">
      <div className="flex items-center justify-center py-3">
  <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-900 to-yellow-600 animate-pulse">
    Welcome
  </h1>
  <span className="text-xs font-semibold text-yellow-00 bg-transparent px-2 py-1 ml-1 rounded-full shadow-sm transform transition-transform hover:scale-105 hover:text-yellow-400">
    to Developer Blogging
  </span>
</div>

      </div>
    </div>
  );
}
