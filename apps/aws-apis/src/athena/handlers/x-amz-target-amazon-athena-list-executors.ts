import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListExecutorsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaListExecutorsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListExecutorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
