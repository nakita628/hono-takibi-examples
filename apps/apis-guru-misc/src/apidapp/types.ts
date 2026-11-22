type Empty = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/': { $options: { input: {}; output: Empty; outputFormat: 'json'; status: 200 } } } & {
    '/account': {
      $options: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/account/:id': {
      $get: { input: { param: { id: string } }; output: Empty; outputFormat: 'json'; status: 200 }
      $options: {
        input: { param: { id: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/block': {
      $get: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/block/:id': {
      $get: { input: { param: { id: string } }; output: Empty; outputFormat: 'json'; status: 200 }
      $options: {
        input: { param: { id: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/block/:id/transaction': {
      $get: { input: { param: { id: string } }; output: Empty; outputFormat: 'json'; status: 200 }
      $options: {
        input: { param: { id: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/block/:id/transaction/:index': {
      $get: {
        input: { param: { index: string; id: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $options: {
        input: { param: { id: string; index: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/blockchain': {
      $get: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/blockchain/:id': {
      $get: { input: { param: { id: string } }; output: Empty; outputFormat: 'json'; status: 200 }
      $options: {
        input: { param: { id: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contract': {
      $options: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/contract/:id': {
      $get: { input: { param: { id: string } }; output: Empty; outputFormat: 'json'; status: 200 }
      $options: {
        input: { param: { id: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { param: { id: string } }; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & { '/echo': { $options: { input: {}; output: Empty; outputFormat: 'json'; status: 200 } } } & {
    '/erc20': {
      $get: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/erc20/:address': {
      $get: {
        input: { param: { address: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $options: {
        input: { param: { address: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { address: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/key': {
      $get: {
        input: { query: { token?: string | undefined } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $options: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/key/:key': {
      $delete: {
        input: { param: { key: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $options: {
        input: { param: { key: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/transaction': {
      $options: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/transaction/:hash': {
      $get: { input: { param: { hash: string } }; output: Empty; outputFormat: 'json'; status: 200 }
      $options: {
        input: { param: { hash: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/transaction/:hash/receipt': {
      $get: { input: { param: { hash: string } }; output: Empty; outputFormat: 'json'; status: 200 }
      $options: {
        input: { param: { hash: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/version': {
      $get: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/wallet': {
      $get: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/wallet/account': {
      $get: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/wallet/account/:id': {
      $get: { input: { param: { id: string } }; output: Empty; outputFormat: 'json'; status: 200 }
      $options: {
        input: { param: { id: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wallet/account/:id/contract': {
      $post: { input: { param: { id: string } }; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/wallet/account/:id/erc20': {
      $post: { input: { param: { id: string } }; output: Empty; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/wallet/account/:id/pay': {
      $options: {
        input: { param: { id: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { param: { id: string } }; output: Empty; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
