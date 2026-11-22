import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListSolutionVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeListSolutionVersionsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListSolutionVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
