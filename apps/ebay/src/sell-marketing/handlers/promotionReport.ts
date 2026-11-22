import { OpenAPIHono } from '@hono/zod-openapi'
import { getPromotionReportRoute } from '../routes'

const app = new OpenAPIHono()

export const promotionReportHandler = app.openapi(getPromotionReportRoute, (c) => {
  throw new Error('Not implemented')
})
