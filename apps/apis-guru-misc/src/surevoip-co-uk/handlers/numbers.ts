import { OpenAPIHono } from '@hono/zod-openapi'
import { getNumbersAreacodesRoute, getNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const numbersHandler = app
  .openapi(getNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersAreacodesRoute, (c) => {
    throw new Error('Not implemented')
  })
