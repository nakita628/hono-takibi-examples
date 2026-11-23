type ApplyYaraRule = {
  error_message?: string | undefined
  is_success: boolean
  matched_yara_rules?: { rule: string; string_information: string[] }[][] | undefined
  yara_command: string
}
type Error = { message: string; status: number }
type Yara = {
  meta: { date: string; md5sum: string; sha256sum: string; sha512sum: string }
  name: string
  strings: string[][]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apply-yara-rules': {
      $post:
        | {
            input: {
              form: {
                file: File
                is_unpacking_required?: 'true' | 'false' | undefined
                rules: string[]
              }
            }
            output: { result?: ApplyYaraRule | undefined }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                file: File
                is_unpacking_required?: 'true' | 'false' | undefined
                rules: string[]
              }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              form: {
                file: File
                is_unpacking_required?: 'true' | 'false' | undefined
                rules: string[]
              }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/clean': {
      $head:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/emulation-output': {
      $post:
        | {
            input: { form: { file: File } }
            output: { output: string[] }
            outputFormat: 'text'
            status: 200
          }
        | { input: { form: { file: File } }; output: Error; outputFormat: 'text'; status: 400 }
        | { input: { form: { file: File } }; output: Error; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/generate-partial-yara-rules': {
      $post:
        | {
            input: {
              form: {
                file: File
                is_unpacking_required?: 'true' | 'false' | undefined
                minimum_string_length?: string | undefined
                strings_to_ignore?: string[] | undefined
              }
            }
            output: { rule?: Yara | undefined }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                file: File
                is_unpacking_required?: 'true' | 'false' | undefined
                minimum_string_length?: string | undefined
                strings_to_ignore?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              form: {
                file: File
                is_unpacking_required?: 'true' | 'false' | undefined
                minimum_string_length?: string | undefined
                strings_to_ignore?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/unpack': {
      $post:
        | { input: { form: { file: File } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { form: { file: File } }; output: Error; outputFormat: 'text'; status: 400 }
        | { input: { form: { file: File } }; output: Error; outputFormat: 'text'; status: 500 }
    }
  },
  '/'
>
export default routes
