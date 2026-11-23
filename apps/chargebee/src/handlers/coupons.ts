import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCouponsCouponIdRoute,
  getCouponsRoute,
  postCouponsCopyRoute,
  postCouponsCouponIdDeleteRoute,
  postCouponsCouponIdUnarchiveRoute,
  postCouponsCouponIdUpdateForItemsRoute,
  postCouponsCreateForItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const couponsHandler = app
  .openapi(getCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCouponsCouponIdUpdateForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCouponsCouponIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCouponsCouponIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCouponsCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCouponsCouponIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCouponsCreateForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
