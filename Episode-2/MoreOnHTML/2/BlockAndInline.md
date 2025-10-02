# Difference between Block and Inline elements.



##  1. Block elements :
 - **Defination** ->  ye elements nayi line par start hote hain aur apni full width occupy karte hain.
- **Behavior** -> Block elements ke upr aur neeche default margin hota hai.
- **Common Example** ->`<div>, <p>, <h1> - <h6>, <section>, <article>, <header>, <footer>, <main>, <ul>, <li>`

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

- output alag lines mai appear honge, poora width lete hue.

## 2. Inline Elements 
 - **Definition** -> ye elements line ke andar hi appear hote hain,aur sirf utna hi width lete hain jitna unka content hota hai.
 - **Behavior** -> inline elements ke upar neeche magin nhi lagta.
 - **Common Example**->`<p>This is <strong>bold</strong> text inside a paragraph.</p>`

- output `<strong>` text same line mai aayega,paragraph ke content ke sath.


## Summary :

| Feature        | Block Elements                | Inline Elements              |
| -------------- | ----------------------------- | ---------------------------- |
| Line Behavior  | Nayi line par start hote hain | Line ke andar hi rehte hain  |
| Width          | Full width occupy karte hain  | Sirf content ki width        |
| Margin/Padding | Upar neeche margin lagta hai  | Upar neeche margin nahi hota |
| Common Tags    | `<div>`, `<p>`, `<h1>` etc.   | `<span>`, `<a>`, `<strong>`  |
| Can contain    | Inline + Block elements       | Sirf inline elements         |


```
Agar aapko inline element ko block jaisa behavior dena ho, CSS mein display: block; ya display: inline-block; use kar sakte ho.
inline-block ka matlab hota hai: inline ki tarah line mein rahe aur block ki tarah width/height set ho sake.
```