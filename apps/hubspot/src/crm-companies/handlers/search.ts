import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609CompaniesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609CompaniesSearchRoute, (c) => {
  throw new Error('Not implemented')
})
