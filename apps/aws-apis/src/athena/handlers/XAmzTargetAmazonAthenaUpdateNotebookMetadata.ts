import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUpdateNotebookMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaUpdateNotebookMetadataHandler = app.openapi(
  postXAmzTargetAmazonAthenaUpdateNotebookMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
