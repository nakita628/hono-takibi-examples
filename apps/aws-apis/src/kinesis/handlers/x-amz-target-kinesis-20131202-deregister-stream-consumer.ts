import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202DeregisterStreamConsumerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202DeregisterStreamConsumerHandler = app.openapi(
  postXAmzTargetKinesis20131202DeregisterStreamConsumerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
