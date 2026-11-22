import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117CreateHITTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117CreateHITTypeHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117CreateHITTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
