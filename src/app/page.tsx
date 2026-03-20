'use client';

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ButtonLink from './components/ButtonLink';
import './stylesheets/homepage.css';
import {authentication} from '../lib/firebase-auth'


//TODO: figure out how to link authentication to firebase
export default function Page() {
  return (
    <>
    <p className='text-4xl mb-[1vw] font-bold'>NudgeBot</p>
    <div className='page-container flex items-center justify-center'>
    <div className='page-elements flex flex-row'>
      <div>
        <p className='tag-lines text-9xl'>Meetings.</p>
        <p className='tag-lines text-9xl'>Yoga.</p>
        <p className='tag-lines text-9xl'>Rezzies.</p>
        <p className='tag-lines text-9xl mb-[2vw]'>Repeat.</p>
        <p className='slogan mb-[1.5vw]'>You’re a rockstar! Our automated system will make sure you never miss a gig.</p>
        <div className='buttons'>
          <ButtonLink onClick = {authentication} className='mr-[4vw]'>Create an Account</ButtonLink>
          <ButtonLink className='pl-[4vw] pr-[4vw]'>Sign In</ButtonLink>
        </div>
      </div>
      <div className='robotwrapper shrink-0'>
        <DotLottieReact
          src="/Robot-Bot 3D.json"
          loop
          autoplay
          style={{ width: '100%', maxWidth: '600px', height: '600px' }}
        />
      </div>
    </div>
    </div>
    </>
  );
};
