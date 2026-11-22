import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonRoute,
  post20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401IncomingPhoneNumberTollFreeHandler = app
  .openapi(get20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
