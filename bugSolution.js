```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: This effect only runs once after the component mounts.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```