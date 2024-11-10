import React from 'react';

interface EditableTextProps {
  isEditMode: boolean;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}

export default function EditableText({ isEditMode, value, onChange, multiline = false }: EditableTextProps) {
  if (!isEditMode) {
    return <span>{value}</span>;
  }

  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded shadow-sm focus:border-[#E07A5F] focus:ring-1 focus:ring-[#E07A5F]"
        rows={3}
      />
    );
  }

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border rounded shadow-sm focus:border-[#E07A5F] focus:ring-1 focus:ring-[#E07A5F]"
    />
  );
}