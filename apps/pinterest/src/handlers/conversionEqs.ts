import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdAccountsAdAccountIdConversionEqsRoute } from '../routes'

const app = new OpenAPIHono()

export const conversionEqsHandler = app.openapi(getAdAccountsAdAccountIdConversionEqsRoute, (c) => {
  throw new Error('Not implemented')
})
