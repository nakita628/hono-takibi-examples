import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609TaxesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609TaxesSearchRoute, (c) => {
  throw new Error('Not implemented')
})
