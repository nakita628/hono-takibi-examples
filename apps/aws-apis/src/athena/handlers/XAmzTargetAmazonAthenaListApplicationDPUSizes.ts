import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListApplicationDPUSizesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaListApplicationDPUSizesHandler = app.openapi(
  postXAmzTargetAmazonAthenaListApplicationDPUSizesRoute,
  (c) => {},
)
