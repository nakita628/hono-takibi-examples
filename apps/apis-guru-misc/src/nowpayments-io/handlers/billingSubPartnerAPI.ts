import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1SubPartnerBalanceIdRoute,
  getV1SubPartnerRoute,
  getV1SubPartnerTransferIdRoute,
  getV1SubPartnerTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingSubPartnerAPIHandler = app
  .openapi(getV1SubPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubPartnerBalanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubPartnerTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubPartnerTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
