import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202SplitShardRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202SplitShardHandler = app.openapi(
  postXAmzTargetKinesis20131202SplitShardRoute,
  (c) => {},
)
