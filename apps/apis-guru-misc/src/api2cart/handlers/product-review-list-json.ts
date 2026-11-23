import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductReviewListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productReviewListJsonHandler = app.openapi(getProductReviewListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
