import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute,
  getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute,
  getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRoute,
  postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const allowedOrigins__merchantLevelHandler = app
  .openapi(getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
