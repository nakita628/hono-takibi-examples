import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609CommercePaymentsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609CommercePaymentsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
