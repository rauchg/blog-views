# blog-views

Microservice that logs views for the realtime counters
of [rauchg's blog](https://github.com/rauchg/blog), and prevents
abuse by logging IPs.

It's [aliased](https://zeit.co/blog/now-alias) to `https://rauchg-blog-views.now.sh`

## How to use

You must populate `service-account.json` file first, which you can download
from the [Firebase accounts tab](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk).

### Development

```
npm start
```

### Deployment

Install [now](https://zeit.co/download) and run:

```
now 
```

## API

### GET /?id=$id

Each view is logged by `/?id=the-post-id`.
