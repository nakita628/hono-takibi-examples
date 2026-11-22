import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLiasettingsPosdataprovidersRoute,
  getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsRoute,
  getMerchantIdLiasettingsAccountIdRoute,
  getMerchantIdLiasettingsRoute,
  postLiasettingsBatchRoute,
  postMerchantIdLiasettingsAccountIdRequestgmbaccessRoute,
  postMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryRoute,
  postMerchantIdLiasettingsAccountIdSetinventoryverificationcontactRoute,
  postMerchantIdLiasettingsAccountIdSetposdataproviderRoute,
  putMerchantIdLiasettingsAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const liasettingsHandler = app
  .openapi(postLiasettingsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiasettingsPosdataprovidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdLiasettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdLiasettingsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMerchantIdLiasettingsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdLiasettingsAccountIdRequestgmbaccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdLiasettingsAccountIdSetinventoryverificationcontactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdLiasettingsAccountIdSetposdataproviderRoute, (c) => {
    throw new Error('Not implemented')
  })
