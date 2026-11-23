import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentLinkPaymentLinkIdRoute,
  postPaymentLinkListRoute,
  postPaymentLinkProfileListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentLinkHandler = app
  .openapi(getPaymentLinkPaymentLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentLinkListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentLinkProfileListRoute, (c) => {
    throw new Error('Not implemented')
  })
