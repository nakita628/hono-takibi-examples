import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetWorkGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaGetWorkGroupHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetWorkGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
