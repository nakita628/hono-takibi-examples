import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocateItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocateItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocateRoute,
  getUserUserIDPaymentAutoAllocateRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocateRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocateItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentAutoAllocateHandler = app
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocateItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocateItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocateItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDPaymentAutoAllocateRoute, (c) => {
    throw new Error('Not implemented')
  })
