import { OpenAPIHono } from '@hono/zod-openapi'
import { postDonateRoute } from '../routes'

const app = new OpenAPIHono()

export const donateHandler = app.openapi(postDonateRoute, (c) => {
  throw new Error('Not implemented')
})
