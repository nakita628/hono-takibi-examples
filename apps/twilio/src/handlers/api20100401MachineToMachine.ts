import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401MachineToMachineHandler = app.openapi(
  get20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
