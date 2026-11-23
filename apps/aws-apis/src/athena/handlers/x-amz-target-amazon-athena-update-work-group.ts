import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaUpdateWorkGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaUpdateWorkGroupHandler = app.openapi(
  postXAmzTargetAmazonAthenaUpdateWorkGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
