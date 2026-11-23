import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
