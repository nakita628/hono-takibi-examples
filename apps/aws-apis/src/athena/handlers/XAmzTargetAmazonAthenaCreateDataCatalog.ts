import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaCreateDataCatalogRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaCreateDataCatalogHandler = app.openapi(
  postXAmzTargetAmazonAthenaCreateDataCatalogRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
