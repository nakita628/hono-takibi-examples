type Quote = {
  author?: string | undefined
  quote: string
  tags?: string[] | undefined
  id: string
  image?: string | undefined
  length?: number | undefined
}
type QuoteResponse = {
  contents?: { quotes?: Quote[] | undefined } | undefined
  success?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/qod': {
      $get:
        | {
            input: { query: { category?: string | undefined; language?: string | undefined } }
            output: QuoteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { category?: string | undefined; language?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/qod/categories': {
      $get:
        | {
            input: { query: { language?: string | undefined; detailed?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { language?: string | undefined; detailed?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/qod/languages': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/qshow': {
      $delete:
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: {
              query: {
                id: string
                title?: string | undefined
                description?: string | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                id: string
                title?: string | undefined
                description?: string | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                id: string
                title?: string | undefined
                description?: string | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: {
              query: {
                title: string
                description?: string | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                title: string
                description?: string | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/qshow/list': {
      $get:
        | {
            input: { query: { start?: number | undefined; public?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { start?: number | undefined; public?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/qshow/quotes': {
      $get:
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/qshow/quotes/add': {
      $post:
        | {
            input: { query: { id: string; quoteid: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { id: string; quoteid: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id: string; quoteid: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/qshow/quotes/remove': {
      $post:
        | {
            input: { query: { id: string; quoteid: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { id: string; quoteid: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id: string; quoteid: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/quote': {
      $delete:
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { query: { id?: string | undefined } }
            output: QuoteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $patch:
        | {
            input: {
              query: {
                id: string
                quote?: string | undefined
                author?: string | undefined
                language?: string | undefined
                tags?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                id: string
                quote?: string | undefined
                author?: string | undefined
                language?: string | undefined
                tags?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: {
              query: {
                quote: string
                author?: string | undefined
                tags?: string | undefined
                language?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                quote: string
                author?: string | undefined
                tags?: string | undefined
                language?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: {
              query: {
                quote: string
                author?: string | undefined
                tags?: string | undefined
                language?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                quote: string
                author?: string | undefined
                tags?: string | undefined
                language?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/quote/authors/popular': {
      $get:
        | {
            input: {
              query: {
                language?: string | undefined
                detailed?: boolean | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                language?: string | undefined
                detailed?: boolean | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/quote/authors/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                language?: string | undefined
                detailed?: boolean | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                language?: string | undefined
                detailed?: boolean | undefined
                start?: number | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/quote/categories/popular': {
      $get: {
        input: { query: { start?: number | undefined; limit?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/quote/categories/search': {
      $get: {
        input: {
          query: {
            query?: string | undefined
            start?: number | undefined
            limit?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/quote/dislike': {
      $delete:
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/quote/image': {
      $delete:
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { query: { id: string; binary?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { id: string; binary?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id: string; binary?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: {
              query: {
                quote_id: string
                bgimage_id?: string | undefined
                bg_color?: string | undefined
                font_id?: string | undefined
                text_color?: string | undefined
                text_size?: string | undefined
                halign?: string | undefined
                valign?: string | undefined
                width?: number | undefined
                height?: number | undefined
                branding?: boolean | undefined
                include_transparent_layer?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                quote_id: string
                bgimage_id?: string | undefined
                bg_color?: string | undefined
                font_id?: string | undefined
                text_color?: string | undefined
                text_size?: string | undefined
                halign?: string | undefined
                valign?: string | undefined
                width?: number | undefined
                height?: number | undefined
                branding?: boolean | undefined
                include_transparent_layer?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                quote_id: string
                bgimage_id?: string | undefined
                bg_color?: string | undefined
                font_id?: string | undefined
                text_color?: string | undefined
                text_size?: string | undefined
                halign?: string | undefined
                valign?: string | undefined
                width?: number | undefined
                height?: number | undefined
                branding?: boolean | undefined
                include_transparent_layer?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/quote/image/background': {
      $delete:
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { form: { image: File; tags?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { form: { image: File; tags?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/quote/image/background/list': {
      $get:
        | {
            input: { query: { start?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { start?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { start?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/quote/image/background/search': {
      $get:
        | {
            input: { query: { query?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { query?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { query?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/quote/image/background/tags/add': {
      $post:
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/quote/image/background/tags/remove': {
      $post:
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/quote/image/font': {
      $delete:
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { form: { font: File; tags?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { form: { font: File; tags?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/quote/image/font/list': {
      $get:
        | {
            input: { query: { start?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { start?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { start?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/quote/image/font/search': {
      $get:
        | {
            input: { query: { query?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { query?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { query?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/quote/image/font/tags/add': {
      $post:
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/quote/image/font/tags/remove': {
      $post:
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/quote/image/search': {
      $get:
        | {
            input: {
              query: {
                category?: string | undefined
                author?: string | undefined
                private?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                category?: string | undefined
                author?: string | undefined
                private?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                category?: string | undefined
                author?: string | undefined
                private?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/quote/like': {
      $delete:
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { quote_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/quote/list': {
      $get:
        | {
            input: { query: { start?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { start?: number | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/quote/random': {
      $get:
        | {
            input: { query: { language?: string | undefined; limit?: number | undefined } }
            output: QuoteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { language?: string | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/quote/search': {
      $get:
        | {
            input: {
              query: {
                category?: string | undefined
                author?: string | undefined
                minlength?: number | undefined
                maxlength?: number | undefined
                query?: string | undefined
                private?: boolean | undefined
                language?: string | undefined
                limit?: number | undefined
                sfw?: boolean | undefined
              }
            }
            output: QuoteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                category?: string | undefined
                author?: string | undefined
                minlength?: number | undefined
                maxlength?: number | undefined
                query?: string | undefined
                private?: boolean | undefined
                language?: string | undefined
                limit?: number | undefined
                sfw?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                category?: string | undefined
                author?: string | undefined
                minlength?: number | undefined
                maxlength?: number | undefined
                query?: string | undefined
                private?: boolean | undefined
                language?: string | undefined
                limit?: number | undefined
                sfw?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/quote/tags/add': {
      $post:
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/quote/tags/remove': {
      $post:
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { id: string; tags: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
