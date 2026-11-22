import { OpenAPIHono } from '@hono/zod-openapi'
import { post20100401AccountsAccountSidKeysJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401NewKeyHandler = app.openapi(
  post20100401AccountsAccountSidKeysJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
