
# Semantic Tags 
- gives meaning to your HTML.
- make it easier for browser.
- semantic tags aise HTML tags hote hain jo content ka meaning btate hain,sirf structure nhi. Ye browsers,developrs aur search engines ko page samajhne mei help karte hain.



## 1. `<article>`
 - ye ek self-contained content ke liye hota hai , jo independently samjha ja sakta hai.
 - eg -> blog post,news article, forum post.

```html
<article>
  <h2>Semantic HTML Samajhna</h2>
  <p>Semantic HTML se web content ka meaning clear hota hai.</p>
</article>

```

## 2. `<section>`
  - ye thematic grouping ke liye hota hain ,matlab ek topic ke andar ka content group karna.
  - sections mein heading hoti hai aur multiple `<article>` ho skte hain.
  - eg -> chapters,tabs,ya page ke parts.

```html
<section>
  <h2>HTML ka Introduction</h2>
  <p>Is section mein HTML ka basic explanation hai.</p>
</section>

```

## 3. `<main>`
 - Page ka main content present karta hai.
 - ek page mein sirf ek `<main>` hona chahiye.
 - headers ,footer ya nav menus isme nahi hone chahiye.
 - eg -> page ka center content.

```html
<main>
  <h1>Welcome to My Website</h1>
  <p>Ye main content area hai.</p>
</main>

```

## 4. `<aside>`
 - ye content main content se related hota hai ,lekin essentail nhi.
 - sidebar ,ads,extra info,related links ke liye use hota hai.

```html
<aside>
  <h3>Related Articles</h3>
  <ul>
    <li>HTML Basics</li>
    <li>CSS Fundamentals</li>
  </ul>
</aside>

```

## 5. `<form>`
 - ye interactive form ke liye hota hai, jahan user input de sakta hai.
 - inputs : 
     - `<input>`, `<textarea>`,` <button>`,` <select>`
```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <button type="submit">Submit</button>
</form>

```

## 6. `<footer>`
- Page ya section ka footer represent karta hai.
- Content: copyright info, links, author info, related info.
- Multiple footers ho sakte hain (page ya article ke liye).

```html
<footer>
  <p>&copy; 2025 My Website</p>
</footer>


```


## 7.` <header>`
- Page ya section ka introductory content ya navigation represent karta hai.
- Multiple headers ho sakte hain (page header, section header).
```html
<header>
  <h1>My Website</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

```

## 8. `<details>`
- Ye ek collapsible content ke liye hota hai.
- FAQs ya expandable sections ke liye perfect hai.


```html
<details>
  <summary>Semantic HTML kya hai?</summary>
  <p>HTML jo meaning aur structure provide karta hai.</p>
</details>

```

## 9. `<figure>`
- Ye self-contained media content ke liye hota hai (image, diagram, code snippet).
- Caption ke liye `<figcaption>` use hota hai.