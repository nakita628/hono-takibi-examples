import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117UpdateHITReviewStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117UpdateHitReviewStatusHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117UpdateHITReviewStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
