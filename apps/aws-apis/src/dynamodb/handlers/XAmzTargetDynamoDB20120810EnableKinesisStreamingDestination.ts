import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810EnableKinesisStreamingDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810EnableKinesisStreamingDestinationHandler = app.openapi(
  postXAmzTargetDynamoDB20120810EnableKinesisStreamingDestinationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
