import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <Head>
        <title>Kevin Liedtke | Portfolio</title>
      </Head>
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
    </div>
  );
}
