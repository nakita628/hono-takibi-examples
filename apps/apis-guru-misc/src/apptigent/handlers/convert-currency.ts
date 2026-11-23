import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertCurrencyRoute } from '../routes'

const app = new OpenAPIHono()

export const convertCurrencyHandler = app.openapi(postConvertCurrencyRoute, (c) => {
  throw new Error('Not implemented')
})
