import { OpenAPIHono } from '@hono/zod-openapi'
import { getConfigLogsRoute, getConfigRoute, postConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const configHandler = app
  .openapi(getConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
