import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
