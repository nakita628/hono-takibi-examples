import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCardsCardIdDetailsRoute,
  getCardsCardIdRoute,
  getCardsRoute,
  patchCardsCardIdRoute,
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
  .openapi(patchCardsCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardsCardIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
