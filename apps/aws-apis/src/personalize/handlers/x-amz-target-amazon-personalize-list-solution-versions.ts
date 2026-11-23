import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListSolutionVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeListSolutionVersionsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListSolutionVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
