import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
