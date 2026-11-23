import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117ListReviewableHITsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117ListReviewableHiTsHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117ListReviewableHITsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
