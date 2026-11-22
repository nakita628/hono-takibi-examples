import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarBotsBotSlugRoute,
  getRadarBotsRoute,
  getRadarBotsSummaryDimensionRoute,
  getRadarBotsTimeseriesGroupsDimensionRoute,
  getRadarBotsTimeseriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarBotsHandler = app
  .openapi(getRadarBotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBotsSummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBotsTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBotsTimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBotsBotSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
