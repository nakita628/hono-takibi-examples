import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidCallsSidJsonRoute,
  get20100401AccountsAccountSidCallsJsonRoute,
  get20100401AccountsAccountSidCallsSidJsonRoute,
  post20100401AccountsAccountSidCallsJsonRoute,
  post20100401AccountsAccountSidCallsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401CallHandler = app
  .openapi(post20100401AccountsAccountSidCallsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidCallsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidCallsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidCallsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidCallsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
