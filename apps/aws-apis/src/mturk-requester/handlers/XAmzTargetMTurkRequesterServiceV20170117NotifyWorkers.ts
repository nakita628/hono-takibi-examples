import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117NotifyWorkersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117NotifyWorkersHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117NotifyWorkersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
