import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHitHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
