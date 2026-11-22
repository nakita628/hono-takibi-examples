import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidKeysSidJsonRoute,
  get20100401AccountsAccountSidKeysJsonRoute,
  get20100401AccountsAccountSidKeysSidJsonRoute,
  post20100401AccountsAccountSidKeysSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401KeyHandler = app
  .openapi(get20100401AccountsAccountSidKeysSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidKeysSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidKeysSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidKeysJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
