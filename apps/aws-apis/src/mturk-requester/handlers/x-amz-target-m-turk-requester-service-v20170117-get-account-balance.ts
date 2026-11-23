import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
