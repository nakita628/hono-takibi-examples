import { OpenAPIHono } from '@hono/zod-openapi'
import { post20100401AccountsAccountSidTokensJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401TokenHandler = app.openapi(
  post20100401AccountsAccountSidTokensJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
