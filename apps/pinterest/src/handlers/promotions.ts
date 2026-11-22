import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdAccountsAdAccountIdPromotionsPromotionIdRoute,
  getAdAccountsAdAccountIdPromotionsPromotionIdRoute,
  getAdAccountsAdAccountIdPromotionsRoute,
  patchAdAccountsAdAccountIdPromotionsRoute,
  postAdAccountsAdAccountIdPromotionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const promotionsHandler = app
  .openapi(getAdAccountsAdAccountIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdPromotionsPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdAccountsAdAccountIdPromotionsPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
