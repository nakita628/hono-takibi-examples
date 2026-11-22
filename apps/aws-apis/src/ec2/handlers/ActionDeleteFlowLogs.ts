import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteFlowLogsRoute, postActionDeleteFlowLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteFlowLogsHandler = app
  .openapi(getActionDeleteFlowLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteFlowLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
