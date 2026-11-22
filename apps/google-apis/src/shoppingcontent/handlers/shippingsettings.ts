import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdShippingsettingsAccountIdRoute,
  getMerchantIdShippingsettingsRoute,
  getMerchantIdSupportedCarriersRoute,
  getMerchantIdSupportedHolidaysRoute,
  getMerchantIdSupportedPickupServicesRoute,
  postShippingsettingsBatchRoute,
  putMerchantIdShippingsettingsAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shippingsettingsHandler = app
  .openapi(postShippingsettingsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdShippingsettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdShippingsettingsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMerchantIdShippingsettingsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdSupportedCarriersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdSupportedHolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdSupportedPickupServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
