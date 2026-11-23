import { OpenAPIHono } from '@hono/zod-openapi'
import { postPostReviewRoute } from '../routes'

const app = new OpenAPIHono()

export const postReviewHandler = app.openapi(postPostReviewRoute, (c) => {
  throw new Error('Not implemented')
})
