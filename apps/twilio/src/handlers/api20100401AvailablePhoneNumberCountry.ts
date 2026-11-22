import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonRoute,
  get20100401AccountsAccountSidAvailablePhoneNumbersJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401AvailablePhoneNumberCountryHandler = app
  .openapi(get20100401AccountsAccountSidAvailablePhoneNumbersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
