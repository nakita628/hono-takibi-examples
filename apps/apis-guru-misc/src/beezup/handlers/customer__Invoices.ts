import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2UserCustomerInvoicesRoute } from '../routes'

const app = new OpenAPIHono()

export const customer__InvoicesHandler = app.openapi(getV2UserCustomerInvoicesRoute, (c) => {
  throw new Error('Not implemented')
})
