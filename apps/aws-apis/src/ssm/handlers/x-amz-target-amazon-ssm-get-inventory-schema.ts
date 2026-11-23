import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetInventorySchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetInventorySchemaHandler = app.openapi(
  postXAmzTargetAmazonSSMGetInventorySchemaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
