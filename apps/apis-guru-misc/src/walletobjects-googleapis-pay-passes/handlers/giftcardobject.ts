import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1GiftCardObjectResourceIdRoute,
  getWalletobjectsV1GiftCardObjectRoute,
  patchWalletobjectsV1GiftCardObjectResourceIdRoute,
  postWalletobjectsV1GiftCardObjectResourceIdAddMessageRoute,
  postWalletobjectsV1GiftCardObjectRoute,
  putWalletobjectsV1GiftCardObjectResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const giftcardobjectHandler = app
  .openapi(getWalletobjectsV1GiftCardObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1GiftCardObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1GiftCardObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1GiftCardObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1GiftCardObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1GiftCardObjectResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
