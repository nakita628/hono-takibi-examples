import { OpenAPIHono } from '@hono/zod-openapi'
import { getReviewsFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const reviewsFormatHandler = app.openapi(getReviewsFormatRoute, (c) => {
  throw new Error('Not implemented')
})
