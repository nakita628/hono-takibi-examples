import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schedulePaymentHandler = app
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
