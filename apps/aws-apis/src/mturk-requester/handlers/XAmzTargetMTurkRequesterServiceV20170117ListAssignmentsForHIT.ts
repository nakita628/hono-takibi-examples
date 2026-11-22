import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
