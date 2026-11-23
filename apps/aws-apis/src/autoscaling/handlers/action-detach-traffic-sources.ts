import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDetachTrafficSourcesRoute, postActionDetachTrafficSourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDetachTrafficSourcesHandler = app
  .openapi(getActionDetachTrafficSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetachTrafficSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
