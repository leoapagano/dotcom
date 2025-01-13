# leoapagano.com

Simple website with contact form and resume. All other pages redirect to my GitHub profile (for now).

Site layout:

```
404.html
contact.html
index.html
resume.pdf
```

`404.html` simply redirects to `index.html`, which in turn redirects to [my GitHub profile](https://github.com/leoapagano). `contact.html` is a Cloudflare Turnstile-protected contact form, and `resume.pdf` is self-explanatory.

## Building

To get started, install dependencies:

```shell
git clone https://github.com/leoapagano/dotcom
cd dotcom
npm install
```

To preview the site as it is, run the following command at the base of the repo:

```shell
npm run dev
```