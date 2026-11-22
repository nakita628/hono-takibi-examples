import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adGroupHandler,
  adHandler,
  adReportHandler,
  adReportMetadataHandler,
  adReportTaskHandler,
  campaignHandler,
  itemPriceMarkdownHandler,
  itemPromotionHandler,
  keywordHandler,
  negativeKeywordHandler,
  promotionHandler,
  promotionReportHandler,
  promotionSummaryReportHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', campaignHandler)
  .route('/', adHandler)
  .route('/', adGroupHandler)
  .route('/', keywordHandler)
  .route('/', adReportHandler)
  .route('/', adReportMetadataHandler)
  .route('/', adReportTaskHandler)
  .route('/', negativeKeywordHandler)
  .route('/', itemPriceMarkdownHandler)
  .route('/', itemPromotionHandler)
  .route('/', promotionHandler)
  .route('/', promotionReportHandler)
  .route('/', promotionSummaryReportHandler)

export default app
