declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/status/200': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/201': { $get: { input: {}; output: {}; outputFormat: string; status: 201 } }
  } & { '/status/202': { $get: { input: {}; output: {}; outputFormat: string; status: 202 } } } & {
    '/status/203': { $get: { input: {}; output: {}; outputFormat: string; status: 203 } }
  } & { '/status/204': { $get: { input: {}; output: {}; outputFormat: string; status: 204 } } } & {
    '/status/205': { $get: { input: {}; output: {}; outputFormat: string; status: 205 } }
  } & { '/status/206': { $get: { input: {}; output: {}; outputFormat: string; status: 206 } } } & {
    '/status/207': { $get: { input: {}; output: {}; outputFormat: string; status: 207 } }
  } & { '/status/208': { $get: { input: {}; output: {}; outputFormat: string; status: 208 } } } & {
    '/status/218': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/226': { $get: { input: {}; output: {}; outputFormat: string; status: 226 } } } & {
    '/status/300': { $get: { input: {}; output: {}; outputFormat: string; status: 300 } }
  } & { '/status/301': { $get: { input: {}; output: {}; outputFormat: string; status: 301 } } } & {
    '/status/302': { $get: { input: {}; output: {}; outputFormat: string; status: 302 } }
  } & { '/status/303': { $get: { input: {}; output: {}; outputFormat: string; status: 303 } } } & {
    '/status/304': { $get: { input: {}; output: {}; outputFormat: string; status: 304 } }
  } & { '/status/305': { $get: { input: {}; output: {}; outputFormat: string; status: 305 } } } & {
    '/status/306': { $get: { input: {}; output: {}; outputFormat: string; status: 306 } }
  } & { '/status/307': { $get: { input: {}; output: {}; outputFormat: string; status: 307 } } } & {
    '/status/308': { $get: { input: {}; output: {}; outputFormat: string; status: 308 } }
  } & { '/status/400': { $get: { input: {}; output: {}; outputFormat: string; status: 400 } } } & {
    '/status/401': { $get: { input: {}; output: {}; outputFormat: string; status: 401 } }
  } & { '/status/402': { $get: { input: {}; output: {}; outputFormat: string; status: 402 } } } & {
    '/status/403': { $get: { input: {}; output: {}; outputFormat: string; status: 403 } }
  } & { '/status/404': { $get: { input: {}; output: {}; outputFormat: string; status: 404 } } } & {
    '/status/405': { $get: { input: {}; output: {}; outputFormat: string; status: 405 } }
  } & { '/status/406': { $get: { input: {}; output: {}; outputFormat: string; status: 406 } } } & {
    '/status/407': { $get: { input: {}; output: {}; outputFormat: string; status: 407 } }
  } & { '/status/408': { $get: { input: {}; output: {}; outputFormat: string; status: 408 } } } & {
    '/status/409': { $get: { input: {}; output: {}; outputFormat: string; status: 409 } }
  } & { '/status/410': { $get: { input: {}; output: {}; outputFormat: string; status: 410 } } } & {
    '/status/411': { $get: { input: {}; output: {}; outputFormat: string; status: 411 } }
  } & { '/status/412': { $get: { input: {}; output: {}; outputFormat: string; status: 412 } } } & {
    '/status/413': { $get: { input: {}; output: {}; outputFormat: string; status: 413 } }
  } & { '/status/414': { $get: { input: {}; output: {}; outputFormat: string; status: 414 } } } & {
    '/status/415': { $get: { input: {}; output: {}; outputFormat: string; status: 415 } }
  } & { '/status/416': { $get: { input: {}; output: {}; outputFormat: string; status: 416 } } } & {
    '/status/417': { $get: { input: {}; output: {}; outputFormat: string; status: 417 } }
  } & { '/status/418': { $get: { input: {}; output: {}; outputFormat: string; status: 418 } } } & {
    '/status/419': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/420': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/421': { $get: { input: {}; output: {}; outputFormat: string; status: 421 } }
  } & { '/status/422': { $get: { input: {}; output: {}; outputFormat: string; status: 422 } } } & {
    '/status/423': { $get: { input: {}; output: {}; outputFormat: string; status: 423 } }
  } & { '/status/424': { $get: { input: {}; output: {}; outputFormat: string; status: 424 } } } & {
    '/status/425': { $get: { input: {}; output: {}; outputFormat: string; status: 425 } }
  } & { '/status/426': { $get: { input: {}; output: {}; outputFormat: string; status: 426 } } } & {
    '/status/428': { $get: { input: {}; output: {}; outputFormat: string; status: 428 } }
  } & { '/status/429': { $get: { input: {}; output: {}; outputFormat: string; status: 429 } } } & {
    '/status/430': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/431': { $get: { input: {}; output: {}; outputFormat: string; status: 431 } } } & {
    '/status/440': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/444': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/449': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/450': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/451': { $get: { input: {}; output: {}; outputFormat: string; status: 451 } }
  } & { '/status/494': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/495': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/496': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/497': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/498': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/499': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/500': { $get: { input: {}; output: {}; outputFormat: string; status: 500 } } } & {
    '/status/501': { $get: { input: {}; output: {}; outputFormat: string; status: 501 } }
  } & { '/status/502': { $get: { input: {}; output: {}; outputFormat: string; status: 502 } } } & {
    '/status/503': { $get: { input: {}; output: {}; outputFormat: string; status: 503 } }
  } & { '/status/504': { $get: { input: {}; output: {}; outputFormat: string; status: 504 } } } & {
    '/status/505': { $get: { input: {}; output: {}; outputFormat: string; status: 505 } }
  } & { '/status/506': { $get: { input: {}; output: {}; outputFormat: string; status: 506 } } } & {
    '/status/507': { $get: { input: {}; output: {}; outputFormat: string; status: 507 } }
  } & { '/status/508': { $get: { input: {}; output: {}; outputFormat: string; status: 508 } } } & {
    '/status/509': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/510': { $get: { input: {}; output: {}; outputFormat: string; status: 510 } } } & {
    '/status/511': { $get: { input: {}; output: {}; outputFormat: string; status: 511 } }
  } & { '/status/520': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/512': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/522': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/523': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/524': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/525': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/526': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/527': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/529': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/530': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/status/598': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/status/100': { $get: { input: {}; output: {}; outputFormat: string; status: 100 } }
  } & { '/status/101': { $get: { input: {}; output: {}; outputFormat: string; status: 101 } } } & {
    '/status/102': { $get: { input: {}; output: {}; outputFormat: string; status: 102 } }
  } & { '/status/103': { $get: { input: {}; output: {}; outputFormat: string; status: 103 } } },
  '/'
>
export default routes
