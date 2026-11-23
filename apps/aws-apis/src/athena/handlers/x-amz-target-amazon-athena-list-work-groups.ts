import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaListWorkGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaListWorkGroupsHandler = app.openapi(
  postXAmzTargetAmazonAthenaListWorkGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
