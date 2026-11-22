import { OpenAPIHono } from '@hono/zod-openapi'
import { getNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const numbersHandler = app.openapi(getNumbersRoute, (c) => {
  throw new Error('Not implemented')
})
