import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117CreateHITRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117CreateHITHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117CreateHITRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
