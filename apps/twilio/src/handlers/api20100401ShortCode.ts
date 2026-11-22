import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get20100401AccountsAccountSidSMSShortCodesJsonRoute,
  get20100401AccountsAccountSidSMSShortCodesSidJsonRoute,
  post20100401AccountsAccountSidSMSShortCodesSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401ShortCodeHandler = app
  .openapi(get20100401AccountsAccountSidSMSShortCodesSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidSMSShortCodesSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidSMSShortCodesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
