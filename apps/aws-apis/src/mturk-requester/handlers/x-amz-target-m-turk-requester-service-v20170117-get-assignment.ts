import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117GetAssignmentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117GetAssignmentHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117GetAssignmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
