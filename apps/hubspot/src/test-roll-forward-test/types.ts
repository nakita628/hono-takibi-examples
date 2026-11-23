type TestListWidgetResponse = { widgets: string[] }
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/public/api/versioning/test/2026-09/widgets': {
      $get:
        | { input: {}; output: TestListWidgetResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
      $post:
        | { input: { json: string }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { json: string }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/public/api/versioning/test/2026-09/widgets/:widgetId': {
      $get:
        | {
            input: { param: { widgetId: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { widgetId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { widgetId: string } } & { json: string }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { widgetId: string } } & { json: string }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | { input: { param: { widgetId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { widgetId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
