import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609FeedbackSubmissionsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(
  postCrmObjects202609FeedbackSubmissionsSearchRoute,
  (c) => {},
)
