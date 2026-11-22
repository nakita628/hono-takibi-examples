import { OpenAPIHono } from '@hono/zod-openapi'
import { getCurrenciesRoute } from '../routes'

const app = new OpenAPIHono()

export const currencyHandler = app.openapi(getCurrenciesRoute, (c) => {
  throw new Error('Not implemented')
})
