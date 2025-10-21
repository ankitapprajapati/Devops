import Image from 'next/image'

export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Show Images (Next.js)</h1>

      <section style={{ marginBottom: 32 }}>
        <h2>Local image (public/images/sample.jpg)</h2>
        <Image
          src="/images/sample.jpg"
          alt="Local sample"
          width={800}
          height={500}
          style={{ borderRadius: 8 }}
        />
      </section>

      <section>
        <h2>Remote image (Unsplash)</h2>
        <Image
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
          alt="Remote sample"
          width={800}
          height={500}
          style={{ borderRadius: 8 }}
        />
      </section>
    </main>
  )
}
