import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScrapeJobIdInteractRoute,
  getScrapeJobIdRoute,
  postScrapeJobIdInteractRoute,
  postScrapeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scrapeHandler = app
  .openapi(postScrapeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScrapeJobIdInteractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScrapeJobIdInteractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScrapeJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
