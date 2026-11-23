type Restrictions = {
  maxCaloriesPerSlice?: number | undefined
  mustBeVegetarian?: boolean | undefined
  excludedIngredients?: string[] | undefined
  excludedTools?: string[] | undefined
  maxNumberOfToppings?: number | undefined
  minNumberOfToppings?: number | undefined
  customName?: string | undefined
}
type Dough = {
  id?: bigint | undefined
  name?: string | undefined
  caloriesPerSlice?: number | undefined
}
type Ingredient = {
  id?: bigint | undefined
  name?: string | undefined
  caloriesPerSlice?: number | undefined
  vegetarian?: boolean | undefined
}
type Pizza = {
  id?: bigint | undefined
  name?: string | undefined
  dough?: Dough | undefined
  ingredients?: Ingredient[] | undefined
  tool?: string | undefined
}
type PizzaRecommendation = {
  pizza?: Pizza | undefined
  calories?: number | undefined
  vegetarian?: boolean | undefined
}
type Rating = { id?: bigint | undefined; stars: number; pizza_id: bigint }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/pizza': {
      $post:
        | {
            input: { json: Restrictions }
            output: PizzaRecommendation
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Restrictions }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Restrictions }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/pizza/:id': {
      $get:
        | { input: { param: { id: bigint } }; output: Pizza; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/ingredients/:type': {
      $get:
        | {
            input: { param: { type: 'olive_oil' | 'tomato' | 'mozzarella' | 'topping' } }
            output: { ingredients?: Ingredient[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: 'olive_oil' | 'tomato' | 'mozzarella' | 'topping' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { type: 'olive_oil' | 'tomato' | 'mozzarella' | 'topping' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { type: 'olive_oil' | 'tomato' | 'mozzarella' | 'topping' } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/doughs': {
      $get:
        | { input: {}; output: { doughs?: Dough[] | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/tools': {
      $get:
        | { input: {}; output: { tools?: string[] | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/ratings': {
      $post:
        | { input: { json: Rating }; output: Rating; outputFormat: 'json'; status: 201 }
        | { input: { json: Rating }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Rating }; output: {}; outputFormat: string; status: 401 }
      $get:
        | {
            input: {}
            output: { ratings?: Rating[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/ratings/:id': {
      $get:
        | { input: { param: { id: bigint } }; output: Rating; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: bigint } } & { json: Rating }
            output: Rating
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: Rating }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: Rating }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: Rating }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { id: bigint } } & { json: Rating }
            output: Rating
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { json: Rating }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { json: Rating }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { json: Rating }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/users': {
      $post:
        | {
            input: { json: { username: string; password: string } }
            output: { id?: bigint | undefined; username?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { username: string; password: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/users/token/login': {
      $post:
        | {
            input: { query: { set_cookie?: boolean | undefined } } & {
              json: { username: string; password: string; csrf?: string | undefined }
            }
            output: { token?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { set_cookie?: boolean | undefined } } & {
              json: { username: string; password: string; csrf?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/users/token/logout': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api/admin/login': {
      $post:
        | {
            input: { query: { user: string; password: string } }
            output: { token?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { user: string; password: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { user: string; password: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/csrf-token': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/quotes': {
      $get:
        | {
            input: {}
            output: { quotes?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/names': {
      $get:
        | { input: {}; output: { names?: string[] | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/adjectives': {
      $get:
        | {
            input: {}
            output: { adjectives?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/config': {
      $get:
        | { input: {}; output: { [x: string]: string }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/ready': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/healthz': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & { '/metrics': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } } & {
    '/api/status/:status': {
      $get: { input: { param: { status: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/bytes/:n': {
      $get: { input: { param: { n: number } }; output: File; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/delay/:delay': {
      $get: { input: { param: { delay: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/api/get': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/api/delete': { $delete: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/post': { $post: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & { '/api/put': { $put: { input: {}; output: string; outputFormat: 'text'; status: 200 } } } & {
    '/api/patch': { $patch: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/cookies': {
      $get: {
        input: {}
        output: { cookies?: { [x: string]: string } | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { cookieName?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/headers': {
      $get: {
        input: {}
        output: { headers?: { [x: string]: string } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/basic-auth/:username/:password': {
      $get: {
        input: { param: { username: string; password: string } }
        output: {
          user?: string | undefined
          password?: string | undefined
          authenticated?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/json': {
      $get: {
        input: { query: { param?: string | undefined } }
        output: { [x: string]: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/xml': {
      $get: {
        input: { query: { param?: string | undefined } }
        output: {
          params?:
            | { key?: string | undefined; value?: string | undefined; index?: number | undefined }[]
            | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
