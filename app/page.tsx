"use client";
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FaGithub, FaLinkedin, FaMedium, FaCloud, FaCode, FaEnvelope, FaMobileAlt, FaAward, FaHeart, FaPuzzlePiece, FaLaptopCode, FaTasks, FaProjectDiagram, FaDatabase, FaCogs, FaTools, FaDownload, FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';

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
  { title: 'Activity Field History Tracking (Salesforce)', description: 'Delivered top-voted feature for tracking and retrieving activity updates.' }
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
    <main className="min-h-screen px-4 py-10 transition-colors duration-500 bg-gradient-to-br from-slate-900 via-sky-900 to-indigo-900 text-white dark:from-white dark:via-slate-200 dark:to-slate-100 dark:text-slate-900">
      <div className="flex justify-between items-center max-w-5xl mx-auto mb-6">
        <div className="text-center">
          <motion.h1 className="text-4xl font-bold mb-1" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}>Mahesh Kumar Gutam</motion.h1>
          <motion.p className="text-lg text-slate-300 dark:text-slate-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Software Developer | Backend & Cloud Specialist</motion.p>
        </div>
        <div className="flex items-center gap-3">
          <a href="/MaheshKumarGutam_2025_8686.pdf" download className="text-sm flex items-center gap-1 px-3 py-1 bg-white text-black dark:bg-black dark:text-white rounded hover:bg-opacity-80"><FaDownload /> Resume</a>
          <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} variant="outline" size="icon">
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
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <Card className="bg-white/5 text-white shadow-xl dark:bg-slate-200 dark:text-slate-800">
              <CardContent className="p-6">
                <p className="text-center">With over 12 years of experience in backend development and cloud technologies, I have delivered impactful solutions at leading organizations like Salesforce, JPMorgan, and DBS Bank.</p>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.1 }} viewport={{ once: true }}>
                <Card className="bg-white/10 hover:bg-white/20 transition dark:bg-slate-100 dark:hover:bg-slate-200">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="text-xl">{s.icon}</div>
                    <div>{s.text}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.1 }} viewport={{ once: true }}>
                <Card className="bg-white/10 hover:bg-white/20 transition dark:bg-slate-100 dark:hover:bg-slate-200">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold mb-1">{p.title}</h4>
                    <p className="text-sm text-slate-300 dark:text-slate-700">{p.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="space-y-6">
            <div>
              <h5 className="text-lg font-semibold mb-2">Certifications</h5>
              <ul className="list-disc pl-5">
                {achievements.certifications.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-2">Awards</h5>
              <ul className="list-disc pl-5">
                {achievements.awards.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-2">Passions</h5>
              <ul className="list-disc pl-5">
                {achievements.passions.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="contact">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="space-y-3 text-sm">
            <p><FaEnvelope className="inline mr-2" /> <a href="mailto:mahesh.gutam8686@gmail.com" className="underline">mahesh.gutam8686@gmail.com</a></p>
            <p><FaMobileAlt className="inline mr-2" /> <a href="tel:+919912299262" className="underline">+91 9912299262</a></p>
            <p><FaLinkedin className="inline mr-2" /> <a href="https://linkedin.com/in/mahesh-kumar-gutam" target="_blank" className="underline">LinkedIn</a></p>
            <p><FaGithub className="inline mr-2" /> <a href="https://github.com/MaheshIare" target="_blank" className="underline">GitHub</a></p>
            <p><FaMedium className="inline mr-2" /> <a href="https://medium.com/@maheshkumar-iare" target="_blank" className="underline">Medium</a></p>
          </motion.div>
        </TabsContent>
      </Tabs>

      <footer className="mt-10 text-center text-slate-400 text-sm dark:text-slate-600">
        &copy; 2024 Mahesh Kumar Gutam. All rights reserved.
      </footer>
    </main>
  );
}
