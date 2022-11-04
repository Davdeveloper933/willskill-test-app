import Head from 'next/head'
import Header from '../components/Header'
import Nootris from '../components/Nootris'
import Discount from '../components/Discount'

export default function Home() {
  return (
    <div>
    <Head>
      <title>Тестовое задание для WillSkill</title>
      <meta charSet="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width" />
      <meta name="description" content="Тестовое задание на Next.js,React.js,gulp для WillSkill" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
    </Head>
    <Header />
    <main>
      <Nootris />
      <Discount />
    </main>
  </div>
  )
}
