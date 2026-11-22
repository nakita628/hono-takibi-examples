import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetDataCatalogRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetDataCatalogHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetDataCatalogRoute,
  (c) => {},
)
