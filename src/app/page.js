import ProjectShowcase from './components/projects';
import Hero from './components/hero';
import SubscribeForm from './components/email';
import Socials from './components/socials';
import ContactForm from './components/contact';
import Creds from './components/creds';
import Tools from './components/tools';

export default function Home() {
  return (
    <main className='flex flex-col align-middle justify-between w-full min-h-screen bg-zinc-900 scroll-smooth'>
      <div className='max-w-3xl mx-auto gap-2 flex flex-col p-2 w-full'>
        <div className='flex flex-col gap-2 h-full'>
          <Hero /> <Socials />
          <ProjectShowcase />
          <Tools />
          <ContactForm />
          <SubscribeForm />
          <Creds />
        </div>
      </div>
    </main>
  );
}
