"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  FaGithub, FaLinkedin, FaMedium, FaDownload,
  FaEnvelope, FaMobileAlt, FaSun, FaMoon,
  FaCode, FaCloud, FaTools, FaDatabase, FaPuzzlePiece, FaCogs, FaAward, FaHeart, FaProjectDiagram
} from 'react-icons/fa';

const skills = [
  { icon: <FaCode />, text: 'Java, Python' },
  { icon: <FaCogs />, text: 'Spring, Spring Boot, Microservices' },
  { icon: <FaTools />, text: 'Kafka, Redis, Jenkins, Docker, Kubernetes' },
  { icon: <FaCloud />, text: 'AWS, Pivotal Cloud Foundry' },
  { icon: <FaDatabase />, text: 'SQL (MySQL, Postgres), NoSQL' },
  { icon: <FaPuzzlePiece />, text: 'DSA, Design Patterns, Problem Solving' }
];

const projects = [
  { title: 'Your Account - Salesforce (01/2025 - Present)', description: 'A self-service app within Salesforce that lets customers manage subscriptions, licenses, and payments. I led key backend components for entitlement sync, credit card payment flow, and secure document access.' },
  { title: 'ECI Manual Upload - Salesforce (01/2024 - 04/2024)', description: 'Developed a feature for manual upload of call recordings (voice/video) in various formats, providing insights and analysis to improve customer service.' },
  { title: 'CRMA ECI Dashboard - Salesforce (05/2023 - 12/2023)', description: 'Built a dashboard using CRM Analytics to visualise conversational data from Einstein Conversation Insights, providing business insights from conversations.' },
  { title: 'AFHT - Salesforce (01/2023 - 05/2023)', description: 'Developed a top-voted feature in Salesforce CRM that allows users to track the audit/history of sales reps’ updates, providing a detailed view of activities.' },
  { title: 'Activities Analytics Dashboard - Salesforce (08/2022 - 12/2022)', description: 'Designed a dashboard in Salesforce CRM to visualise sales rep activity data, helping businesses track performance metrics.' },
  { title: 'Lightning Sync - EAC - Salesforce (02/2022 - 07/2022)', description: 'Developed tools to enhance the sync engine between Salesforce and external channels like Microsoft Exchange and Google for seamless calendar, email, and contact syncing.' },
  { title: 'ITSM Products (Salesforce)', description: 'Improved IT service management capabilities with scalable backend services.' },
  { title: 'PayLah Migration (DBS)', description: 'Migrated monolith to microservices, achieving 90% cloud deployment.' },
  { title: 'Prospecting Centre (Salesforce)', description: 'Enhanced lead management efficiency with AI integration.' },
  { title: 'Digital Arrangement Accounts (JP Morgan)', description: 'Designed Kafka-based event orchestration to improve stakeholder notifications.' },
  { title: 'SAILOR - DBS Bank (08/2018 - 04/2019)', description: 'Developed backend APIs for a financial advisor platform that integrates with banking activities, helping customers track budgets and financial goals.' }
];

const achievements = {
  certifications: ['AWS Certified Developer - Associate (2024)'],
  awards: ['Spot Bonus Award (2022) - Salesforce', 'WOW Award (2020) - DBS', 'Gladiator Award (2019) - DBS', 'Performance Excellence Award (2016) - Napier']
};

const passions = [
  'Building Scalable and Resilient Systems',
  'Cloud Technologies and Digital Transformation',
  'Solving Complex Technical Challenges'
];

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-slate-300 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Mahesh Kumar Gutam</h1>
          <div className="flex gap-4 items-center">
            <a href="/MaheshKumarGutam_2025_8686.pdf" download className="text-sm px-3 py-1 bg-white text-black dark:bg-black dark:text-white rounded hover:bg-opacity-80 flex items-center gap-1"><FaDownload /> Resume</a>
            <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} variant="outline" size="icon">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </Button>
          </div>
        </div>
        <nav className="max-w-4xl mx-auto px-4 py-2 flex gap-4 text-sm overflow-x-auto">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#passions">Passions</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-10">
        <section id="about" className="reveal-on-scroll">
          <h2 className="text-xl font-bold mb-2">About</h2>
          <p>With over 12 years of experience in backend development and cloud technologies, I have delivered impactful solutions at leading organizations like Salesforce, JPMorgan, and DBS Bank. My expertise spans scalable architectures, microservices, and enterprise software development.</p>
        </section>

        <section id="skills" className="reveal-on-scroll">
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {skills.map((skill, i) => (
              <li key={i} className="p-3 bg-white dark:bg-slate-800 rounded shadow hover:scale-[1.02] transition">
                <div className="flex items-center gap-2">{skill.icon}<span>{skill.text}</span></div>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="reveal-on-scroll">
          <h2 className="text-xl font-bold mb-2">Projects</h2>
          <div className="space-y-4">
            {projects.map((project, i) => (
              <Card key={i}>
                <CardContent className="py-4 rounded shadow hover:scale-[1.02] transition">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm mt-1">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="achievements" className="reveal-on-scroll">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-slate-500 flex items-center"><FaAward className="mr-2" />Achievements</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Certifications</h3>
                <ul className="list-disc pl-5 rounded shadow hover:scale-[1.02] transition">
                  {achievements.certifications.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Awards</h3>
                <ul className="list-disc pl-5 rounded shadow hover:scale-[1.02] transition">
                  {achievements.awards.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>            
            </div>
        </section>

        <section id="passions" className="reveal-on-scroll">
          <h2 className="text-xl font-bold mb-2">Passions</h2>
          <ul className="list-disc pl-5 space-y-1 rounded shadow hover:scale-[1.02] transition" >
            {passions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="reveal-on-scroll">
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <ul className="space-y-2 rounded shadow hover:scale-[1.02] transition">
            <li><FaEnvelope className="inline mr-2" /> <a href="mailto:mahesh.gutam8686@gmail.com">mahesh.gutam8686@gmail.com</a></li>
            <li><FaMobileAlt className="inline mr-2" /> <a href="tel:+919912299262">+91 9912299262</a></li>
            <li><FaLinkedin className="inline mr-2" /> <a href="https://linkedin.com/in/mahesh-kumar-gutam" target="_blank">LinkedIn</a></li>
            <li><FaGithub className="inline mr-2" /> <a href="https://github.com/MaheshIare" target="_blank">GitHub</a></li>
            <li><FaMedium className="inline mr-2" /> <a href="https://medium.com/@maheshkumar-iare" target="_blank">Medium</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}