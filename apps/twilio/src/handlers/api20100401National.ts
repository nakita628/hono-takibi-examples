import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401NationalHandler = app.openapi(
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
