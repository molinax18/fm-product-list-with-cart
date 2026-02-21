# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Design preview for the Product list with cart coding challenge](./fm-resources/preview.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/molinax18/fm-product-list-with-cart)
- Live Site URL: [Live Demo](https://molinax18.github.io/fm-product-list-with-cart/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Tailwind CSS v4](https://tailwindcss.com/) - For styling
- [Vite](https://vitejs.dev/) - Frontend Tooling
- Flexbox & CSS Grid

### What I learned

Throughout this project, I strengthened my understanding of React state management using the Context API, specifically for handling the shopping cart logic. I also improved my knowledge of accessibility (a11y) by applying ARIA attributes where necessary to improve screen reader experiences.

Here's an example of how I applied accessibility to the product quantity buttons:

```tsx
<button
  className="cursor-pointer px-5"
  aria-label="Remove one"
  onClick={() => updateQuantity(id, quantity - 1)}
>
  <span className="rounded-full border border-white px-1.5">-</span>
</button>
```

Additionally, I worked with the `<picture>` tag to implement art direction for responsive images, saving bandwidth by loading the optimal image size for each view:

```html
<picture>
  <source media="(min-width:650px)" srcset="{product.image.desktop}" />
  <source media="(min-width:465px)" srcset="{product.image.tablet}" />
  <img src="{product.image.mobile}" alt="{product.name}" />
</picture>
```

### Continued development

In future projects, I want to continue focusing on semantic HTML, accessible rich web apps, and exploring advanced patterns in React such as custom hooks and performance optimization.

### AI Collaboration

For this project, I collaborated with an AI coding assistant following the `AGENTS.md` structured guidelines. The AI acted as a mentor, guiding me through the implementation by asking questions and providing hints rather than giving direct solutions. This interactive approach helped solidify my understanding of accessible web development practices and correct React state patterns.

## Author

- Frontend Mentor - [@molinax18](https://www.frontendmentor.io/profile/molinax18)
- GitHub - [@molinax18](https://github.com/molinax18)
