import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeactivateTypeRoute, postActionDeactivateTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeactivateTypeHandler = app
  .openapi(getActionDeactivateTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeactivateTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
