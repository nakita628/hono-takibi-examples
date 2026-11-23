import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117GetHITRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117GetHitHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117GetHITRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
