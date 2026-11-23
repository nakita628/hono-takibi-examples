import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteShopVacationRoute,
  getShopListingConditionsRoute,
  getShopPaymentMethodsRoute,
  getShopRoute,
  getShopVacationRoute,
  postShopVacationRoute,
  putShopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shopHandler = app
  .openapi(getShopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShopListingConditionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShopPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShopVacationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShopVacationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShopVacationRoute, (c) => {
    throw new Error('Not implemented')
  })
