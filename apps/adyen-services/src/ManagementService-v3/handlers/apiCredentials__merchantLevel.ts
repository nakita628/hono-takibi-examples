import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantsMerchantIdApiCredentialsApiCredentialIdRoute,
  getMerchantsMerchantIdApiCredentialsRoute,
  patchMerchantsMerchantIdApiCredentialsApiCredentialIdRoute,
  postMerchantsMerchantIdApiCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiCredentials__merchantLevelHandler = app
  .openapi(getMerchantsMerchantIdApiCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdApiCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdApiCredentialsApiCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdApiCredentialsApiCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
