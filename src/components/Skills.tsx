import React, { useState } from 'react';
import { Code, Palette, Terminal, Globe2 } from 'lucide-react';
import EditableText from './EditableText';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

interface SkillsProps {
  isEditMode: boolean;
}

const SkillCategoryComponent = ({ 
  title, 
  skills, 
  icon: Icon, 
  isEditMode,
  onUpdate
}: { 
  title: string; 
  skills: string[]; 
  icon: React.ElementType;
  isEditMode: boolean;
  onUpdate: (title: string, skills: string[]) => void;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-amber-50 rounded-lg">
        <Icon className="w-6 h-6 text-[#E07A5F]" />
      </div>
      <h3 className="text-xl font-semibold">
        <EditableText
          isEditMode={isEditMode}
          value={title}
          onChange={(value) => onUpdate(value, skills)}
        />
      </h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#E07A5F] rounded-full"></span>
          <EditableText
            isEditMode={isEditMode}
            value={skill}
            onChange={(value) => {
              const newSkills = [...skills];
              newSkills[index] = value;
              onUpdate(title, newSkills);
            }}
          />
        </li>
      ))}
      {isEditMode && (
        <button
          onClick={() => onUpdate(title, [...skills, 'New Skill'])}
          className="mt-2 text-sm text-[#E07A5F] hover:text-[#c56a52]"
        >
          + Add Skill
        </button>
      )}
    </ul>
  </div>
);

export default function Skills({ isEditMode }: SkillsProps) {
  const [categories, setCategories] = useState<SkillCategory[]>([
    {
      title: "Frontend Development",
      icon: Palette,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Backend Development",
      icon: Terminal,
      skills: ["Node.js", "Python", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Web Technologies",
      icon: Globe2,
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Data Structures", "Algorithms", "System Design", "Clean Code"]
    }
  ]);

  const updateCategory = (oldTitle: string, newTitle: string, newSkills: string[]) => {
    setCategories(categories.map(cat => 
      cat.title === oldTitle ? { ...cat, title: newTitle, skills: newSkills } : cat
    ));
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <SkillCategoryComponent
              key={category.title}
              {...category}
              isEditMode={isEditMode}
              onUpdate={(newTitle, newSkills) => 
                updateCategory(category.title, newTitle, newSkills)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}