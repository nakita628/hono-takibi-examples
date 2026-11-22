import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810UpdateTimeToLiveRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810UpdateTimeToLiveHandler = app.openapi(
  postXAmzTargetDynamoDB20120810UpdateTimeToLiveRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
