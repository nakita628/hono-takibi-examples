import { OpenAPIHono } from '@hono/zod-openapi'
import { getScrapePoolsConfigRoute, getScrapePoolsRoute } from '../routes'

const app = new OpenAPIHono()

export const scrapePoolsHandler = app
  .openapi(getScrapePoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScrapePoolsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
