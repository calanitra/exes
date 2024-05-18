interface Example {
  b: number;
  // Add additional properties here
}

function processExample(example: Example): void {
  // Implementation details
  console.log(example.b);
}

// Usage
const exampleInstance: Example = { b: 42 };
processExample(exampleInstance);
