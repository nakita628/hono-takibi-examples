import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117DeleteHITRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117DeleteHitHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117DeleteHITRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
