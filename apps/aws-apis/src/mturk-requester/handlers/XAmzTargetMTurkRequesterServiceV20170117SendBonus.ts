import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117SendBonusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117SendBonusHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117SendBonusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
