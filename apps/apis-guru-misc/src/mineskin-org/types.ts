type TextureInfo = {
  signature?: string | undefined
  url?: string | undefined
  value?: string | undefined
}
type SkinData = { texture?: TextureInfo | undefined; uuid?: string | undefined }
type SkinInfo = {
  account?: number | undefined
  accountId?: number | undefined
  data: SkinData
  duration?: number | undefined
  id: number
  idStr?: string | undefined
  model: 'slim' | 'steve' | 'unknown'
  name?: string | undefined
  private?: boolean | undefined
  server?: string | undefined
  timestamp?: number | undefined
  uuid?: string | undefined
  variant?: 'classic' | 'slim' | undefined
  views?: number | undefined
}
type PartialSkinInfo = { id: number; name: string; time: number; url: string }
type UserValidation = { name?: string | undefined; uuid?: string | undefined; valid: boolean }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/generate/upload': {
      $post:
        | {
            input: { header: { 'User-Agent': string } } & {
              json: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                file?: File | undefined
              }
            } & {
              form: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                file?: File | undefined
              }
            }
            output: {
              account?: number | undefined
              accountId?: number | undefined
              data: SkinData
              duration?: number | undefined
              id: number
              idStr?: string | undefined
              model: 'slim' | 'steve' | 'unknown'
              name?: string | undefined
              private?: boolean | undefined
              server?: string | undefined
              timestamp?: number | undefined
              uuid?: string | undefined
              variant?: 'classic' | 'slim' | undefined
              views?: number | undefined
              duplicate?: boolean | undefined
              nextRequest?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'User-Agent': string } } & {
              json: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                file?: File | undefined
              }
            } & {
              form: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                file?: File | undefined
              }
            }
            output: { error: string; errorCode?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'User-Agent': string } } & {
              json: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                file?: File | undefined
              }
            } & {
              form: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                file?: File | undefined
              }
            }
            output: { delay?: number | undefined; error: string; nextRequest?: number | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'User-Agent': string } } & {
              json: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                file?: File | undefined
              }
            } & {
              form: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                file?: File | undefined
              }
            }
            output: { error: string; errorCode?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/generate/url': {
      $post:
        | {
            input: { header: { 'User-Agent': string } } & {
              json: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                url?: string | undefined
              }
            }
            output: {
              account?: number | undefined
              accountId?: number | undefined
              data: SkinData
              duration?: number | undefined
              id: number
              idStr?: string | undefined
              model: 'slim' | 'steve' | 'unknown'
              name?: string | undefined
              private?: boolean | undefined
              server?: string | undefined
              timestamp?: number | undefined
              uuid?: string | undefined
              variant?: 'classic' | 'slim' | undefined
              views?: number | undefined
              duplicate?: boolean | undefined
              nextRequest?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'User-Agent': string } } & {
              json: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                url?: string | undefined
              }
            }
            output: { error: string; errorCode?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'User-Agent': string } } & {
              json: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                url?: string | undefined
              }
            }
            output: { delay?: number | undefined; error: string; nextRequest?: number | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'User-Agent': string } } & {
              json: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                url?: string | undefined
              }
            }
            output: { error: string; errorCode?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/generate/user': {
      $post:
        | {
            input: { header: { 'User-Agent': string } } & {
              json: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                uuid?: string | undefined
              }
            }
            output: {
              account?: number | undefined
              accountId?: number | undefined
              data: SkinData
              duration?: number | undefined
              id: number
              idStr?: string | undefined
              model: 'slim' | 'steve' | 'unknown'
              name?: string | undefined
              private?: boolean | undefined
              server?: string | undefined
              timestamp?: number | undefined
              uuid?: string | undefined
              variant?: 'classic' | 'slim' | undefined
              views?: number | undefined
              duplicate?: boolean | undefined
              nextRequest?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'User-Agent': string } } & {
              json: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                uuid?: string | undefined
              }
            }
            output: { error: string; errorCode?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'User-Agent': string } } & {
              json: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                uuid?: string | undefined
              }
            }
            output: { delay?: number | undefined; error: string; nextRequest?: number | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'User-Agent': string } } & {
              json: {
                model?: 'steve' | 'slim' | undefined
                name?: string | undefined
                variant?: 'classic' | 'slim' | undefined
                visibility?: 0 | 1 | undefined
                uuid?: string | undefined
              }
            }
            output: { error: string; errorCode?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/get/delay': {
      $get: {
        input: { header: { 'User-Agent': string } }
        output: {
          delay?: number | undefined
          next?: number | undefined
          nextRelative?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/get/id/:id': {
      $get: {
        input: { param: { id: number } } & { header: { 'User-Agent': string } }
        output: SkinInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/get/list/:page': {
      $get: {
        input: { param: { page: number } } & { header: { 'User-Agent': string } }
        output: {
          filter?: string | undefined
          page: {
            amount?: number | undefined
            index?: number | undefined
            total?: number | undefined
          }
          skins: PartialSkinInfo[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/get/uuid/:uuid': {
      $get: {
        input: { param: { uuid: string } } & { header: { 'User-Agent': string } }
        output: SkinInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/validate/name/:name': {
      $get: {
        input: { param: { name: string } } & { header: { 'User-Agent': string } }
        output: UserValidation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/validate/uuid/:uuid': {
      $get: {
        input: { param: { uuid: string } } & { header: { 'User-Agent': string } }
        output: UserValidation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
