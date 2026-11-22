import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401DependentPhoneNumberHandler = app.openapi(
  get20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
