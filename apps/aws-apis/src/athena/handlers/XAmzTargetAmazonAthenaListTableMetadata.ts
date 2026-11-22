import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListTableMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaListTableMetadataHandler = app.openapi(
  postXAmzTargetAmazonAthenaListTableMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
