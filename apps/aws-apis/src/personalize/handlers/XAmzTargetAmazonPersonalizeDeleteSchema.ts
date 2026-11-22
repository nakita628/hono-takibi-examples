import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDeleteSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDeleteSchemaHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDeleteSchemaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
