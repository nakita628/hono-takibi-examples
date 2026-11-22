import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminGiftCardsIdOrdersRoute,
  getAdminGiftCardsIdRoute,
  getAdminGiftCardsRoute,
  postAdminGiftCardsIdRoute,
  postAdminGiftCardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const giftCardsHandler = app
  .openapi(getAdminGiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminGiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminGiftCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminGiftCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminGiftCardsIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
