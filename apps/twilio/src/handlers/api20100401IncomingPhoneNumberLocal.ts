import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonRoute,
  post20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401IncomingPhoneNumberLocalHandler = app
  .openapi(get20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
