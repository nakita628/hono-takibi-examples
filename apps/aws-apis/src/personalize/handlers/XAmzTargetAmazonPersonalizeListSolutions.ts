import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListSolutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeListSolutionsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListSolutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
