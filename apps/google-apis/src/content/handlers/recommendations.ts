import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdRecommendationsGenerateRoute,
  postMerchantIdRecommendationsReportInteractionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recommendationsHandler = app
  .openapi(getMerchantIdRecommendationsGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdRecommendationsReportInteractionRoute, (c) => {
    throw new Error('Not implemented')
  })
