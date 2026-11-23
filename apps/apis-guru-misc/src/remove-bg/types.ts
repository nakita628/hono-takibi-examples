type AuthFailed = { errors?: { title?: string | undefined }[] | undefined }
type RateLimit = { errors?: { title?: string | undefined }[] | undefined }
type ImprovementProgramJson = {
  image_file_b64?: string | undefined
  image_filename?: string | undefined
  image_url?: string | undefined
  tag?: string | undefined
}
type ImprovementProgramMultipart = {
  image_file?: File | undefined
  image_file_b64?: string | undefined
  image_filename?: string | undefined
  image_url?: string | undefined
  tag?: string | undefined
}
type ImprovementProgramJsonResponse = { id?: string | undefined }
type RemoveBgJson = {
  add_shadow?: boolean | undefined
  bg_color?: string | undefined
  bg_image_url?: string | undefined
  channels?: 'rgba' | 'alpha' | undefined
  crop?: boolean | undefined
  crop_margin?: string | undefined
  format?: 'auto' | 'png' | 'jpg' | 'zip' | undefined
  image_file_b64?: string | undefined
  image_url?: string | undefined
  position?: string | undefined
  roi?: string | undefined
  scale?: string | undefined
  semitransparency?: boolean | undefined
  size?: 'preview' | 'full' | 'auto' | undefined
  type?: 'auto' | 'person' | 'product' | 'car' | undefined
  type_level?: 'none' | 1 | 2 | 'latest' | undefined
}
type RemoveBgMultipart = {
  add_shadow?: boolean | undefined
  bg_color?: string | undefined
  bg_image_file?: File | undefined
  bg_image_url?: string | undefined
  channels?: 'rgba' | 'alpha' | undefined
  crop?: boolean | undefined
  crop_margin?: string | undefined
  format?: 'auto' | 'png' | 'jpg' | 'zip' | undefined
  image_file?: File | undefined
  image_file_b64?: string | undefined
  image_url?: string | undefined
  position?: string | undefined
  roi?: string | undefined
  scale?: string | undefined
  semitransparency?: boolean | undefined
  size?: 'preview' | 'full' | 'auto' | undefined
  type?: 'auto' | 'person' | 'product' | 'car' | undefined
  type_level?: 'none' | 1 | 2 | 'latest' | undefined
}
type RemoveBgJsonResponse = {
  data?:
    | {
        foreground_height?: number | undefined
        foreground_left?: number | undefined
        foreground_top?: number | undefined
        foreground_width?: number | undefined
        result_b64?: string | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $get:
        | {
            input: {}
            output: {
              data?:
                | {
                    attributes?:
                      | {
                          api?:
                            | { free_calls?: number | undefined; sizes?: string | undefined }
                            | undefined
                          credits?:
                            | {
                                enterprise?: number | undefined
                                payg?: number | undefined
                                subscription?: number | undefined
                                total?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: AuthFailed; outputFormat: 'text'; status: 403 }
        | { input: {}; output: RateLimit; outputFormat: 'text'; status: 429 }
    }
  } & {
    '/improve': {
      $post:
        | {
            input: { json: ImprovementProgramJson } & {
              form: ImprovementProgramJson | ImprovementProgramMultipart
            }
            output: ImprovementProgramJsonResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ImprovementProgramJson } & {
              form: ImprovementProgramJson | ImprovementProgramMultipart
            }
            output: { errors?: { title?: string | undefined }[] | undefined }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: ImprovementProgramJson } & {
              form: ImprovementProgramJson | ImprovementProgramMultipart
            }
            output: AuthFailed
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: ImprovementProgramJson } & {
              form: ImprovementProgramJson | ImprovementProgramMultipart
            }
            output: RateLimit
            outputFormat: 'text'
            status: 429
          }
    }
  } & {
    '/removebg': {
      $post:
        | {
            input: { json: RemoveBgJson } & { form: RemoveBgJson | RemoveBgMultipart }
            output: RemoveBgJsonResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RemoveBgJson } & { form: RemoveBgJson | RemoveBgMultipart }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: RemoveBgJson } & { form: RemoveBgJson | RemoveBgMultipart }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    detail?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: RemoveBgJson } & { form: RemoveBgJson | RemoveBgMultipart }
            output: { errors?: { title?: string | undefined }[] | undefined }
            outputFormat: 'text'
            status: 402
          }
        | {
            input: { json: RemoveBgJson } & { form: RemoveBgJson | RemoveBgMultipart }
            output: AuthFailed
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { json: RemoveBgJson } & { form: RemoveBgJson | RemoveBgMultipart }
            output: RateLimit
            outputFormat: 'text'
            status: 429
          }
    }
  },
  '/'
>
export default routes
