import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionEnableLoggingRoute, postActionEnableLoggingRoute } from '../routes'

const app = new OpenAPIHono()

export const actionEnableLoggingHandler = app
  .openapi(getActionEnableLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
