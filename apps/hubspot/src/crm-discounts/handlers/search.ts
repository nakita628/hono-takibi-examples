import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609DiscountsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609DiscountsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
