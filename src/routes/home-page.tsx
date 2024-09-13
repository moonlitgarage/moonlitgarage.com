import React from 'react';
import { useTheme } from '@/components/theme-provider';
import { LINK_AERONODE, LINK_TWITTER } from "@/common/constants";
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
      'Making drone programming dead simple.',
      'Get the board, plug it into your drone, and get an easy to use api exposed over your drone.'
    ],
    link: LINK_AERONODE,
    buttonText: 'Check it out!'
  }],
  ['Tensor', {
    title: 'Tensor',
    description: [
      'We are cooking up something new!',
        'Stay tuned for more updates.'
    ],
    link: LINK_TWITTER,
    buttonText: 'Twitter'
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
    <CardFooter>
      <Link to={project.link}>
        <Button variant={"default"}>
          {project.buttonText}
        </Button>
      </Link>
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
            className={`mx-auto transition-all duration-300 ${isDarkTheme ? 'invert' : ''}`}
            style={{ filter: isDarkTheme ? 'invert(1) hue-rotate(180deg)' : 'none' }}
          />
        </div>
        <div className="py-12">
          <H3>
            {"not your traditional robotics company"}<br />
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