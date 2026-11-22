import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentLinksLinkIdRoute,
  patchPaymentLinksLinkIdRoute,
  postPaymentLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentLinksHandler = app
  .openapi(postPaymentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPaymentLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
