import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaCreateWorkGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaCreateWorkGroupHandler = app.openapi(
  postXAmzTargetAmazonAthenaCreateWorkGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
