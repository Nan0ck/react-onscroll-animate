
# react-onscroll-animate
![GitHub package.json version](https://img.shields.io/github/package-json/v/nan0ck/react-onscroll-animate)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

React components to animate elements on scroll based in pure scroll scroll percentage, this means that the animation will play from a range of scroll %

## Installation

Install react-onscroll-animate

```bash
 npm install react-onscroll-animate --save
```
or 
```bash
 yarn add react-onscroll-animate 
```
## Most Simple Use:
```bash
import { Show, Fade } from 'react-onscroll-animate'

/* 
the animation is going to start when
the page has been scrolled 50%, 
and its gonna take another 50% of scroll to end 
*/
<Show {...{ startAndEnd: [50, 100] }}>
    <div>FadeIn effect from 50% to 100%</div>
</Show>

/* 
the animation is going to start when
the page has been scrolled 50%, 
and its gonna take another 10% of scroll to end 
*/
<Fade {...{ startAndEnd: [50, 60] }}>
    <div>FadeOut effecto from 50% to 60%</div>
</Fade>
```

## To Do

- [ x ]  Add usePagePercentage Hook
- [ ]  Add Translate X animation
- [ ]  Add Translate Y animation 
- [ ]  Add Scale Y animation 
- [ ]  Add Height animation 
- [ ]  Add Width  animation 

## Authors

- [@Nan0ck](https://github.com/Nan0ck)

