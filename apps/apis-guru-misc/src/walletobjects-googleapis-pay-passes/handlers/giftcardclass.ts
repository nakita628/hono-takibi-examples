import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1GiftCardClassResourceIdRoute,
  getWalletobjectsV1GiftCardClassRoute,
  patchWalletobjectsV1GiftCardClassResourceIdRoute,
  postWalletobjectsV1GiftCardClassResourceIdAddMessageRoute,
  postWalletobjectsV1GiftCardClassRoute,
  putWalletobjectsV1GiftCardClassResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const giftcardclassHandler = app
  .openapi(getWalletobjectsV1GiftCardClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1GiftCardClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1GiftCardClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1GiftCardClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1GiftCardClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1GiftCardClassResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
