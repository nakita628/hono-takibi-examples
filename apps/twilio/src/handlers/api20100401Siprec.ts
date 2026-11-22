import { OpenAPIHono } from '@hono/zod-openapi'
import {
  post20100401AccountsAccountSidCallsCallSidSiprecJsonRoute,
  post20100401AccountsAccountSidCallsCallSidSiprecSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401SiprecHandler = app
  .openapi(post20100401AccountsAccountSidCallsCallSidSiprecJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidCallsCallSidSiprecSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
