import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUpdateWorkGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaUpdateWorkGroupHandler = app.openapi(
  postXAmzTargetAmazonAthenaUpdateWorkGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
