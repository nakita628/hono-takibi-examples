import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListEngineVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaListEngineVersionsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListEngineVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
