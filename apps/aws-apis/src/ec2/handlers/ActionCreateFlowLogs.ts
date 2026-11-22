import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateFlowLogsRoute, postActionCreateFlowLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateFlowLogsHandler = app
  .openapi(getActionCreateFlowLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateFlowLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
