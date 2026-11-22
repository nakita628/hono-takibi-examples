import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CouponsRoute } from '../routes'

const app = new OpenAPIHono()

export const couponsHandler = app.openapi(postV1CouponsRoute, (c) => {
  throw new Error('Not implemented')
})
