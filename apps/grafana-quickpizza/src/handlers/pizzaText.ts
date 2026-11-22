import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAdjectivesRoute, getApiNamesRoute, getApiQuotesRoute } from '../routes'

const app = new OpenAPIHono()

export const pizzaTextHandler = app
  .openapi(getApiQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdjectivesRoute, (c) => {
    throw new Error('Not implemented')
  })
