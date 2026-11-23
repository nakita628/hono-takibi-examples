import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDisableLoggingRoute, postActionDisableLoggingRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDisableLoggingHandler = app
  .openapi(getActionDisableLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
