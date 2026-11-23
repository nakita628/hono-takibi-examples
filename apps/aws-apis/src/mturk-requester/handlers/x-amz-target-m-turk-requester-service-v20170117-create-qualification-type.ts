import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
