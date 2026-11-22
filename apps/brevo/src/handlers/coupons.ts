import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCouponCollectionsIdRoute,
  getCouponCollectionsRoute,
  patchCouponCollectionsIdRoute,
  postCouponCollectionsRoute,
  postCouponsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const couponsHandler = app
  .openapi(getCouponCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCouponCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCouponCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCouponCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
