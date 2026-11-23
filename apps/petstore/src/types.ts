type Category = { id?: bigint | undefined; name?: string | undefined }
type Tag = { id?: bigint | undefined; name?: string | undefined }
type Pet = {
  id?: bigint | undefined
  name: string
  category?: Category | undefined
  photoUrls: string[]
  tags?: Tag[] | undefined
  status?: 'available' | 'pending' | 'sold' | undefined
}
type ApiResponse = {
  code?: number | undefined
  type?: string | undefined
  message?: string | undefined
}
type Order = {
  id?: bigint | undefined
  petId?: bigint | undefined
  quantity?: number | undefined
  shipDate?: string | undefined
  status?: 'placed' | 'approved' | 'delivered' | undefined
  complete?: boolean | undefined
}
type User = {
  id?: bigint | undefined
  username?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  email?: string | undefined
  password?: string | undefined
  phone?: string | undefined
  userStatus?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/pet': {
      $put:
        | { input: { json: Pet } & { form: Pet }; output: Pet; outputFormat: 'json'; status: 200 }
        | { input: { json: Pet } & { form: Pet }; output: Pet; outputFormat: 'text'; status: 200 }
        | { input: { json: Pet } & { form: Pet }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Pet } & { form: Pet }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: Pet } & { form: Pet }; output: {}; outputFormat: string; status: 422 }
        | { input: { json: Pet } & { form: Pet }; output: {}; outputFormat: string; status: 200 }
      $post:
        | { input: { json: Pet } & { form: Pet }; output: Pet; outputFormat: 'json'; status: 200 }
        | { input: { json: Pet } & { form: Pet }; output: Pet; outputFormat: 'text'; status: 200 }
        | { input: { json: Pet } & { form: Pet }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Pet } & { form: Pet }; output: {}; outputFormat: string; status: 422 }
        | { input: { json: Pet } & { form: Pet }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/pet/findByStatus': {
      $get:
        | {
            input: { query: { status: 'available' | 'pending' | 'sold' } }
            output: Pet[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { status: 'available' | 'pending' | 'sold' } }
            output: Pet[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { status: 'available' | 'pending' | 'sold' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { status: 'available' | 'pending' | 'sold' } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/pet/findByTags': {
      $get:
        | { input: { query: { tags: string[] } }; output: Pet[]; outputFormat: 'json'; status: 200 }
        | { input: { query: { tags: string[] } }; output: Pet[]; outputFormat: 'text'; status: 200 }
        | { input: { query: { tags: string[] } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { tags: string[] } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/pet/:petId': {
      $get:
        | { input: { param: { petId: bigint } }; output: Pet; outputFormat: 'json'; status: 200 }
        | { input: { param: { petId: bigint } }; output: Pet; outputFormat: 'text'; status: 200 }
        | { input: { param: { petId: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { petId: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { petId: bigint } }; output: {}; outputFormat: string; status: 200 }
      $post:
        | {
            input: { param: { petId: bigint } } & {
              query: { name?: string | undefined; status?: string | undefined }
            }
            output: Pet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { petId: bigint } } & {
              query: { name?: string | undefined; status?: string | undefined }
            }
            output: Pet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { petId: bigint } } & {
              query: { name?: string | undefined; status?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { petId: bigint } } & {
              query: { name?: string | undefined; status?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $delete:
        | {
            input: { param: { petId: bigint } } & { header: { api_key?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { petId: bigint } } & { header: { api_key?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { petId: bigint } } & { header: { api_key?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/pet/:petId/uploadImage': {
      $post:
        | {
            input: { param: { petId: bigint } } & {
              query: { additionalMetadata?: string | undefined }
            } & { json: File }
            output: ApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { petId: bigint } } & {
              query: { additionalMetadata?: string | undefined }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { petId: bigint } } & {
              query: { additionalMetadata?: string | undefined }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { petId: bigint } } & {
              query: { additionalMetadata?: string | undefined }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/store/inventory': {
      $get:
        | { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/store/order': {
      $post:
        | {
            input: { json: Order } & { form: Order }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: Order } & { form: Order }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: Order } & { form: Order }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: Order } & { form: Order }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/store/order/:orderId': {
      $get:
        | {
            input: { param: { orderId: bigint } }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: bigint } }
            output: Order
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { orderId: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { orderId: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { orderId: bigint } }; output: {}; outputFormat: string; status: 200 }
      $delete:
        | { input: { param: { orderId: bigint } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { orderId: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { orderId: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { orderId: bigint } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user': {
      $post:
        | {
            input: { json: User } & { form: User }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: User } & { form: User }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: User } & { form: User }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/createWithList': {
      $post:
        | { input: { json: User[] }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { json: User[] }; output: User; outputFormat: 'text'; status: 200 }
        | { input: { json: User[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/login': {
      $get:
        | {
            input: { query: { username?: string | undefined; password?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { username?: string | undefined; password?: string | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { username?: string | undefined; password?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { username?: string | undefined; password?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/user/logout': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/user/:username': {
      $get:
        | {
            input: { param: { username: string } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | {
            input: { param: { username: string } } & { json: User } & { form: User }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { username: string } } & { json: User } & { form: User }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { username: string } } & { json: User } & { form: User }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { username: string } } & { json: User } & { form: User }
            output: {}
            outputFormat: string
            status: 200
          }
      $delete:
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
