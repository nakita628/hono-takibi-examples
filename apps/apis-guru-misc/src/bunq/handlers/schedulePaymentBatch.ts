import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchItemIdRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schedulePaymentBatchHandler = app
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
