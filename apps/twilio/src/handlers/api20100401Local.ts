import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401LocalHandler = app.openapi(
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
