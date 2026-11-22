import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1OfferObjectResourceIdRoute,
  getWalletobjectsV1OfferObjectRoute,
  patchWalletobjectsV1OfferObjectResourceIdRoute,
  postWalletobjectsV1OfferObjectResourceIdAddMessageRoute,
  postWalletobjectsV1OfferObjectRoute,
  putWalletobjectsV1OfferObjectResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const offerobjectHandler = app
  .openapi(getWalletobjectsV1OfferObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1OfferObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1OfferObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1OfferObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1OfferObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1OfferObjectResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
