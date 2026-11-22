import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCheckoutPvtConfigurationOrderFormRoute,
  getApiCheckoutPvtConfigurationWindowToChangeSellerRoute,
  postApiCheckoutPubOrderFormOrderFormIdMessagesClearRoute,
  postApiCheckoutPvtConfigurationOrderFormRoute,
  postApiCheckoutPvtConfigurationWindowToChangeSellerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configurationHandler = app
  .openapi(postApiCheckoutPubOrderFormOrderFormIdMessagesClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCheckoutPvtConfigurationOrderFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPvtConfigurationOrderFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCheckoutPvtConfigurationWindowToChangeSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPvtConfigurationWindowToChangeSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
