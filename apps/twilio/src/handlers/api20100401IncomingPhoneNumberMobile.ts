import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonRoute,
  post20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401IncomingPhoneNumberMobileHandler = app
  .openapi(get20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
