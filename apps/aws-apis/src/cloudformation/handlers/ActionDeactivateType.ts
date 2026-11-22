import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeactivateTypeRoute, postActionDeactivateTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeactivateTypeHandler = app
  .openapi(getActionDeactivateTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeactivateTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
