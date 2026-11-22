import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DisableKinesisStreamingDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810DisableKinesisStreamingDestinationHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DisableKinesisStreamingDestinationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
