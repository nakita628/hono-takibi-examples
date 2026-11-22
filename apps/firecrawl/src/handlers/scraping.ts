import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBatchScrapeIdRoute,
  deleteScrapeJobIdInteractRoute,
  getBatchScrapeIdErrorsRoute,
  getBatchScrapeIdRoute,
  getParseFormatsRoute,
  getScrapeJobIdRoute,
  postBatchScrapeRoute,
  postParseRoute,
  postScrapeJobIdInteractRoute,
  postScrapeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scrapingHandler = app
  .openapi(postScrapeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScrapeJobIdInteractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScrapeJobIdInteractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postParseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getParseFormatsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getScrapeJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
