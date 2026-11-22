import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocatePaymentAutoAllocateIDInstanceItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocatePaymentAutoAllocateIDInstanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instanceHandler = app
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocatePaymentAutoAllocateIDInstanceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocatePaymentAutoAllocateIDInstanceItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
