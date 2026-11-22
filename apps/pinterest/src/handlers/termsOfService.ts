import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdAccountsAdAccountIdTermsOfServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const termsOfServiceHandler = app.openapi(
  getAdAccountsAdAccountIdTermsOfServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
