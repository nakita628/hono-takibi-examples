import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401TollFreeHandler = app.openapi(
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
