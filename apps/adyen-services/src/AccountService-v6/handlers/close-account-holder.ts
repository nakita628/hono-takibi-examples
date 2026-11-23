import { OpenAPIHono } from '@hono/zod-openapi'
import { postCloseAccountHolderRoute } from '../routes'

const app = new OpenAPIHono()

export const closeAccountHolderHandler = app.openapi(postCloseAccountHolderRoute, (c) => {
  throw new Error('Not implemented')
})
