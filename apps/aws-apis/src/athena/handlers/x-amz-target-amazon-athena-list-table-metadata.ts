import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListTableMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaListTableMetadataHandler = app.openapi(
  postXAmzTargetAmazonAthenaListTableMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
