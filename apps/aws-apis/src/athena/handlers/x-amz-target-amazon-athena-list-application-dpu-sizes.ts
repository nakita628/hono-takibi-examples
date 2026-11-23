import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListApplicationDPUSizesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaListApplicationDpuSizesHandler = app.openapi(
  postXAmzTargetAmazonAthenaListApplicationDPUSizesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
