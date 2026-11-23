import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionActivateTypeRoute, postActionActivateTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionActivateTypeHandler = app
  .openapi(getActionActivateTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionActivateTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
