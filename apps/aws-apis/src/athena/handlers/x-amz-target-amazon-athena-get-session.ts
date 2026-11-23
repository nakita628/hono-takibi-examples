import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaGetSessionHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
