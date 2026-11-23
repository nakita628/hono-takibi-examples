import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetTableMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaGetTableMetadataHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetTableMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
