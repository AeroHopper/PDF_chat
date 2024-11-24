import Head from "next/head";
import { useState } from "react";

import FileQandAArea from "../components/FileQandAArea";
import FileUploadArea from "../components/FileUploadArea";

import { FileLite } from "../types/file";

export default function FileQandA() {
  const [files, setFiles] = useState<FileLite[]>([]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>PDFChat | Instant Answers to Your PDF Questions</title>
        <meta name="description" content="Upload your PDF files and get instant answers with our AI-powered PDF analysis tool." />
      </Head>

      <header className="bg-indigo-600 py-6 text-white text-center shadow-md">
        <h1 className="text-3xl font-bold">PDFChat</h1>
        <p className="mt-2 text-lg">Find instant answers to your PDF questions!</p>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <section className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-4">Quick and Accurate AI Insights</h2>
          <p className="text-gray-700">
            Upload your PDFs to receive fast, reliable answers. Our cutting-edge AI combines OpenAI embeddings and Anthropic's Claude-2.1 for precise document analysis.
          </p>
        </section>

        <section className="bg-white p-6 shadow rounded-lg">
          <FileUploadArea
            handleSetFiles={setFiles}
            maxNumFiles={50}
            maxFileSizeMB={50}
          />
        </section>

        <section className="mt-8">
          {files.length > 0 ? (
            <FileQandAArea files={files} />
          ) : (
            <p className="text-gray-600 text-center">No files uploaded yet. Start by uploading a PDF to ask questions!</p>
          )}
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} PDFChat. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
