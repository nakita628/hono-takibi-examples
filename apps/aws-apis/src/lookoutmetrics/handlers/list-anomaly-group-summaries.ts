import { OpenAPIHono } from '@hono/zod-openapi'
import { postListAnomalyGroupSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const listAnomalyGroupSummariesHandler = app.openapi(
  postListAnomalyGroupSummariesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
