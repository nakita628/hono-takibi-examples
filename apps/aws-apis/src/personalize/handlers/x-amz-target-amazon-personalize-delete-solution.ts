import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDeleteSolutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDeleteSolutionHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDeleteSolutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
