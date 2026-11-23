import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListNotebookSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaListNotebookSessionsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListNotebookSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
