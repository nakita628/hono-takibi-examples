import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetDataCatalogRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaGetDataCatalogHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetDataCatalogRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
