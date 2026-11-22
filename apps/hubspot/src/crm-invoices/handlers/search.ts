import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609InvoicesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609InvoicesSearchRoute, (c) => {
  throw new Error('Not implemented')
})
