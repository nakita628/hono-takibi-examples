import { OpenAPIHono } from '@hono/zod-openapi'
import { getReviewIdsRoute } from '../routes'

const app = new OpenAPIHono()

export const reviewIdsHandler = app.openapi(getReviewIdsRoute, (c) => {
  throw new Error('Not implemented')
})
