import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiApplePayDomainsRegisterRoute,
  postApiApplePayDomainsUnregisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applePayMerchantRegistrationHandler = app
  .openapi(postApiApplePayDomainsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApplePayDomainsUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
