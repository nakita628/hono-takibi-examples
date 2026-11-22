import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITTypeHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
