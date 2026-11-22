import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401SharedCostHandler = app.openapi(
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
