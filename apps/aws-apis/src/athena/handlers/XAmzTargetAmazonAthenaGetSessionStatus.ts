import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetSessionStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetSessionStatusHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetSessionStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
