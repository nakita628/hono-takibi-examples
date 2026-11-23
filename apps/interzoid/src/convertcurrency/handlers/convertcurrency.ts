import { OpenAPIHono } from '@hono/zod-openapi'
import { getConvertcurrencyRoute } from '../routes'

const app = new OpenAPIHono()

export const convertcurrencyHandler = app.openapi(getConvertcurrencyRoute, (c) => {
  throw new Error('Not implemented')
})
