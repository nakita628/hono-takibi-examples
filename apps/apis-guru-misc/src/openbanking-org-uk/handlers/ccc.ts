import { OpenAPIHono } from '@hono/zod-openapi'
import { getCommercialCreditCardsRoute, headCommercialCreditCardsRoute } from '../routes'

const app = new OpenAPIHono()

export const cccHandler = app
  .openapi(getCommercialCreditCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headCommercialCreditCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
