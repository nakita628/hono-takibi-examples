import { OpenAPIHono } from '@hono/zod-openapi'
import { getNumbersCardinalRoute, getNumbersCurrencyRoute, getNumbersOrdinalRoute } from '../routes'

const app = new OpenAPIHono()

export const spellHandler = app
  .openapi(getNumbersCardinalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersOrdinalRoute, (c) => {
    throw new Error('Not implemented')
  })
