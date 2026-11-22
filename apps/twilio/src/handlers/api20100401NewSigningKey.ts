import { OpenAPIHono } from '@hono/zod-openapi'
import { post20100401AccountsAccountSidSigningKeysJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401NewSigningKeyHandler = app.openapi(
  post20100401AccountsAccountSidSigningKeysJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
