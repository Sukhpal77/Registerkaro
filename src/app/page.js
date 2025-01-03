"use client";
import React from 'react';
import Header from './components/header';
import ServicesSection from './components/ServicesSection';
import HomePage from './components/home';
import AboutSection from './components/AboutSection';
import VideoSection from './components/VideoSection';
import ClientsSection, { StepsSection } from './components/ClientsSection';
import BlogSection from './components/BlogSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import HeroSection from './components/HeroSection';
import NumbersSection from './components/NumbersSection';
import EmailSubscriptionSection from './components/EmailSubscriptionSection';
import PartnerLogosSection from './components/PartnerLogosSection';
import FooterSection from './components/FooterSection';


export default function index() {
  return (
    <main>
      <Header />
      <HomePage />
      <ServicesSection />
      <AboutSection />
      <VideoSection />
      <ClientsSection />
      <StepsSection />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <HeroSection/>
      <NumbersSection />
      <EmailSubscriptionSection />
      <PartnerLogosSection />
      <FooterSection />
    </main>
  );
}
