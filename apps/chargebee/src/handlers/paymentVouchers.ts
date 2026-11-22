import { OpenAPIHono } from '@hono/zod-openapi'
import { getPaymentVouchersPaymentVoucherIdRoute, postPaymentVouchersRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentVouchersHandler = app
  .openapi(getPaymentVouchersPaymentVoucherIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentVouchersRoute, (c) => {
    throw new Error('Not implemented')
  })
