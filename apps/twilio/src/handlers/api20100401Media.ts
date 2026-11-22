import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidMessagesMessageSidMediaJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401MediaHandler = app.openapi(
  get20100401AccountsAccountSidMessagesMessageSidMediaJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
