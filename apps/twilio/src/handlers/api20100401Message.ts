import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidMessagesSidJsonRoute,
  get20100401AccountsAccountSidMessagesJsonRoute,
  get20100401AccountsAccountSidMessagesSidJsonRoute,
  post20100401AccountsAccountSidMessagesJsonRoute,
  post20100401AccountsAccountSidMessagesSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401MessageHandler = app
  .openapi(post20100401AccountsAccountSidMessagesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidMessagesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidMessagesSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidMessagesSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidMessagesSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
