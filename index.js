import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <div dangerouslySetInnerHTML={{ __html: ReactMarkdown.render(markdown) }} />
        </div>
    );
}
// BEGIN: reverse-sentence
function reverseSentence(sentence) {
    // split the sentence into an array of words
    const words = sentence.split(' ');

    // reverse the order of the words
    const reversedWords = words.reverse();

    // join the words back together into a string
    const reversedSentence = reversedWords.join(' ');

    // capitalize the first letter of the new sentence
    const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

    return capitalizedSentence;
}

console.log(reverseSentence('the quick brown fox')); // Output: Fox brown quick the
// END: reverse-sentence
// BEGIN: map-array-of-arrays
const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Bob', age: 40 }
    ],
    [
        { name: 'Alice', age: 20 },
        { name: 'Tom', age: 35 },
        { name: 'Sue', age: 45 }
    ]
];

const transformedData = data.map((array) => {
    return array.map((obj) => {
        return {
            firstName: obj.name,
            age: obj.age
        };
    });
});

console.log(transformedData);
// Output:
// [
//   [
//     { firstName: 'John', age: 25 },
//     { firstName: 'Jane', age: 30 },
//     { firstName: 'Bob', age: 40 }
//   ],
//   [
//     { firstName: 'Alice', age: 20 },
//     { firstName: 'Tom', age: 35 },
//     { firstName: 'Sue', age: 45 }
//   ]
// ]
// END: map-array-of-arrays
// BEGIN: extract-names
const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Bob', age: 40 }
    ],
    [
        { name: 'Alice', age: 20 },
        { name: 'Tom', age: 35 },
        { name: 'Sue', age: 45 }
    ]
];

const names = data.flatMap((array) => {
    return array.map((obj) => {
        return obj.name;
    });
});

console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice', 'Tom', 'Sue']
// END: extract-names
