import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUpdateNotebookMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaUpdateNotebookMetadataHandler = app.openapi(
  postXAmzTargetAmazonAthenaUpdateNotebookMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
