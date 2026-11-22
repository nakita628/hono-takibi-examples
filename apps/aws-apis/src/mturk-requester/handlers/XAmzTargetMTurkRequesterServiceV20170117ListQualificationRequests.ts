import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
