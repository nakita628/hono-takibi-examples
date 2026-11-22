import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBasketLiveShippingServiceDeleteJsonRoute,
  getBasketInfoJsonRoute,
  getBasketLiveShippingServiceListJsonRoute,
  postBasketItemAddJsonRoute,
  postBasketLiveShippingServiceCreateJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basketHandler = app
  .openapi(getBasketInfoJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBasketItemAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBasketLiveShippingServiceCreateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBasketLiveShippingServiceDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBasketLiveShippingServiceListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
