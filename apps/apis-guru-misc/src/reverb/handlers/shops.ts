import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShopsIdStorefrontsRoute,
  getShopsShopIdShippingProfilesRoute,
  getShopsSlugFeedbackBuyerRoute,
  getShopsSlugFeedbackRoute,
  getShopsSlugFeedbackSellerRoute,
  getShopsSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shopsHandler = app
  .openapi(getShopsIdStorefrontsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShopsShopIdShippingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShopsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShopsSlugFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShopsSlugFeedbackBuyerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShopsSlugFeedbackSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
