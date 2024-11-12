### **Exercise 1: Simple Fetch with Promises**

Create a webpage that generates jokes via: `https://official-joke-api.appspot.com/random_joke`.

Next, make it so that the punchline is not displayed until the user presses a button.

---

### **Exercise 2: Handling Errors with Fetch**

Extend your previous page to handle errors gracefully.

**Steps**:

1. If the request fails (simulate by using an incorrect URL), display a humorous message instead.
2. Test with both a working and broken URL.

---

### **Exercise 3: Convert to Async/Await or .then()**

Now try to rewrite the functions using either async/await or .then() depending on what you chose originally.

---

### Larger exercise: Dictionary app

Create a webpage that allows you to lookup the definition for a word via a form. The user should be able to enter a random word and then be able to read its definition. To access definitions you can use: https://dictionaryapi.dev/.

Next, try to implement error messages when the users searches for words that does not exist.

---

### **Advanced Exercise 4: Fetch Multiple Jokes**

It's time to get real humorous! Display three jokes to the user instead of just one. Make sure that every joke is fetched concurrently. Tip: Look up Promise.all()

**Challenge**: Use `Promise.all()` to fetch all three facts **concurrently** and log them once all requests are complete.
