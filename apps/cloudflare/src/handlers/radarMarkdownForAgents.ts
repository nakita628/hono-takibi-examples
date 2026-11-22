import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarAiMarkdownForAgentsSummaryRoute,
  getRadarAiMarkdownForAgentsTimeseriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarMarkdownForAgentsHandler = app
  .openapi(getRadarAiMarkdownForAgentsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAiMarkdownForAgentsTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
