import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrawlIdRoute,
  getCrawlActiveRoute,
  getCrawlIdErrorsRoute,
  getCrawlIdRoute,
  postCrawlParamsPreviewRoute,
  postCrawlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crawlHandler = app
  .openapi(getCrawlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrawlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrawlIdErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrawlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrawlParamsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrawlActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
