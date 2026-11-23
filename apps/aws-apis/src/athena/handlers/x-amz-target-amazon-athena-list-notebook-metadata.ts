import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListNotebookMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaListNotebookMetadataHandler = app.openapi(
  postXAmzTargetAmazonAthenaListNotebookMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
