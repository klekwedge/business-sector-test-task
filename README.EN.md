# Test task for the applicant for the position of Frontend developer.

**Вы также можете прочитать этот README на [русском](https://github.com/klekwedge/business-sector-test-task/blob/main/README.md)**

## Table of contents

- [Deployment instructions](#deployment-instructions)
- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Deployment instructions

**To run the project, you need to have [npm](https://nodejs.org/en/) and [git](https://git-scm.com/downloads) installed on your computer**

1. Make a clone of this repository ```git clone https://github.com/klekwedge/business-sector-test-task.git```
2. Install all required npm packages with ```npm i```
3. Run the project with the command ```npm run dev```

## Overview

Implement spa in accordance with the proposed layout, which will present a table with user data and the ability to sort and search.

### General requirements
[API](https://jsonplaceholder.typicode.com/posts)

[Figma layout](https://www.figma.com/file/amcWeZhjaZ0eSyYiSNG6vN/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-%D1%82%D0%B0%D0 %B1%D0%BB%D0%B8%D1%86%D1%8B?node-id=0%3A1)

- The application must work in chrome and firefox.
- It is allowed to use UI frameworks like bootstrap.
- The code should be clean and readable.
- There should be no unreasonable duplication, everything should be distributed by components.
- The code must be formatted in the same style.
- The layout must match the figma layouts.
- The application must be written in react.
- The use of the global state manager redux will be a plus.
- The application must be adapted to various devices.

### Application Description

- When you enter the page, a table with data is displayed.
- Only 10 records are shown on one page of the table.
- Under the table there are elements showing the number of pages in the table.
- Buttons "Back" and "Next" switch pages of the table.
- Switching between pages occurs without reloading.
- Clicking on the column headings sorts the entries (largest to smallest or alphabetically).
- You can enter any value in the search bar, and the table will display the record in which this value is present. Search across all columns.
- The table page should be rendered in the browser's URL.

### Screenshot

![Main screen](./preview/screenshot.png)

### Links

- [Solution URL](https://github.com/klekwedge/business-sector-test-task)
- [Live Site URL](https://klekwedge-business-sector-test-task.vercel.app/)

## My process

### Built with

- React
- React Router
- TypeScript
- Redux Toolkit
- SCSS

### What I learned

## Author

- [Website](https://klekwedge-cv.vercel.app/)
- [Linkedin](https://www.linkedin.com/in/klekwedge/)
- [Facebook](https://www.facebook.com/klekwedge)

