import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHITRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHITHandler =
  app.openapi(
    postXAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHITRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
