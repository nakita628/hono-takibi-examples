import { OpenAPIHono } from '@hono/zod-openapi'
import { postCloseStoresRoute } from '../routes'

const app = new OpenAPIHono()

export const closeStoresHandler = app.openapi(postCloseStoresRoute, (c) => {
  throw new Error('Not implemented')
})
