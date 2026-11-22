import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCheckoutPvtConfigurationWindowToChangeSellerRoute,
  postApiCheckoutPvtConfigurationWindowToChangeSellerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const changeSellerHandler = app
  .openapi(getApiCheckoutPvtConfigurationWindowToChangeSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPvtConfigurationWindowToChangeSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
