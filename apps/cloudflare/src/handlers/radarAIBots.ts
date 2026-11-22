import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarAiBotsSummaryDimensionRoute,
  getRadarAiBotsSummaryUserAgentRoute,
  getRadarAiBotsTimeseriesGroupsDimensionRoute,
  getRadarAiBotsTimeseriesGroupsUserAgentRoute,
  getRadarAiBotsTimeseriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarAIBotsHandler = app
  .openapi(getRadarAiBotsSummaryUserAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAiBotsSummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAiBotsTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAiBotsTimeseriesGroupsUserAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAiBotsTimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
