import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CardsCardIdTransactionsRoute,
  getV1CardsRoute,
  postV1CardsCardIdBlockRoute,
  postV1CardsCardIdUnblockRoute,
  postV1CardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cardsHandler = app
  .openapi(getV1CardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsCardIdBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CardsCardIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsCardIdUnblockRoute, (c) => {
    throw new Error('Not implemented')
  })
