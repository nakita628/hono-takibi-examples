import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609ContactsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609ContactsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
