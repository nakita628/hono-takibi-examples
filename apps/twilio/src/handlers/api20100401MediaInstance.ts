import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidMessagesMessageSidMediaSidJsonRoute,
  get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401MediaInstanceHandler = app
  .openapi(delete20100401AccountsAccountSidMessagesMessageSidMediaSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidMessagesMessageSidMediaSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
