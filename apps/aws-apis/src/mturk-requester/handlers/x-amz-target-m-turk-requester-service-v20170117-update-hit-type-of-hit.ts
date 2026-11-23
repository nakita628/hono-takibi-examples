import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117UpdateHITTypeOfHITRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117UpdateHitTypeOfHitHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117UpdateHITTypeOfHITRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
