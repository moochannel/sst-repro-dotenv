# Reproduction Repository

Reproduce the problem that SST v2.0.23 does not read the `.env.<stage>.local` file.

## Setup

Clone this repository into local.

```sh
$ git clone https://github.com/moochannel/sst-repro-dotenv
$ cd sst-repro-dotenv
$ yarn
```

- The SST version is fixed to 2.0.23 in the `package.json`.
- `.env*.local` files are left off the ignored list intentionally.

## Reproduce

On building MyStack, the value of the `KEY_A` environment variable is output with console.log().

```sh
$ yarn build --stage=develop
yarn run v1.22.19
$ sst build --stage=develop
The value of environment variable KEY_A: .env.develop

✔  Built: 1 stack to .sst\dist
Done in 5.27s.
```

Then update SST to latest (2.0.26 in my case) and build again.

```sh
$ yarn update sst
$ yarn
$ yarn build --stage=develop
yarn run v1.22.19
$ sst build --stage=develop
The value of environment variable KEY_A: .env.develop.local

✔  Built: 1 stack to .sst\dist
Done in 4.83s.
```
