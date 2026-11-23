import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBatchScrapeIdRoute,
  getBatchScrapeIdErrorsRoute,
  getBatchScrapeIdRoute,
  postBatchScrapeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postBatchScrapeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBatchScrapeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBatchScrapeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBatchScrapeIdErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
