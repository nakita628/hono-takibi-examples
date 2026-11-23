import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBillsJurisdictionSessionBillIdRoute,
  getBillsOcdBillOpenstatesBillIdRoute,
  getBillsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billsHandler = app
  .openapi(getBillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillsOcdBillOpenstatesBillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillsJurisdictionSessionBillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
