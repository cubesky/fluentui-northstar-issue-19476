# FluentUI NorthStar Issue 19476

First, `yarn install`.

## Develop Mode

Run Gatsby in Develop Mode

```sh
yarn run develop
```

And then open `http://localhost:8000`, you can find that css is correct.

## Build

Run 

```sh
yarn run build
yarn run serve
```

And open `http://localhost:9000`, you can see css is missing, all component doesn't render with style.

Open `Developer Tools`, in `<head>` tag, there is a `style` tag with class `ssr-css` is empty. This tag is set from `gatsby-ssr.js`, it doesn't render any css into it.