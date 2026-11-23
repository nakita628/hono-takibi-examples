import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeregisterTypeRoute, postActionDeregisterTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeregisterTypeHandler = app
  .openapi(getActionDeregisterTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeregisterTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
