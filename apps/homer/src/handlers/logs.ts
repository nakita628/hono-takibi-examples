import { OpenAPIHono } from '@hono/zod-openapi'
import { getLogsLokiLabelsRoute, getLogsLokiValuesRoute, postLogsLokiQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app
  .openapi(getLogsLokiLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsLokiValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLogsLokiQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
