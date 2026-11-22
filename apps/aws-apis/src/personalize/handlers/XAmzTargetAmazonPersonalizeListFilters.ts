import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListFiltersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeListFiltersHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListFiltersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
