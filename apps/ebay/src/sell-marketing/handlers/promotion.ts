import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPromotionPromotionIdGetListingSetRoute,
  getPromotionRoute,
  postPromotionPromotionIdPauseRoute,
  postPromotionPromotionIdResumeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const promotionHandler = app
  .openapi(getPromotionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPromotionPromotionIdGetListingSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPromotionPromotionIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPromotionPromotionIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
