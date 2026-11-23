import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHITRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHitHandler =
  app.openapi(
    postXAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHITRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
