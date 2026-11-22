import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
