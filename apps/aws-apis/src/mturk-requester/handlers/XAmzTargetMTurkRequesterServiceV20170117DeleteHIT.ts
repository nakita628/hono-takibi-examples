import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117DeleteHITRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117DeleteHITHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117DeleteHITRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
