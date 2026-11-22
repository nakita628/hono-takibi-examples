import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeStopSolutionVersionCreationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeStopSolutionVersionCreationHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeStopSolutionVersionCreationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
