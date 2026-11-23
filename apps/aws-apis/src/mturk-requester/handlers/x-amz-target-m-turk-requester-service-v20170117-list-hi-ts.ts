import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117ListHITsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117ListHiTsHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117ListHITsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
