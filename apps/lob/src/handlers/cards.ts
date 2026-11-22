import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCardsCardIdRoute,
  getCardsCardIdRoute,
  getCardsRoute,
  postCardsCardIdRoute,
  postCardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cardsHandler = app
  .openapi(getCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardsCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCardsCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
