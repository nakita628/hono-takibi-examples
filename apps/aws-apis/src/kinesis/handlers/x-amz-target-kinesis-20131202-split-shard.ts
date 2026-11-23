import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202SplitShardRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202SplitShardHandler = app.openapi(
  postXAmzTargetKinesis20131202SplitShardRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
