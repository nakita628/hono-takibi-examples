import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListExecutorsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaListExecutorsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListExecutorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
