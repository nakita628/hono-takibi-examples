import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiRnbPvtArchiveCouponCouponCodeRoute,
  getApiRnbPvtCouponCouponCodeRoute,
  getApiRnbPvtCouponRoute,
  getApiRnbPvtCouponUsageCouponCodeRoute,
  postApiRnbPvtArchiveCouponCouponCodeRoute,
  postApiRnbPvtCouponIndexRoute,
  postApiRnbPvtCouponRoute,
  postApiRnbPvtCouponsRoute,
  postApiRnbPvtMultipleCouponsRoute,
  postApiRnbPvtUnarchiveCouponCouponCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const couponsHandler = app
  .openapi(getApiRnbPvtArchiveCouponCouponCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtArchiveCouponCouponCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtCouponRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtCouponRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtCouponIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtCouponUsageCouponCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtCouponCouponCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtMultipleCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtUnarchiveCouponCouponCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
