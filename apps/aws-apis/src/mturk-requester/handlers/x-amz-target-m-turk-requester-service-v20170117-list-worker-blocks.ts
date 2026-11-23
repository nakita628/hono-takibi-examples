import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
