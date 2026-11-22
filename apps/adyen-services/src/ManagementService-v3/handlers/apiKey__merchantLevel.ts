import { OpenAPIHono } from '@hono/zod-openapi'
import { postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKey__merchantLevelHandler = app.openapi(
  postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
