import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHITRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHITHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHITRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
