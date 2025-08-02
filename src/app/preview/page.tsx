"use client";
import { useUser } from "../../context/UserContext";
import { useRouter } from "next/navigation";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import PDFDocument from "../../components/PDFDocument";

export default function PreviewPage() {
  const { userData } = useUser();
  const router = useRouter();

  const handleDownload = async () => {
    const blob = await pdf(<PDFDocument {...userData} />).toBlob();
    saveAs(blob, "resume.pdf");
  };

  if (!userData) {
    return <div className="p-8 text-center">No data found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded w-full max-w-2xl mb-6">
  <p className="mb-4"><strong>Name:</strong> {userData.name}</p>
  <p className="mb-4"><strong>Email:</strong> {userData.email}</p>
  <p className="mb-4"><strong>Phone Number:</strong> {userData.phone}</p>
  <p className="mb-4"><strong>Position:</strong> {userData.position}</p>
  <p className="mb-4"><strong>Description:</strong> {userData.description}</p>
</div>


      {/* Improved Button Section */}
      <div className="flex w-full max-w-2xl space-x-4">
        <button
          onClick={() => router.push("/")}
          className="flex-1 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-all"
        >
          Back
        </button>
        <button
          onClick={handleDownload}
          className="flex-1 bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition-all"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
