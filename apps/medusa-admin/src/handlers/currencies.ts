import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminCurrenciesCodeRoute, getAdminCurrenciesRoute } from '../routes'

const app = new OpenAPIHono()

export const currenciesHandler = app
  .openapi(getAdminCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCurrenciesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
