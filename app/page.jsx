'use client'
import Feed from "@components/Feed";

import { useSession } from "next-auth/react";

const Home = () => {
  const {data:session} = useSession();

  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptic is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      {session?.user ? <Feed/> : null}
    </section>
  );
};

export default Home;
