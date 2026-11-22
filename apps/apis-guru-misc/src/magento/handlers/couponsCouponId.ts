import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CouponsCouponIdRoute,
  getV1CouponsCouponIdRoute,
  putV1CouponsCouponIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const couponsCouponIdHandler = app
  .openapi(deleteV1CouponsCouponIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CouponsCouponIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CouponsCouponIdRoute, (c) => {
    throw new Error('Not implemented')
  })
