import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202GetShardIteratorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202GetShardIteratorHandler = app.openapi(
  postXAmzTargetKinesis20131202GetShardIteratorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
