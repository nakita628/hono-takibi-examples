import { OpenAPIHono } from '@hono/zod-openapi'
import { postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const clientKey__merchantLevelHandler = app.openapi(
  postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
