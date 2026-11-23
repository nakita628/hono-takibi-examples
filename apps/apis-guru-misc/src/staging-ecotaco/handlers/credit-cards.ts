import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreditCardsIdRoute, getCreditCardsRoute } from '../routes'

const app = new OpenAPIHono()

export const creditCardsHandler = app
  .openapi(getCreditCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
