import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810UpdateGlobalTableSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810UpdateGlobalTableSettingsHandler = app.openapi(
  postXAmzTargetDynamoDB20120810UpdateGlobalTableSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
