import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionConfigureHealthCheckRoute, postActionConfigureHealthCheckRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionConfigureHealthCheckHandler = app
  .openapi(getActionConfigureHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionConfigureHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
