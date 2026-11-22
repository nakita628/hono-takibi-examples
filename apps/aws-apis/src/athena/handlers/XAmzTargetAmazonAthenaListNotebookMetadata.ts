import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListNotebookMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaListNotebookMetadataHandler = app.openapi(
  postXAmzTargetAmazonAthenaListNotebookMetadataRoute,
  (c) => {},
)
