import { OpenAPIHono } from '@hono/zod-openapi'
import { getVaultedPaymentMethodsVaultedPaymentMethodIdRoute } from '../routes'

const app = new OpenAPIHono()

export const vaultedPaymentMethodsHandler = app.openapi(
  getVaultedPaymentMethodsVaultedPaymentMethodIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
