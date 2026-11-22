import { OpenAPIHono } from '@hono/zod-openapi'
import { getCardsCardIdRoute, getCardsRoute, getSetsSetCardLocalIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cardsHandler = app
  .openapi(getCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetsSetCardLocalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
