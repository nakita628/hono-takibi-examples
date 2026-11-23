import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGiftsGiftIdRoute,
  getGiftsRoute,
  postGiftsCreateForItemsRoute,
  postGiftsGiftIdCancelRoute,
  postGiftsGiftIdClaimRoute,
  postGiftsGiftIdUpdateGiftRoute,
} from '../routes'

const app = new OpenAPIHono()

export const giftsHandler = app
  .openapi(postGiftsCreateForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGiftsGiftIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGiftsGiftIdUpdateGiftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGiftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGiftsGiftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGiftsGiftIdClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
