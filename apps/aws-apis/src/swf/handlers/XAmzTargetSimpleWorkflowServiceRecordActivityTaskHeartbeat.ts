import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
