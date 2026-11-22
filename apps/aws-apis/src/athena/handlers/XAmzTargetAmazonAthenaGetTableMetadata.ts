import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetTableMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetTableMetadataHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetTableMetadataRoute,
  (c) => {},
)
