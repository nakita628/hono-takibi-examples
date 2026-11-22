import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsUserTokenAccountTypeAccountNameRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app.openapi(
  postAccountsUserTokenAccountTypeAccountNameRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
