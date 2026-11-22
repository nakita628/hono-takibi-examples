import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CouponsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const couponsSearchHandler = app.openapi(getV1CouponsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
