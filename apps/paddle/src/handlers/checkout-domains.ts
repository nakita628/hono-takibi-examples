import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCheckoutDomainsDomainIdRoute,
  getCheckoutDomainsDomainIdRoute,
  getCheckoutDomainsRoute,
  postCheckoutDomainsDomainIdVerifyPaymentMethodRoute,
} from '../routes'

const app = new OpenAPIHono()

export const checkoutDomainsHandler = app
  .openapi(getCheckoutDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCheckoutDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCheckoutDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCheckoutDomainsDomainIdVerifyPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
