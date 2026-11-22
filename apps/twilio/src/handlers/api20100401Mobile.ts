import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401MobileHandler = app.openapi(
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
