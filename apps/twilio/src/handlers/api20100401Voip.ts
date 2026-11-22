import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401VoipHandler = app.openapi(
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
