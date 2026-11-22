import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CouponsGenerateRoute } from '../routes'

const app = new OpenAPIHono()

export const couponsGenerateHandler = app.openapi(postV1CouponsGenerateRoute, (c) => {
  throw new Error('Not implemented')
})
