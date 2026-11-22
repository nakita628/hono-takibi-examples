import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListRecipesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeListRecipesHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListRecipesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
