import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateEnvironmentRoute, postActionCreateEnvironmentRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateEnvironmentHandler = app
  .openapi(getActionCreateEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
