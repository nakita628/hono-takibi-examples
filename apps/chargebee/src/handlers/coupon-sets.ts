import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCouponSetsCouponSetIdRoute,
  getCouponSetsRoute,
  postCouponSetsCouponSetIdAddCouponCodesRoute,
  postCouponSetsCouponSetIdDeleteRoute,
  postCouponSetsCouponSetIdDeleteUnusedCouponCodesRoute,
  postCouponSetsCouponSetIdUpdateRoute,
  postCouponSetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const couponSetsHandler = app
  .openapi(getCouponSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCouponSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCouponSetsCouponSetIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCouponSetsCouponSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCouponSetsCouponSetIdAddCouponCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCouponSetsCouponSetIdDeleteUnusedCouponCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCouponSetsCouponSetIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
