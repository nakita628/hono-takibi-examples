import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdSettingsTransformationsRoute,
  getAccountsAccountIdSettingsUtBillingRoute,
  patchAccountsAccountIdSettingsUtBillingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountSettingsHandler = app
  .openapi(getAccountsAccountIdSettingsTransformationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSettingsUtBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdSettingsUtBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
