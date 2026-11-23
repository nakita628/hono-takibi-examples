type FormsIndex = {
  attributes?:
    | {
        benefit_categories?:
          | ({ description?: string | undefined; name?: string | undefined }[] | null)
          | undefined
        deleted_at?: (string | null) | undefined
        first_issued_on?: (string | null) | undefined
        form_details_url?: (string | null) | undefined
        form_name?: string | undefined
        form_tool_intro?: (string | null) | undefined
        form_tool_url?: (string | null) | undefined
        form_type?: (string | null) | undefined
        form_usage?: (string | null) | undefined
        language?: string | undefined
        last_revision_on?: (string | null) | undefined
        last_sha256_change?: (string | null) | undefined
        pages?: number | undefined
        related_forms?: (string[] | null) | undefined
        sha256?: (string | null) | undefined
        title?: string | undefined
        url?: string | undefined
        va_form_administration?: (string | null) | undefined
        valid_pdf?: boolean | undefined
      }
    | undefined
  id?: string | undefined
  type?: string | undefined
}
type FormShow = {
  attributes?:
    | {
        benefit_categories?:
          | ({ description?: string | undefined; name?: string | undefined }[] | null)
          | undefined
        created_at?: (string | null) | undefined
        deleted_at?: (string | null) | undefined
        first_issued_on?: (string | null) | undefined
        form_details_url?: (string | null) | undefined
        form_name?: string | undefined
        form_tool_intro?: (string | null) | undefined
        form_tool_url?: (string | null) | undefined
        form_type?: (string | null) | undefined
        form_usage?: (string | null) | undefined
        language?: (string | null) | undefined
        last_revision_on?: (string | null) | undefined
        pages?: number | undefined
        related_forms?: (string[] | null) | undefined
        sha256?: (string | null) | undefined
        title?: string | undefined
        url?: string | undefined
        va_form_administration?: (string | null) | undefined
        valid_pdf?: boolean | undefined
        versions?:
          | ({ revision_on?: string | undefined; sha256?: string | undefined }[] | null)
          | undefined
      }
    | undefined
  id?: string | undefined
  type?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/forms': {
      $get:
        | {
            input: { query: { query?: string | undefined } }
            output: { data: FormsIndex[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query?: string | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { query?: string | undefined } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/forms/:form_name': {
      $get:
        | {
            input: { param: { form_name: string } }
            output: { data: FormShow }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { form_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { form_name: string } }
            output: { errors: { message?: string | undefined }[] }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { form_name: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
