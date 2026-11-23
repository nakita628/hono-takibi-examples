import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adCampaignHandler,
  adReportHandler,
  adReportMetadataHandler,
  adReportTaskHandler,
  bulkCreateNegativeKeywordHandler,
  bulkUpdateNegativeKeywordHandler,
  itemPriceMarkdownHandler,
  itemPromotionHandler,
  negativeKeywordHandler,
  promotionHandler,
  promotionReportHandler,
  promotionSummaryReportHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adCampaignHandler)
  .route('/', adReportHandler)
  .route('/', adReportMetadataHandler)
  .route('/', adReportTaskHandler)
  .route('/', bulkCreateNegativeKeywordHandler)
  .route('/', bulkUpdateNegativeKeywordHandler)
  .route('/', itemPriceMarkdownHandler)
  .route('/', itemPromotionHandler)
  .route('/', negativeKeywordHandler)
  .route('/', promotionHandler)
  .route('/', promotionReportHandler)
  .route('/', promotionSummaryReportHandler)

export default app
