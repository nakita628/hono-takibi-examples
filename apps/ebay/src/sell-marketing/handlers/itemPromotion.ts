import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteItemPromotionPromotionIdRoute,
  getItemPromotionPromotionIdRoute,
  postItemPromotionRoute,
  putItemPromotionPromotionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemPromotionHandler = app
  .openapi(postItemPromotionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemPromotionPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemPromotionPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putItemPromotionPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
