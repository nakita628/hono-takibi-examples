import { OpenAPIHono } from '@hono/zod-openapi'
import { getPaymentAutoRechargePrefsRoute, patchPaymentAutoRechargePrefsRoute } from '../routes'

const app = new OpenAPIHono()

export const autoRechargePreferencesHandler = app
  .openapi(getPaymentAutoRechargePrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPaymentAutoRechargePrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
