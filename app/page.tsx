"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  FaGithub, FaLinkedin, FaMedium, FaCloud, FaCode, FaEnvelope, FaMobileAlt,
  FaAward, FaHeart, FaPuzzlePiece, FaLaptopCode, FaTasks, FaProjectDiagram,
  FaDatabase, FaCogs, FaTools, FaDownload, FaSun, FaMoon
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const skills = [
  { icon: <FaCode />, text: 'Java, Python' },
  { icon: <FaCogs />, text: 'Spring, Spring Boot, Microservices' },
  { icon: <FaTools />, text: 'Kafka, Redis, Jenkins, Docker, Kubernetes' },
  { icon: <FaCloud />, text: 'AWS, Pivotal Cloud Foundry' },
  { icon: <FaDatabase />, text: 'SQL (MySQL, Postgres), NoSQL' },
  { icon: <FaPuzzlePiece />, text: 'DSA, Design Patterns, Problem Solving' }
];

const projects = [
  { title: 'ITSM Products (Salesforce)', description: 'Improved IT service management capabilities with scalable backend services.' },
  { title: 'PayLah Migration (DBS)', description: 'Migrated monolith to microservices, achieving 90% cloud deployment.' },
  { title: 'Prospecting Centre (Salesforce)', description: 'Enhanced lead management efficiency with AI integration.' },
  { title: 'Digital Arrangement Accounts (JP Morgan)', description: 'Designed Kafka-based event orchestration to improve stakeholder notifications.' },
];

const achievements = {
  certifications: ['AWS Certified Developer - Associate (2024)'],
  awards: ['Spot Bonus Award (2022) - Salesforce', 'WOW Award (2020) - DBS', 'Gladiator Award (2019) - DBS', 'Performance Excellence Award (2016) - Napier'],
  passions: ['Building Scalable and Resilient Systems', 'Cloud Technologies and Digital Transformation', 'Solving Complex Technical Challenges']
};

export default function Portfolio() {
  const [tab, setTab] = useState('about');
  const { theme, setTheme } = useTheme();

  return (
    <main className="min-h-screen px-4 py-10 bg-gradient-to-br from-slate-900 via-sky-900 to-indigo-900 text-white">
      <div className="flex justify-between items-center max-w-5xl mx-auto mb-6">
        <div>
          <motion.h1 className="text-4xl font-bold mb-1" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}>Mahesh Kumar Gutam</motion.h1>
          <motion.p className="text-lg text-slate-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Software Developer | Backend & Cloud Specialist</motion.p>
        </div>
        <div className="flex items-center gap-3">
          <a href="/MaheshKumarGutam_Resume.pdf" download className="text-sm flex items-center gap-1 px-3 py-1 bg-white text-black dark:bg-black dark:text-white rounded hover:bg-opacity-80"><FaDownload /> Resume</a>
          <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 w-10 h-10 border rounded">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </Button>
        </div>
      </div>

      <Tabs value={tab} onValueChange={setTab} className="max-w-5xl mx-auto">
        <TabsList className="flex justify-center flex-wrap gap-2 bg-white/10 p-4 rounded-xl mb-8">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="about">
          <section className="bg-white/10 p-6 rounded-xl shadow mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-slate-500">About</h2>
            <p className="text-center">With over 12 years of experience in backend development and cloud technologies, I have delivered impactful solutions at leading organizations like Salesforce, JPMorgan, and DBS Bank.</p>
          </section>
        </TabsContent>

        <TabsContent value="skills">
          <section className="bg-white/10 p-6 rounded-xl shadow mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-slate-500 flex items-center"><FaLaptopCode className="mr-2" />Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((s, i) => (
                <Card key={i} className="border border-slate-600">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="text-xl">{s.icon}</div>
                    <div>{s.text}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="projects">
          <section className="bg-white/10 p-6 rounded-xl shadow mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-slate-500 flex items-center"><FaTasks className="mr-2" />Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((p, i) => (
                <Card key={i} className="bg-white/10 hover:bg-white/20 transition">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold mb-1">{p.title}</h4>
                    <p className="text-sm text-slate-300">{p.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="achievements">
          <section className="bg-white/10 p-6 rounded-xl shadow mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-slate-500 flex items-center"><FaAward className="mr-2" />Achievements</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Certifications</h3>
                <ul className="list-disc pl-5">
                  {achievements.certifications.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Awards</h3>
                <ul className="list-disc pl-5">
                  {achievements.awards.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Passions</h3>
                <ul className="list-disc pl-5">
                  {achievements.passions.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="contact">
          <section className="bg-white/10 p-6 rounded-xl shadow mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-slate-500 flex items-center"><FaEnvelope className="mr-2" />Contact</h2>
            <div className="space-y-3 text-sm">
              <p><FaEnvelope className="inline mr-2" /> <a href="mailto:mahesh.gutam8686@gmail.com" className="underline">mahesh.gutam8686@gmail.com</a></p>
              <p><FaMobileAlt className="inline mr-2" /> <a href="tel:+919912299262" className="underline">+91 9912299262</a></p>
              <p><FaLinkedin className="inline mr-2" /> <a href="https://linkedin.com/in/mahesh-kumar-gutam" target="_blank" className="underline">LinkedIn</a></p>
              <p><FaGithub className="inline mr-2" /> <a href="https://github.com/MaheshIare" target="_blank" className="underline">GitHub</a></p>
              <p><FaMedium className="inline mr-2" /> <a href="https://medium.com/@maheshkumar-iare" target="_blank" className="underline">Medium</a></p>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      <footer className="mt-10 text-center text-slate-400 text-sm">
        &copy; 2024 Mahesh Kumar Gutam. All rights reserved.
      </footer>
    </main>
  );
}