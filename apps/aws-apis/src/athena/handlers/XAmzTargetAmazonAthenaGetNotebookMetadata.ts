import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetNotebookMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetNotebookMetadataHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetNotebookMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
