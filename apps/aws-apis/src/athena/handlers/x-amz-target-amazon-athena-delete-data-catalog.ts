import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaDeleteDataCatalogRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaDeleteDataCatalogHandler = app.openapi(
  postXAmzTargetAmazonAthenaDeleteDataCatalogRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
