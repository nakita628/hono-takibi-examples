import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ObjectCreditBalanceAdjustmentIdRoute,
  postV1ObjectCreditBalanceAdjustmentRoute,
  putV1ObjectCreditBalanceAdjustmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creditBalanceAdjustmentsHandler = app
  .openapi(postV1ObjectCreditBalanceAdjustmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectCreditBalanceAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectCreditBalanceAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
