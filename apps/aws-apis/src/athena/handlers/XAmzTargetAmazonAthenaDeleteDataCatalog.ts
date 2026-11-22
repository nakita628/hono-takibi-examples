import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaDeleteDataCatalogRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaDeleteDataCatalogHandler = app.openapi(
  postXAmzTargetAmazonAthenaDeleteDataCatalogRoute,
  (c) => {},
)
