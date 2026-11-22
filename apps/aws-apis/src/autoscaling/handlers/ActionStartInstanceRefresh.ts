import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStartInstanceRefreshRoute, postActionStartInstanceRefreshRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionStartInstanceRefreshHandler = app
  .openapi(getActionStartInstanceRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStartInstanceRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
