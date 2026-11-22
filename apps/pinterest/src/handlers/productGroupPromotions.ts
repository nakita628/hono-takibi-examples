import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdRoute,
  getAdAccountsAdAccountIdProductGroupPromotionsRoute,
  getAdAccountsAdAccountIdProductGroupsAnalyticsRoute,
  patchAdAccountsAdAccountIdProductGroupPromotionsRoute,
  postAdAccountsAdAccountIdProductGroupPromotionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productGroupPromotionsHandler = app
  .openapi(postAdAccountsAdAccountIdProductGroupPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdProductGroupPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdProductGroupPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdProductGroupsAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
