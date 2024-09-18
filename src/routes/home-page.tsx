import React from 'react';
import { useTheme } from '@/components/theme-provider';
import { LINK_AERONODE, LINK_FORM_NEWTON } from "@/common/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { H3, List } from "@/components/ui/typography";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string[];
  link: string;
  buttonText: string;
}

const projectsMap: Map<string, Project> = new Map([
  ['AeroNode', {
    title: 'AeroNode',
    description: [
      'Aeronode powers all of our aerial robots. It allows the user to control any drone by providing a simple python api over it.',
      'It is built from the ground up keeping compatibility, performance and ease of use in mind.',
      'Aeronode is fully open source and we are always looking out for feedback and feature requests.'
    ],
    link: LINK_AERONODE,
    buttonText: 'Check it out!'
  }],
  ['Newton', {
    title: 'Newton',
    description: [
        'Newton is a new and very special robot that we are working on. It is in early stages of development, but we expect it to be SOTA in its category.',
        'We will be providing more information about it in November. Stay tuned!',
        'If you are interested in being a beta tester and getting early access, please fill out the form below.'
    ],
    link: LINK_FORM_NEWTON,
    buttonText: 'Form'
  }]
]);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Card className="w-1/2 flex flex-col text-center">
    <CardHeader className='flex flex-col'>
      <CardTitle className='text-center'>{project.title}</CardTitle>
    </CardHeader>
    <CardContent className="grow">
      <List>
        {project.description.map((item, index) => (
          <div key={index} className='py-4'>{item}<br /></div>
        ))}
      </List>
    </CardContent>
    <CardFooter className='w-full'>
        <div className='flex flex-row w-full'>
            <div className='w-1/5' />
            <Link to={project.link} className='w-3/5'>
                <Button variant={"default"} className='w-full'>
                {project.buttonText}
                </Button>
            </Link>
            <div className='w-1/5' />
        </div>
      
    </CardFooter>
  </Card>
);

const HomePage: React.FC = () => {
  const { theme } = useTheme();

  const isDarkTheme = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <div>
      <div className="text-center">
        <div>
          <img 
            src="main.png" 
            alt="logo" 
            className={`w-2/3 mx-auto transition-all duration-300 ${isDarkTheme ? 'invert' : ''}`}
            style={{ filter: isDarkTheme ? 'invert(1) hue-rotate(180deg)' : 'none' }}
          />
        </div>
        <div className="py-12">
          <H3>
            {"Not Your Traditional Robotics Company"}<br />
          </H3>
        </div>
      </div>
      <div className="flex justify-center items-center py-6 border-dashed border-t">
        <H3>Current Projects</H3>
      </div>
      <div className="flex flex-row p-6 space-x-4">
        {Array.from(projectsMap.values()).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;