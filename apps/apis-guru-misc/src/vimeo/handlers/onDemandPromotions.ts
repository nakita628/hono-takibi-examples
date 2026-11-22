import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOndemandPagesOndemandIdPromotionsPromotionIdRoute,
  getOndemandPagesOndemandIdPromotionsPromotionIdCodesRoute,
  getOndemandPagesOndemandIdPromotionsPromotionIdRoute,
  getOndemandPagesOndemandIdPromotionsRoute,
  postOndemandPagesOndemandIdPromotionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onDemandPromotionsHandler = app
  .openapi(getOndemandPagesOndemandIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOndemandPagesOndemandIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOndemandPagesOndemandIdPromotionsPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdPromotionsPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdPromotionsPromotionIdCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
