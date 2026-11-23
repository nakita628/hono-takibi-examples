import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
