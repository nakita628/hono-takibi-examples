import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentServiceProviderCredentialItemIdRoute,
  postPaymentServiceProviderCredentialRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentServiceProviderCredentialHandler = app
  .openapi(getPaymentServiceProviderCredentialItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentServiceProviderCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })
