import { OpenAPIHono } from '@hono/zod-openapi'
import { getPromotionSummaryReportRoute } from '../routes'

const app = new OpenAPIHono()

export const promotionSummaryReportHandler = app.openapi(getPromotionSummaryReportRoute, (c) => {
  throw new Error('Not implemented')
})
