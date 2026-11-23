import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202CreateStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202CreateStreamHandler = app.openapi(
  postXAmzTargetKinesis20131202CreateStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
