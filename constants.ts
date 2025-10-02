
import { Language } from './types';

export const LANGUAGES: Language[] = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'sql', label: 'SQL' },
  { value: 'css', label: 'CSS' },
  { value: 'html', label: 'HTML' },
  { value: 'json', label: 'JSON' },
  { value: 'markdown', label: 'Markdown' },
  { value: 'bash', label: 'Bash' },
];

export const DEFAULT_CODE = `function HelloWorld({ greeting = "hello" }) {
  const [name, setName] = React.useState("World");

  // This is a comment
  const aNumber = 42;
  const isTrue = true;

  return (
    <div className="container">
      <h1>{greeting}, {name}!</h1>
    </div>
  );
}
`;
