import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2GiftCardsIdRoute,
  getV2GiftCardsRoute,
  postV2GiftCardsFromGanRoute,
  postV2GiftCardsFromNonceRoute,
  postV2GiftCardsGiftCardIdLinkCustomerRoute,
  postV2GiftCardsGiftCardIdUnlinkCustomerRoute,
  postV2GiftCardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const giftCardsHandler = app
  .openapi(getV2GiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GiftCardsFromGanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GiftCardsFromNonceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GiftCardsGiftCardIdLinkCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GiftCardsGiftCardIdUnlinkCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GiftCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
