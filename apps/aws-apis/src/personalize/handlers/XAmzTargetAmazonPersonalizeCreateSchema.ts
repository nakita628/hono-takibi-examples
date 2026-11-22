import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeCreateSchemaHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateSchemaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
