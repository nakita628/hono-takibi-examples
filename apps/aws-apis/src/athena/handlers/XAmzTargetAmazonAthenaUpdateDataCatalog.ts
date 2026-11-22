import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUpdateDataCatalogRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaUpdateDataCatalogHandler = app.openapi(
  postXAmzTargetAmazonAthenaUpdateDataCatalogRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
