import React, { useState } from 'react';

import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    function handleMarkdownChange(event) { setMarkdown(event.target.value); }

    return ({ markdown });
}

export default MarkdownEditor;

// reverse a sentence
// the start of the new sentence must be capital letter

const reverseSentence = (sentence) => {
    let reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}

const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];
// As an illustration, pull names out of the data array
const names = data.flatMap(group => group.map(user => user.name));  

  // Map through an array of arrays of objects
  // Example: Extract names from the data array
  // Desired outcome: ['John', 'Jane', 'Bob']
const names = data.flatMap(group => group.map(user => user.name));
