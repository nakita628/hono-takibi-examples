import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetNotebookMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaGetNotebookMetadataHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetNotebookMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
