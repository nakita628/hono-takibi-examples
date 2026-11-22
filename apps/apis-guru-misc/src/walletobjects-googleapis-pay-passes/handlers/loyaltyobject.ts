import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1LoyaltyObjectResourceIdRoute,
  getWalletobjectsV1LoyaltyObjectRoute,
  patchWalletobjectsV1LoyaltyObjectResourceIdRoute,
  postWalletobjectsV1LoyaltyObjectResourceIdAddMessageRoute,
  postWalletobjectsV1LoyaltyObjectResourceIdModifyLinkedOfferObjectsRoute,
  postWalletobjectsV1LoyaltyObjectRoute,
  putWalletobjectsV1LoyaltyObjectResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loyaltyobjectHandler = app
  .openapi(getWalletobjectsV1LoyaltyObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1LoyaltyObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1LoyaltyObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1LoyaltyObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1LoyaltyObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1LoyaltyObjectResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1LoyaltyObjectResourceIdModifyLinkedOfferObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
