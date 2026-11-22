import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609FeesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609FeesSearchRoute, (c) => {
  throw new Error('Not implemented')
})
