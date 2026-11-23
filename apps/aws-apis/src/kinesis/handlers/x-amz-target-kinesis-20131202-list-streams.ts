import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202ListStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202ListStreamsHandler = app.openapi(
  postXAmzTargetKinesis20131202ListStreamsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
