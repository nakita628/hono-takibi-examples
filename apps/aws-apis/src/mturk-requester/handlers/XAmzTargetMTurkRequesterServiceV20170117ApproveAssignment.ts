import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
