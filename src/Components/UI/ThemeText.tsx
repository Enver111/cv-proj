import React from "react";

type ThemeTextProps = {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export default function ThemeText({
  text,
  children,
  className = "",
  as = "span",
}: ThemeTextProps) {
  const Component = as as React.ElementType;
  const content = children ?? text ?? "";
  return (
    <Component className={`text-gray-900 dark:text-gray-100 ${className}`}>
      {content}
    </Component>
  );
}
