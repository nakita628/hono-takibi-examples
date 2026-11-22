import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
