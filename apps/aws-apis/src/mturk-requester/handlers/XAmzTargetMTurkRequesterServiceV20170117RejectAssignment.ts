import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117RejectAssignmentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117RejectAssignmentHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117RejectAssignmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
