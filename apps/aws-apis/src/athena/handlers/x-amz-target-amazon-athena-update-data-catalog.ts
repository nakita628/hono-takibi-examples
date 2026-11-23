import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUpdateDataCatalogRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaUpdateDataCatalogHandler = app.openapi(
  postXAmzTargetAmazonAthenaUpdateDataCatalogRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
