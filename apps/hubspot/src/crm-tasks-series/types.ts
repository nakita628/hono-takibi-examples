type PublicTaskSeries = {
  repeatInterval?: string | undefined
  repeatStatus?: string | undefined
  startsAt?: string | undefined
}
type StartTaskSeriesBody = {
  properties: { [x: string]: string }
  series: PublicTaskSeries
  taskId: bigint
}
type PublicTaskSeriesResponse = {
  createdAt?: string | undefined
  id: string
  properties: { [x: string]: string }
  series: PublicTaskSeries
  updatedAt?: string | undefined
}
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
type UpdateTaskSeriesBody = {
  properties?: { [x: string]: string } | undefined
  series?: PublicTaskSeries | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/task-series/2026-09': {
      $post:
        | {
            input: { json: StartTaskSeriesBody }
            output: PublicTaskSeriesResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: StartTaskSeriesBody }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/task-series/2026-09/:taskId': {
      $get:
        | {
            input: { param: { taskId: bigint } } & { query: { properties?: string[] | undefined } }
            output: PublicTaskSeriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskId: bigint } } & { query: { properties?: string[] | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { taskId: bigint } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $patch:
        | {
            input: { param: { taskId: bigint } } & { json: UpdateTaskSeriesBody }
            output: PublicTaskSeriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskId: bigint } } & { json: UpdateTaskSeriesBody }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
