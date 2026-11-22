import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3PayoutsPayoutIdRoute,
  deleteV3PayoutsPayoutIdScheduleRoute,
  getV3PayoutsPayoutIdPaymentsRoute,
  getV3PayoutsPayoutIdRoute,
  postV1PaymentsPaymentIdWithdrawRoute,
  postV3PayoutsPayoutIdQuoteRoute,
  postV3PayoutsPayoutIdRoute,
  postV3PayoutsPayoutIdScheduleRoute,
  postV3PayoutsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payoutsHandler = app
  .openapi(postV1PaymentsPaymentIdWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3PayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PayoutsPayoutIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayoutsPayoutIdQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3PayoutsPayoutIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayoutsPayoutIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
