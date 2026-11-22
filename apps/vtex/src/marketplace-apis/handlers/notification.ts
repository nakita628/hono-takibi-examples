import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postNotificatorSellerIdChangenotificationSkuIdInventoryRoute,
  postNotificatorSellerIdChangenotificationSkuIdPriceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationHandler = app
  .openapi(postNotificatorSellerIdChangenotificationSkuIdInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificatorSellerIdChangenotificationSkuIdPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
