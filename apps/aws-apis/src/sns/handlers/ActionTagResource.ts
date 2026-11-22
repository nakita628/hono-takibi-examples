import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionTagResourceRoute, postActionTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionTagResourceHandler = app
  .openapi(getActionTagResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTagResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
