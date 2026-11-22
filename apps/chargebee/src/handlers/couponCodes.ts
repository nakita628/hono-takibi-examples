import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCouponCodesCouponCodeCodeRoute,
  getCouponCodesRoute,
  postCouponCodesCouponCodeCodeArchiveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const couponCodesHandler = app
  .openapi(getCouponCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCouponCodesCouponCodeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCouponCodesCouponCodeCodeArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
