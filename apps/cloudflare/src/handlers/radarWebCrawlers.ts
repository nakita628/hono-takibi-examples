import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarBotsCrawlersSummaryDimensionRoute,
  getRadarBotsCrawlersTimeseriesGroupsDimensionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarWebCrawlersHandler = app
  .openapi(getRadarBotsCrawlersSummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBotsCrawlersTimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
