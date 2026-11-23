import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaTerminateSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaTerminateSessionHandler = app.openapi(
  postXAmzTargetAmazonAthenaTerminateSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
