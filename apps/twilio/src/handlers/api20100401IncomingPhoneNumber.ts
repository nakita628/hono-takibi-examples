import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRoute,
  get20100401AccountsAccountSidIncomingPhoneNumbersJsonRoute,
  get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRoute,
  post20100401AccountsAccountSidIncomingPhoneNumbersJsonRoute,
  post20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401IncomingPhoneNumberHandler = app
  .openapi(post20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidIncomingPhoneNumbersSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidIncomingPhoneNumbersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidIncomingPhoneNumbersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
