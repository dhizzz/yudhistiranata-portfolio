import { Suspense } from "react";
import type { Metadata } from "next";
import { WorkArchive, WorkArchiveView } from "./WorkArchive";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <Suspense fallback={<WorkArchiveView active="all" />}>
      <WorkArchive />
    </Suspense>
  );
}
