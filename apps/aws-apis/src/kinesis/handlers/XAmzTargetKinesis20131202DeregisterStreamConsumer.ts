import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202DeregisterStreamConsumerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202DeregisterStreamConsumerHandler = app.openapi(
  postXAmzTargetKinesis20131202DeregisterStreamConsumerRoute,
  (c) => {},
)
