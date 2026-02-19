import ArtiDetailPage from "@/components/ArtiDetailPage";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { artiName: string } }): Metadata {
  const title = params.artiName ? `${params.artiName} आरती - Spiritual Path` : `आरती - Spiritual Path`;
  return {
    title,
    description: `Read the ${params.artiName} arti in Hindi on Spiritual Path.`,
  };
}

export default function ArtiPage({ params }: { params: { artiName: string } }) {
  return <ArtiDetailPage artiName={params.artiName} />;
}
