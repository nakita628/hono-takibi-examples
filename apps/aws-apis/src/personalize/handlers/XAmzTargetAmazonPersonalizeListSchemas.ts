import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListSchemasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeListSchemasHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListSchemasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
