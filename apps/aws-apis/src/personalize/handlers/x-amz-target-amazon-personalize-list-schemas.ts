import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListSchemasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeListSchemasHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListSchemasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
