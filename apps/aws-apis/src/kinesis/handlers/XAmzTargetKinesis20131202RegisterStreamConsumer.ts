import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202RegisterStreamConsumerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202RegisterStreamConsumerHandler = app.openapi(
  postXAmzTargetKinesis20131202RegisterStreamConsumerRoute,
  (c) => {},
)
