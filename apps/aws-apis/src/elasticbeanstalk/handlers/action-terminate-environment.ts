import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionTerminateEnvironmentRoute, postActionTerminateEnvironmentRoute } from '../routes'

const app = new OpenAPIHono()

export const actionTerminateEnvironmentHandler = app
  .openapi(getActionTerminateEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTerminateEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
