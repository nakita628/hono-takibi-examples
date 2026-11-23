import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteItemPriceMarkdownPromotionIdRoute,
  getItemPriceMarkdownPromotionIdRoute,
  postItemPriceMarkdownRoute,
  putItemPriceMarkdownPromotionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemPriceMarkdownHandler = app
  .openapi(postItemPriceMarkdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteItemPriceMarkdownPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemPriceMarkdownPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putItemPriceMarkdownPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
