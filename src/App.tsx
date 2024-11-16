import { faPenNib, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ChangeEvent, type ReactElement, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism';
import emoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import 'modern-normalize/modern-normalize.css';
import '@fontsource-variable/roboto-flex/index.css';
import '@fontsource-variable/ubuntu-sans-mono/index.css';
import '@/App.scss';

const TEST_ICON =
  'https://upload.wikimedia.org/wikipedia/commons/0/02/CD_icon_test.svg';

const PLACEHOLDER_TEXT = `# H1 Heading Element

## H2 Heading Element
---
\`let num = 7;\`

~~~js
// Code Block
const str = 'test';
console.log(str);
~~~

| Table | Header |
| ----- | ------ |
| First | Second |
| Third | Fourth |

![Test Icon](${TEST_ICON})

> "A Block Quote,  
> can be multiline."
---
- [X] Checked Item
- [ ] Unchecked Item

1. Ordered Item
2. Ordered Item

- Unordered Item
  - Indented Item
---
*Italic Text*

**Bold Text**

~Strikethrough Text~

Emoji :+1:

[A Link](. 'Reload')

Text with a Footnote[^1]

[^1]: A Footnote`;

export const App = (): ReactElement => {
  const [text, setText] = useState(PLACEHOLDER_TEXT);
  const handleInput = (content: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(content.target.value);
  };

  return (
    <>
      <header>
        Markdown Previewer
        <span>
          © 2022 - 2024{' '}
          <a
            type='text/html'
            target='_blank'
            title='Source'
            rel='author external noreferrer'
            href='https://github.com/eldarlrd/markdown-previewer'>
            eldarlrd
          </a>
        </span>
      </header>

      <main>
        <section id='editor' className='container'>
          <div className='title-bar'>
            <FontAwesomeIcon icon={faPenNib} /> Editor
          </div>

          <textarea value={text} onInput={handleInput} />
        </section>

        <section className='container'>
          <div className='title-bar'>
            <FontAwesomeIcon icon={faEye} /> Preview
          </div>

          <figure>
            <ReactMarkdown
              remarkPlugins={[remarkGfm, emoji]}
              components={{
                code({ className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className ?? '');

                  return match ?
                      <SyntaxHighlighter
                        // @ts-expect-error: module style definition
                        style={coldarkCold}
                        language={match[1]}
                        CodeTag={'div'}
                        customStyle={{ borderRadius: '.25rem' }}
                        codeTagProps={{
                          style: {
                            fontFamily: 'Ubuntu Sans Mono Variable, monospace'
                          }
                        }}
                        {...props}>
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    : <code className={className} {...props}>
                        {children}
                      </code>;
                }
              }}>
              {text}
            </ReactMarkdown>
          </figure>
        </section>
      </main>
    </>
  );
};

// Easter Egg
console.log('"Looks useless to me!" - A. S.');
