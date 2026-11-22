declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/templates/:template-token/compile': {
      $post:
        | {
            input: { param: { 'template-token': string } } & {
              query: {
                'doc-url-expires-in'?: number | undefined
                'latex-compiler'?: 'pdflatex' | 'lualatex' | undefined
                'latex-runs '?: number | undefined
                'main-file-name'?: string | undefined
                'doc-file-name'?: string | undefined
              }
            } & { header: { 'Content-Type': string } } & { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'template-token': string } } & {
              query: {
                'doc-url-expires-in'?: number | undefined
                'latex-compiler'?: 'pdflatex' | 'lualatex' | undefined
                'latex-runs '?: number | undefined
                'main-file-name'?: string | undefined
                'doc-file-name'?: string | undefined
              }
            } & { header: { 'Content-Type': string } } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  },
  '/'
>
export default routes
