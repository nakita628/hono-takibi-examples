import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeregisterTypeRoute, postActionDeregisterTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeregisterTypeHandler = app
  .openapi(getActionDeregisterTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeregisterTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
