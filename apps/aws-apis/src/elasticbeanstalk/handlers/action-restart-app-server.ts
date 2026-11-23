import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRestartAppServerRoute, postActionRestartAppServerRoute } from '../routes'

const app = new OpenAPIHono()

export const actionRestartAppServerHandler = app
  .openapi(getActionRestartAppServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestartAppServerRoute, (c) => {
    throw new Error('Not implemented')
  })
