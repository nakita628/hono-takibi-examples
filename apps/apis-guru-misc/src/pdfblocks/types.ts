declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/add_password': {
      $post:
        | {
            input: {
              form: {
                encryption_algorithm?: 'AES-128' | 'AES-256' | undefined
                file: File
                password: string
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                encryption_algorithm?: 'AES-128' | 'AES-256' | undefined
                file: File
                password: string
              }
            }
            output: {
              errors?: { [x: string]: unknown } | undefined
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/add_restrictions': {
      $post:
        | {
            input: {
              form: {
                allow_accessibility?: boolean | undefined
                allow_assemble_document?: boolean | undefined
                allow_change_content?: boolean | undefined
                allow_comment_and_fill_form?: boolean | undefined
                allow_copy_content?: boolean | undefined
                allow_fill_form?: boolean | undefined
                allow_print?: boolean | undefined
                allow_print_high_resolution?: boolean | undefined
                encryption_algorithm?: 'AES-128' | 'AES-256' | undefined
                file: File
                owner_password: string
                user_password?: string | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                allow_accessibility?: boolean | undefined
                allow_assemble_document?: boolean | undefined
                allow_change_content?: boolean | undefined
                allow_comment_and_fill_form?: boolean | undefined
                allow_copy_content?: boolean | undefined
                allow_fill_form?: boolean | undefined
                allow_print?: boolean | undefined
                allow_print_high_resolution?: boolean | undefined
                encryption_algorithm?: 'AES-128' | 'AES-256' | undefined
                file: File
                owner_password: string
                user_password?: string | undefined
              }
            }
            output: {
              errors?: { [x: string]: unknown } | undefined
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/add_watermark/image': {
      $post:
        | {
            input: {
              form: {
                file: File
                image: File
                margin?: number | undefined
                transparency?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                file: File
                image: File
                margin?: number | undefined
                transparency?: number | undefined
              }
            }
            output: {
              errors?: { [x: string]: unknown } | undefined
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/add_watermark/text': {
      $post:
        | {
            input: {
              form: {
                color?: 'Red' | 'Blue' | 'Gray' | 'Black' | undefined
                file: File
                line_1: string
                line_2?: string | undefined
                line_3?: string | undefined
                margin?: number | undefined
                template?: number | undefined
                transparency?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                color?: 'Red' | 'Blue' | 'Gray' | 'Black' | undefined
                file: File
                line_1: string
                line_2?: string | undefined
                line_3?: string | undefined
                margin?: number | undefined
                template?: number | undefined
                transparency?: number | undefined
              }
            }
            output: {
              errors?: { [x: string]: unknown } | undefined
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/extract_pages': {
      $post:
        | {
            input: {
              form: { file: File; first_page?: number | undefined; last_page?: number | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: { file: File; first_page?: number | undefined; last_page?: number | undefined }
            }
            output: {
              errors?: { [x: string]: unknown } | undefined
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/merge_documents': {
      $post:
        | {
            input: { form: { file?: File[] | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { file?: File[] | undefined } }
            output: {
              errors?: { [x: string]: unknown } | undefined
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/remove_pages': {
      $post:
        | {
            input: {
              form: { file: File; first_page?: number | undefined; last_page?: number | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: { file: File; first_page?: number | undefined; last_page?: number | undefined }
            }
            output: {
              errors?: { [x: string]: unknown } | undefined
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/remove_password': {
      $post:
        | {
            input: { form: { file: File; password: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { file: File; password: string } }
            output: {
              errors?: { [x: string]: unknown } | undefined
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/remove_restrictions': {
      $post:
        | { input: { form: { file: File } }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { form: { file: File } }
            output: {
              errors?: { [x: string]: unknown } | undefined
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/remove_signatures': {
      $post:
        | { input: { form: { file: File } }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { form: { file: File } }
            output: {
              errors?: { [x: string]: unknown } | undefined
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/reverse_pages': {
      $post:
        | { input: { form: { file: File } }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { form: { file: File } }
            output: {
              errors?: { [x: string]: unknown } | undefined
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/rotate_pages': {
      $post:
        | {
            input: {
              form: {
                angle: 0 | 90 | 180 | 270 | -90 | -180 | -270
                file: File
                first_page?: number | undefined
                last_page?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                angle: 0 | 90 | 180 | 270 | -90 | -180 | -270
                file: File
                first_page?: number | undefined
                last_page?: number | undefined
              }
            }
            output: {
              errors?: { [x: string]: unknown } | undefined
              status?: number | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
