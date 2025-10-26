import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

const experiences = [

  {
    title: "Full Stack Developer",
    company: "Self Employed",
    period: "2024 - current",
    description: "Developed and maintained multiple client projects. Created scalable backend solutions using Django and Express.",
    skills: ["Node.js","Django","Shopify", "Express", "MongoDB", "React"],
  },
  {
    title: "Backend Enginner Intern",
    company: "Ibex",
    period: "July 2025 - October 2025",
    description: "Contributed to the design and optimization of backend systems using NestJS. Implemented a multi-tenant architecture supporting dynamic database connections generated at runtime, significantly enhancing scalability and maintainability. Improved existing workflow automation and integrated CI/CD pipelines to streamline deployments and code delivery.",
    skills:["NestJS", "PostgreSQL", "CI/CD", "Multi-Tenancy", "Dynamic Workflows", "JavaScript", "Git", "REST APIs","GRAPHQL APIS"],  },
];

const ExperienceSection = () => {
  return (
    <section className="min-h-screen w-full relative flex items-center justify-center py-20">
      <div className="max-w-6xl w-full mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                  </div>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="bg-white/5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;