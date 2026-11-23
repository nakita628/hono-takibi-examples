declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/accounts': {
      $get: {
        input: { header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/accounts/password': {
      $post: {
        input: { header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/accounts/payment_methods': {
      $get: {
        input: { header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/accounts/settings': {
      $post: {
        input: { header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/accounts/sign_in': {
      $post: {
        input: { header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/accounts/update_password': {
      $put: {
        input: { header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/addresses/places_autocomplete': {
      $post: {
        input: { header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/addresses/places_details': {
      $post: {
        input: { header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/catchement_areas': {
      $get: {
        input: { header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/catchement_areas/:id': {
      $get: {
        input: { param: { id: number } } & {
          header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/credit_cards': {
      $get: {
        input: { header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/credit_cards/:id': {
      $get: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/products': {
      $get: {
        input: { header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/products/:id': {
      $get: {
        input: { param: { id: number } } & {
          header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/promotional_codes': {
      $get: {
        input: { header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { header: { Accept?: string | undefined } }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/rides/:id': {
      $get: {
        input: { param: { id: number } } & {
          header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/rides/:id/cancel': {
      $get: {
        input: { param: { id: number } } & {
          header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/rides/:id/cancel_fees': {
      $get: {
        input: { param: { id: number } } & {
          header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/rides/:id/estimate': {
      $get: {
        input: { param: { id: number } } & {
          header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/rides/:id/reserve': {
      $post: {
        input: { param: { id: number } } & {
          header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/rides?page=:page&per_page=:per_page': {
      $get: {
        input: { param: { page: number; per_page: number } } & {
          header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { page: string; per_page: string } } & {
          header: { Accept?: string | undefined; 'Accept-Language'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:version': {
      $get: { input: { param: { version: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
