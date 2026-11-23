import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOverpaymentsOverpaymentIDAllocationsAllocationIDRoute,
  getOverpaymentsOverpaymentIDHistoryRoute,
  getOverpaymentsOverpaymentIDRoute,
  getOverpaymentsRoute,
  putOverpaymentsOverpaymentIDAllocationsRoute,
  putOverpaymentsOverpaymentIDHistoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const overpaymentsHandler = app
  .openapi(getOverpaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOverpaymentsOverpaymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOverpaymentsOverpaymentIDAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOverpaymentsOverpaymentIDAllocationsAllocationIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOverpaymentsOverpaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOverpaymentsOverpaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
